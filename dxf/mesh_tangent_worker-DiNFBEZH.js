function arrayBufferOf(array) {
  if (!(array.buffer instanceof ArrayBuffer)) {
    throw new Error("mesh tangent worker only supports ArrayBuffer-backed typed arrays");
  }
  return array.buffer;
}
function describeTypedArray(array) {
  return {
    buffer: arrayBufferOf(array),
    byteOffset: array.byteOffset,
    length: array.byteLength / array.BYTES_PER_ELEMENT
  };
}
function collectUniqueTransferBuffers(descriptors) {
  return [...new Set(descriptors.map((descriptor) => descriptor.buffer))];
}
function float32ArrayFromDescriptor(descriptor) {
  return new Float32Array(descriptor.buffer, descriptor.byteOffset, descriptor.length);
}
function uint32ArrayFromDescriptor(descriptor) {
  return new Uint32Array(descriptor.buffer, descriptor.byteOffset, descriptor.length);
}
const REND_RUNTIME_PUBLIC_BASE = "/dxf/";
const REND_MIKKTSPACE_WASM_FILE = "rend_mikktspace_wasm_bg.wasm";
function rendRuntimeAssetBaseUrl() {
  return new URL(REND_RUNTIME_PUBLIC_BASE, globalThis.location.origin).toString();
}
let wasmBindingsPromise;
async function fetchWasmBytes(url) {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`mesh tangent WASM request failed: ${response.status} ${response.statusText}`);
  }
  return response.arrayBuffer();
}
async function getWasmBindings() {
  if (!wasmBindingsPromise) {
    const runtimeAssetBase = rendRuntimeAssetBaseUrl();
    const bindingsUrl = new URL("rend_mikktspace_wasm.js", runtimeAssetBase).toString();
    const compressedWasmUrl = new URL(REND_MIKKTSPACE_WASM_FILE, runtimeAssetBase).toString();
    performance.mark?.("mesh-tangent:rend_mikktspace_wasm:load:start");
    wasmBindingsPromise = import(
      /* @vite-ignore */
      bindingsUrl
    ).then(async (bindings) => {
      await bindings.default({
        module_or_path: await fetchWasmBytes(compressedWasmUrl)
      });
      performance.mark?.("mesh-tangent:rend_mikktspace_wasm:load:end");
      performance.measure?.(
        "mesh-tangent:rend_mikktspace_wasm:load",
        "mesh-tangent:rend_mikktspace_wasm:load:start",
        "mesh-tangent:rend_mikktspace_wasm:load:end"
      );
      return bindings;
    });
  }
  return wasmBindingsPromise;
}
async function initializeDecoder() {
  const bindings = await getWasmBindings();
  if (typeof bindings.prepareMeshTangents !== "function") {
    throw new Error("prepareMeshTangents wasm export is missing");
  }
  return bindings;
}
async function prepareMeshTangents(request) {
  const bindings = await initializeDecoder();
  const calculator = bindings.prepareMeshTangents;
  const vertices = float32ArrayFromDescriptor(request.vertices);
  const normals = float32ArrayFromDescriptor(request.normals);
  const uvs = float32ArrayFromDescriptor(request.uvs);
  const indices = uint32ArrayFromDescriptor(request.indices);
  const tangents = calculator(vertices, normals, uvs, indices);
  return {
    type: "prepareMeshTangents",
    meshIndex: request.meshIndex,
    vertices: request.vertices,
    normals: request.normals,
    uvs: request.uvs,
    uvs1: request.uvs1,
    indices: request.indices,
    tangents: describeTypedArray(tangents)
  };
}
function errorToMessage(error) {
  return error instanceof Error ? error.message : String(error);
}
const ctx = self;
ctx.onmessage = async (event) => {
  const request = event.data;
  if (request.type === "initializeDecoder") {
    try {
      await initializeDecoder();
      ctx.postMessage({ type: "decoderReady", requestId: request.requestId });
    } catch (error) {
      ctx.postMessage({ type: "error", requestId: request.requestId, error: errorToMessage(error) });
    }
    return;
  }
  try {
    const response = await prepareMeshTangents(request);
    ctx.postMessage(
      response,
      collectUniqueTransferBuffers([
        response.vertices,
        response.normals,
        response.uvs,
        ...response.uvs1 ? [response.uvs1] : [],
        response.indices,
        response.tangents
      ])
    );
  } catch (error) {
    const response = {
      type: "prepareMeshTangents",
      meshIndex: request.meshIndex,
      vertices: request.vertices,
      normals: request.normals,
      uvs: request.uvs,
      uvs1: request.uvs1,
      indices: request.indices,
      error: errorToMessage(error)
    };
    ctx.postMessage(
      response,
      collectUniqueTransferBuffers([
        response.vertices,
        response.normals,
        response.uvs,
        ...response.uvs1 ? [response.uvs1] : [],
        response.indices
      ])
    );
  }
};
