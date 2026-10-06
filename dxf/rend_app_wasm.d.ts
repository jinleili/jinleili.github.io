/* tslint:disable */
/* eslint-disable */

/**
 * 这个结构体通过 wasm-bindgen 在 js 中用来与 RendApp 交互。
 */
export class RendHandle {
    free(): void;
    [Symbol.dispose](): void;
    /**
     * 原生 hatch 在整批解析、校验和几何编译后发布，不保留纹理替代路径。
     */
    addHatches(payload: any): void;
    addLinesFlat(positions: Float32Array, member_global_ids: Uint32Array, member_polyline_offsets: Uint32Array, polyline_vertex_offsets: Uint32Array, object_member_offsets: Uint32Array, object_member_indices: Uint32Array, styles: Array<any>, object_style_ids: Uint32Array, transforms: Float32Array, object_transform_ids: Uint32Array, object_gnode_ids: Uint32Array, element_id: number, visible_list: Uint8Array, layers_list: Uint32Array, source_unit: string, pickable_list: Uint8Array, ray_pickable_list: Uint8Array): void;
    addMergedObjectsFlat(object_member_offsets: Uint32Array, member_global_ids: Uint32Array, member_vertex_offsets: Uint32Array, member_index_offsets: Uint32Array, member_uv1_offsets: Uint32Array, vertices: Float32Array, normals: Float32Array, uvs: Float32Array, uvs1: Float32Array, indices: Uint32Array, styles: Array<any>, gnode_ids: Uint32Array, element_id: number, transforms_list: Array<any>, visible_list: any, layers_list: any, source_unit: string | null | undefined, pickable_list: any, ray_pickable_list: any): void;
    /**
     * 接收 GRep 数据
     */
    addObjects(vertices_list: Array<any>, normals_list: Array<any>, uvs_list: Array<any>, uvs1_list: Array<any>, indices_list: Array<any>, styles: Array<any>, global_ids: Uint32Array, outline_source_global_ids: any, element_id: number, transforms_list: Array<any>, pointer: any, mesh_count: number | null | undefined, new_mesh_keys: any, instance_element_ids: any, instance_mesh_keys: any, instance_visible_list: any, instance_layers_list: any, source_unit: string | null | undefined, pickable_list: any, ray_pickable_list: any): void;
    addPoints(positions: Float32Array, styles: Array<any>, global_ids: Uint32Array, outline_source_global_ids: any, element_id: number, transforms_list: Array<any>, visible_list: any, layers_list: any, source_unit: string | null | undefined, pickable_list: any, ray_pickable_list: any): void;
    /**
     * 创建程序化显示对象；身份由 TS 分配，更新和删除使用普通对象接口。
     */
    addProceduralObject(geometry: any, style: any, transform: Float32Array, object_id: number, visible: boolean, layers: number, pickable: boolean): void;
    /**
     * 添加以中心点定位的程序化圆角矩形线；对象固定不参与 GPU / ray picking。
     * `frame` 依次为 `center_x, center_y, center_z, width, height, radius, tolerance, rotation_radians`。
     */
    addRoundedRectLine(frame: Float32Array, style: any, global_id: number, element_id: number, visible: boolean, layers: number, source_unit?: string | null): void;
    addTextObjects(payloads: any): void;
    applyGizmoTransformBatch(session_id: bigint, target_type: string, global_ids: Uint32Array, transforms: Float32Array): void;
    /**
     * 宿主先同步检查，再结束文本编辑等依赖当前 App 的状态。
     */
    static assertCanDropRendApp(): void;
    boxPickFromCamera(start_x: number, start_y: number, end_x: number, end_y: number, full_containment: boolean, viewport_index: number, obb_tolerance_physical_px: number, obb_tolerance_logical_px: number, debug: boolean): void;
    static buildCapabilities(): any;
    /**
     * 清除全部 EXR 光照资源，同时取消在途加载和安装。
     */
    clearIbl(): void;
    clearLocalDxf(request_id: number): void;
    /**
     * 清空 ray pick repeat 调试线（一般用不到；提供给运行时收尾）。
     */
    clearRayPickRepeatDebugLines(): void;
    clearSkCanvasHighlight(kind: number): void;
    createTextEditorPreview(session_id: bigint, preview: any): bigint;
    debugGetObjectState(global_id: number): any;
    /**
     * 接收自定义 Box 数据
     */
    deleteObject(global_id: number): void;
    /**
     * 根据元素 ID 批量删除对应的全部显示对象
     */
    deleteObjectsByElementIds(element_ids: Uint32Array): void;
    destroyBimTextGizmo(): void;
    destroyTextEditorPreview(session_id: bigint): void;
    drainTextEditorOutput(): any;
    /**
     * 销毁 rendApp 实例
     */
    static dropRendApp(): void;
    /**
     * 帧绘制
     */
    enterFrame(): void;
    /**
     * GPU 拾取
     */
    gpuPick(current_x: number, current_y: number, js_timestamp: number): void;
    /**
     * 执行 bootstrap 并取出待分发内容；先发布终态/事件，再向 JS 返回同步结果。
     */
    initializeRendApp(data: any): any;
    isTextEditorReady(session_id: bigint): boolean;
    loadContentModel(kind: number, url: string, asset_id: string, style: any, global_id: number, outline_source_global_id: number | null | undefined, element_id: number, transform: Float32Array, visible: boolean, group_visible: boolean, layers: number, pickable: boolean, ray_pickable: boolean, svg_placement: any, source_unit: string | null | undefined, size: any, content_pick_result_id: number | null | undefined, part_names: any, part_pick_global_ids: any, part_outline_source_global_ids: any): void;
    localDxfCapability(): any;
    /**
     * 同步进入 Rust 排版；成功时在返回前通过专用 callback 回传尺寸，失败则同栈抛出。
     */
    measureTextLayout(request: any): void;
    /**
     * wasm_bindgen 构造函数不能使用 async，因此需要先创建 RendApp 实例，再调用 `new RendHandle(...)`。
     */
    constructor(web_message_handler_callback: Function, fetch_asset: Function, text_measure_result_callback: Function, text_layout_readiness_callback: Function);
    openLocalDxf(request_id: number, name: string, bytes: Uint8Array): void;
    pickSceneImage(): any;
    projectTextEditorLocalRectToCanvas(session_id: bigint, local_rect: any): any;
    rayPick(ox: number, oy: number, oz: number, dx: number, dy: number, dz: number, source_unit?: string | null): void;
    /**
     * 射线拾取
     */
    rayPickFromCamera(current_x: number, current_y: number, viewport_index?: number | null, source_unit?: string | null, js_timestamp?: number | null): void;
    /**
     * direct 主线程相机射线拾取：直接返回结果，不走 JS 消息回调。
     */
    rayPickFromCameraSync(current_x: number, current_y: number, viewport_index?: number | null, source_unit?: string | null): any;
    /**
     * direct 主线程通用射线拾取：直接返回结果，不走 JS 消息回调。
     */
    rayPickSync(ox: number, oy: number, oz: number, dx: number, dy: number, dz: number, source_unit?: string | null): any;
    removeKeepScreenSize2d(global_ids: Uint32Array): void;
    /**
     * 接收 JS 侧文档截图请求，转换为 Rust 内部事件并交给渲染帧处理。
     */
    requestDocScreenshot(request: any): void;
    /**
     * 接收 JS 侧对象截图请求，转换为 Rust 内部事件并交给渲染帧处理。
     */
    requestObjectScreenshot(request_id: number, object_ids: Uint32Array, output_width: number, output_height: number, needs_background: boolean): void;
    /**
     * 带参数发起一次截图请求。
     *
     * - `camera_type` 支持："orbit" | "pano" | "plane"（大小写不敏感）
     * - 未知相机类型会通过 `ScreenshotFailed` 明确结束本次请求。
     */
    requestScreenshotWithParams(request_id: number, expected_source_size_x: number, expected_source_size_y: number, crop_offset_x: number, crop_offset_y: number, crop_size_x: number, crop_size_y: number, output_size_x: number, output_size_y: number, camera_type: string, needs_background: boolean): void;
    /**
     * 重置背景
     */
    resetBackground(): void;
    resetTextEditorPreview(session_id: bigint, text: string): void;
    sceneInfo(): any;
    /**
     * 设置画布背景的完整快照
     */
    setCanvasBackground(background: any): void;
    setClearColor(color: any): void;
    setDisableTestSceneSetup(disable: boolean): void;
    setDocScreenshotPickPaused(paused: boolean): void;
    /**
     * 设置环境贴图
     */
    setEnvMap(url: string, rotation_x: number, rotation_y: number, rotation_z: number): void;
    /**
     * 控制之后创建的资产材质是否解析并应用 MARS `bump/HB_bump`。
     */
    setHBbumpEnabled(enabled: boolean): void;
    /**
     * 加载 EXR 并完成 GPU 光照预处理和 PBR 管线安装。
     */
    setIbl(url: string): Promise<void>;
    setIblIntensity(intensity: number): void;
    setIblRotation(x: number, y: number, z: number): void;
    setMeshDebug(wireframe: boolean, visual_mode: string): void;
    /**
     * 打开/关闭 ray pick repeat 调试线绘制（rend 内部，可通过 URL `?debugRayPickRepeatRays=1` 启用）。
     */
    setRayPickRepeatDebugEnabled(enabled: boolean): void;
    setRenderMode(mode: string): void;
    setSabStore(sab_store: any): void;
    setSkCanvasHighlight(kind: number, element_ids: Uint32Array, pick_result_ids: Uint32Array): void;
    setSkCanvasHighlightPolicy(allow_outline_in_2d: boolean): void;
    setText2VelloExclusiveMode(vello_enabled: boolean): void;
    showMeshDebugWhenHover(enabled: boolean): void;
    /**
     * 显式请求时才收集完整资源 ID，不持有强句柄，也不写入常规统计或日志。
     */
    skbResourceDiagnostics(): any;
    /**
     * 提交 ingress 后先分发终态/事件，并避免对同一终态重复抛出 JS 异常。
     */
    submitCameraIngress(ingress: any): void;
    /**
     * 自动预热入口：sk_canvas 在每次 mouse move 时调用本方法，
     * 把最新坐标交给 GPU pick 调度器。
     *
     * - 只保留最新坐标，不维护队列。
     * - 新坐标到来时立即尝试消费；若 [`super::REND_APP`] 忙，pending 保留给 `enterFrame`。
     * - 同一 pending 坐标重复提交直接返回（背压规则 §8.3）。
     */
    submitLatestGpuPick(current_x: number, current_y: number, js_timestamp: number): void;
    /**
     * 指针事件合并预热入口：只保留最新请求，由当前帧或下一次可借用 app 时消费。
     */
    submitLatestPointerPickPrewarm(seq: number, viewport_index: number, viewport_x: number, viewport_y: number, canvas_x: number, canvas_y: number, source_unit: string | null | undefined, need_gpu_pick: boolean, need_camera_ray: boolean, derived: any, js_timestamp?: number | null): void;
    /**
     * Ray pick bundle 预热入口。
     *
     * 支持 cameraRay 部分与可选的 derived 模板列表（JS 端用 JSON 兼容对象数组传入，
     * 由 serde-wasm-bindgen 反序列化）。详见 doc `ray_pick_worker_可行方案.md` §6.1 / §7.1。
     * `session_id < 0` 时视为无 active session（独立请求）。
     * `derived` 为 `undefined`/`null`/空数组时表示本次不要 derived。
     */
    submitLatestRayPickBundle(seq: number, session_id: number, viewport_index: number, viewport_x: number, viewport_y: number, source_unit: string | null | undefined, need_camera_ray: boolean, derived: any): void;
    submitTextEditorCommand(session_id: bigint, command: any): void;
    /**
     * 显式采集 SVG 源资产和 renderer 资源索引；不持有强句柄，也不自动输出日志。
     */
    svgResourceDiagnostics(): any;
    textEditorSelectionText(session_id: bigint): any;
    unprojectTextEditorCanvasPointToLocal(session_id: bigint, canvas_point: any): any;
    /**
     * 更新环境贴图旋转角度
     */
    updateEnvMapRotation(rotation_x: number, rotation_y: number, rotation_z: number): void;
    /**
     * 按 element_id 更新一个 group 的 visible / layers 状态。
     *
     * `flags` bit 0 表示 visible 有效；bit 1 表示 layers 有效。
     */
    updateGroupVisibilityStateByElementId(element_id: number, flags: number, visible: boolean, layers: number): void;
    updateGroupVisibleByElementId(element_id: number, visible: boolean): void;
    updateObjectsLayers(global_ids: Uint32Array, layers: number): void;
    updateObjectsPicking(payload: any): void;
    updateObjectsStyle(global_ids: Uint32Array, styles: Array<any>, layers_list: Uint32Array): void;
    updateObjectsTransform(global_ids: Uint32Array, transforms: Float32Array, source_unit?: string | null): void;
    updateObjectsVisibilityState(global_ids: Uint32Array, flags: Uint8Array, visible_list: Uint8Array, layers_list: Uint32Array): void;
    updateTextEditorPreview(session_id: bigint, style: any): void;
    upsertBimTextGizmo(spec: any): any;
    upsertKeepScreenSize2d(specs: any): void;
}

