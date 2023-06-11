struct SceneUniform {
    view_proj: mat4x4f,
    proj: mat4x4f,
    view_ortho: mat4x4f,
    viewport_pixels: vec2f,
};
struct PickedParams {
    color: vec4f,
};

struct ModelUniformData {
    model_mat: mat4x4f,
    display_color: vec4f,
    pick_color: vec4f,
};

@group(0) @binding(0) var<uniform> scene: SceneUniform;
@group(0) @binding(1) var<uniform> params: PickedParams;
@group(0) @binding(2) var<storage, read> model_buf: array<ModelUniformData>;

struct VertexOutput {
    @builtin(position) position: vec4f,
};

@vertex
fn vs_main(
    @location(0) pos: vec3f,
    @location(1) normal: vec3f,
    @location(2) uv: vec2f,
    @location(3) index: u32,
) -> VertexOutput {
    let model_uniform = model_buf[index];

    var out: VertexOutput;
    out.position = scene.view_proj * model_uniform.model_mat * vec4f(pos, 1.0);
    return out;
}

@fragment
fn fs_main() -> @location(0) vec4f {
    return params.color;
}