/**
 * 创建主线程 canvas 版 rend app，并注入初始化视口与清屏色。
 */
export function createRendApp(canvas_id: string, scale_factor: number, handle: number, initial_viewport_layout: any, clear_color: any, enable_vp_rotation_gizmo: boolean, vp_rotation_gizmo_frame: any, text_render_mode: string | null | undefined, app_environment: string | null | undefined, enable_taa: boolean, enable_shadow: boolean): Promise<void>;

/**
 * 使用 OffscreenCanvas 创建 worker 版 rend app，并接收必需的首帧视口布局快照。
 */
export function createRendAppByOffscreenCanvas(canvas: OffscreenCanvas, scale_factor: number, handle: number, initial_viewport_layout: any, clear_color: any, enable_vp_rotation_gizmo: boolean, vp_rotation_gizmo_frame: any, text_render_mode: string | null | undefined, app_environment: string | null | undefined, enable_taa: boolean, enable_shadow: boolean): Promise<void>;

export function debugTriggerRustPanic(): void;

/**
 * 创建 app 前注册，Direct 与 Worker 共用 OPFS 读取。
 */
export function registerResourceCache(read: Function, invalidate: Function): void;

/**
 * 提供访问原始 WASM memory 的句柄。
 */
export function wasmMemory(): any;

export type InitInput = RequestInfo | URL | Response | BufferSource | WebAssembly.Module;

export interface InitOutput {
    readonly memory: WebAssembly.Memory;
    readonly __wbg_rendhandle_free: (a: number, b: number) => void;
    readonly createRendApp: (a: number, b: number, c: number, d: number, e: any, f: any, g: number, h: any, i: number, j: number, k: number, l: number, m: number, n: number) => any;
    readonly createRendAppByOffscreenCanvas: (a: any, b: number, c: number, d: any, e: any, f: number, g: any, h: number, i: number, j: number, k: number, l: number, m: number) => any;
    readonly debugTriggerRustPanic: () => void;
    readonly registerResourceCache: (a: any, b: any) => void;
    readonly rendhandle_addHatches: (a: number, b: any) => [number, number];
    readonly rendhandle_addLinesFlat: (a: number, b: any, c: any, d: any, e: any, f: any, g: any, h: any, i: any, j: any, k: any, l: any, m: number, n: any, o: any, p: number, q: number, r: any, s: any) => [number, number];
    readonly rendhandle_addMergedObjectsFlat: (a: number, b: any, c: any, d: any, e: any, f: any, g: any, h: any, i: any, j: any, k: any, l: any, m: any, n: number, o: any, p: any, q: any, r: number, s: number, t: any, u: any) => [number, number];
    readonly rendhandle_addObjects: (a: number, b: any, c: any, d: any, e: any, f: any, g: any, h: any, i: any, j: number, k: any, l: any, m: number, n: any, o: any, p: any, q: any, r: any, s: number, t: number, u: any, v: any) => [number, number];
    readonly rendhandle_addPoints: (a: number, b: any, c: any, d: any, e: any, f: number, g: any, h: any, i: any, j: number, k: number, l: any, m: any) => [number, number];
    readonly rendhandle_addProceduralObject: (a: number, b: any, c: any, d: any, e: number, f: number, g: number, h: number) => [number, number];
    readonly rendhandle_addRoundedRectLine: (a: number, b: any, c: any, d: number, e: number, f: number, g: number, h: number, i: number) => [number, number];
    readonly rendhandle_addTextObjects: (a: number, b: any) => [number, number];
    readonly rendhandle_applyGizmoTransformBatch: (a: number, b: bigint, c: number, d: number, e: any, f: any) => void;
    readonly rendhandle_assertCanDropRendApp: () => [number, number];
    readonly rendhandle_boxPickFromCamera: (a: number, b: number, c: number, d: number, e: number, f: number, g: number, h: number, i: number, j: number) => void;
    readonly rendhandle_buildCapabilities: () => [number, number, number];
    readonly rendhandle_clearIbl: (a: number) => [number, number];
    readonly rendhandle_clearLocalDxf: (a: number, b: number) => [number, number];
    readonly rendhandle_clearRayPickRepeatDebugLines: (a: number) => void;
    readonly rendhandle_clearSkCanvasHighlight: (a: number, b: number) => void;
    readonly rendhandle_createTextEditorPreview: (a: number, b: bigint, c: any) => [bigint, number, number];
    readonly rendhandle_debugGetObjectState: (a: number, b: number) => any;
    readonly rendhandle_deleteObject: (a: number, b: number) => void;
    readonly rendhandle_deleteObjectsByElementIds: (a: number, b: any) => void;
    readonly rendhandle_destroyBimTextGizmo: (a: number) => [number, number];
    readonly rendhandle_destroyTextEditorPreview: (a: number, b: bigint) => [number, number];
    readonly rendhandle_drainTextEditorOutput: (a: number) => [number, number, number];
    readonly rendhandle_dropRendApp: () => [number, number];
    readonly rendhandle_enterFrame: (a: number) => void;
    readonly rendhandle_gpuPick: (a: number, b: number, c: number, d: number) => void;
    readonly rendhandle_initializeRendApp: (a: number, b: any) => [number, number, number];
    readonly rendhandle_isTextEditorReady: (a: number, b: bigint) => [number, number, number];
    readonly rendhandle_loadContentModel: (a: number, b: number, c: number, d: number, e: number, f: number, g: any, h: number, i: number, j: number, k: any, l: number, m: number, n: number, o: number, p: number, q: any, r: number, s: number, t: any, u: number, v: any, w: any, x: any) => [number, number];
    readonly rendhandle_localDxfCapability: (a: number) => [number, number, number];
    readonly rendhandle_measureTextLayout: (a: number, b: any) => [number, number];
    readonly rendhandle_new: (a: any, b: any, c: any, d: any) => number;
    readonly rendhandle_openLocalDxf: (a: number, b: number, c: number, d: number, e: any) => [number, number];
    readonly rendhandle_pickSceneImage: (a: number) => any;
    readonly rendhandle_projectTextEditorLocalRectToCanvas: (a: number, b: bigint, c: any) => [number, number, number];
    readonly rendhandle_rayPick: (a: number, b: number, c: number, d: number, e: number, f: number, g: number, h: number, i: number) => void;
    readonly rendhandle_rayPickFromCamera: (a: number, b: number, c: number, d: number, e: number, f: number, g: number, h: number) => void;
    readonly rendhandle_rayPickFromCameraSync: (a: number, b: number, c: number, d: number, e: number, f: number) => any;
    readonly rendhandle_rayPickSync: (a: number, b: number, c: number, d: number, e: number, f: number, g: number, h: number, i: number) => any;
    readonly rendhandle_removeKeepScreenSize2d: (a: number, b: any) => void;
    readonly rendhandle_requestDocScreenshot: (a: number, b: any) => [number, number];
    readonly rendhandle_requestObjectScreenshot: (a: number, b: number, c: any, d: number, e: number, f: number) => [number, number];
    readonly rendhandle_requestScreenshotWithParams: (a: number, b: number, c: number, d: number, e: number, f: number, g: number, h: number, i: number, j: number, k: number, l: number, m: number) => [number, number];
    readonly rendhandle_resetBackground: (a: number) => void;
    readonly rendhandle_resetTextEditorPreview: (a: number, b: bigint, c: number, d: number) => [number, number];
    readonly rendhandle_sceneInfo: (a: number) => any;
    readonly rendhandle_setCanvasBackground: (a: number, b: any) => void;
    readonly rendhandle_setClearColor: (a: number, b: any) => void;
    readonly rendhandle_setDisableTestSceneSetup: (a: number, b: number) => void;
    readonly rendhandle_setDocScreenshotPickPaused: (a: number, b: number) => [number, number];
    readonly rendhandle_setEnvMap: (a: number, b: number, c: number, d: number, e: number, f: number) => [number, number];
    readonly rendhandle_setHBbumpEnabled: (a: number, b: number) => void;
    readonly rendhandle_setIbl: (a: number, b: number, c: number) => any;
    readonly rendhandle_setIblIntensity: (a: number, b: number) => [number, number];
    readonly rendhandle_setIblRotation: (a: number, b: number, c: number, d: number) => [number, number];
    readonly rendhandle_setMeshDebug: (a: number, b: number, c: number, d: number) => void;
    readonly rendhandle_setRayPickRepeatDebugEnabled: (a: number, b: number) => void;
    readonly rendhandle_setRenderMode: (a: number, b: number, c: number) => void;
    readonly rendhandle_setSabStore: (a: number, b: any) => void;
    readonly rendhandle_setSkCanvasHighlight: (a: number, b: number, c: any, d: any) => void;
    readonly rendhandle_setSkCanvasHighlightPolicy: (a: number, b: number) => void;
    readonly rendhandle_setText2VelloExclusiveMode: (a: number, b: number) => void;
    readonly rendhandle_showMeshDebugWhenHover: (a: number, b: number) => void;
    readonly rendhandle_skbResourceDiagnostics: (a: number) => [number, number, number];
    readonly rendhandle_submitCameraIngress: (a: number, b: any) => [number, number];
    readonly rendhandle_submitLatestGpuPick: (a: number, b: number, c: number, d: number) => void;
    readonly rendhandle_submitLatestPointerPickPrewarm: (a: number, b: number, c: number, d: number, e: number, f: number, g: number, h: number, i: number, j: number, k: number, l: any, m: number, n: number) => void;
    readonly rendhandle_submitLatestRayPickBundle: (a: number, b: number, c: number, d: number, e: number, f: number, g: number, h: number, i: number, j: any) => void;
    readonly rendhandle_submitTextEditorCommand: (a: number, b: bigint, c: any) => [number, number];
    readonly rendhandle_svgResourceDiagnostics: (a: number) => [number, number, number];
    readonly rendhandle_textEditorSelectionText: (a: number, b: bigint) => [number, number, number];
    readonly rendhandle_unprojectTextEditorCanvasPointToLocal: (a: number, b: bigint, c: any) => [number, number, number];
    readonly rendhandle_updateEnvMapRotation: (a: number, b: number, c: number, d: number) => void;
    readonly rendhandle_updateGroupVisibilityStateByElementId: (a: number, b: number, c: number, d: number, e: number) => void;
    readonly rendhandle_updateGroupVisibleByElementId: (a: number, b: number, c: number) => void;
    readonly rendhandle_updateObjectsLayers: (a: number, b: any, c: number) => void;
    readonly rendhandle_updateObjectsPicking: (a: number, b: any) => [number, number];
    readonly rendhandle_updateObjectsStyle: (a: number, b: any, c: any, d: any) => [number, number];
    readonly rendhandle_updateObjectsTransform: (a: number, b: any, c: any, d: number, e: number) => [number, number];
    readonly rendhandle_updateObjectsVisibilityState: (a: number, b: any, c: any, d: any, e: any) => [number, number];
    readonly rendhandle_updateTextEditorPreview: (a: number, b: bigint, c: any) => [number, number];
    readonly rendhandle_upsertBimTextGizmo: (a: number, b: any) => [number, number, number];
    readonly rendhandle_upsertKeepScreenSize2d: (a: number, b: any) => [number, number];
    readonly wasmMemory: () => any;
    readonly wasm_bindgen_b3950d515661b7ef___convert__closures_____invoke___wasm_bindgen_b3950d515661b7ef___sys__JsNullable_wgpu_31592abf1a8c888e___backend__webgpu__webgpu_sys__gen_GpuError__GpuError___core_4b687bff6fa5dea7___result__Result_____wasm_bindgen_b3950d515661b7ef___JsError___true_: (a: number, b: number, c: any) => [number, number];
    readonly wasm_bindgen_b3950d515661b7ef___convert__closures_____invoke___wasm_bindgen_b3950d515661b7ef___sys__JsNullable_wgpu_31592abf1a8c888e___backend__webgpu__webgpu_sys__gen_GpuError__GpuError___core_4b687bff6fa5dea7___result__Result_____wasm_bindgen_b3950d515661b7ef___JsError___true__2: (a: number, b: number, c: any) => [number, number];
    readonly wasm_bindgen_b3950d515661b7ef___convert__closures_____invoke___wasm_bindgen_b3950d515661b7ef___sys__JsNullable_wgpu_31592abf1a8c888e___backend__webgpu__webgpu_sys__gen_GpuError__GpuError___core_4b687bff6fa5dea7___result__Result_____wasm_bindgen_b3950d515661b7ef___JsError___true__3: (a: number, b: number, c: any) => [number, number];
    readonly wasm_bindgen_b3950d515661b7ef___convert__closures_____invoke___wasm_bindgen_b3950d515661b7ef___sys__JsNullable_wgpu_31592abf1a8c888e___backend__webgpu__webgpu_sys__gen_GpuError__GpuError___core_4b687bff6fa5dea7___result__Result_____wasm_bindgen_b3950d515661b7ef___JsError___true__4: (a: number, b: number, c: any) => [number, number];
    readonly wasm_bindgen_b3950d515661b7ef___convert__closures_____invoke___js_sys_52c997262b311612___Function_fn_wasm_bindgen_b3950d515661b7ef___JsValue_____wasm_bindgen_b3950d515661b7ef___sys__Undefined___js_sys_52c997262b311612___Function_fn_wasm_bindgen_b3950d515661b7ef___JsValue_____wasm_bindgen_b3950d515661b7ef___sys__Undefined_______true_: (a: number, b: number, c: any, d: any) => void;
    readonly wasm_bindgen_b3950d515661b7ef___convert__closures_____invoke___wasm_bindgen_b3950d515661b7ef___JsValue______true_: (a: number, b: number, c: any) => void;
    readonly wasm_bindgen_b3950d515661b7ef___convert__closures_____invoke_______true_: (a: number, b: number) => void;
    readonly __wbindgen_malloc: (a: number, b: number) => number;
    readonly __wbindgen_realloc: (a: number, b: number, c: number, d: number) => number;
    readonly __wbindgen_exn_store: (a: number) => void;
    readonly __externref_table_alloc: () => number;
    readonly __wbindgen_externrefs: WebAssembly.Table;
    readonly __wbindgen_free: (a: number, b: number, c: number) => void;
    readonly __wbindgen_destroy_closure: (a: number, b: number) => void;
    readonly __externref_table_dealloc: (a: number) => void;
    readonly __wbindgen_start: () => void;
}

export type SyncInitInput = BufferSource | WebAssembly.Module;

/**
 * Instantiates the given `module`, which can either be bytes or
 * a precompiled `WebAssembly.Module`.
 *
 * @param {{ module: SyncInitInput }} module - Passing `SyncInitInput` directly is deprecated.
 *
 * @returns {InitOutput}
 */
export function initSync(module: { module: SyncInitInput } | SyncInitInput): InitOutput;

/**
 * If `module_or_path` is {RequestInfo} or {URL}, makes a request and
 * for everything else, calls `WebAssembly.instantiate` directly.
 *
 * @param {{ module_or_path: InitInput | Promise<InitInput> }} module_or_path - Passing `InitInput` directly is deprecated.
 *
 * @returns {Promise<InitOutput>}
 */
export default function __wbg_init (module_or_path?: { module_or_path: InitInput | Promise<InitInput> } | InitInput | Promise<InitInput>): Promise<InitOutput>;
