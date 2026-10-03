/* @ts-self-types="./rend_app_wasm.d.ts" */

/**
 * 这个结构体通过 wasm-bindgen 在 js 中用来与 RendApp 交互。
 */
export class RendHandle {
    __destroy_into_raw() {
        const ptr = this.__wbg_ptr;
        this.__wbg_ptr = 0;
        RendHandleFinalization.unregister(this);
        return ptr;
    }
    free() {
        const ptr = this.__destroy_into_raw();
        wasm.__wbg_rendhandle_free(ptr, 0);
    }
    /**
     * 原生 hatch 在整批解析、校验和几何编译后发布，不保留纹理替代路径。
     * @param {any} payload
     */
    addHatches(payload) {
        const ret = wasm.rendhandle_addHatches(this.__wbg_ptr, payload);
        if (ret[1]) {
            throw takeFromExternrefTable0(ret[0]);
        }
    }
    /**
     * @param {Float32Array} positions
     * @param {Uint32Array} member_global_ids
     * @param {Uint32Array} member_polyline_offsets
     * @param {Uint32Array} polyline_vertex_offsets
     * @param {Uint32Array} object_member_offsets
     * @param {Uint32Array} object_member_indices
     * @param {Array<any>} styles
     * @param {Uint32Array} object_style_ids
     * @param {Float32Array} transforms
     * @param {Uint32Array} object_transform_ids
     * @param {Uint32Array} object_gnode_ids
     * @param {number} element_id
     * @param {Uint8Array} visible_list
     * @param {Uint32Array} layers_list
     * @param {string} source_unit
     * @param {Uint8Array} pickable_list
     * @param {Uint8Array} ray_pickable_list
     */
    addLinesFlat(positions, member_global_ids, member_polyline_offsets, polyline_vertex_offsets, object_member_offsets, object_member_indices, styles, object_style_ids, transforms, object_transform_ids, object_gnode_ids, element_id, visible_list, layers_list, source_unit, pickable_list, ray_pickable_list) {
        const ptr0 = passStringToWasm0(source_unit, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len0 = WASM_VECTOR_LEN;
        const ret = wasm.rendhandle_addLinesFlat(this.__wbg_ptr, positions, member_global_ids, member_polyline_offsets, polyline_vertex_offsets, object_member_offsets, object_member_indices, styles, object_style_ids, transforms, object_transform_ids, object_gnode_ids, element_id, visible_list, layers_list, ptr0, len0, pickable_list, ray_pickable_list);
        if (ret[1]) {
            throw takeFromExternrefTable0(ret[0]);
        }
    }
    /**
     * @param {Uint32Array} object_member_offsets
     * @param {Uint32Array} member_global_ids
     * @param {Uint32Array} member_vertex_offsets
     * @param {Uint32Array} member_index_offsets
     * @param {Uint32Array} member_uv1_offsets
     * @param {Float32Array} vertices
     * @param {Float32Array} normals
     * @param {Float32Array} uvs
     * @param {Float32Array} uvs1
     * @param {Uint32Array} indices
     * @param {Array<any>} styles
     * @param {Uint32Array} gnode_ids
     * @param {number} element_id
     * @param {Array<any>} transforms_list
     * @param {any} visible_list
     * @param {any} layers_list
     * @param {string | null | undefined} source_unit
     * @param {any} pickable_list
     * @param {any} ray_pickable_list
     */
    addMergedObjectsFlat(object_member_offsets, member_global_ids, member_vertex_offsets, member_index_offsets, member_uv1_offsets, vertices, normals, uvs, uvs1, indices, styles, gnode_ids, element_id, transforms_list, visible_list, layers_list, source_unit, pickable_list, ray_pickable_list) {
        var ptr0 = isLikeNone(source_unit) ? 0 : passStringToWasm0(source_unit, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        var len0 = WASM_VECTOR_LEN;
        const ret = wasm.rendhandle_addMergedObjectsFlat(this.__wbg_ptr, object_member_offsets, member_global_ids, member_vertex_offsets, member_index_offsets, member_uv1_offsets, vertices, normals, uvs, uvs1, indices, styles, gnode_ids, element_id, transforms_list, visible_list, layers_list, ptr0, len0, pickable_list, ray_pickable_list);
        if (ret[1]) {
            throw takeFromExternrefTable0(ret[0]);
        }
    }
    /**
     * 接收 GRep 数据
     * @param {Array<any>} vertices_list
     * @param {Array<any>} normals_list
     * @param {Array<any>} uvs_list
     * @param {Array<any>} uvs1_list
     * @param {Array<any>} indices_list
     * @param {Array<any>} styles
     * @param {Uint32Array} global_ids
     * @param {any} outline_source_global_ids
     * @param {number} element_id
     * @param {Array<any>} transforms_list
     * @param {any} pointer
     * @param {number | null | undefined} mesh_count
     * @param {any} new_mesh_keys
     * @param {any} instance_element_ids
     * @param {any} instance_mesh_keys
     * @param {any} instance_visible_list
     * @param {any} instance_layers_list
     * @param {string | null | undefined} source_unit
     * @param {any} pickable_list
     * @param {any} ray_pickable_list
     */
    addObjects(vertices_list, normals_list, uvs_list, uvs1_list, indices_list, styles, global_ids, outline_source_global_ids, element_id, transforms_list, pointer, mesh_count, new_mesh_keys, instance_element_ids, instance_mesh_keys, instance_visible_list, instance_layers_list, source_unit, pickable_list, ray_pickable_list) {
        var ptr0 = isLikeNone(source_unit) ? 0 : passStringToWasm0(source_unit, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        var len0 = WASM_VECTOR_LEN;
        const ret = wasm.rendhandle_addObjects(this.__wbg_ptr, vertices_list, normals_list, uvs_list, uvs1_list, indices_list, styles, global_ids, outline_source_global_ids, element_id, transforms_list, pointer, isLikeNone(mesh_count) ? Number.MAX_SAFE_INTEGER : (mesh_count) >>> 0, new_mesh_keys, instance_element_ids, instance_mesh_keys, instance_visible_list, instance_layers_list, ptr0, len0, pickable_list, ray_pickable_list);
        if (ret[1]) {
            throw takeFromExternrefTable0(ret[0]);
        }
    }
    /**
     * @param {Float32Array} positions
     * @param {Array<any>} styles
     * @param {Uint32Array} global_ids
     * @param {any} outline_source_global_ids
     * @param {number} element_id
     * @param {Array<any>} transforms_list
     * @param {any} visible_list
     * @param {any} layers_list
     * @param {string | null | undefined} source_unit
     * @param {any} pickable_list
     * @param {any} ray_pickable_list
     */
    addPoints(positions, styles, global_ids, outline_source_global_ids, element_id, transforms_list, visible_list, layers_list, source_unit, pickable_list, ray_pickable_list) {
        var ptr0 = isLikeNone(source_unit) ? 0 : passStringToWasm0(source_unit, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        var len0 = WASM_VECTOR_LEN;
        const ret = wasm.rendhandle_addPoints(this.__wbg_ptr, positions, styles, global_ids, outline_source_global_ids, element_id, transforms_list, visible_list, layers_list, ptr0, len0, pickable_list, ray_pickable_list);
        if (ret[1]) {
            throw takeFromExternrefTable0(ret[0]);
        }
    }
    /**
     * 创建程序化显示对象；身份由 TS 分配，更新和删除使用普通对象接口。
     * @param {any} geometry
     * @param {any} style
     * @param {Float32Array} transform
     * @param {number} object_id
     * @param {boolean} visible
     * @param {number} layers
     * @param {boolean} pickable
     */
    addProceduralObject(geometry, style, transform, object_id, visible, layers, pickable) {
        const ret = wasm.rendhandle_addProceduralObject(this.__wbg_ptr, geometry, style, transform, object_id, visible, layers, pickable);
        if (ret[1]) {
            throw takeFromExternrefTable0(ret[0]);
        }
    }
    /**
     * 添加以中心点定位的程序化圆角矩形线；对象固定不参与 GPU / ray picking。
     * `frame` 依次为 `center_x, center_y, center_z, width, height, radius, tolerance, rotation_radians`。
     * @param {Float32Array} frame
     * @param {any} style
     * @param {number} global_id
     * @param {number} element_id
     * @param {boolean} visible
     * @param {number} layers
     * @param {string | null} [source_unit]
     */
    addRoundedRectLine(frame, style, global_id, element_id, visible, layers, source_unit) {
        var ptr0 = isLikeNone(source_unit) ? 0 : passStringToWasm0(source_unit, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        var len0 = WASM_VECTOR_LEN;
        const ret = wasm.rendhandle_addRoundedRectLine(this.__wbg_ptr, frame, style, global_id, element_id, visible, layers, ptr0, len0);
        if (ret[1]) {
            throw takeFromExternrefTable0(ret[0]);
        }
    }
    /**
     * @param {any} payloads
     */
    addTextObjects(payloads) {
        const ret = wasm.rendhandle_addTextObjects(this.__wbg_ptr, payloads);
        if (ret[1]) {
            throw takeFromExternrefTable0(ret[0]);
        }
    }
    /**
     * @param {bigint} session_id
     * @param {string} target_type
     * @param {Uint32Array} global_ids
     * @param {Float32Array} transforms
     */
    applyGizmoTransformBatch(session_id, target_type, global_ids, transforms) {
        const ptr0 = passStringToWasm0(target_type, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len0 = WASM_VECTOR_LEN;
        wasm.rendhandle_applyGizmoTransformBatch(this.__wbg_ptr, session_id, ptr0, len0, global_ids, transforms);
    }
    /**
     * 宿主先同步检查，再结束文本编辑等依赖当前 App 的状态。
     */
    static assertCanDropRendApp() {
        const ret = wasm.rendhandle_assertCanDropRendApp();
        if (ret[1]) {
            throw takeFromExternrefTable0(ret[0]);
        }
    }
    /**
     * @param {number} start_x
     * @param {number} start_y
     * @param {number} end_x
     * @param {number} end_y
     * @param {boolean} full_containment
     * @param {number} viewport_index
     * @param {number} obb_tolerance_physical_px
     * @param {number} obb_tolerance_logical_px
     * @param {boolean} debug
     */
    boxPickFromCamera(start_x, start_y, end_x, end_y, full_containment, viewport_index, obb_tolerance_physical_px, obb_tolerance_logical_px, debug) {
        wasm.rendhandle_boxPickFromCamera(this.__wbg_ptr, start_x, start_y, end_x, end_y, full_containment, viewport_index, obb_tolerance_physical_px, obb_tolerance_logical_px, debug);
    }
    /**
     * 清除全部 EXR 光照资源，同时取消在途加载和安装。
     */
    clearIbl() {
        const ret = wasm.rendhandle_clearIbl(this.__wbg_ptr);
        if (ret[1]) {
            throw takeFromExternrefTable0(ret[0]);
        }
    }
    /**
     * @param {number} request_id
     */
    clearLocalDxf(request_id) {
        const ret = wasm.rendhandle_clearLocalDxf(this.__wbg_ptr, request_id);
        if (ret[1]) {
            throw takeFromExternrefTable0(ret[0]);
        }
    }
    /**
     * 清空 ray pick repeat 调试线（一般用不到；提供给运行时收尾）。
     */
    clearRayPickRepeatDebugLines() {
        wasm.rendhandle_clearRayPickRepeatDebugLines(this.__wbg_ptr);
    }
    /**
     * @param {number} kind
     */
    clearSkCanvasHighlight(kind) {
        wasm.rendhandle_clearSkCanvasHighlight(this.__wbg_ptr, kind);
    }
    /**
     * @param {bigint} session_id
     * @param {any} preview
     * @returns {bigint}
     */
    createTextEditorPreview(session_id, preview) {
        const ret = wasm.rendhandle_createTextEditorPreview(this.__wbg_ptr, session_id, preview);
        if (ret[2]) {
            throw takeFromExternrefTable0(ret[1]);
        }
        return BigInt.asUintN(64, ret[0]);
    }
    /**
     * @param {number} global_id
     * @returns {any}
     */
    debugGetObjectState(global_id) {
        const ret = wasm.rendhandle_debugGetObjectState(this.__wbg_ptr, global_id);
        return ret;
    }
    /**
     * 接收自定义 Box 数据
     * @param {number} global_id
     */
    deleteObject(global_id) {
        wasm.rendhandle_deleteObject(this.__wbg_ptr, global_id);
    }
    /**
     * 根据元素 ID 批量删除对应的全部显示对象
     * @param {Uint32Array} element_ids
     */
    deleteObjectsByElementIds(element_ids) {
        wasm.rendhandle_deleteObjectsByElementIds(this.__wbg_ptr, element_ids);
    }
    destroyBimTextGizmo() {
        const ret = wasm.rendhandle_destroyBimTextGizmo(this.__wbg_ptr);
        if (ret[1]) {
            throw takeFromExternrefTable0(ret[0]);
        }
    }
    /**
     * @param {bigint} session_id
     */
    destroyTextEditorPreview(session_id) {
        const ret = wasm.rendhandle_destroyTextEditorPreview(this.__wbg_ptr, session_id);
        if (ret[1]) {
            throw takeFromExternrefTable0(ret[0]);
        }
    }
    /**
     * @returns {any}
     */
    drainTextEditorOutput() {
        const ret = wasm.rendhandle_drainTextEditorOutput(this.__wbg_ptr);
        if (ret[2]) {
            throw takeFromExternrefTable0(ret[1]);
        }
        return takeFromExternrefTable0(ret[0]);
    }
    /**
     * 销毁 rendApp 实例
     */
    static dropRendApp() {
        const ret = wasm.rendhandle_dropRendApp();
        if (ret[1]) {
            throw takeFromExternrefTable0(ret[0]);
        }
    }
    /**
     * 帧绘制
     */
    enterFrame() {
        wasm.rendhandle_enterFrame(this.__wbg_ptr);
    }
    /**
     * GPU 拾取
     * @param {number} current_x
     * @param {number} current_y
     * @param {number} js_timestamp
     */
    gpuPick(current_x, current_y, js_timestamp) {
        wasm.rendhandle_gpuPick(this.__wbg_ptr, current_x, current_y, js_timestamp);
    }
    /**
     * 执行 bootstrap 并取出待分发内容；先发布终态/事件，再向 JS 返回同步结果。
     * @param {any} data
     * @returns {any}
     */
    initializeRendApp(data) {
        const ret = wasm.rendhandle_initializeRendApp(this.__wbg_ptr, data);
        if (ret[2]) {
            throw takeFromExternrefTable0(ret[1]);
        }
        return takeFromExternrefTable0(ret[0]);
    }
    /**
     * @param {bigint} session_id
     * @returns {boolean}
     */
    isTextEditorReady(session_id) {
        const ret = wasm.rendhandle_isTextEditorReady(this.__wbg_ptr, session_id);
        if (ret[2]) {
            throw takeFromExternrefTable0(ret[1]);
        }
        return ret[0] !== 0;
    }
    /**
     * @param {number} kind
     * @param {string} url
     * @param {string} asset_id
     * @param {any} style
     * @param {number} global_id
     * @param {number | null | undefined} outline_source_global_id
     * @param {number} element_id
     * @param {Float32Array} transform
     * @param {boolean} visible
     * @param {boolean} group_visible
     * @param {number} layers
     * @param {boolean} pickable
     * @param {boolean} ray_pickable
     * @param {any} svg_placement
     * @param {string | null | undefined} source_unit
     * @param {any} size
     * @param {number | null | undefined} content_pick_result_id
     * @param {any} part_names
     * @param {any} part_pick_global_ids
     * @param {any} part_outline_source_global_ids
     */
    loadContentModel(kind, url, asset_id, style, global_id, outline_source_global_id, element_id, transform, visible, group_visible, layers, pickable, ray_pickable, svg_placement, source_unit, size, content_pick_result_id, part_names, part_pick_global_ids, part_outline_source_global_ids) {
        const ptr0 = passStringToWasm0(url, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len0 = WASM_VECTOR_LEN;
        const ptr1 = passStringToWasm0(asset_id, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len1 = WASM_VECTOR_LEN;
        var ptr2 = isLikeNone(source_unit) ? 0 : passStringToWasm0(source_unit, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        var len2 = WASM_VECTOR_LEN;
        const ret = wasm.rendhandle_loadContentModel(this.__wbg_ptr, kind, ptr0, len0, ptr1, len1, style, global_id, isLikeNone(outline_source_global_id) ? Number.MAX_SAFE_INTEGER : (outline_source_global_id) >>> 0, element_id, transform, visible, group_visible, layers, pickable, ray_pickable, svg_placement, ptr2, len2, size, isLikeNone(content_pick_result_id) ? Number.MAX_SAFE_INTEGER : (content_pick_result_id) >>> 0, part_names, part_pick_global_ids, part_outline_source_global_ids);
        if (ret[1]) {
            throw takeFromExternrefTable0(ret[0]);
        }
    }
    /**
     * @returns {any}
     */
    localDxfCapability() {
        const ret = wasm.rendhandle_localDxfCapability(this.__wbg_ptr);
        if (ret[2]) {
            throw takeFromExternrefTable0(ret[1]);
        }
        return takeFromExternrefTable0(ret[0]);
    }
    /**
     * 同步进入 Rust 排版；成功时在返回前通过专用 callback 回传尺寸，失败则同栈抛出。
     * @param {any} request
     */
    measureTextLayout(request) {
        const ret = wasm.rendhandle_measureTextLayout(this.__wbg_ptr, request);
        if (ret[1]) {
            throw takeFromExternrefTable0(ret[0]);
        }
    }
    /**
     * wasm_bindgen 构造函数不能使用 async，因此需要先创建 RendApp 实例，再调用 `new RendHandle(...)`。
     * @param {Function} web_message_handler_callback
     * @param {Function} fetch_asset
     * @param {Function} text_measure_result_callback
     * @param {Function} text_layout_readiness_callback
     */
    constructor(web_message_handler_callback, fetch_asset, text_measure_result_callback, text_layout_readiness_callback) {
        const ret = wasm.rendhandle_new(web_message_handler_callback, fetch_asset, text_measure_result_callback, text_layout_readiness_callback);
        this.__wbg_ptr = ret;
        RendHandleFinalization.register(this, this.__wbg_ptr, this);
        return this;
    }
    /**
     * @param {number} request_id
     * @param {string} name
     * @param {Uint8Array} bytes
     */
    openLocalDxf(request_id, name, bytes) {
        const ptr0 = passStringToWasm0(name, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len0 = WASM_VECTOR_LEN;
        const ret = wasm.rendhandle_openLocalDxf(this.__wbg_ptr, request_id, ptr0, len0, bytes);
        if (ret[1]) {
            throw takeFromExternrefTable0(ret[0]);
        }
    }
    /**
     * @returns {any}
     */
    pickSceneImage() {
        const ret = wasm.rendhandle_pickSceneImage(this.__wbg_ptr);
        return ret;
    }
    /**
     * @param {bigint} session_id
     * @param {any} local_rect
     * @returns {any}
     */
    projectTextEditorLocalRectToCanvas(session_id, local_rect) {
        const ret = wasm.rendhandle_projectTextEditorLocalRectToCanvas(this.__wbg_ptr, session_id, local_rect);
        if (ret[2]) {
            throw takeFromExternrefTable0(ret[1]);
        }
        return takeFromExternrefTable0(ret[0]);
    }
    /**
     * @param {number} ox
     * @param {number} oy
     * @param {number} oz
     * @param {number} dx
     * @param {number} dy
     * @param {number} dz
     * @param {string | null} [source_unit]
     */
    rayPick(ox, oy, oz, dx, dy, dz, source_unit) {
        var ptr0 = isLikeNone(source_unit) ? 0 : passStringToWasm0(source_unit, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        var len0 = WASM_VECTOR_LEN;
        wasm.rendhandle_rayPick(this.__wbg_ptr, ox, oy, oz, dx, dy, dz, ptr0, len0);
    }
    /**
     * 射线拾取
     * @param {number} current_x
     * @param {number} current_y
     * @param {number | null} [viewport_index]
     * @param {string | null} [source_unit]
     * @param {number | null} [js_timestamp]
     */
    rayPickFromCamera(current_x, current_y, viewport_index, source_unit, js_timestamp) {
        var ptr0 = isLikeNone(source_unit) ? 0 : passStringToWasm0(source_unit, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        var len0 = WASM_VECTOR_LEN;
        wasm.rendhandle_rayPickFromCamera(this.__wbg_ptr, current_x, current_y, isLikeNone(viewport_index) ? Number.MAX_SAFE_INTEGER : (viewport_index) >>> 0, ptr0, len0, !isLikeNone(js_timestamp), isLikeNone(js_timestamp) ? 0 : js_timestamp);
    }
    /**
     * direct 主线程相机射线拾取：直接返回结果，不走 JS 消息回调。
     * @param {number} current_x
     * @param {number} current_y
     * @param {number | null} [viewport_index]
     * @param {string | null} [source_unit]
     * @returns {any}
     */
    rayPickFromCameraSync(current_x, current_y, viewport_index, source_unit) {
        var ptr0 = isLikeNone(source_unit) ? 0 : passStringToWasm0(source_unit, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        var len0 = WASM_VECTOR_LEN;
        const ret = wasm.rendhandle_rayPickFromCameraSync(this.__wbg_ptr, current_x, current_y, isLikeNone(viewport_index) ? Number.MAX_SAFE_INTEGER : (viewport_index) >>> 0, ptr0, len0);
        return ret;
    }
    /**
     * direct 主线程通用射线拾取：直接返回结果，不走 JS 消息回调。
     * @param {number} ox
     * @param {number} oy
     * @param {number} oz
     * @param {number} dx
     * @param {number} dy
     * @param {number} dz
     * @param {string | null} [source_unit]
     * @returns {any}
     */
    rayPickSync(ox, oy, oz, dx, dy, dz, source_unit) {
        var ptr0 = isLikeNone(source_unit) ? 0 : passStringToWasm0(source_unit, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        var len0 = WASM_VECTOR_LEN;
        const ret = wasm.rendhandle_rayPickSync(this.__wbg_ptr, ox, oy, oz, dx, dy, dz, ptr0, len0);
        return ret;
    }
    /**
     * @param {Uint32Array} global_ids
     */
    removeKeepScreenSize2d(global_ids) {
        wasm.rendhandle_removeKeepScreenSize2d(this.__wbg_ptr, global_ids);
    }
    /**
     * 接收 JS 侧文档截图请求，转换为 Rust 内部事件并交给渲染帧处理。
     * @param {any} request
     */
    requestDocScreenshot(request) {
        const ret = wasm.rendhandle_requestDocScreenshot(this.__wbg_ptr, request);
        if (ret[1]) {
            throw takeFromExternrefTable0(ret[0]);
        }
    }
    /**
     * 接收 JS 侧对象截图请求，转换为 Rust 内部事件并交给渲染帧处理。
     * @param {number} request_id
     * @param {Uint32Array} object_ids
     * @param {number} output_width
     * @param {number} output_height
     * @param {boolean} needs_background
     */
    requestObjectScreenshot(request_id, object_ids, output_width, output_height, needs_background) {
        const ret = wasm.rendhandle_requestObjectScreenshot(this.__wbg_ptr, request_id, object_ids, output_width, output_height, needs_background);
        if (ret[1]) {
            throw takeFromExternrefTable0(ret[0]);
        }
    }
    /**
     * 带参数发起一次截图请求。
     *
     * - `camera_type` 支持："orbit" | "pano" | "plane"（大小写不敏感）
     * - 未知相机类型会通过 `ScreenshotFailed` 明确结束本次请求。
     * @param {number} request_id
     * @param {number} expected_source_size_x
     * @param {number} expected_source_size_y
     * @param {number} crop_offset_x
     * @param {number} crop_offset_y
     * @param {number} crop_size_x
     * @param {number} crop_size_y
     * @param {number} output_size_x
     * @param {number} output_size_y
     * @param {string} camera_type
     * @param {boolean} needs_background
     */
    requestScreenshotWithParams(request_id, expected_source_size_x, expected_source_size_y, crop_offset_x, crop_offset_y, crop_size_x, crop_size_y, output_size_x, output_size_y, camera_type, needs_background) {
        const ptr0 = passStringToWasm0(camera_type, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len0 = WASM_VECTOR_LEN;
        const ret = wasm.rendhandle_requestScreenshotWithParams(this.__wbg_ptr, request_id, expected_source_size_x, expected_source_size_y, crop_offset_x, crop_offset_y, crop_size_x, crop_size_y, output_size_x, output_size_y, ptr0, len0, needs_background);
        if (ret[1]) {
            throw takeFromExternrefTable0(ret[0]);
        }
    }
    /**
     * 重置背景
     */
    resetBackground() {
        wasm.rendhandle_resetBackground(this.__wbg_ptr);
    }
    /**
     * @param {bigint} session_id
     * @param {string} text
     */
    resetTextEditorPreview(session_id, text) {
        const ptr0 = passStringToWasm0(text, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len0 = WASM_VECTOR_LEN;
        const ret = wasm.rendhandle_resetTextEditorPreview(this.__wbg_ptr, session_id, ptr0, len0);
        if (ret[1]) {
            throw takeFromExternrefTable0(ret[0]);
        }
    }
    /**
     * @returns {any}
     */
    sceneInfo() {
        const ret = wasm.rendhandle_sceneInfo(this.__wbg_ptr);
        return ret;
    }
    /**
     * 设置画布背景的完整快照
     * @param {any} background
     */
    setCanvasBackground(background) {
        wasm.rendhandle_setCanvasBackground(this.__wbg_ptr, background);
    }
    /**
     * @param {any} color
     */
    setClearColor(color) {
        wasm.rendhandle_setClearColor(this.__wbg_ptr, color);
    }
    /**
     * @param {boolean} disable
     */
    setDisableTestSceneSetup(disable) {
        wasm.rendhandle_setDisableTestSceneSetup(this.__wbg_ptr, disable);
    }
    /**
     * @param {boolean} paused
     */
    setDocScreenshotPickPaused(paused) {
        const ret = wasm.rendhandle_setDocScreenshotPickPaused(this.__wbg_ptr, paused);
        if (ret[1]) {
            throw takeFromExternrefTable0(ret[0]);
        }
    }
    /**
     * 设置环境贴图
     * @param {string} url
     * @param {number} rotation_x
     * @param {number} rotation_y
     * @param {number} rotation_z
     */
    setEnvMap(url, rotation_x, rotation_y, rotation_z) {
        const ptr0 = passStringToWasm0(url, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len0 = WASM_VECTOR_LEN;
        const ret = wasm.rendhandle_setEnvMap(this.__wbg_ptr, ptr0, len0, rotation_x, rotation_y, rotation_z);
        if (ret[1]) {
            throw takeFromExternrefTable0(ret[0]);
        }
    }
    /**
     * 控制之后创建的资产材质是否解析并应用 MARS `bump/HB_bump`。
     * @param {boolean} enabled
     */
    setHBbumpEnabled(enabled) {
        wasm.rendhandle_setHBbumpEnabled(this.__wbg_ptr, enabled);
    }
    /**
     * 加载 EXR 并完成 GPU 光照预处理和 PBR 管线安装。
     * @param {string} url
     * @returns {Promise<void>}
     */
    setIbl(url) {
        const ptr0 = passStringToWasm0(url, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len0 = WASM_VECTOR_LEN;
        const ret = wasm.rendhandle_setIbl(this.__wbg_ptr, ptr0, len0);
        return ret;
    }
    /**
     * @param {number} intensity
     */
    setIblIntensity(intensity) {
        const ret = wasm.rendhandle_setIblIntensity(this.__wbg_ptr, intensity);
        if (ret[1]) {
            throw takeFromExternrefTable0(ret[0]);
        }
    }
    /**
     * @param {number} x
     * @param {number} y
     * @param {number} z
     */
    setIblRotation(x, y, z) {
        const ret = wasm.rendhandle_setIblRotation(this.__wbg_ptr, x, y, z);
        if (ret[1]) {
            throw takeFromExternrefTable0(ret[0]);
        }
    }
    /**
     * @param {boolean} wireframe
     * @param {string} visual_mode
     */
    setMeshDebug(wireframe, visual_mode) {
        const ptr0 = passStringToWasm0(visual_mode, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len0 = WASM_VECTOR_LEN;
        wasm.rendhandle_setMeshDebug(this.__wbg_ptr, wireframe, ptr0, len0);
    }
    /**
     * 打开/关闭 ray pick repeat 调试线绘制（rend 内部，可通过 URL `?debugRayPickRepeatRays=1` 启用）。
     * @param {boolean} enabled
     */
    setRayPickRepeatDebugEnabled(enabled) {
        wasm.rendhandle_setRayPickRepeatDebugEnabled(this.__wbg_ptr, enabled);
    }
    /**
     * @param {string} mode
     */
    setRenderMode(mode) {
        const ptr0 = passStringToWasm0(mode, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len0 = WASM_VECTOR_LEN;
        wasm.rendhandle_setRenderMode(this.__wbg_ptr, ptr0, len0);
    }
    /**
     * @param {any} sab_store
     */
    setSabStore(sab_store) {
        wasm.rendhandle_setSabStore(this.__wbg_ptr, sab_store);
    }
    /**
     * @param {number} kind
     * @param {Uint32Array} element_ids
     * @param {Uint32Array} pick_result_ids
     */
    setSkCanvasHighlight(kind, element_ids, pick_result_ids) {
        wasm.rendhandle_setSkCanvasHighlight(this.__wbg_ptr, kind, element_ids, pick_result_ids);
    }
    /**
     * @param {boolean} allow_outline_in_2d
     */
    setSkCanvasHighlightPolicy(allow_outline_in_2d) {
        wasm.rendhandle_setSkCanvasHighlightPolicy(this.__wbg_ptr, allow_outline_in_2d);
    }
    /**
     * @param {boolean} vello_enabled
     */
    setText2VelloExclusiveMode(vello_enabled) {
        wasm.rendhandle_setText2VelloExclusiveMode(this.__wbg_ptr, vello_enabled);
    }
    /**
     * @param {boolean} enabled
     */
    showMeshDebugWhenHover(enabled) {
        wasm.rendhandle_showMeshDebugWhenHover(this.__wbg_ptr, enabled);
    }
    /**
     * 显式请求时才收集完整资源 ID，不持有强句柄，也不写入常规统计或日志。
     * @returns {any}
     */
    skbResourceDiagnostics() {
        const ret = wasm.rendhandle_skbResourceDiagnostics(this.__wbg_ptr);
        if (ret[2]) {
            throw takeFromExternrefTable0(ret[1]);
        }
        return takeFromExternrefTable0(ret[0]);
    }
    /**
     * 提交 ingress 后先分发终态/事件，并避免对同一终态重复抛出 JS 异常。
     * @param {any} ingress
     */
    submitCameraIngress(ingress) {
        const ret = wasm.rendhandle_submitCameraIngress(this.__wbg_ptr, ingress);
        if (ret[1]) {
            throw takeFromExternrefTable0(ret[0]);
        }
    }
    /**
     * 自动预热入口：sk_canvas 在每次 mouse move 时调用本方法，
     * 把最新坐标交给 GPU pick 调度器。
     *
     * - 只保留最新坐标，不维护队列。
     * - 新坐标到来时立即尝试消费；若 [`super::REND_APP`] 忙，pending 保留给 `enterFrame`。
     * - 同一 pending 坐标重复提交直接返回（背压规则 §8.3）。
     * @param {number} current_x
     * @param {number} current_y
     * @param {number} js_timestamp
     */
    submitLatestGpuPick(current_x, current_y, js_timestamp) {
        wasm.rendhandle_submitLatestGpuPick(this.__wbg_ptr, current_x, current_y, js_timestamp);
    }
    /**
     * 指针事件合并预热入口：只保留最新请求，由当前帧或下一次可借用 app 时消费。
     * @param {number} seq
     * @param {number} viewport_index
     * @param {number} viewport_x
     * @param {number} viewport_y
     * @param {number} canvas_x
     * @param {number} canvas_y
     * @param {string | null | undefined} source_unit
     * @param {boolean} need_gpu_pick
     * @param {boolean} need_camera_ray
     * @param {any} derived
     * @param {number | null} [js_timestamp]
     */
    submitLatestPointerPickPrewarm(seq, viewport_index, viewport_x, viewport_y, canvas_x, canvas_y, source_unit, need_gpu_pick, need_camera_ray, derived, js_timestamp) {
        var ptr0 = isLikeNone(source_unit) ? 0 : passStringToWasm0(source_unit, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        var len0 = WASM_VECTOR_LEN;
        wasm.rendhandle_submitLatestPointerPickPrewarm(this.__wbg_ptr, seq, viewport_index, viewport_x, viewport_y, canvas_x, canvas_y, ptr0, len0, need_gpu_pick, need_camera_ray, derived, !isLikeNone(js_timestamp), isLikeNone(js_timestamp) ? 0 : js_timestamp);
    }
    /**
     * Ray pick bundle 预热入口。
     *
     * 支持 cameraRay 部分与可选的 derived 模板列表（JS 端用 JSON 兼容对象数组传入，
     * 由 serde-wasm-bindgen 反序列化）。详见 doc `ray_pick_worker_可行方案.md` §6.1 / §7.1。
     * `session_id < 0` 时视为无 active session（独立请求）。
     * `derived` 为 `undefined`/`null`/空数组时表示本次不要 derived。
     * @param {number} seq
     * @param {number} session_id
     * @param {number} viewport_index
     * @param {number} viewport_x
     * @param {number} viewport_y
     * @param {string | null | undefined} source_unit
     * @param {boolean} need_camera_ray
     * @param {any} derived
     */
    submitLatestRayPickBundle(seq, session_id, viewport_index, viewport_x, viewport_y, source_unit, need_camera_ray, derived) {
        var ptr0 = isLikeNone(source_unit) ? 0 : passStringToWasm0(source_unit, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        var len0 = WASM_VECTOR_LEN;
        wasm.rendhandle_submitLatestRayPickBundle(this.__wbg_ptr, seq, session_id, viewport_index, viewport_x, viewport_y, ptr0, len0, need_camera_ray, derived);
    }
    /**
     * @param {bigint} session_id
     * @param {any} command
     */
    submitTextEditorCommand(session_id, command) {
        const ret = wasm.rendhandle_submitTextEditorCommand(this.__wbg_ptr, session_id, command);
        if (ret[1]) {
            throw takeFromExternrefTable0(ret[0]);
        }
    }
    /**
     * 显式采集 SVG 源资产和 renderer 资源索引；不持有强句柄，也不自动输出日志。
     * @returns {any}
     */
    svgResourceDiagnostics() {
        const ret = wasm.rendhandle_svgResourceDiagnostics(this.__wbg_ptr);
        if (ret[2]) {
            throw takeFromExternrefTable0(ret[1]);
        }
        return takeFromExternrefTable0(ret[0]);
    }
    /**
     * @param {bigint} session_id
     * @returns {any}
     */
    textEditorSelectionText(session_id) {
        const ret = wasm.rendhandle_textEditorSelectionText(this.__wbg_ptr, session_id);
        if (ret[2]) {
            throw takeFromExternrefTable0(ret[1]);
        }
        return takeFromExternrefTable0(ret[0]);
    }
    /**
     * @param {bigint} session_id
     * @param {any} canvas_point
     * @returns {any}
     */
    unprojectTextEditorCanvasPointToLocal(session_id, canvas_point) {
        const ret = wasm.rendhandle_unprojectTextEditorCanvasPointToLocal(this.__wbg_ptr, session_id, canvas_point);
        if (ret[2]) {
            throw takeFromExternrefTable0(ret[1]);
        }
        return takeFromExternrefTable0(ret[0]);
    }
    /**
     * 更新环境贴图旋转角度
     * @param {number} rotation_x
     * @param {number} rotation_y
     * @param {number} rotation_z
     */
    updateEnvMapRotation(rotation_x, rotation_y, rotation_z) {
        wasm.rendhandle_updateEnvMapRotation(this.__wbg_ptr, rotation_x, rotation_y, rotation_z);
    }
    /**
     * 按 element_id 更新一个 group 的 visible / layers 状态。
     *
     * `flags` bit 0 表示 visible 有效；bit 1 表示 layers 有效。
     * @param {number} element_id
     * @param {number} flags
     * @param {boolean} visible
     * @param {number} layers
     */
    updateGroupVisibilityStateByElementId(element_id, flags, visible, layers) {
        wasm.rendhandle_updateGroupVisibilityStateByElementId(this.__wbg_ptr, element_id, flags, visible, layers);
    }
    /**
     * @param {number} element_id
     * @param {boolean} visible
     */
    updateGroupVisibleByElementId(element_id, visible) {
        wasm.rendhandle_updateGroupVisibleByElementId(this.__wbg_ptr, element_id, visible);
    }
    /**
     * @param {Uint32Array} global_ids
     * @param {number} layers
     */
    updateObjectsLayers(global_ids, layers) {
        wasm.rendhandle_updateObjectsLayers(this.__wbg_ptr, global_ids, layers);
    }
    /**
     * @param {any} payload
     */
    updateObjectsPicking(payload) {
        const ret = wasm.rendhandle_updateObjectsPicking(this.__wbg_ptr, payload);
        if (ret[1]) {
            throw takeFromExternrefTable0(ret[0]);
        }
    }
    /**
     * @param {Uint32Array} global_ids
     * @param {Array<any>} styles
     * @param {Uint32Array} layers_list
     */
    updateObjectsStyle(global_ids, styles, layers_list) {
        const ret = wasm.rendhandle_updateObjectsStyle(this.__wbg_ptr, global_ids, styles, layers_list);
        if (ret[1]) {
            throw takeFromExternrefTable0(ret[0]);
        }
    }
    /**
     * @param {Uint32Array} global_ids
     * @param {Float32Array} transforms
     * @param {string | null} [source_unit]
     */
    updateObjectsTransform(global_ids, transforms, source_unit) {
        var ptr0 = isLikeNone(source_unit) ? 0 : passStringToWasm0(source_unit, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        var len0 = WASM_VECTOR_LEN;
        const ret = wasm.rendhandle_updateObjectsTransform(this.__wbg_ptr, global_ids, transforms, ptr0, len0);
        if (ret[1]) {
            throw takeFromExternrefTable0(ret[0]);
        }
    }
    /**
     * @param {Uint32Array} global_ids
     * @param {Uint8Array} flags
     * @param {Uint8Array} visible_list
     * @param {Uint32Array} layers_list
     */
    updateObjectsVisibilityState(global_ids, flags, visible_list, layers_list) {
        const ret = wasm.rendhandle_updateObjectsVisibilityState(this.__wbg_ptr, global_ids, flags, visible_list, layers_list);
        if (ret[1]) {
            throw takeFromExternrefTable0(ret[0]);
        }
    }
    /**
     * @param {bigint} session_id
     * @param {any} style
     */
    updateTextEditorPreview(session_id, style) {
        const ret = wasm.rendhandle_updateTextEditorPreview(this.__wbg_ptr, session_id, style);
        if (ret[1]) {
            throw takeFromExternrefTable0(ret[0]);
        }
    }
    /**
     * @param {any} spec
     * @returns {any}
     */
    upsertBimTextGizmo(spec) {
        const ret = wasm.rendhandle_upsertBimTextGizmo(this.__wbg_ptr, spec);
        if (ret[2]) {
            throw takeFromExternrefTable0(ret[1]);
        }
        return takeFromExternrefTable0(ret[0]);
    }
    /**
     * @param {any} specs
     */
    upsertKeepScreenSize2d(specs) {
        const ret = wasm.rendhandle_upsertKeepScreenSize2d(this.__wbg_ptr, specs);
        if (ret[1]) {
            throw takeFromExternrefTable0(ret[0]);
        }
    }
}
if (Symbol.dispose) RendHandle.prototype[Symbol.dispose] = RendHandle.prototype.free;

/**
 * 创建主线程 canvas 版 rend app，并注入初始化视口与清屏色。
 * @param {string} canvas_id
 * @param {number} scale_factor
 * @param {number} handle
 * @param {any} initial_viewport_layout
 * @param {any} clear_color
 * @param {boolean} enable_vp_rotation_gizmo
 * @param {any} vp_rotation_gizmo_frame
 * @param {string | null | undefined} text_render_mode
 * @param {string | null | undefined} app_environment
 * @param {boolean} enable_taa
 * @param {boolean} enable_shadow
 * @returns {Promise<void>}
 */
export function createRendApp(canvas_id, scale_factor, handle, initial_viewport_layout, clear_color, enable_vp_rotation_gizmo, vp_rotation_gizmo_frame, text_render_mode, app_environment, enable_taa, enable_shadow) {
    const ptr0 = passStringToWasm0(canvas_id, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    const len0 = WASM_VECTOR_LEN;
    var ptr1 = isLikeNone(text_render_mode) ? 0 : passStringToWasm0(text_render_mode, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    var len1 = WASM_VECTOR_LEN;
    var ptr2 = isLikeNone(app_environment) ? 0 : passStringToWasm0(app_environment, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    var len2 = WASM_VECTOR_LEN;
    const ret = wasm.createRendApp(ptr0, len0, scale_factor, handle, initial_viewport_layout, clear_color, enable_vp_rotation_gizmo, vp_rotation_gizmo_frame, ptr1, len1, ptr2, len2, enable_taa, enable_shadow);
    return ret;
}

/**
 * 使用 OffscreenCanvas 创建 worker 版 rend app，并接收必需的首帧视口布局快照。
 * @param {OffscreenCanvas} canvas
 * @param {number} scale_factor
 * @param {number} handle
 * @param {any} initial_viewport_layout
 * @param {any} clear_color
 * @param {boolean} enable_vp_rotation_gizmo
 * @param {any} vp_rotation_gizmo_frame
 * @param {string | null | undefined} text_render_mode
 * @param {string | null | undefined} app_environment
 * @param {boolean} enable_taa
 * @param {boolean} enable_shadow
 * @returns {Promise<void>}
 */
export function createRendAppByOffscreenCanvas(canvas, scale_factor, handle, initial_viewport_layout, clear_color, enable_vp_rotation_gizmo, vp_rotation_gizmo_frame, text_render_mode, app_environment, enable_taa, enable_shadow) {
    var ptr0 = isLikeNone(text_render_mode) ? 0 : passStringToWasm0(text_render_mode, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    var len0 = WASM_VECTOR_LEN;
    var ptr1 = isLikeNone(app_environment) ? 0 : passStringToWasm0(app_environment, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    var len1 = WASM_VECTOR_LEN;
    const ret = wasm.createRendAppByOffscreenCanvas(canvas, scale_factor, handle, initial_viewport_layout, clear_color, enable_vp_rotation_gizmo, vp_rotation_gizmo_frame, ptr0, len0, ptr1, len1, enable_taa, enable_shadow);
    return ret;
}

export function debugTriggerRustPanic() {
    wasm.debugTriggerRustPanic();
}

/**
 * 创建 app 前注册，Direct 与 Worker 共用 OPFS 读取。
 * @param {Function} read
 * @param {Function} invalidate
 */
export function registerResourceCache(read, invalidate) {
    wasm.registerResourceCache(read, invalidate);
}

/**
 * 提供访问原始 WASM memory 的句柄。
 * @returns {any}
 */
export function wasmMemory() {
    const ret = wasm.wasmMemory();
    return ret;
}
function __wbg_get_imports() {
    const import0 = {
        __proto__: null,
        __wbg_Error_408e67f47ca7b58b: function(arg0, arg1) {
            const ret = Error(getStringFromWasm0(arg0, arg1));
            return ret;
        },
        __wbg_Number_3890faa6d3ff057d: function(arg0) {
            const ret = Number(arg0);
            return ret;
        },
        __wbg_String_8564e559799eccda: function(arg0, arg1) {
            const ret = String(arg1);
            const ptr1 = passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
            const len1 = WASM_VECTOR_LEN;
            getDataViewMemory0().setInt32(arg0 + 4 * 1, len1, true);
            getDataViewMemory0().setInt32(arg0 + 4 * 0, ptr1, true);
        },
        __wbg_Window_71828dcc70564fa2: function(arg0) {
            const ret = arg0.Window;
            return ret;
        },
        __wbg_Window_a2a6c4d665047b14: function(arg0) {
            const ret = arg0.Window;
            return ret;
        },
        __wbg_Window_beea4c1cd565b37a: function(arg0) {
            const ret = arg0.Window;
            return ret;
        },
        __wbg_WorkerGlobalScope_2664448a7c667d67: function(arg0) {
            const ret = arg0.WorkerGlobalScope;
            return ret;
        },
        __wbg_WorkerGlobalScope_75a3607cb56f8d27: function(arg0) {
            const ret = arg0.WorkerGlobalScope;
            return ret;
        },
        __wbg___wbindgen_bigint_get_as_i64_c4ecf48528083721: function(arg0, arg1) {
            const v = arg1;
            const ret = typeof(v) === 'bigint' ? v : undefined;
            getDataViewMemory0().setBigInt64(arg0 + 8 * 1, isLikeNone(ret) ? BigInt(0) : ret, true);
            getDataViewMemory0().setInt32(arg0 + 4 * 0, !isLikeNone(ret), true);
        },
        __wbg___wbindgen_boolean_get_c9c83ebd41b34df3: function(arg0) {
            const v = arg0;
            const ret = typeof(v) === 'boolean' ? v : undefined;
            return isLikeNone(ret) ? 0xFFFFFF : ret ? 1 : 0;
        },
        __wbg___wbindgen_debug_string_a57024b9c6e4a48b: function(arg0, arg1) {
            const ret = debugString(arg1);
            const ptr1 = passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
            const len1 = WASM_VECTOR_LEN;
            getDataViewMemory0().setInt32(arg0 + 4 * 1, len1, true);
            getDataViewMemory0().setInt32(arg0 + 4 * 0, ptr1, true);
        },
        __wbg___wbindgen_in_ac983077f137f2e6: function(arg0, arg1) {
            const ret = arg0 in arg1;
            return ret;
        },
        __wbg___wbindgen_is_bigint_8ffbbef442139384: function(arg0) {
            const ret = typeof(arg0) === 'bigint';
            return ret;
        },
        __wbg___wbindgen_is_function_5e4570eb24ffa122: function(arg0) {
            const ret = typeof(arg0) === 'function';
            return ret;
        },
        __wbg___wbindgen_is_null_7d13f41e1a2d5140: function(arg0) {
            const ret = arg0 === null;
            return ret;
        },
        __wbg___wbindgen_is_object_a2790eb24c211ea0: function(arg0) {
            const val = arg0;
            const ret = typeof(val) === 'object' && val !== null;
            return ret;
        },
        __wbg___wbindgen_is_string_e6f02f0ea5f20a32: function(arg0) {
            const ret = typeof(arg0) === 'string';
            return ret;
        },
        __wbg___wbindgen_is_undefined_6cff064c44e0d823: function(arg0) {
            const ret = arg0 === undefined;
            return ret;
        },
        __wbg___wbindgen_jsval_eq_0a18949a61670320: function(arg0, arg1) {
            const ret = arg0 === arg1;
            return ret;
        },
        __wbg___wbindgen_jsval_loose_eq_acf2776254a8d832: function(arg0, arg1) {
            const ret = arg0 == arg1;
            return ret;
        },
        __wbg___wbindgen_memory_5dc2a138835b0f8e: function() {
            const ret = wasm.memory;
            return ret;
        },
        __wbg___wbindgen_number_get_136b9679cab35cfb: function(arg0, arg1) {
            const obj = arg1;
            const ret = typeof(obj) === 'number' ? obj : undefined;
            getDataViewMemory0().setFloat64(arg0 + 8 * 1, isLikeNone(ret) ? 0 : ret, true);
            getDataViewMemory0().setInt32(arg0 + 4 * 0, !isLikeNone(ret), true);
        },
        __wbg___wbindgen_rethrow_fbd2dcd7d2b9ac5f: function(arg0) {
            throw arg0;
        },
        __wbg___wbindgen_string_get_d154f1e671052120: function(arg0, arg1) {
            const obj = arg1;
            const ret = typeof(obj) === 'string' ? obj : undefined;
            var ptr1 = isLikeNone(ret) ? 0 : passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
            var len1 = WASM_VECTOR_LEN;
            getDataViewMemory0().setInt32(arg0 + 4 * 1, len1, true);
            getDataViewMemory0().setInt32(arg0 + 4 * 0, ptr1, true);
        },
        __wbg___wbindgen_throw_bb96b2010945f0bc: function(arg0, arg1) {
            throw new Error(getStringFromWasm0(arg0, arg1));
        },
        __wbg__wbg_cb_unref_be22cc64ae6946a0: function(arg0) {
            arg0._wbg_cb_unref();
        },
        __wbg_abort_d8615b5857e112b3: function(arg0) {
            arg0.abort();
        },
        __wbg_arrayBuffer_16433f17fbd74397: function() { return handleError(function (arg0) {
            const ret = arg0.arrayBuffer();
            return ret;
        }, arguments); },
        __wbg_beginComputePass_b9a325184985e6ff: function(arg0, arg1) {
            const ret = arg0.beginComputePass(arg1);
            return ret;
        },
        __wbg_beginRenderPass_3c53642423af50dc: function() { return handleError(function (arg0, arg1) {
            const ret = arg0.beginRenderPass(arg1);
            return ret;
        }, arguments); },
        __wbg_blob_07deabcee228392c: function() { return handleError(function (arg0) {
            const ret = arg0.blob();
            return ret;
        }, arguments); },
        __wbg_buffer_198db952b4a0f282: function(arg0) {
            const ret = arg0.buffer;
            return ret;
        },
        __wbg_buffer_78291c0e094ccf99: function(arg0) {
            const ret = arg0.buffer;
            return ret;
        },
        __wbg_buffer_d3fb2b851a79c56f: function(arg0) {
            const ret = arg0.buffer;
            return ret;
        },
        __wbg_buffer_fb0dccbb56baa31c: function(arg0) {
            const ret = arg0.buffer;
            return ret;
        },
        __wbg_byteLength_031910aabf3577e0: function(arg0) {
            const ret = arg0.byteLength;
            return ret;
        },
        __wbg_byteLength_22ae8cbf06d2f42d: function(arg0) {
            const ret = arg0.byteLength;
            return ret;
        },
        __wbg_byteLength_336bc7d303511ba0: function(arg0) {
            const ret = arg0.byteLength;
            return ret;
        },
        __wbg_byteLength_3c12079496e2022c: function(arg0) {
            const ret = arg0.byteLength;
            return ret;
        },
        __wbg_byteLength_f44e15aff20920a7: function(arg0) {
            const ret = arg0.byteLength;
            return ret;
        },
        __wbg_byteOffset_12e9c746ded2b6a6: function(arg0) {
            const ret = arg0.byteOffset;
            return ret;
        },
        __wbg_byteOffset_153ab7d27dfdbcf7: function(arg0) {
            const ret = arg0.byteOffset;
            return ret;
        },
        __wbg_byteOffset_2b1d5b10453ce198: function(arg0) {
            const ret = arg0.byteOffset;
            return ret;
        },
        __wbg_byteOffset_d38ed9a34bcd98f8: function(arg0) {
            const ret = arg0.byteOffset;
            return ret;
        },
        __wbg_call_0f2a9af232c18fd2: function() { return handleError(function (arg0, arg1, arg2, arg3) {
            const ret = arg0.call(arg1, arg2, arg3);
            return ret;
        }, arguments); },
        __wbg_call_1c5886ab9c57d1c7: function() { return handleError(function (arg0, arg1) {
            const ret = arg0.call(arg1);
            return ret;
        }, arguments); },
        __wbg_call_35dba3c747ad7521: function() { return handleError(function (arg0, arg1, arg2) {
            const ret = arg0.call(arg1, arg2);
            return ret;
        }, arguments); },
        __wbg_call_39f824e18d9d2414: function() { return handleError(function (arg0, arg1, arg2, arg3, arg4) {
            const ret = arg0.call(arg1, arg2, arg3, arg4);
            return ret;
        }, arguments); },
        __wbg_call_85c2616c93afb65b: function() { return handleError(function (arg0, arg1, arg2, arg3, arg4, arg5) {
            const ret = arg0.call(arg1, arg2, arg3, arg4, arg5);
            return ret;
        }, arguments); },
        __wbg_clearBuffer_3d5a3057c3c8a9bf: function(arg0, arg1, arg2, arg3) {
            arg0.clearBuffer(arg1, arg2, arg3);
        },
        __wbg_clearBuffer_82ba999c294f42fb: function(arg0, arg1, arg2) {
            arg0.clearBuffer(arg1, arg2);
        },
        __wbg_close_d6b68e08eb474787: function(arg0) {
            arg0.close();
        },
        __wbg_configure_1e2c1c9edad07d26: function() { return handleError(function (arg0, arg1) {
            arg0.configure(arg1);
        }, arguments); },
        __wbg_configure_ktx2_loader_466fb9646d37aca0: function(arg0, arg1, arg2) {
            self.configure_ktx2_loader(arg0 !== 0, arg1 !== 0, arg2 !== 0);
        },
        __wbg_copyBufferToBuffer_9c174b96fb08d551: function() { return handleError(function (arg0, arg1, arg2, arg3, arg4, arg5) {
            arg0.copyBufferToBuffer(arg1, arg2, arg3, arg4, arg5);
        }, arguments); },
        __wbg_copyExternalImageToTexture_116560f3be856776: function() { return handleError(function (arg0, arg1, arg2, arg3) {
            arg0.copyExternalImageToTexture(arg1, arg2, arg3);
        }, arguments); },
        __wbg_copyTextureToBuffer_1234b3210431ad05: function() { return handleError(function (arg0, arg1, arg2, arg3) {
            arg0.copyTextureToBuffer(arg1, arg2, arg3);
        }, arguments); },
        __wbg_copyTextureToTexture_d2e6a1eb3254b828: function() { return handleError(function (arg0, arg1, arg2, arg3) {
            arg0.copyTextureToTexture(arg1, arg2, arg3);
        }, arguments); },
        __wbg_createBindGroupLayout_b1bd63b4e88459d8: function() { return handleError(function (arg0, arg1) {
            const ret = arg0.createBindGroupLayout(arg1);
            return ret;
        }, arguments); },
        __wbg_createBindGroup_f539b26ca341308f: function(arg0, arg1) {
            const ret = arg0.createBindGroup(arg1);
            return ret;
        },
        __wbg_createBuffer_d800e9b1d41b2ee5: function() { return handleError(function (arg0, arg1) {
            const ret = arg0.createBuffer(arg1);
            return ret;
        }, arguments); },
        __wbg_createCommandEncoder_3352d1ffc36c6fc0: function(arg0, arg1) {
            const ret = arg0.createCommandEncoder(arg1);
            return ret;
        },
        __wbg_createComputePipeline_224fa2618d9948a0: function(arg0, arg1) {
            const ret = arg0.createComputePipeline(arg1);
            return ret;
        },
        __wbg_createImageBitmap_38b7b2bfd36204be: function() { return handleError(function (arg0, arg1) {
            const ret = arg0.createImageBitmap(arg1);
            return ret;
        }, arguments); },
        __wbg_createImageBitmap_79441a18a0d65ee4: function() { return handleError(function (arg0, arg1) {
            const ret = arg0.createImageBitmap(arg1);
            return ret;
        }, arguments); },
        __wbg_createPipelineLayout_6eab52c327118937: function(arg0, arg1) {
            const ret = arg0.createPipelineLayout(arg1);
            return ret;
        },
        __wbg_createRenderPipeline_0ebb7ebc653e9207: function() { return handleError(function (arg0, arg1) {
            const ret = arg0.createRenderPipeline(arg1);
            return ret;
        }, arguments); },
        __wbg_createSampler_9bd91d7e928c0060: function(arg0, arg1) {
            const ret = arg0.createSampler(arg1);
            return ret;
        },
        __wbg_createShaderModule_cefa51336cb288ae: function(arg0, arg1) {
            const ret = arg0.createShaderModule(arg1);
            return ret;
        },
        __wbg_createTexture_ed7e9fc04dd54d84: function() { return handleError(function (arg0, arg1) {
            const ret = arg0.createTexture(arg1);
            return ret;
        }, arguments); },
        __wbg_createView_da41c2d2cb212715: function() { return handleError(function (arg0, arg1) {
            const ret = arg0.createView(arg1);
            return ret;
        }, arguments); },
        __wbg_description_83b8a393160021b9: function(arg0, arg1) {
            const ret = arg1.description;
            const ptr1 = passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
            const len1 = WASM_VECTOR_LEN;
            getDataViewMemory0().setInt32(arg0 + 4 * 1, len1, true);
            getDataViewMemory0().setInt32(arg0 + 4 * 0, ptr1, true);
        },
        __wbg_destroy_249478e98a7943d5: function(arg0) {
            arg0.destroy();
        },
        __wbg_destroy_637537007d9eaa44: function(arg0) {
            arg0.destroy();
        },
        __wbg_devicePixelRatio_e60a2d12bfd01f78: function(arg0) {
            const ret = arg0.devicePixelRatio;
            return ret;
        },
        __wbg_dispatchWorkgroupsIndirect_efe17f2da3a39a3f: function(arg0, arg1, arg2) {
            arg0.dispatchWorkgroupsIndirect(arg1, arg2);
        },
        __wbg_dispatchWorkgroups_56b943172790add0: function(arg0, arg1, arg2, arg3) {
            arg0.dispatchWorkgroups(arg1 >>> 0, arg2 >>> 0, arg3 >>> 0);
        },
        __wbg_document_ac38448dbfd31a57: function(arg0) {
            const ret = arg0.document;
            return isLikeNone(ret) ? 0 : addToExternrefTable0(ret);
        },
        __wbg_done_669171204c3dcae2: function(arg0) {
            const ret = arg0.done;
            return ret;
        },
        __wbg_drawIndexed_638959aae942557c: function(arg0, arg1, arg2, arg3, arg4, arg5) {
            arg0.drawIndexed(arg1 >>> 0, arg2 >>> 0, arg3 >>> 0, arg4, arg5 >>> 0);
        },
        __wbg_drawIndirect_269c8a4880a070c8: function(arg0, arg1, arg2) {
            arg0.drawIndirect(arg1, arg2);
        },
        __wbg_draw_086a9578fc9898c2: function(arg0, arg1, arg2, arg3, arg4) {
            arg0.draw(arg1 >>> 0, arg2 >>> 0, arg3 >>> 0, arg4 >>> 0);
        },
        __wbg_end_82fd0c12ba185009: function(arg0) {
            arg0.end();
        },
        __wbg_end_b57473834b877409: function(arg0) {
            arg0.end();
        },
        __wbg_entries_7774d489e1da5f4f: function(arg0) {
            const ret = Object.entries(arg0);
            return ret;
        },
        __wbg_error_757e9472f8410341: function(arg0, arg1) {
            let deferred0_0;
            let deferred0_1;
            try {
                deferred0_0 = arg0;
                deferred0_1 = arg1;
                console.error(getStringFromWasm0(arg0, arg1));
            } finally {
                wasm.__wbindgen_free(deferred0_0, deferred0_1, 1);
            }
        },
        __wbg_error_afb37ce311f1115d: function(arg0, arg1) {
            console.error(arg0, arg1);
        },
        __wbg_error_dd408a7b3cb542dd: function(arg0) {
            console.error(arg0);
        },
        __wbg_features_5cac120c28ba0475: function(arg0) {
            const ret = arg0.features;
            return ret;
        },
        __wbg_features_dec7bd2fd3d91bd6: function(arg0) {
            const ret = arg0.features;
            return ret;
        },
        __wbg_fetch_6500a72da8700672: function(arg0, arg1, arg2) {
            const ret = arg0.fetch(getStringFromWasm0(arg1, arg2));
            return ret;
        },
        __wbg_fetch_bbfd889b90095876: function(arg0, arg1, arg2) {
            const ret = arg0.fetch(getStringFromWasm0(arg1, arg2));
            return ret;
        },
        __wbg_finish_09ec094c10f41e7b: function(arg0) {
            const ret = arg0.finish();
            return ret;
        },
        __wbg_finish_ec1c191f66a895b1: function(arg0, arg1) {
            const ret = arg0.finish(arg1);
            return ret;
        },
        __wbg_from_74f3d90e0ff11240: function(arg0) {
            const ret = Array.from(arg0);
            return ret;
        },
        __wbg_getContext_71c33f14b63da593: function() { return handleError(function (arg0, arg1, arg2) {
            const ret = arg0.getContext(getStringFromWasm0(arg1, arg2));
            return isLikeNone(ret) ? 0 : addToExternrefTable0(ret);
        }, arguments); },
        __wbg_getContext_c5236e0057b35024: function() { return handleError(function (arg0, arg1, arg2) {
            const ret = arg0.getContext(getStringFromWasm0(arg1, arg2));
            return isLikeNone(ret) ? 0 : addToExternrefTable0(ret);
        }, arguments); },
        __wbg_getCurrentTexture_9f3b84d0eaa6cd95: function() { return handleError(function (arg0) {
            const ret = arg0.getCurrentTexture();
            return ret;
        }, arguments); },
        __wbg_getElementById_1637d6969b003cda: function(arg0, arg1, arg2) {
            const ret = arg0.getElementById(getStringFromWasm0(arg1, arg2));
            return isLikeNone(ret) ? 0 : addToExternrefTable0(ret);
        },
        __wbg_getMappedRange_fb54c6327b2d8d20: function() { return handleError(function (arg0, arg1, arg2) {
            const ret = arg0.getMappedRange(arg1, arg2);
            return ret;
        }, arguments); },
        __wbg_getPreferredCanvasFormat_0ef5034c8902201b: function(arg0) {
            const ret = arg0.getPreferredCanvasFormat();
            return (__wbindgen_enum_GpuTextureFormat.indexOf(ret) + 1 || 102) - 1;
        },
        __wbg_getRandomValues_2b907d0af5db96ee: function() { return handleError(function (arg0, arg1) {
            globalThis.crypto.getRandomValues(getArrayU8FromWasm0(arg0, arg1));
        }, arguments); },
        __wbg_getTime_63fb0332e6c4ec17: function(arg0) {
            const ret = arg0.getTime();
            return ret;
        },
        __wbg_getTimezoneOffset_4baa793e0d3962a8: function(arg0) {
            const ret = arg0.getTimezoneOffset();
            return ret;
        },
        __wbg_get_971a0c45d172643f: function() { return handleError(function (arg0, arg1) {
            const ret = Reflect.get(arg0, arg1);
            return ret;
        }, arguments); },
        __wbg_get_c0c8f8d7da0c03dd: function(arg0, arg1) {
            const ret = arg0[arg1 >>> 0];
            return ret;
        },
        __wbg_get_d173c0308df22d37: function() { return handleError(function (arg0, arg1) {
            const ret = Reflect.get(arg0, arg1);
            return ret;
        }, arguments); },
        __wbg_get_d35faa48a8d3a372: function(arg0, arg1, arg2) {
            const ret = arg0.get(getStringFromWasm0(arg1, arg2));
            return ret;
        },
        __wbg_get_unchecked_e20b893aeafc3fca: function(arg0, arg1) {
            const ret = arg0[arg1 >>> 0];
            return ret;
        },
        __wbg_get_with_ref_key_6412cf3094599694: function(arg0, arg1) {
            const ret = arg0[arg1];
            return ret;
        },
        __wbg_gpu_afdd4387c7afe5f9: function(arg0) {
            const ret = arg0.gpu;
            return ret;
        },
        __wbg_has_eafa12e457ea88fb: function(arg0, arg1, arg2) {
            const ret = arg0.has(getStringFromWasm0(arg1, arg2));
            return ret;
        },
        __wbg_height_e56f6fb197710e09: function(arg0) {
            const ret = arg0.height;
            return ret;
        },
        __wbg_height_e6a5d9a72f05fc93: function(arg0) {
            const ret = arg0.height;
            return ret;
        },
        __wbg_height_f2659a9165347939: function(arg0) {
            const ret = arg0.height;
            return ret;
        },
        __wbg_info_971d8b9db3dae69f: function(arg0) {
            const ret = arg0.info;
            return ret;
        },
        __wbg_instanceof_ArrayBuffer_993d02d2d254cad1: function(arg0) {
            let result;
            try {
                result = arg0 instanceof ArrayBuffer;
            } catch (_) {
                result = false;
            }
            const ret = result;
            return ret;
        },
        __wbg_instanceof_Array_20c759966d2a22c8: function(arg0) {
            let result;
            try {
                result = arg0 instanceof Array;
            } catch (_) {
                result = false;
            }
            const ret = result;
            return ret;
        },
        __wbg_instanceof_Blob_1d876a01ae2b8e98: function(arg0) {
            let result;
            try {
                result = arg0 instanceof Blob;
            } catch (_) {
                result = false;
            }
            const ret = result;
            return ret;
        },
        __wbg_instanceof_DedicatedWorkerGlobalScope_bd193eb4ec0d4971: function(arg0) {
            let result;
            try {
                result = arg0 instanceof DedicatedWorkerGlobalScope;
            } catch (_) {
                result = false;
            }
            const ret = result;
            return ret;
        },
        __wbg_instanceof_Float32Array_d1723b46884013f0: function(arg0) {
            let result;
            try {
                result = arg0 instanceof Float32Array;
            } catch (_) {
                result = false;
            }
            const ret = result;
            return ret;
        },
        __wbg_instanceof_GpuOutOfMemoryError_5c3b8a2499f59adb: function(arg0) {
            let result;
            try {
                result = arg0 instanceof GPUOutOfMemoryError;
            } catch (_) {
                result = false;
            }
            const ret = result;
            return ret;
        },
        __wbg_instanceof_GpuValidationError_7659e07b12d4e184: function(arg0) {
            let result;
            try {
                result = arg0 instanceof GPUValidationError;
            } catch (_) {
                result = false;
            }
            const ret = result;
            return ret;
        },
        __wbg_instanceof_HtmlCanvasElement_327e7f7530c72bbd: function(arg0) {
            let result;
            try {
                result = arg0 instanceof HTMLCanvasElement;
            } catch (_) {
                result = false;
            }
            const ret = result;
            return ret;
        },
        __wbg_instanceof_ImageBitmap_838f921fa5983785: function(arg0) {
            let result;
            try {
                result = arg0 instanceof ImageBitmap;
            } catch (_) {
                result = false;
            }
            const ret = result;
            return ret;
        },
        __wbg_instanceof_Map_9a4d6ead180ae3a9: function(arg0) {
            let result;
            try {
                result = arg0 instanceof Map;
            } catch (_) {
                result = false;
            }
            const ret = result;
            return ret;
        },
        __wbg_instanceof_Promise_e6e764b945c3128a: function(arg0) {
            let result;
            try {
                result = arg0 instanceof Promise;
            } catch (_) {
                result = false;
            }
            const ret = result;
            return ret;
        },
        __wbg_instanceof_Response_8f49efbd4bfd76d6: function(arg0) {
            let result;
            try {
                result = arg0 instanceof Response;
            } catch (_) {
                result = false;
            }
            const ret = result;
            return ret;
        },
        __wbg_instanceof_SharedArrayBuffer_c734e76df6d827cb: function(arg0) {
            let result;
            try {
                result = arg0 instanceof SharedArrayBuffer;
            } catch (_) {
                result = false;
            }
            const ret = result;
            return ret;
        },
        __wbg_instanceof_Uint16Array_4b815bd673d5d173: function(arg0) {
            let result;
            try {
                result = arg0 instanceof Uint16Array;
            } catch (_) {
                result = false;
            }
            const ret = result;
            return ret;
        },
        __wbg_instanceof_Uint32Array_e3ae0d3db35a60ab: function(arg0) {
            let result;
            try {
                result = arg0 instanceof Uint32Array;
            } catch (_) {
                result = false;
            }
            const ret = result;
            return ret;
        },
        __wbg_instanceof_Uint8Array_f935dbb0aa7cdeed: function(arg0) {
            let result;
            try {
                result = arg0 instanceof Uint8Array;
            } catch (_) {
                result = false;
            }
            const ret = result;
            return ret;
        },
        __wbg_instanceof_Window_5625ff9937037a38: function(arg0) {
            let result;
            try {
                result = arg0 instanceof Window;
            } catch (_) {
                result = false;
            }
            const ret = result;
            return ret;
        },
        __wbg_instanceof_WorkerGlobalScope_8c58a6d74926b578: function(arg0) {
            let result;
            try {
                result = arg0 instanceof WorkerGlobalScope;
            } catch (_) {
                result = false;
            }
            const ret = result;
            return ret;
        },
        __wbg_isArray_6339f732981044bf: function(arg0) {
            const ret = Array.isArray(arg0);
            return ret;
        },
        __wbg_isFallbackAdapter_4c8cc3b18677460a: function(arg0) {
            const ret = arg0.isFallbackAdapter;
            return ret;
        },
        __wbg_isSafeInteger_f3d6cd19ccfe4512: function(arg0) {
            const ret = Number.isSafeInteger(arg0);
            return ret;
        },
        __wbg_is_86be747e88e872fb: function(arg0, arg1) {
            const ret = Object.is(arg0, arg1);
            return ret;
        },
        __wbg_iterator_5cebbb86e33c6dd6: function() {
            const ret = Symbol.iterator;
            return ret;
        },
        __wbg_label_7add8cb37a6ef98f: function(arg0, arg1) {
            const ret = arg1.label;
            const ptr1 = passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
            const len1 = WASM_VECTOR_LEN;
            getDataViewMemory0().setInt32(arg0 + 4 * 1, len1, true);
            getDataViewMemory0().setInt32(arg0 + 4 * 0, ptr1, true);
        },
        __wbg_length_1009454859bb3e03: function(arg0) {
            const ret = arg0.length;
            return ret;
        },
        __wbg_length_36bd29c6848c2144: function(arg0) {
            const ret = arg0.length;
            return ret;
        },
        __wbg_length_7528cf2a241bef97: function(arg0) {
            const ret = arg0.length;
            return ret;
        },
        __wbg_length_c812b8efd064d998: function(arg0) {
            const ret = arg0.length;
            return ret;
        },
        __wbg_length_ecfa2c63d3d0d82c: function(arg0) {
            const ret = arg0.length;
            return ret;
        },
        __wbg_limits_06bcb36c8409843b: function(arg0) {
            const ret = arg0.limits;
            return ret;
        },
        __wbg_limits_601ad2e086ef8141: function(arg0) {
            const ret = arg0.limits;
            return ret;
        },
        __wbg_location_5d269cf0aa99107a: function(arg0) {
            const ret = arg0.location;
            return ret;
        },
        __wbg_location_88348c4ec1dc8ac8: function(arg0) {
            const ret = arg0.location;
            return ret;
        },
        __wbg_log_e6372b4fbfc9f81e: function(arg0) {
            console.log(arg0);
        },
        __wbg_mapAsync_b0597127f5037286: function(arg0, arg1, arg2, arg3) {
            const ret = arg0.mapAsync(arg1 >>> 0, arg2, arg3);
            return ret;
        },
        __wbg_mark_744894dd0e87fa1b: function() { return handleError(function (arg0, arg1, arg2) {
            arg0.mark(getStringFromWasm0(arg1, arg2));
        }, arguments); },
        __wbg_maxBindGroupsPlusVertexBuffers_52369f089736ef9d: function(arg0) {
            const ret = arg0.maxBindGroupsPlusVertexBuffers;
            return ret;
        },
        __wbg_maxBindGroups_4e424afe6ce86ca2: function(arg0) {
            const ret = arg0.maxBindGroups;
            return ret;
        },
        __wbg_maxBindingsPerBindGroup_7d035da36821c44f: function(arg0) {
            const ret = arg0.maxBindingsPerBindGroup;
            return ret;
        },
        __wbg_maxBufferSize_423f4a084e32a195: function(arg0) {
            const ret = arg0.maxBufferSize;
            return ret;
        },
        __wbg_maxColorAttachmentBytesPerSample_c4cd9126f6d287c6: function(arg0) {
            const ret = arg0.maxColorAttachmentBytesPerSample;
            return ret;
        },
        __wbg_maxColorAttachments_d924670762b9e250: function(arg0) {
            const ret = arg0.maxColorAttachments;
            return ret;
        },
        __wbg_maxComputeInvocationsPerWorkgroup_707a3868f7cebb59: function(arg0) {
            const ret = arg0.maxComputeInvocationsPerWorkgroup;
            return ret;
        },
        __wbg_maxComputeWorkgroupSizeX_0a4d99463cbd6e5e: function(arg0) {
            const ret = arg0.maxComputeWorkgroupSizeX;
            return ret;
        },
        __wbg_maxComputeWorkgroupSizeY_85123ea0587f7558: function(arg0) {
            const ret = arg0.maxComputeWorkgroupSizeY;
            return ret;
        },
        __wbg_maxComputeWorkgroupSizeZ_a3186b4c5267d44f: function(arg0) {
            const ret = arg0.maxComputeWorkgroupSizeZ;
            return ret;
        },
        __wbg_maxComputeWorkgroupStorageSize_57b297355cfb6204: function(arg0) {
            const ret = arg0.maxComputeWorkgroupStorageSize;
            return ret;
        },
        __wbg_maxComputeWorkgroupsPerDimension_4158f95e673d54c4: function(arg0) {
            const ret = arg0.maxComputeWorkgroupsPerDimension;
            return ret;
        },
        __wbg_maxDynamicStorageBuffersPerPipelineLayout_226b0b70910aa16c: function(arg0) {
            const ret = arg0.maxDynamicStorageBuffersPerPipelineLayout;
            return ret;
        },
        __wbg_maxDynamicUniformBuffersPerPipelineLayout_0e835fda711fc7e6: function(arg0) {
            const ret = arg0.maxDynamicUniformBuffersPerPipelineLayout;
            return ret;
        },
        __wbg_maxInterStageShaderVariables_8c4a1d727e2aa35a: function(arg0) {
            const ret = arg0.maxInterStageShaderVariables;
            return ret;
        },
        __wbg_maxSampledTexturesPerShaderStage_6675f5e91d9a728a: function(arg0) {
            const ret = arg0.maxSampledTexturesPerShaderStage;
            return ret;
        },
        __wbg_maxSamplersPerShaderStage_1910fa38a6ed1e1f: function(arg0) {
            const ret = arg0.maxSamplersPerShaderStage;
            return ret;
        },
        __wbg_maxStorageBufferBindingSize_2e244bded070b18d: function(arg0) {
            const ret = arg0.maxStorageBufferBindingSize;
            return ret;
        },
        __wbg_maxStorageBuffersPerShaderStage_a285f3ebca51ca0d: function(arg0) {
            const ret = arg0.maxStorageBuffersPerShaderStage;
            return ret;
        },
        __wbg_maxStorageTexturesPerShaderStage_7aa946f0fc322a2b: function(arg0) {
            const ret = arg0.maxStorageTexturesPerShaderStage;
            return ret;
        },
        __wbg_maxTextureArrayLayers_0e699147ad00502d: function(arg0) {
            const ret = arg0.maxTextureArrayLayers;
            return ret;
        },
        __wbg_maxTextureDimension1D_aabf6add54decfe2: function(arg0) {
            const ret = arg0.maxTextureDimension1D;
            return ret;
        },
        __wbg_maxTextureDimension2D_dd598b27e9c0c1c4: function(arg0) {
            const ret = arg0.maxTextureDimension2D;
            return ret;
        },
        __wbg_maxTextureDimension3D_f944266c65dfd1a9: function(arg0) {
            const ret = arg0.maxTextureDimension3D;
            return ret;
        },
        __wbg_maxUniformBufferBindingSize_59fa6be7cfbeeb53: function(arg0) {
            const ret = arg0.maxUniformBufferBindingSize;
            return ret;
        },
        __wbg_maxUniformBuffersPerShaderStage_bee5f00a4d706c7f: function(arg0) {
            const ret = arg0.maxUniformBuffersPerShaderStage;
            return ret;
        },
        __wbg_maxVertexAttributes_5cf6392c4e9033fe: function(arg0) {
            const ret = arg0.maxVertexAttributes;
            return ret;
        },
        __wbg_maxVertexBufferArrayStride_548baa887375d865: function(arg0) {
            const ret = arg0.maxVertexBufferArrayStride;
            return ret;
        },
        __wbg_maxVertexBuffers_75d881156591f5da: function(arg0) {
            const ret = arg0.maxVertexBuffers;
            return ret;
        },
        __wbg_message_2aad50368e15e8f1: function(arg0, arg1) {
            const ret = arg1.message;
            const ptr1 = passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
            const len1 = WASM_VECTOR_LEN;
            getDataViewMemory0().setInt32(arg0 + 4 * 1, len1, true);
            getDataViewMemory0().setInt32(arg0 + 4 * 0, ptr1, true);
        },
        __wbg_minStorageBufferOffsetAlignment_5ba9b77792bdadb3: function(arg0) {
            const ret = arg0.minStorageBufferOffsetAlignment;
            return ret;
        },
        __wbg_minUniformBufferOffsetAlignment_ab7d52a5293b22bd: function(arg0) {
            const ret = arg0.minUniformBufferOffsetAlignment;
            return ret;
        },
        __wbg_name_2bda40c858b9748f: function(arg0, arg1) {
            const ret = arg1.name;
            const ptr1 = passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
            const len1 = WASM_VECTOR_LEN;
            getDataViewMemory0().setInt32(arg0 + 4 * 1, len1, true);
            getDataViewMemory0().setInt32(arg0 + 4 * 0, ptr1, true);
        },
        __wbg_navigator_6cfdd5fa246d910f: function(arg0) {
            const ret = arg0.navigator;
            return ret;
        },
        __wbg_navigator_e5c345298a9609cd: function(arg0) {
            const ret = arg0.navigator;
            return ret;
        },
        __wbg_new_0_f117d868b403dc07: function() {
            const ret = new Date();
            return ret;
        },
        __wbg_new_116be93542d39019: function() {
            const ret = new Array();
            return ret;
        },
        __wbg_new_227d7c05414eb861: function() {
            const ret = new Error();
            return ret;
        },
        __wbg_new_358857d90afd5a2d: function(arg0, arg1) {
            const ret = new Error(getStringFromWasm0(arg0, arg1));
            return ret;
        },
        __wbg_new_418fb92a013d5930: function(arg0, arg1) {
            try {
                var state0 = {a: arg0, b: arg1};
                var cb0 = (arg0, arg1) => {
                    const a = state0.a;
                    state0.a = 0;
                    try {
                        return wasm_bindgen_b3950d515661b7ef___convert__closures_____invoke___js_sys_52c997262b311612___Function_fn_wasm_bindgen_b3950d515661b7ef___JsValue_____wasm_bindgen_b3950d515661b7ef___sys__Undefined___js_sys_52c997262b311612___Function_fn_wasm_bindgen_b3950d515661b7ef___JsValue_____wasm_bindgen_b3950d515661b7ef___sys__Undefined_______true_(a, state0.b, arg0, arg1);
                    } finally {
                        state0.a = a;
                    }
                };
                const ret = new Promise(cb0);
                return ret;
            } finally {
                state0.a = 0;
            }
        },
        __wbg_new_652118cdee90118f: function() { return handleError(function (arg0, arg1) {
            const ret = new OffscreenCanvas(arg0 >>> 0, arg1 >>> 0);
            return ret;
        }, arguments); },
        __wbg_new_77cc4f4f472aeb81: function(arg0) {
            const ret = new Uint8Array(arg0);
            return ret;
        },
        __wbg_new_ebe3e0f6837f0879: function() {
            const ret = new Object();
            return ret;
        },
        __wbg_new_f545e2e1ea609f29: function(arg0) {
            const ret = new Int32Array(arg0);
            return ret;
        },
        __wbg_new_f5712de39c931ddf: function() { return handleError(function () {
            const ret = new AbortController();
            return ret;
        }, arguments); },
        __wbg_new_f9d6489212f3b2b3: function(arg0) {
            const ret = new Date(arg0);
            return ret;
        },
        __wbg_new_from_slice_3eea173078478cfe: function(arg0, arg1) {
            const ret = new Uint8Array(getArrayU8FromWasm0(arg0, arg1));
            return ret;
        },
        __wbg_new_from_slice_8aed4f0384605526: function(arg0, arg1) {
            const ret = new Uint32Array(getArrayU32FromWasm0(arg0, arg1));
            return ret;
        },
        __wbg_new_typed_ad9b105a7be50737: function() {
            const ret = new Object();
            return ret;
        },
        __wbg_new_typed_cceaf62d8d95e9f2: function(arg0, arg1) {
            try {
                var state0 = {a: arg0, b: arg1};
                var cb0 = (arg0, arg1) => {
                    const a = state0.a;
                    state0.a = 0;
                    try {
                        return wasm_bindgen_b3950d515661b7ef___convert__closures_____invoke___js_sys_52c997262b311612___Function_fn_wasm_bindgen_b3950d515661b7ef___JsValue_____wasm_bindgen_b3950d515661b7ef___sys__Undefined___js_sys_52c997262b311612___Function_fn_wasm_bindgen_b3950d515661b7ef___JsValue_____wasm_bindgen_b3950d515661b7ef___sys__Undefined_______true_(a, state0.b, arg0, arg1);
                    } finally {
                        state0.a = a;
                    }
                };
                const ret = new Promise(cb0);
                return ret;
            } finally {
                state0.a = 0;
            }
        },
        __wbg_new_with_byte_offset_and_length_ff6e927f8d72f0c3: function(arg0, arg1, arg2) {
            const ret = new Uint8Array(arg0, arg1 >>> 0, arg2 >>> 0);
            return ret;
        },
        __wbg_new_with_year_month_day_hr_min_sec_9659abbdf307aa7c: function(arg0, arg1, arg2, arg3, arg4, arg5) {
            const ret = new Date(arg0 >>> 0, arg1, arg2, arg3, arg4, arg5);
            return ret;
        },
        __wbg_next_42cf16ee0dafc9e2: function() { return handleError(function (arg0) {
            const ret = arg0.next();
            return ret;
        }, arguments); },
        __wbg_next_8f26b64fa5e9f64b: function(arg0) {
            const ret = arg0.next;
            return ret;
        },
        __wbg_notify_73233d2e902dc16b: function() { return handleError(function (arg0, arg1, arg2) {
            const ret = Atomics.notify(arg0, arg1 >>> 0, arg2 >>> 0);
            return ret;
        }, arguments); },
        __wbg_now_2283802bfbda617e: function(arg0) {
            const ret = arg0.now();
            return ret;
        },
        __wbg_now_8b265300afd5f2b9: function() {
            const ret = Date.now();
            return ret;
        },
        __wbg_now_e7c6795a7f81e10f: function(arg0) {
            const ret = arg0.now();
            return ret;
        },
        __wbg_ok_917dc17857b16c56: function(arg0) {
            const ret = arg0.ok;
            return ret;
        },
        __wbg_onSubmittedWorkDone_1190213cee1ecf7e: function(arg0) {
            const ret = arg0.onSubmittedWorkDone();
            return ret;
        },
        __wbg_origin_1662a150882110c7: function(arg0, arg1) {
            const ret = arg1.origin;
            const ptr1 = passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
            const len1 = WASM_VECTOR_LEN;
            getDataViewMemory0().setInt32(arg0 + 4 * 1, len1, true);
            getDataViewMemory0().setInt32(arg0 + 4 * 0, ptr1, true);
        },
        __wbg_origin_e8a7e1c5499701de: function() { return handleError(function (arg0, arg1) {
            const ret = arg1.origin;
            const ptr1 = passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
            const len1 = WASM_VECTOR_LEN;
            getDataViewMemory0().setInt32(arg0 + 4 * 1, len1, true);
            getDataViewMemory0().setInt32(arg0 + 4 * 0, ptr1, true);
        }, arguments); },
        __wbg_pathname_79af738d4ef44626: function(arg0, arg1) {
            const ret = arg1.pathname;
            const ptr1 = passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
            const len1 = WASM_VECTOR_LEN;
            getDataViewMemory0().setInt32(arg0 + 4 * 1, len1, true);
            getDataViewMemory0().setInt32(arg0 + 4 * 0, ptr1, true);
        },
        __wbg_pathname_bc564f9e4fcdd029: function() { return handleError(function (arg0, arg1) {
            const ret = arg1.pathname;
            const ptr1 = passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
            const len1 = WASM_VECTOR_LEN;
            getDataViewMemory0().setInt32(arg0 + 4 * 1, len1, true);
            getDataViewMemory0().setInt32(arg0 + 4 * 0, ptr1, true);
        }, arguments); },
        __wbg_performance_382e553574a6fc24: function(arg0) {
            const ret = arg0.performance;
            return isLikeNone(ret) ? 0 : addToExternrefTable0(ret);
        },
        __wbg_performance_3fcf6e32a7e1ed0a: function(arg0) {
            const ret = arg0.performance;
            return ret;
        },
        __wbg_performance_821a3767f0dce300: function(arg0) {
            const ret = arg0.performance;
            return isLikeNone(ret) ? 0 : addToExternrefTable0(ret);
        },
        __wbg_popDebugGroup_86955dfde95ed4cb: function(arg0) {
            arg0.popDebugGroup();
        },
        __wbg_popErrorScope_182b8e03671d81ef: function(arg0) {
            const ret = arg0.popErrorScope();
            return ret;
        },
        __wbg_postMessage_6dcc1574fef77104: function() { return handleError(function (arg0, arg1) {
            arg0.postMessage(arg1);
        }, arguments); },
        __wbg_postMessage_e86c0107e98b92c3: function() { return handleError(function (arg0, arg1, arg2) {
            arg0.postMessage(arg1, arg2);
        }, arguments); },
        __wbg_prepare_skb_0de5845d4b257219: function(arg0, arg1, arg2, arg3) {
            const ret = self.prepare_skb(getStringFromWasm0(arg0, arg1), getArrayU8FromWasm0(arg2, arg3));
            return ret;
        },
        __wbg_prototypesetcall_10722f4fde830f07: function(arg0, arg1, arg2) {
            Float32Array.prototype.set.call(getArrayF32FromWasm0(arg0, arg1), arg2);
        },
        __wbg_prototypesetcall_8cddc0588056dcdb: function(arg0, arg1, arg2) {
            Uint32Array.prototype.set.call(getArrayU32FromWasm0(arg0, arg1), arg2);
        },
        __wbg_prototypesetcall_de8e0d9553586985: function(arg0, arg1, arg2) {
            Uint8Array.prototype.set.call(getArrayU8FromWasm0(arg0, arg1), arg2);
        },
        __wbg_pushDebugGroup_f37de4523d52d467: function(arg0, arg1, arg2) {
            arg0.pushDebugGroup(getStringFromWasm0(arg1, arg2));
        },
        __wbg_pushErrorScope_fa7df784c43bdb51: function(arg0, arg1) {
            arg0.pushErrorScope(__wbindgen_enum_GpuErrorFilter[arg1]);
        },
        __wbg_push_adb0107829f02d75: function(arg0, arg1) {
            const ret = arg0.push(arg1);
            return ret;
        },
        __wbg_queueMicrotask_6913321b637d352e: function(arg0) {
            queueMicrotask(arg0);
        },
        __wbg_queueMicrotask_ac694eae12e92dfb: function(arg0) {
            queueMicrotask(arg0);
        },
        __wbg_queueMicrotask_be5fe34a8f4cad4d: function(arg0) {
            const ret = arg0.queueMicrotask;
            return ret;
        },
        __wbg_queue_7b62c28143d44293: function(arg0) {
            const ret = arg0.queue;
            return ret;
        },
        __wbg_requestAdapter_a539af006419f2e9: function(arg0, arg1) {
            const ret = arg0.requestAdapter(arg1);
            return ret;
        },
        __wbg_requestDevice_5cb8a582e55d08cb: function(arg0, arg1) {
            const ret = arg0.requestDevice(arg1);
            return ret;
        },
        __wbg_resolve_020f95d838c6ef25: function(arg0) {
            const ret = Promise.resolve(arg0);
            return ret;
        },
        __wbg_search_1e0549f0bb9ed481: function(arg0, arg1) {
            const ret = arg1.search;
            const ptr1 = passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
            const len1 = WASM_VECTOR_LEN;
            getDataViewMemory0().setInt32(arg0 + 4 * 1, len1, true);
            getDataViewMemory0().setInt32(arg0 + 4 * 0, ptr1, true);
        },
        __wbg_search_e85b52d847b83659: function() { return handleError(function (arg0, arg1) {
            const ret = arg1.search;
            const ptr1 = passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
            const len1 = WASM_VECTOR_LEN;
            getDataViewMemory0().setInt32(arg0 + 4 * 1, len1, true);
            getDataViewMemory0().setInt32(arg0 + 4 * 0, ptr1, true);
        }, arguments); },
        __wbg_setAttribute_507f8367905a9c03: function() { return handleError(function (arg0, arg1, arg2, arg3, arg4) {
            arg0.setAttribute(getStringFromWasm0(arg1, arg2), getStringFromWasm0(arg3, arg4));
        }, arguments); },
        __wbg_setBindGroup_0b7c2a055ef1f314: function() { return handleError(function (arg0, arg1, arg2, arg3, arg4, arg5, arg6) {
            arg0.setBindGroup(arg1 >>> 0, arg2, getArrayU32FromWasm0(arg3, arg4), arg5, arg6 >>> 0);
        }, arguments); },
        __wbg_setBindGroup_11bdbb60cc8b54b9: function() { return handleError(function (arg0, arg1, arg2, arg3, arg4, arg5, arg6) {
            arg0.setBindGroup(arg1 >>> 0, arg2, getArrayU32FromWasm0(arg3, arg4), arg5, arg6 >>> 0);
        }, arguments); },
        __wbg_setBindGroup_418c3e0eb6943ce0: function(arg0, arg1, arg2) {
            arg0.setBindGroup(arg1 >>> 0, arg2);
        },
        __wbg_setBindGroup_c83391351ce68826: function(arg0, arg1, arg2) {
            arg0.setBindGroup(arg1 >>> 0, arg2);
        },
        __wbg_setIndexBuffer_241097e303986c14: function(arg0, arg1, arg2, arg3, arg4) {
            arg0.setIndexBuffer(arg1, __wbindgen_enum_GpuIndexFormat[arg2], arg3, arg4);
        },
        __wbg_setPipeline_5146f7b8d2b4af5c: function(arg0, arg1) {
            arg0.setPipeline(arg1);
        },
        __wbg_setPipeline_b6f981027e02cd16: function(arg0, arg1) {
            arg0.setPipeline(arg1);
        },
        __wbg_setScissorRect_889235eeb784732b: function(arg0, arg1, arg2, arg3, arg4) {
            arg0.setScissorRect(arg1 >>> 0, arg2 >>> 0, arg3 >>> 0, arg4 >>> 0);
        },
        __wbg_setTimeout_8be4960d8ad2bb76: function() { return handleError(function (arg0, arg1, arg2) {
            const ret = arg0.setTimeout(arg1, arg2);
            return ret;
        }, arguments); },
        __wbg_setVertexBuffer_6db3b60e99280744: function(arg0, arg1, arg2, arg3) {
            arg0.setVertexBuffer(arg1 >>> 0, arg2, arg3);
        },
        __wbg_setVertexBuffer_cbf4ca1627c02f4c: function(arg0, arg1, arg2, arg3, arg4) {
            arg0.setVertexBuffer(arg1 >>> 0, arg2, arg3, arg4);
        },
        __wbg_setViewport_c0be08dcc8965ccf: function(arg0, arg1, arg2, arg3, arg4, arg5, arg6) {
            arg0.setViewport(arg1, arg2, arg3, arg4, arg5, arg6);
        },
        __wbg_set_6be42768c690e380: function(arg0, arg1, arg2) {
            arg0[arg1] = arg2;
        },
        __wbg_set_8155bb79a948541b: function() { return handleError(function (arg0, arg1, arg2) {
            const ret = Reflect.set(arg0, arg1, arg2);
            return ret;
        }, arguments); },
        __wbg_set_862c439a342a8818: function(arg0, arg1, arg2) {
            arg0.set(arg1, arg2 >>> 0);
        },
        __wbg_set_9e08f8fa085c9c19: function(arg0, arg1, arg2) {
            arg0.set(getArrayI32FromWasm0(arg1, arg2));
        },
        __wbg_set_a80955eb93b145c6: function(arg0, arg1, arg2) {
            arg0[arg1 >>> 0] = arg2;
        },
        __wbg_set_a_82818effc94f6256: function(arg0, arg1) {
            arg0.a = arg1;
        },
        __wbg_set_access_a099cfbbeec9b96f: function(arg0, arg1) {
            arg0.access = __wbindgen_enum_GpuStorageTextureAccess[arg1];
        },
        __wbg_set_address_mode_u_a68737cf5d288f95: function(arg0, arg1) {
            arg0.addressModeU = __wbindgen_enum_GpuAddressMode[arg1];
        },
        __wbg_set_address_mode_v_b1c3c45933f540d1: function(arg0, arg1) {
            arg0.addressModeV = __wbindgen_enum_GpuAddressMode[arg1];
        },
        __wbg_set_address_mode_w_889c31cf7022c764: function(arg0, arg1) {
            arg0.addressModeW = __wbindgen_enum_GpuAddressMode[arg1];
        },
        __wbg_set_alpha_106f21a936a85eba: function(arg0, arg1) {
            arg0.alpha = arg1;
        },
        __wbg_set_alpha_mode_5544568dbac50280: function(arg0, arg1) {
            arg0.alphaMode = __wbindgen_enum_GpuCanvasAlphaMode[arg1];
        },
        __wbg_set_alpha_to_coverage_enabled_3372ce329447b8f1: function(arg0, arg1) {
            arg0.alphaToCoverageEnabled = arg1 !== 0;
        },
        __wbg_set_array_layer_count_22afa0a979e4ad55: function(arg0, arg1) {
            arg0.arrayLayerCount = arg1 >>> 0;
        },
        __wbg_set_array_stride_f64_6816040e5e7598c3: function(arg0, arg1) {
            arg0.arrayStride = arg1;
        },
        __wbg_set_aspect_9de5253d4c460895: function(arg0, arg1) {
            arg0.aspect = __wbindgen_enum_GpuTextureAspect[arg1];
        },
        __wbg_set_aspect_a48d046965270281: function(arg0, arg1) {
            arg0.aspect = __wbindgen_enum_GpuTextureAspect[arg1];
        },
        __wbg_set_aspect_b1a9909bf315433f: function(arg0, arg1) {
            arg0.aspect = __wbindgen_enum_GpuTextureAspect[arg1];
        },
        __wbg_set_attributes_9e38cb1dde387a5b: function(arg0, arg1, arg2) {
            arg0.attributes = getArrayJsValueViewFromWasm0(arg1, arg2);
        },
        __wbg_set_b_a3297ee7e7cac3a8: function(arg0, arg1) {
            arg0.b = arg1;
        },
        __wbg_set_base_array_layer_2435ba92c80346ae: function(arg0, arg1) {
            arg0.baseArrayLayer = arg1 >>> 0;
        },
        __wbg_set_base_mip_level_8b6093e875e7c65d: function(arg0, arg1) {
            arg0.baseMipLevel = arg1 >>> 0;
        },
        __wbg_set_beginning_of_pass_write_index_e552c5e8b8bbf52f: function(arg0, arg1) {
            arg0.beginningOfPassWriteIndex = arg1 >>> 0;
        },
        __wbg_set_beginning_of_pass_write_index_fa9ae10d5d2804ce: function(arg0, arg1) {
            arg0.beginningOfPassWriteIndex = arg1 >>> 0;
        },
        __wbg_set_bind_group_layouts_458c44ba55100b82: function(arg0, arg1, arg2) {
            arg0.bindGroupLayouts = getArrayJsValueViewFromWasm0(arg1, arg2);
        },
        __wbg_set_binding_81b3fac7f7acaf8d: function(arg0, arg1) {
            arg0.binding = arg1 >>> 0;
        },
        __wbg_set_binding_b6cee57f35ac5190: function(arg0, arg1) {
            arg0.binding = arg1 >>> 0;
        },
        __wbg_set_blend_1a801617945f7945: function(arg0, arg1) {
            arg0.blend = arg1;
        },
        __wbg_set_buffer_1548ae88a9188037: function(arg0, arg1) {
            arg0.buffer = arg1;
        },
        __wbg_set_buffer_8d0ac64ad20dfc84: function(arg0, arg1) {
            arg0.buffer = arg1;
        },
        __wbg_set_buffer_910a40a90f97cfca: function(arg0, arg1) {
            arg0.buffer = arg1;
        },
        __wbg_set_buffers_5d0e0c50791f710e: function(arg0, arg1, arg2) {
            arg0.buffers = getArrayJsValueViewFromWasm0(arg1, arg2);
        },
        __wbg_set_bytes_per_row_1e824a5502b54b3d: function(arg0, arg1) {
            arg0.bytesPerRow = arg1 >>> 0;
        },
        __wbg_set_bytes_per_row_c28583f0063160f1: function(arg0, arg1) {
            arg0.bytesPerRow = arg1 >>> 0;
        },
        __wbg_set_clear_value_gpu_color_dict_a9f763e8372ac1de: function(arg0, arg1) {
            arg0.clearValue = arg1;
        },
        __wbg_set_code_5d5b0b9e2fd0dca7: function(arg0, arg1, arg2) {
            arg0.code = getStringFromWasm0(arg1, arg2);
        },
        __wbg_set_color_8ecace4011f47d2e: function(arg0, arg1) {
            arg0.color = arg1;
        },
        __wbg_set_color_attachments_622fe2d5997fda7a: function(arg0, arg1, arg2) {
            arg0.colorAttachments = getArrayJsValueViewFromWasm0(arg1, arg2);
        },
        __wbg_set_compare_080c9e492ff36990: function(arg0, arg1) {
            arg0.compare = __wbindgen_enum_GpuCompareFunction[arg1];
        },
        __wbg_set_compare_817cf3695599eaa6: function(arg0, arg1) {
            arg0.compare = __wbindgen_enum_GpuCompareFunction[arg1];
        },
        __wbg_set_compute_bc754d9e37f6e4c9: function(arg0, arg1) {
            arg0.compute = arg1;
        },
        __wbg_set_count_8ff0c9474e39a849: function(arg0, arg1) {
            arg0.count = arg1 >>> 0;
        },
        __wbg_set_cull_mode_85d2b4ab0ce3a564: function(arg0, arg1) {
            arg0.cullMode = __wbindgen_enum_GpuCullMode[arg1];
        },
        __wbg_set_depth_bias_95abf479cae3f3cd: function(arg0, arg1) {
            arg0.depthBias = arg1;
        },
        __wbg_set_depth_bias_clamp_ba3d0b8348151350: function(arg0, arg1) {
            arg0.depthBiasClamp = arg1;
        },
        __wbg_set_depth_bias_slope_scale_6b2584d93f5b9cd2: function(arg0, arg1) {
            arg0.depthBiasSlopeScale = arg1;
        },
        __wbg_set_depth_clear_value_e30a4c754c6b3b26: function(arg0, arg1) {
            arg0.depthClearValue = arg1;
        },
        __wbg_set_depth_compare_a90de4e3714397ab: function(arg0, arg1) {
            arg0.depthCompare = __wbindgen_enum_GpuCompareFunction[arg1];
        },
        __wbg_set_depth_fail_op_b5c64541d1b6b482: function(arg0, arg1) {
            arg0.depthFailOp = __wbindgen_enum_GpuStencilOperation[arg1];
        },
        __wbg_set_depth_load_op_932888016d762d3e: function(arg0, arg1) {
            arg0.depthLoadOp = __wbindgen_enum_GpuLoadOp[arg1];
        },
        __wbg_set_depth_or_array_layers_e2f074a0284e4806: function(arg0, arg1) {
            arg0.depthOrArrayLayers = arg1 >>> 0;
        },
        __wbg_set_depth_read_only_be790175a1c2db9a: function(arg0, arg1) {
            arg0.depthReadOnly = arg1 !== 0;
        },
        __wbg_set_depth_stencil_attachment_54a8922f5fbe08bf: function(arg0, arg1) {
            arg0.depthStencilAttachment = arg1;
        },
        __wbg_set_depth_stencil_b7cffc59ad4da529: function(arg0, arg1) {
            arg0.depthStencil = arg1;
        },
        __wbg_set_depth_store_op_9054814f164ab55d: function(arg0, arg1) {
            arg0.depthStoreOp = __wbindgen_enum_GpuStoreOp[arg1];
        },
        __wbg_set_depth_write_enabled_31a821ee1fb3b0b3: function(arg0, arg1) {
            arg0.depthWriteEnabled = arg1 !== 0;
        },
        __wbg_set_device_210484a77b675c9c: function(arg0, arg1) {
            arg0.device = arg1;
        },
        __wbg_set_dimension_3da9d03131a9f446: function(arg0, arg1) {
            arg0.dimension = __wbindgen_enum_GpuTextureDimension[arg1];
        },
        __wbg_set_dimension_56332450afa3e0c0: function(arg0, arg1) {
            arg0.dimension = __wbindgen_enum_GpuTextureViewDimension[arg1];
        },
        __wbg_set_dst_factor_865ba9aaf187890c: function(arg0, arg1) {
            arg0.dstFactor = __wbindgen_enum_GpuBlendFactor[arg1];
        },
        __wbg_set_end_of_pass_write_index_8f164f9e60d4ad16: function(arg0, arg1) {
            arg0.endOfPassWriteIndex = arg1 >>> 0;
        },
        __wbg_set_end_of_pass_write_index_b54a8e3802b9ae0d: function(arg0, arg1) {
            arg0.endOfPassWriteIndex = arg1 >>> 0;
        },
        __wbg_set_entries_6f866302103b81e9: function(arg0, arg1, arg2) {
            arg0.entries = getArrayJsValueViewFromWasm0(arg1, arg2);
        },
        __wbg_set_entries_f26b77ab9548e906: function(arg0, arg1, arg2) {
            arg0.entries = getArrayJsValueViewFromWasm0(arg1, arg2);
        },
        __wbg_set_entry_point_71cef95c137b5774: function(arg0, arg1, arg2) {
            arg0.entryPoint = getStringFromWasm0(arg1, arg2);
        },
        __wbg_set_entry_point_ac8db535971761fe: function(arg0, arg1, arg2) {
            arg0.entryPoint = getStringFromWasm0(arg1, arg2);
        },
        __wbg_set_entry_point_b70f98f5025a114d: function(arg0, arg1, arg2) {
            arg0.entryPoint = getStringFromWasm0(arg1, arg2);
        },
        __wbg_set_external_texture_7f966c604c4f8098: function(arg0, arg1) {
            arg0.externalTexture = arg1;
        },
        __wbg_set_fail_op_d59d0187e4111dfe: function(arg0, arg1) {
            arg0.failOp = __wbindgen_enum_GpuStencilOperation[arg1];
        },
        __wbg_set_flip_y_5a9a7c3fd5a2314e: function(arg0, arg1) {
            arg0.flipY = arg1 !== 0;
        },
        __wbg_set_format_23f7f32549751d43: function(arg0, arg1) {
            arg0.format = __wbindgen_enum_GpuTextureFormat[arg1];
        },
        __wbg_set_format_283dca56552f07a3: function(arg0, arg1) {
            arg0.format = __wbindgen_enum_GpuTextureFormat[arg1];
        },
        __wbg_set_format_5080a858117ad2c1: function(arg0, arg1) {
            arg0.format = __wbindgen_enum_GpuVertexFormat[arg1];
        },
        __wbg_set_format_66735b94bd868ba2: function(arg0, arg1) {
            arg0.format = __wbindgen_enum_GpuTextureFormat[arg1];
        },
        __wbg_set_format_7f2bdbfb101b1ae1: function(arg0, arg1) {
            arg0.format = __wbindgen_enum_GpuTextureFormat[arg1];
        },
        __wbg_set_format_92732ea75d3b79f5: function(arg0, arg1) {
            arg0.format = __wbindgen_enum_GpuTextureFormat[arg1];
        },
        __wbg_set_format_f009e603f7d4c28e: function(arg0, arg1) {
            arg0.format = __wbindgen_enum_GpuTextureFormat[arg1];
        },
        __wbg_set_fragment_d2b0ec97d7cf8d47: function(arg0, arg1) {
            arg0.fragment = arg1;
        },
        __wbg_set_front_face_d3f8a2e07e7b25dd: function(arg0, arg1) {
            arg0.frontFace = __wbindgen_enum_GpuFrontFace[arg1];
        },
        __wbg_set_g_b527ee8a9bed553d: function(arg0, arg1) {
            arg0.g = arg1;
        },
        __wbg_set_has_dynamic_offset_0c72ffa900c5a269: function(arg0, arg1) {
            arg0.hasDynamicOffset = arg1 !== 0;
        },
        __wbg_set_height_ca39bd9597314f83: function(arg0, arg1) {
            arg0.height = arg1 >>> 0;
        },
        __wbg_set_height_d72f2b76484a44de: function(arg0, arg1) {
            arg0.height = arg1 >>> 0;
        },
        __wbg_set_height_f6619158e5735877: function(arg0, arg1) {
            arg0.height = arg1 >>> 0;
        },
        __wbg_set_label_09e2da5f8522dbe8: function(arg0, arg1, arg2) {
            arg0.label = getStringFromWasm0(arg1, arg2);
        },
        __wbg_set_label_17202740051e9722: function(arg0, arg1, arg2) {
            arg0.label = getStringFromWasm0(arg1, arg2);
        },
        __wbg_set_label_17b4858e1eef23dd: function(arg0, arg1, arg2) {
            arg0.label = getStringFromWasm0(arg1, arg2);
        },
        __wbg_set_label_2fefb39c0e0dbbe8: function(arg0, arg1, arg2) {
            arg0.label = getStringFromWasm0(arg1, arg2);
        },
        __wbg_set_label_3cb2322e6f6db14c: function(arg0, arg1, arg2) {
            arg0.label = getStringFromWasm0(arg1, arg2);
        },
        __wbg_set_label_3f2ccaafef5ff7c9: function(arg0, arg1, arg2) {
            arg0.label = getStringFromWasm0(arg1, arg2);
        },
        __wbg_set_label_612add98a4398f92: function(arg0, arg1, arg2) {
            arg0.label = getStringFromWasm0(arg1, arg2);
        },
        __wbg_set_label_70a09ee68d6b1b26: function(arg0, arg1, arg2) {
            arg0.label = getStringFromWasm0(arg1, arg2);
        },
        __wbg_set_label_92cd3811e96b487c: function(arg0, arg1, arg2) {
            arg0.label = getStringFromWasm0(arg1, arg2);
        },
        __wbg_set_label_9c2a186152427ee0: function(arg0, arg1, arg2) {
            arg0.label = getStringFromWasm0(arg1, arg2);
        },
        __wbg_set_label_c3eaf136aa464cba: function(arg0, arg1, arg2) {
            arg0.label = getStringFromWasm0(arg1, arg2);
        },
        __wbg_set_label_c7987704d29f284b: function(arg0, arg1, arg2) {
            arg0.label = getStringFromWasm0(arg1, arg2);
        },
        __wbg_set_label_cfe64bca8945ee30: function(arg0, arg1, arg2) {
            arg0.label = getStringFromWasm0(arg1, arg2);
        },
        __wbg_set_label_e02179cf97e95763: function(arg0, arg1, arg2) {
            arg0.label = getStringFromWasm0(arg1, arg2);
        },
        __wbg_set_label_ee172cd5f6a96961: function(arg0, arg1, arg2) {
            arg0.label = getStringFromWasm0(arg1, arg2);
        },
        __wbg_set_layout_454e3a091b390cd4: function(arg0, arg1) {
            arg0.layout = arg1;
        },
        __wbg_set_layout_4b5d5b12fbb72a76: function(arg0, arg1) {
            arg0.layout = arg1;
        },
        __wbg_set_layout_75dc1ca3f2421cff: function(arg0, arg1) {
            arg0.layout = arg1;
        },
        __wbg_set_layout_gpu_auto_layout_mode_06a2b95af1043098: function(arg0, arg1) {
            arg0.layout = __wbindgen_enum_GpuAutoLayoutMode[arg1];
        },
        __wbg_set_layout_gpu_auto_layout_mode_ee432e515c357fa8: function(arg0, arg1) {
            arg0.layout = __wbindgen_enum_GpuAutoLayoutMode[arg1];
        },
        __wbg_set_load_op_c56b1269acc2d51f: function(arg0, arg1) {
            arg0.loadOp = __wbindgen_enum_GpuLoadOp[arg1];
        },
        __wbg_set_lod_max_clamp_db24179f67f3aa31: function(arg0, arg1) {
            arg0.lodMaxClamp = arg1;
        },
        __wbg_set_lod_min_clamp_2bbce566e9fefa04: function(arg0, arg1) {
            arg0.lodMinClamp = arg1;
        },
        __wbg_set_mag_filter_db8e6b42d4f8846d: function(arg0, arg1) {
            arg0.magFilter = __wbindgen_enum_GpuFilterMode[arg1];
        },
        __wbg_set_mapped_at_creation_3f320fef6761b02c: function(arg0, arg1) {
            arg0.mappedAtCreation = arg1 !== 0;
        },
        __wbg_set_mask_c1079e551ec360dc: function(arg0, arg1) {
            arg0.mask = arg1 >>> 0;
        },
        __wbg_set_max_anisotropy_84749fdcec362dc4: function(arg0, arg1) {
            arg0.maxAnisotropy = arg1;
        },
        __wbg_set_min_binding_size_f64_897e3cd4496ddec9: function(arg0, arg1) {
            arg0.minBindingSize = arg1;
        },
        __wbg_set_min_filter_d435bbfc5a637757: function(arg0, arg1) {
            arg0.minFilter = __wbindgen_enum_GpuFilterMode[arg1];
        },
        __wbg_set_mip_level_03ed7bbd0ded367f: function(arg0, arg1) {
            arg0.mipLevel = arg1 >>> 0;
        },
        __wbg_set_mip_level_count_047936c630acee7b: function(arg0, arg1) {
            arg0.mipLevelCount = arg1 >>> 0;
        },
        __wbg_set_mip_level_count_44bc46a1ae6f6daa: function(arg0, arg1) {
            arg0.mipLevelCount = arg1 >>> 0;
        },
        __wbg_set_mip_level_f3745730372683d5: function(arg0, arg1) {
            arg0.mipLevel = arg1 >>> 0;
        },
        __wbg_set_mipmap_filter_62fb49a84b0747ff: function(arg0, arg1) {
            arg0.mipmapFilter = __wbindgen_enum_GpuMipmapFilterMode[arg1];
        },
        __wbg_set_mode_7edfbc344ef9c650: function(arg0, arg1) {
            arg0.mode = __wbindgen_enum_GpuCanvasToneMappingMode[arg1];
        },
        __wbg_set_module_392eeaa269f203b0: function(arg0, arg1) {
            arg0.module = arg1;
        },
        __wbg_set_module_715d37652c4998ec: function(arg0, arg1) {
            arg0.module = arg1;
        },
        __wbg_set_module_c9946af218d23b53: function(arg0, arg1) {
            arg0.module = arg1;
        },
        __wbg_set_multisample_ff72a7a5456cbeb7: function(arg0, arg1) {
            arg0.multisample = arg1;
        },
        __wbg_set_multisampled_039f032dc4b67367: function(arg0, arg1) {
            arg0.multisampled = arg1 !== 0;
        },
        __wbg_set_offset_f64_127e8a0aa5c5485a: function(arg0, arg1) {
            arg0.offset = arg1;
        },
        __wbg_set_offset_f64_457756429ede426d: function(arg0, arg1) {
            arg0.offset = arg1;
        },
        __wbg_set_offset_f64_a903425d5a8e5815: function(arg0, arg1) {
            arg0.offset = arg1;
        },
        __wbg_set_offset_f64_d1d115dd438165b5: function(arg0, arg1) {
            arg0.offset = arg1;
        },
        __wbg_set_operation_00a77386523b88f9: function(arg0, arg1) {
            arg0.operation = __wbindgen_enum_GpuBlendOperation[arg1];
        },
        __wbg_set_origin_gpu_origin_2d_dict_8156da81552cd590: function(arg0, arg1) {
            arg0.origin = arg1;
        },
        __wbg_set_origin_gpu_origin_3d_dict_0619d4860adb4eb6: function(arg0, arg1) {
            arg0.origin = arg1;
        },
        __wbg_set_origin_gpu_origin_3d_dict_abd0dec737979786: function(arg0, arg1) {
            arg0.origin = arg1;
        },
        __wbg_set_pass_op_3cf10feb3d76ab97: function(arg0, arg1) {
            arg0.passOp = __wbindgen_enum_GpuStencilOperation[arg1];
        },
        __wbg_set_power_preference_b42d00a8facfbade: function(arg0, arg1) {
            arg0.powerPreference = __wbindgen_enum_GpuPowerPreference[arg1];
        },
        __wbg_set_premultiplied_alpha_6d23532454ce9a12: function(arg0, arg1) {
            arg0.premultipliedAlpha = arg1 !== 0;
        },
        __wbg_set_primitive_e796cf76f0ff89f3: function(arg0, arg1) {
            arg0.primitive = arg1;
        },
        __wbg_set_query_set_f030702f1b69199f: function(arg0, arg1) {
            arg0.querySet = arg1;
        },
        __wbg_set_query_set_f9a94586851fdba2: function(arg0, arg1) {
            arg0.querySet = arg1;
        },
        __wbg_set_r_6ece4d74af63364f: function(arg0, arg1) {
            arg0.r = arg1;
        },
        __wbg_set_required_features_bbab71414c45e621: function(arg0, arg1, arg2) {
            arg0.requiredFeatures = getArrayJsValueViewFromWasm0(arg1, arg2);
        },
        __wbg_set_required_limits_837f62d865e7cfac: function(arg0, arg1) {
            arg0.requiredLimits = arg1;
        },
        __wbg_set_resolve_target_gpu_texture_view_e4c1e3bbb8c27d87: function(arg0, arg1) {
            arg0.resolveTarget = arg1;
        },
        __wbg_set_resource_8fd8658b30d86ecf: function(arg0, arg1) {
            arg0.resource = arg1;
        },
        __wbg_set_resource_gpu_buffer_binding_33099b25da65b610: function(arg0, arg1) {
            arg0.resource = arg1;
        },
        __wbg_set_resource_gpu_texture_view_4cffe7bc7c8e5cbe: function(arg0, arg1) {
            arg0.resource = arg1;
        },
        __wbg_set_rows_per_image_c6d50d227e634379: function(arg0, arg1) {
            arg0.rowsPerImage = arg1 >>> 0;
        },
        __wbg_set_rows_per_image_deb456502f23c260: function(arg0, arg1) {
            arg0.rowsPerImage = arg1 >>> 0;
        },
        __wbg_set_sample_count_481c255a12054e1d: function(arg0, arg1) {
            arg0.sampleCount = arg1 >>> 0;
        },
        __wbg_set_sample_type_ebc5fcd029513bda: function(arg0, arg1) {
            arg0.sampleType = __wbindgen_enum_GpuTextureSampleType[arg1];
        },
        __wbg_set_sampler_89cb4a7efcfc6005: function(arg0, arg1) {
            arg0.sampler = arg1;
        },
        __wbg_set_shader_location_3fb9f6a012eba494: function(arg0, arg1) {
            arg0.shaderLocation = arg1 >>> 0;
        },
        __wbg_set_size_f64_2f591b0654540477: function(arg0, arg1) {
            arg0.size = arg1;
        },
        __wbg_set_size_f64_e844c985b8f95261: function(arg0, arg1) {
            arg0.size = arg1;
        },
        __wbg_set_size_gpu_extent_3d_dict_adf57388ab1d4f18: function(arg0, arg1) {
            arg0.size = arg1;
        },
        __wbg_set_source_211aa06496d82b73: function(arg0, arg1) {
            arg0.source = arg1;
        },
        __wbg_set_src_factor_6f2c9ec8e4d3d979: function(arg0, arg1) {
            arg0.srcFactor = __wbindgen_enum_GpuBlendFactor[arg1];
        },
        __wbg_set_stencil_back_c54d0443b8b6a957: function(arg0, arg1) {
            arg0.stencilBack = arg1;
        },
        __wbg_set_stencil_clear_value_a321b0e045bfd8c2: function(arg0, arg1) {
            arg0.stencilClearValue = arg1 >>> 0;
        },
        __wbg_set_stencil_front_3ff3f8385852efff: function(arg0, arg1) {
            arg0.stencilFront = arg1;
        },
        __wbg_set_stencil_load_op_37d20deccb26a0f1: function(arg0, arg1) {
            arg0.stencilLoadOp = __wbindgen_enum_GpuLoadOp[arg1];
        },
        __wbg_set_stencil_read_mask_021ef4271b24352c: function(arg0, arg1) {
            arg0.stencilReadMask = arg1 >>> 0;
        },
        __wbg_set_stencil_read_only_75fe66a2356d6e92: function(arg0, arg1) {
            arg0.stencilReadOnly = arg1 !== 0;
        },
        __wbg_set_stencil_store_op_501f91638dd386e6: function(arg0, arg1) {
            arg0.stencilStoreOp = __wbindgen_enum_GpuStoreOp[arg1];
        },
        __wbg_set_stencil_write_mask_ec1c12237e094bdd: function(arg0, arg1) {
            arg0.stencilWriteMask = arg1 >>> 0;
        },
        __wbg_set_step_mode_3cbbdeba1e5dfd62: function(arg0, arg1) {
            arg0.stepMode = __wbindgen_enum_GpuVertexStepMode[arg1];
        },
        __wbg_set_storage_texture_786aea7c5773b6c1: function(arg0, arg1) {
            arg0.storageTexture = arg1;
        },
        __wbg_set_store_op_678f33376d741711: function(arg0, arg1) {
            arg0.storeOp = __wbindgen_enum_GpuStoreOp[arg1];
        },
        __wbg_set_strip_index_format_70313df755145d5e: function(arg0, arg1) {
            arg0.stripIndexFormat = __wbindgen_enum_GpuIndexFormat[arg1];
        },
        __wbg_set_targets_674b33931e512fb1: function(arg0, arg1, arg2) {
            arg0.targets = getArrayJsValueViewFromWasm0(arg1, arg2);
        },
        __wbg_set_texture_4e0ee4c98ac25b81: function(arg0, arg1) {
            arg0.texture = arg1;
        },
        __wbg_set_texture_95f2bfdf7767e76f: function(arg0, arg1) {
            arg0.texture = arg1;
        },
        __wbg_set_texture_a33be3fe02ac6264: function(arg0, arg1) {
            arg0.texture = arg1;
        },
        __wbg_set_timestamp_writes_5f240bbaad97fcaf: function(arg0, arg1) {
            arg0.timestampWrites = arg1;
        },
        __wbg_set_timestamp_writes_de6a09f299b71b76: function(arg0, arg1) {
            arg0.timestampWrites = arg1;
        },
        __wbg_set_tone_mapping_320c1aad31db2e7f: function(arg0, arg1) {
            arg0.toneMapping = arg1;
        },
        __wbg_set_topology_b92cfe523bd9653b: function(arg0, arg1) {
            arg0.topology = __wbindgen_enum_GpuPrimitiveTopology[arg1];
        },
        __wbg_set_type_43e0092f16775979: function(arg0, arg1) {
            arg0.type = __wbindgen_enum_GpuSamplerBindingType[arg1];
        },
        __wbg_set_type_79cec55caf4cdb6d: function(arg0, arg1) {
            arg0.type = __wbindgen_enum_GpuBufferBindingType[arg1];
        },
        __wbg_set_unclipped_depth_32b7caf29fa5633d: function(arg0, arg1) {
            arg0.unclippedDepth = arg1 !== 0;
        },
        __wbg_set_usage_1ee33d98267e787d: function(arg0, arg1) {
            arg0.usage = arg1 >>> 0;
        },
        __wbg_set_usage_2365e2704b1fdb10: function(arg0, arg1) {
            arg0.usage = arg1 >>> 0;
        },
        __wbg_set_usage_d53ee6f0c7aedbfa: function(arg0, arg1) {
            arg0.usage = arg1 >>> 0;
        },
        __wbg_set_usage_f3e34822998d2147: function(arg0, arg1) {
            arg0.usage = arg1 >>> 0;
        },
        __wbg_set_vertex_77ed7a1229239b5a: function(arg0, arg1) {
            arg0.vertex = arg1;
        },
        __wbg_set_view_dimension_893e2d16561e56e8: function(arg0, arg1) {
            arg0.viewDimension = __wbindgen_enum_GpuTextureViewDimension[arg1];
        },
        __wbg_set_view_dimension_f2c5fe4bf927c3fe: function(arg0, arg1) {
            arg0.viewDimension = __wbindgen_enum_GpuTextureViewDimension[arg1];
        },
        __wbg_set_view_formats_427069064d8b7139: function(arg0, arg1, arg2) {
            arg0.viewFormats = getArrayJsValueViewFromWasm0(arg1, arg2);
        },
        __wbg_set_view_formats_9c2f01a6f3b365c7: function(arg0, arg1, arg2) {
            arg0.viewFormats = getArrayJsValueViewFromWasm0(arg1, arg2);
        },
        __wbg_set_view_gpu_texture_view_35f4655788535c4d: function(arg0, arg1) {
            arg0.view = arg1;
        },
        __wbg_set_view_gpu_texture_view_a532c825c52042c0: function(arg0, arg1) {
            arg0.view = arg1;
        },
        __wbg_set_visibility_d8a6821789538c25: function(arg0, arg1) {
            arg0.visibility = arg1 >>> 0;
        },
        __wbg_set_width_36ef6630b22fc519: function(arg0, arg1) {
            arg0.width = arg1 >>> 0;
        },
        __wbg_set_width_661c95ea46b71eba: function(arg0, arg1) {
            arg0.width = arg1 >>> 0;
        },
        __wbg_set_width_b20525f5f4df4eb8: function(arg0, arg1) {
            arg0.width = arg1 >>> 0;
        },
        __wbg_set_write_mask_42d89f182ade6b2d: function(arg0, arg1) {
            arg0.writeMask = arg1 >>> 0;
        },
        __wbg_set_x_58965df5af1ad27d: function(arg0, arg1) {
            arg0.x = arg1 >>> 0;
        },
        __wbg_set_x_f470b03dd54724cd: function(arg0, arg1) {
            arg0.x = arg1 >>> 0;
        },
        __wbg_set_y_4c44eb40ebca5bfc: function(arg0, arg1) {
            arg0.y = arg1 >>> 0;
        },
        __wbg_set_y_b79cba22b145de99: function(arg0, arg1) {
            arg0.y = arg1 >>> 0;
        },
        __wbg_set_z_2e6820ef0f5821ed: function(arg0, arg1) {
            arg0.z = arg1 >>> 0;
        },
        __wbg_signal_58449b7eb331d1be: function(arg0) {
            const ret = arg0.signal;
            return ret;
        },
        __wbg_size_00652f74c831ee7c: function(arg0) {
            const ret = arg0.size;
            return ret;
        },
        __wbg_size_86ca1114f3d8af74: function(arg0) {
            const ret = arg0.size;
            return ret;
        },
        __wbg_stack_3b0d974bbf31e44f: function(arg0, arg1) {
            const ret = arg1.stack;
            const ptr1 = passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
            const len1 = WASM_VECTOR_LEN;
            getDataViewMemory0().setInt32(arg0 + 4 * 1, len1, true);
            getDataViewMemory0().setInt32(arg0 + 4 * 0, ptr1, true);
        },
        __wbg_static_accessor_GLOBAL_THIS_466428f93b4eaa76: function() {
            const ret = typeof globalThis === 'undefined' ? null : globalThis;
            return isLikeNone(ret) ? 0 : addToExternrefTable0(ret);
        },
        __wbg_static_accessor_GLOBAL_c7aea38d4de089bc: function() {
            const ret = typeof global === 'undefined' ? null : global;
            return isLikeNone(ret) ? 0 : addToExternrefTable0(ret);
        },
        __wbg_static_accessor_SELF_42d4fae05e59267a: function() {
            const ret = typeof self === 'undefined' ? null : self;
            return isLikeNone(ret) ? 0 : addToExternrefTable0(ret);
        },
        __wbg_static_accessor_WINDOW_e0db14a0eba6a812: function() {
            const ret = typeof window === 'undefined' ? null : window;
            return isLikeNone(ret) ? 0 : addToExternrefTable0(ret);
        },
        __wbg_status_b0de02a07fd7d927: function(arg0) {
            const ret = arg0.status;
            return ret;
        },
        __wbg_store_523722c647247b86: function() { return handleError(function (arg0, arg1, arg2) {
            const ret = Atomics.store(arg0, arg1 >>> 0, arg2);
            return ret;
        }, arguments); },
        __wbg_stringify_f93a4ebae9231922: function() { return handleError(function (arg0) {
            const ret = JSON.stringify(arg0);
            return ret;
        }, arguments); },
        __wbg_subarray_1da675fbcbb4fefd: function(arg0, arg1, arg2) {
            const ret = arg0.subarray(arg1 >>> 0, arg2 >>> 0);
            return ret;
        },
        __wbg_subgroupMaxSize_b43be0aa16182403: function(arg0) {
            const ret = arg0.subgroupMaxSize;
            return ret;
        },
        __wbg_subgroupMinSize_03feb6ee0cda6775: function(arg0) {
            const ret = arg0.subgroupMinSize;
            return ret;
        },
        __wbg_submit_077c85cc28e36892: function(arg0, arg1, arg2) {
            arg0.submit(getArrayJsValueViewFromWasm0(arg1, arg2));
        },
        __wbg_then_7026b513a94278a8: function(arg0, arg1) {
            const ret = arg0.then(arg1);
            return ret;
        },
        __wbg_then_72819b8d4e081fb5: function(arg0, arg1, arg2) {
            const ret = arg0.then(arg1, arg2);
            return ret;
        },
        __wbg_unconfigure_835307f58dc68d80: function(arg0) {
            arg0.unconfigure();
        },
        __wbg_unmap_6a96b14c9ef5f7f5: function(arg0) {
            arg0.unmap();
        },
        __wbg_usage_eb336a28af1c9fcf: function(arg0) {
            const ret = arg0.usage;
            return ret;
        },
        __wbg_value_1e2369fab29b420e: function(arg0) {
            const ret = arg0.value;
            return ret;
        },
        __wbg_warn_917d7f727ab78481: function(arg0) {
            console.warn(arg0);
        },
        __wbg_width_1952934caca67137: function(arg0) {
            const ret = arg0.width;
            return ret;
        },
        __wbg_width_20a4245f8941072f: function(arg0) {
            const ret = arg0.width;
            return ret;
        },
        __wbg_width_aeade399d283e83a: function(arg0) {
            const ret = arg0.width;
            return ret;
        },
        __wbg_writeBuffer_f4bb3f54adfe1330: function() { return handleError(function (arg0, arg1, arg2, arg3, arg4, arg5, arg6) {
            arg0.writeBuffer(arg1, arg2, getArrayU8FromWasm0(arg3, arg4), arg5, arg6);
        }, arguments); },
        __wbg_writeTexture_30e592e8c061c3d9: function() { return handleError(function (arg0, arg1, arg2, arg3, arg4, arg5) {
            arg0.writeTexture(arg1, getArrayU8FromWasm0(arg2, arg3), arg4, arg5);
        }, arguments); },
        __wbindgen_cast_0000000000000001: function(arg0, arg1) {
            // Cast intrinsic for `Closure(Closure { owned: true, function: Function { arguments: [Externref], shim_idx: 2402, ret: Unit, inner_ret: Some(Unit) }, mutable: true }) -> Externref`.
            const ret = makeMutClosure(arg0, arg1, wasm_bindgen_b3950d515661b7ef___convert__closures_____invoke___wasm_bindgen_b3950d515661b7ef___JsValue______true_);
            return ret;
        },
        __wbindgen_cast_0000000000000002: function(arg0, arg1) {
            // Cast intrinsic for `Closure(Closure { owned: true, function: Function { arguments: [Externref], shim_idx: 74, ret: Result(Unit), inner_ret: Some(Result(Unit)) }, mutable: true }) -> Externref`.
            const ret = makeMutClosure(arg0, arg1, wasm_bindgen_b3950d515661b7ef___convert__closures_____invoke___wasm_bindgen_b3950d515661b7ef___sys__JsNullable_wgpu_31592abf1a8c888e___backend__webgpu__webgpu_sys__gen_GpuError__GpuError___core_4b687bff6fa5dea7___result__Result_____wasm_bindgen_b3950d515661b7ef___JsError___true_);
            return ret;
        },
        __wbindgen_cast_0000000000000003: function(arg0, arg1) {
            // Cast intrinsic for `Closure(Closure { owned: true, function: Function { arguments: [NamedExternref("GPUDevice")], shim_idx: 74, ret: Result(Unit), inner_ret: Some(Result(Unit)) }, mutable: true }) -> Externref`.
            const ret = makeMutClosure(arg0, arg1, wasm_bindgen_b3950d515661b7ef___convert__closures_____invoke___wasm_bindgen_b3950d515661b7ef___sys__JsNullable_wgpu_31592abf1a8c888e___backend__webgpu__webgpu_sys__gen_GpuError__GpuError___core_4b687bff6fa5dea7___result__Result_____wasm_bindgen_b3950d515661b7ef___JsError___true__2);
            return ret;
        },
        __wbindgen_cast_0000000000000004: function(arg0, arg1) {
            // Cast intrinsic for `Closure(Closure { owned: true, function: Function { arguments: [NamedExternref("any")], shim_idx: 74, ret: Result(Unit), inner_ret: Some(Result(Unit)) }, mutable: true }) -> Externref`.
            const ret = makeMutClosure(arg0, arg1, wasm_bindgen_b3950d515661b7ef___convert__closures_____invoke___wasm_bindgen_b3950d515661b7ef___sys__JsNullable_wgpu_31592abf1a8c888e___backend__webgpu__webgpu_sys__gen_GpuError__GpuError___core_4b687bff6fa5dea7___result__Result_____wasm_bindgen_b3950d515661b7ef___JsError___true__3);
            return ret;
        },
        __wbindgen_cast_0000000000000005: function(arg0, arg1) {
            // Cast intrinsic for `Closure(Closure { owned: true, function: Function { arguments: [NamedExternref("undefined")], shim_idx: 74, ret: Result(Unit), inner_ret: Some(Result(Unit)) }, mutable: true }) -> Externref`.
            const ret = makeMutClosure(arg0, arg1, wasm_bindgen_b3950d515661b7ef___convert__closures_____invoke___wasm_bindgen_b3950d515661b7ef___sys__JsNullable_wgpu_31592abf1a8c888e___backend__webgpu__webgpu_sys__gen_GpuError__GpuError___core_4b687bff6fa5dea7___result__Result_____wasm_bindgen_b3950d515661b7ef___JsError___true__4);
            return ret;
        },
        __wbindgen_cast_0000000000000006: function(arg0, arg1) {
            // Cast intrinsic for `Closure(Closure { owned: true, function: Function { arguments: [], shim_idx: 504, ret: Unit, inner_ret: Some(Unit) }, mutable: true }) -> Externref`.
            const ret = makeMutClosure(arg0, arg1, wasm_bindgen_b3950d515661b7ef___convert__closures_____invoke_______true_);
            return ret;
        },
        __wbindgen_cast_0000000000000007: function(arg0) {
            // Cast intrinsic for `F64 -> Externref`.
            const ret = arg0;
            return ret;
        },
        __wbindgen_cast_0000000000000008: function(arg0) {
            // Cast intrinsic for `I64 -> Externref`.
            const ret = arg0;
            return ret;
        },
        __wbindgen_cast_0000000000000009: function(arg0, arg1) {
            // Cast intrinsic for `Ref(Slice(U8)) -> NamedExternref("Uint8Array")`.
            const ret = getArrayU8FromWasm0(arg0, arg1);
            return ret;
        },
        __wbindgen_cast_000000000000000a: function(arg0, arg1) {
            // Cast intrinsic for `Ref(String) -> Externref`.
            const ret = getStringFromWasm0(arg0, arg1);
            return ret;
        },
        __wbindgen_cast_000000000000000b: function(arg0) {
            // Cast intrinsic for `U64 -> Externref`.
            const ret = BigInt.asUintN(64, arg0);
            return ret;
        },
        __wbindgen_init_externref_table: function() {
            const table = wasm.__wbindgen_externrefs;
            const offset = table.grow(4);
            table.set(0, undefined);
            table.set(offset + 0, undefined);
            table.set(offset + 1, null);
            table.set(offset + 2, true);
            table.set(offset + 3, false);
        },
    };
    return {
        __proto__: null,
        "./rend_app_wasm_bg.js": import0,
    };
}

function wasm_bindgen_b3950d515661b7ef___convert__closures_____invoke_______true_(arg0, arg1) {
    wasm.wasm_bindgen_b3950d515661b7ef___convert__closures_____invoke_______true_(arg0, arg1);
}

function wasm_bindgen_b3950d515661b7ef___convert__closures_____invoke___wasm_bindgen_b3950d515661b7ef___JsValue______true_(arg0, arg1, arg2) {
    wasm.wasm_bindgen_b3950d515661b7ef___convert__closures_____invoke___wasm_bindgen_b3950d515661b7ef___JsValue______true_(arg0, arg1, arg2);
}

function wasm_bindgen_b3950d515661b7ef___convert__closures_____invoke___wasm_bindgen_b3950d515661b7ef___sys__JsNullable_wgpu_31592abf1a8c888e___backend__webgpu__webgpu_sys__gen_GpuError__GpuError___core_4b687bff6fa5dea7___result__Result_____wasm_bindgen_b3950d515661b7ef___JsError___true_(arg0, arg1, arg2) {
    const ret = wasm.wasm_bindgen_b3950d515661b7ef___convert__closures_____invoke___wasm_bindgen_b3950d515661b7ef___sys__JsNullable_wgpu_31592abf1a8c888e___backend__webgpu__webgpu_sys__gen_GpuError__GpuError___core_4b687bff6fa5dea7___result__Result_____wasm_bindgen_b3950d515661b7ef___JsError___true_(arg0, arg1, arg2);
    if (ret[1]) {
        throw takeFromExternrefTable0(ret[0]);
    }
}

function wasm_bindgen_b3950d515661b7ef___convert__closures_____invoke___wasm_bindgen_b3950d515661b7ef___sys__JsNullable_wgpu_31592abf1a8c888e___backend__webgpu__webgpu_sys__gen_GpuError__GpuError___core_4b687bff6fa5dea7___result__Result_____wasm_bindgen_b3950d515661b7ef___JsError___true__2(arg0, arg1, arg2) {
    const ret = wasm.wasm_bindgen_b3950d515661b7ef___convert__closures_____invoke___wasm_bindgen_b3950d515661b7ef___sys__JsNullable_wgpu_31592abf1a8c888e___backend__webgpu__webgpu_sys__gen_GpuError__GpuError___core_4b687bff6fa5dea7___result__Result_____wasm_bindgen_b3950d515661b7ef___JsError___true__2(arg0, arg1, arg2);
    if (ret[1]) {
        throw takeFromExternrefTable0(ret[0]);
    }
}

function wasm_bindgen_b3950d515661b7ef___convert__closures_____invoke___wasm_bindgen_b3950d515661b7ef___sys__JsNullable_wgpu_31592abf1a8c888e___backend__webgpu__webgpu_sys__gen_GpuError__GpuError___core_4b687bff6fa5dea7___result__Result_____wasm_bindgen_b3950d515661b7ef___JsError___true__3(arg0, arg1, arg2) {
    const ret = wasm.wasm_bindgen_b3950d515661b7ef___convert__closures_____invoke___wasm_bindgen_b3950d515661b7ef___sys__JsNullable_wgpu_31592abf1a8c888e___backend__webgpu__webgpu_sys__gen_GpuError__GpuError___core_4b687bff6fa5dea7___result__Result_____wasm_bindgen_b3950d515661b7ef___JsError___true__3(arg0, arg1, arg2);
    if (ret[1]) {
        throw takeFromExternrefTable0(ret[0]);
    }
}

function wasm_bindgen_b3950d515661b7ef___convert__closures_____invoke___wasm_bindgen_b3950d515661b7ef___sys__JsNullable_wgpu_31592abf1a8c888e___backend__webgpu__webgpu_sys__gen_GpuError__GpuError___core_4b687bff6fa5dea7___result__Result_____wasm_bindgen_b3950d515661b7ef___JsError___true__4(arg0, arg1, arg2) {
    const ret = wasm.wasm_bindgen_b3950d515661b7ef___convert__closures_____invoke___wasm_bindgen_b3950d515661b7ef___sys__JsNullable_wgpu_31592abf1a8c888e___backend__webgpu__webgpu_sys__gen_GpuError__GpuError___core_4b687bff6fa5dea7___result__Result_____wasm_bindgen_b3950d515661b7ef___JsError___true__4(arg0, arg1, arg2);
    if (ret[1]) {
        throw takeFromExternrefTable0(ret[0]);
    }
}

function wasm_bindgen_b3950d515661b7ef___convert__closures_____invoke___js_sys_52c997262b311612___Function_fn_wasm_bindgen_b3950d515661b7ef___JsValue_____wasm_bindgen_b3950d515661b7ef___sys__Undefined___js_sys_52c997262b311612___Function_fn_wasm_bindgen_b3950d515661b7ef___JsValue_____wasm_bindgen_b3950d515661b7ef___sys__Undefined_______true_(arg0, arg1, arg2, arg3) {
    wasm.wasm_bindgen_b3950d515661b7ef___convert__closures_____invoke___js_sys_52c997262b311612___Function_fn_wasm_bindgen_b3950d515661b7ef___JsValue_____wasm_bindgen_b3950d515661b7ef___sys__Undefined___js_sys_52c997262b311612___Function_fn_wasm_bindgen_b3950d515661b7ef___JsValue_____wasm_bindgen_b3950d515661b7ef___sys__Undefined_______true_(arg0, arg1, arg2, arg3);
}


const __wbindgen_enum_GpuAddressMode = ["clamp-to-edge", "repeat", "mirror-repeat"];


const __wbindgen_enum_GpuAutoLayoutMode = ["auto"];


const __wbindgen_enum_GpuBlendFactor = ["zero", "one", "src", "one-minus-src", "src-alpha", "one-minus-src-alpha", "dst", "one-minus-dst", "dst-alpha", "one-minus-dst-alpha", "src-alpha-saturated", "constant", "one-minus-constant", "src1", "one-minus-src1", "src1-alpha", "one-minus-src1-alpha"];


const __wbindgen_enum_GpuBlendOperation = ["add", "subtract", "reverse-subtract", "min", "max"];


const __wbindgen_enum_GpuBufferBindingType = ["uniform", "storage", "read-only-storage"];


const __wbindgen_enum_GpuCanvasAlphaMode = ["opaque", "premultiplied"];


const __wbindgen_enum_GpuCanvasToneMappingMode = ["standard", "extended"];


const __wbindgen_enum_GpuCompareFunction = ["never", "less", "equal", "less-equal", "greater", "not-equal", "greater-equal", "always"];


const __wbindgen_enum_GpuCullMode = ["none", "front", "back"];


const __wbindgen_enum_GpuErrorFilter = ["validation", "out-of-memory", "internal"];


const __wbindgen_enum_GpuFilterMode = ["nearest", "linear"];


const __wbindgen_enum_GpuFrontFace = ["ccw", "cw"];


const __wbindgen_enum_GpuIndexFormat = ["uint16", "uint32"];


const __wbindgen_enum_GpuLoadOp = ["load", "clear"];


const __wbindgen_enum_GpuMipmapFilterMode = ["nearest", "linear"];


const __wbindgen_enum_GpuPowerPreference = ["low-power", "high-performance"];


const __wbindgen_enum_GpuPrimitiveTopology = ["point-list", "line-list", "line-strip", "triangle-list", "triangle-strip"];


const __wbindgen_enum_GpuSamplerBindingType = ["filtering", "non-filtering", "comparison"];


const __wbindgen_enum_GpuStencilOperation = ["keep", "zero", "replace", "invert", "increment-clamp", "decrement-clamp", "increment-wrap", "decrement-wrap"];


const __wbindgen_enum_GpuStorageTextureAccess = ["write-only", "read-only", "read-write"];


const __wbindgen_enum_GpuStoreOp = ["store", "discard"];


const __wbindgen_enum_GpuTextureAspect = ["all", "stencil-only", "depth-only"];


const __wbindgen_enum_GpuTextureDimension = ["1d", "2d", "3d"];


const __wbindgen_enum_GpuTextureFormat = ["r8unorm", "r8snorm", "r8uint", "r8sint", "r16unorm", "r16snorm", "r16uint", "r16sint", "r16float", "rg8unorm", "rg8snorm", "rg8uint", "rg8sint", "r32uint", "r32sint", "r32float", "rg16unorm", "rg16snorm", "rg16uint", "rg16sint", "rg16float", "rgba8unorm", "rgba8unorm-srgb", "rgba8snorm", "rgba8uint", "rgba8sint", "bgra8unorm", "bgra8unorm-srgb", "rgb9e5ufloat", "rgb10a2uint", "rgb10a2unorm", "rg11b10ufloat", "rg32uint", "rg32sint", "rg32float", "rgba16unorm", "rgba16snorm", "rgba16uint", "rgba16sint", "rgba16float", "rgba32uint", "rgba32sint", "rgba32float", "stencil8", "depth16unorm", "depth24plus", "depth24plus-stencil8", "depth32float", "depth32float-stencil8", "bc1-rgba-unorm", "bc1-rgba-unorm-srgb", "bc2-rgba-unorm", "bc2-rgba-unorm-srgb", "bc3-rgba-unorm", "bc3-rgba-unorm-srgb", "bc4-r-unorm", "bc4-r-snorm", "bc5-rg-unorm", "bc5-rg-snorm", "bc6h-rgb-ufloat", "bc6h-rgb-float", "bc7-rgba-unorm", "bc7-rgba-unorm-srgb", "etc2-rgb8unorm", "etc2-rgb8unorm-srgb", "etc2-rgb8a1unorm", "etc2-rgb8a1unorm-srgb", "etc2-rgba8unorm", "etc2-rgba8unorm-srgb", "eac-r11unorm", "eac-r11snorm", "eac-rg11unorm", "eac-rg11snorm", "astc-4x4-unorm", "astc-4x4-unorm-srgb", "astc-5x4-unorm", "astc-5x4-unorm-srgb", "astc-5x5-unorm", "astc-5x5-unorm-srgb", "astc-6x5-unorm", "astc-6x5-unorm-srgb", "astc-6x6-unorm", "astc-6x6-unorm-srgb", "astc-8x5-unorm", "astc-8x5-unorm-srgb", "astc-8x6-unorm", "astc-8x6-unorm-srgb", "astc-8x8-unorm", "astc-8x8-unorm-srgb", "astc-10x5-unorm", "astc-10x5-unorm-srgb", "astc-10x6-unorm", "astc-10x6-unorm-srgb", "astc-10x8-unorm", "astc-10x8-unorm-srgb", "astc-10x10-unorm", "astc-10x10-unorm-srgb", "astc-12x10-unorm", "astc-12x10-unorm-srgb", "astc-12x12-unorm", "astc-12x12-unorm-srgb"];


const __wbindgen_enum_GpuTextureSampleType = ["float", "unfilterable-float", "depth", "sint", "uint"];


const __wbindgen_enum_GpuTextureViewDimension = ["1d", "2d", "2d-array", "cube", "cube-array", "3d"];


const __wbindgen_enum_GpuVertexFormat = ["uint8", "uint8x2", "uint8x4", "sint8", "sint8x2", "sint8x4", "unorm8", "unorm8x2", "unorm8x4", "snorm8", "snorm8x2", "snorm8x4", "uint16", "uint16x2", "uint16x4", "sint16", "sint16x2", "sint16x4", "unorm16", "unorm16x2", "unorm16x4", "snorm16", "snorm16x2", "snorm16x4", "float16", "float16x2", "float16x4", "float32", "float32x2", "float32x3", "float32x4", "uint32", "uint32x2", "uint32x3", "uint32x4", "sint32", "sint32x2", "sint32x3", "sint32x4", "unorm10-10-10-2", "unorm8x4-bgra"];


const __wbindgen_enum_GpuVertexStepMode = ["vertex", "instance"];
const RendHandleFinalization = (typeof FinalizationRegistry === 'undefined')
    ? { register: () => {}, unregister: () => {} }
    : new FinalizationRegistry(ptr => wasm.__wbg_rendhandle_free(ptr, 1));

function addToExternrefTable0(obj) {
    const idx = wasm.__externref_table_alloc();
    wasm.__wbindgen_externrefs.set(idx, obj);
    return idx;
}

const CLOSURE_DTORS = (typeof FinalizationRegistry === 'undefined')
    ? { register: () => {}, unregister: () => {} }
    : new FinalizationRegistry(state => wasm.__wbindgen_destroy_closure(state.a, state.b));

function debugString(val) {
    // primitive types
    const type = typeof val;
    if (type == 'number' || type == 'boolean' || val == null) {
        return  `${val}`;
    }
    if (type == 'string') {
        return `"${val}"`;
    }
    if (type == 'symbol') {
        const description = val.description;
        if (description == null) {
            return 'Symbol';
        } else {
            return `Symbol(${description})`;
        }
    }
    if (type == 'function') {
        const name = val.name;
        if (typeof name == 'string' && name.length > 0) {
            return `Function(${name})`;
        } else {
            return 'Function';
        }
    }
    // objects
    if (Array.isArray(val)) {
        const length = val.length;
        let debug = '[';
        if (length > 0) {
            debug += debugString(val[0]);
        }
        for(let i = 1; i < length; i++) {
            debug += ', ' + debugString(val[i]);
        }
        debug += ']';
        return debug;
    }
    // Test for built-in
    const builtInMatches = /\[object ([^\]]+)\]/.exec(toString.call(val));
    let className;
    if (builtInMatches && builtInMatches.length > 1) {
        className = builtInMatches[1];
    } else {
        // Failed to match the standard '[object ClassName]'
        return toString.call(val);
    }
    if (className == 'Object') {
        // we're a user defined class or Object
        // JSON.stringify avoids problems with cycles, and is generally much
        // easier than looping through ownProperties of `val`.
        try {
            return 'Object(' + JSON.stringify(val) + ')';
        } catch (_) {
            return 'Object';
        }
    }
    // errors
    if (val instanceof Error) {
        return `${val.name}: ${val.message}\n${val.stack}`;
    }
    // TODO we could test for more things here, like `Set`s and `Map`s.
    return className;
}

function getArrayF32FromWasm0(ptr, len) {
    ptr = ptr >>> 0;
    return getFloat32ArrayMemory0().subarray(ptr / 4, ptr / 4 + len);
}

function getArrayI32FromWasm0(ptr, len) {
    ptr = ptr >>> 0;
    return getInt32ArrayMemory0().subarray(ptr / 4, ptr / 4 + len);
}

function getArrayJsValueViewFromWasm0(ptr, len) {
    ptr = ptr >>> 0;
    const mem = getDataViewMemory0();
    const result = [];
    for (let i = ptr; i < ptr + 4 * len; i += 4) {
        result.push(wasm.__wbindgen_externrefs.get(mem.getUint32(i, true)));
    }
    return result;
}

function getArrayU32FromWasm0(ptr, len) {
    ptr = ptr >>> 0;
    return getUint32ArrayMemory0().subarray(ptr / 4, ptr / 4 + len);
}

function getArrayU8FromWasm0(ptr, len) {
    ptr = ptr >>> 0;
    return getUint8ArrayMemory0().subarray(ptr / 1, ptr / 1 + len);
}

let cachedDataViewMemory0 = null;
function getDataViewMemory0() {
    if (cachedDataViewMemory0 === null || cachedDataViewMemory0.buffer.detached === true || (cachedDataViewMemory0.buffer.detached === undefined && cachedDataViewMemory0.buffer !== wasm.memory.buffer)) {
        cachedDataViewMemory0 = new DataView(wasm.memory.buffer);
    }
    return cachedDataViewMemory0;
}

let cachedFloat32ArrayMemory0 = null;
function getFloat32ArrayMemory0() {
    if (cachedFloat32ArrayMemory0 === null || cachedFloat32ArrayMemory0.byteLength === 0) {
        cachedFloat32ArrayMemory0 = new Float32Array(wasm.memory.buffer);
    }
    return cachedFloat32ArrayMemory0;
}

let cachedInt32ArrayMemory0 = null;
function getInt32ArrayMemory0() {
    if (cachedInt32ArrayMemory0 === null || cachedInt32ArrayMemory0.byteLength === 0) {
        cachedInt32ArrayMemory0 = new Int32Array(wasm.memory.buffer);
    }
    return cachedInt32ArrayMemory0;
}

function getStringFromWasm0(ptr, len) {
    return decodeText(ptr >>> 0, len);
}

let cachedUint32ArrayMemory0 = null;
function getUint32ArrayMemory0() {
    if (cachedUint32ArrayMemory0 === null || cachedUint32ArrayMemory0.byteLength === 0) {
        cachedUint32ArrayMemory0 = new Uint32Array(wasm.memory.buffer);
    }
    return cachedUint32ArrayMemory0;
}

let cachedUint8ArrayMemory0 = null;
function getUint8ArrayMemory0() {
    if (cachedUint8ArrayMemory0 === null || cachedUint8ArrayMemory0.byteLength === 0) {
        cachedUint8ArrayMemory0 = new Uint8Array(wasm.memory.buffer);
    }
    return cachedUint8ArrayMemory0;
}

function handleError(f, args) {
    try {
        return f.apply(this, args);
    } catch (e) {
        const idx = addToExternrefTable0(e);
        wasm.__wbindgen_exn_store(idx);
    }
}

function isLikeNone(x) {
    return x === undefined || x === null;
}

function makeMutClosure(arg0, arg1, f) {
    const state = { a: arg0, b: arg1, cnt: 1 };
    const real = (...args) => {

        // First up with a closure we increment the internal reference
        // count. This ensures that the Rust closure environment won't
        // be deallocated while we're invoking it.
        state.cnt++;
        const a = state.a;
        state.a = 0;
        try {
            return f(a, state.b, ...args);
        } finally {
            state.a = a;
            real._wbg_cb_unref();
        }
    };
    real._wbg_cb_unref = () => {
        if (--state.cnt === 0) {
            wasm.__wbindgen_destroy_closure(state.a, state.b);
            state.a = 0;
            CLOSURE_DTORS.unregister(state);
        }
    };
    CLOSURE_DTORS.register(real, state, state);
    return real;
}

function passStringToWasm0(arg, malloc, realloc) {
    if (realloc === undefined) {
        const buf = cachedTextEncoder.encode(arg);
        const ptr = malloc(buf.length, 1) >>> 0;
        getUint8ArrayMemory0().subarray(ptr, ptr + buf.length).set(buf);
        WASM_VECTOR_LEN = buf.length;
        return ptr;
    }

    let len = arg.length;
    let ptr = malloc(len, 1) >>> 0;

    const mem = getUint8ArrayMemory0();

    let offset = 0;

    for (; offset < len; offset++) {
        const code = arg.charCodeAt(offset);
        if (code > 0x7F) break;
        mem[ptr + offset] = code;
    }
    if (offset !== len) {
        if (offset !== 0) {
            arg = arg.slice(offset);
        }
        ptr = realloc(ptr, len, len = offset + arg.length * 3, 1) >>> 0;
        const view = getUint8ArrayMemory0().subarray(ptr + offset, ptr + len);
        const ret = cachedTextEncoder.encodeInto(arg, view);

        offset += ret.written;
        ptr = realloc(ptr, len, offset, 1) >>> 0;
    }

    WASM_VECTOR_LEN = offset;
    return ptr;
}

function takeFromExternrefTable0(idx) {
    const value = wasm.__wbindgen_externrefs.get(idx);
    wasm.__externref_table_dealloc(idx);
    return value;
}

let cachedTextDecoder = new TextDecoder('utf-8', { ignoreBOM: true, fatal: true });
cachedTextDecoder.decode();
const MAX_SAFARI_DECODE_BYTES = 2146435072;
let numBytesDecoded = 0;
function decodeText(ptr, len) {
    numBytesDecoded += len;
    if (numBytesDecoded >= MAX_SAFARI_DECODE_BYTES) {
        cachedTextDecoder = new TextDecoder('utf-8', { ignoreBOM: true, fatal: true });
        cachedTextDecoder.decode();
        numBytesDecoded = len;
    }
    return cachedTextDecoder.decode(getUint8ArrayMemory0().subarray(ptr, ptr + len));
}

const cachedTextEncoder = new TextEncoder();

if (!('encodeInto' in cachedTextEncoder)) {
    cachedTextEncoder.encodeInto = function (arg, view) {
        const buf = cachedTextEncoder.encode(arg);
        view.set(buf);
        return {
            read: arg.length,
            written: buf.length
        };
    };
}

let WASM_VECTOR_LEN = 0;

let wasmModule, wasmInstance, wasm;
function __wbg_finalize_init(instance, module) {
    wasmInstance = instance;
    wasm = instance.exports;
    wasmModule = module;
    cachedDataViewMemory0 = null;
    cachedFloat32ArrayMemory0 = null;
    cachedInt32ArrayMemory0 = null;
    cachedUint32ArrayMemory0 = null;
    cachedUint8ArrayMemory0 = null;
    wasm.__wbindgen_start();
    return wasm;
}

async function __wbg_load(module, imports) {
    if (typeof Response === 'function' && module instanceof Response) {
        if (!module.ok) {
            throw new Error(`failed to fetch Wasm: ${module.status} ${module.statusText} fetching '${module.url}'`);
        }

        if (typeof WebAssembly.instantiateStreaming === 'function') {
            try {
                return await WebAssembly.instantiateStreaming(module, imports);
            } catch (e) {
                const validResponse = expectedResponseType(module.type);

                if (validResponse && module.headers.get('Content-Type') !== 'application/wasm') {
                    console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve Wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n", e);

                } else { throw e; }
            }
        }

        const bytes = await module.arrayBuffer();
        return await WebAssembly.instantiate(bytes, imports);
    } else {
        const instance = await WebAssembly.instantiate(module, imports);

        if (instance instanceof WebAssembly.Instance) {
            return { instance, module };
        } else {
            return instance;
        }
    }

    function expectedResponseType(type) {
        switch (type) {
            case 'basic': case 'cors': case 'default': return true;
        }
        return false;
    }
}

function initSync(module) {
    if (wasm !== undefined) return wasm;


    if (module !== undefined) {
        if (Object.getPrototypeOf(module) === Object.prototype) {
            ({module} = module)
        } else {
            console.warn('using deprecated parameters for `initSync()`; pass a single object instead')
        }
    }

    const imports = __wbg_get_imports();
    if (!(module instanceof WebAssembly.Module)) {
        module = new WebAssembly.Module(module);
    }
    const instance = new WebAssembly.Instance(module, imports);
    return __wbg_finalize_init(instance, module);
}

async function __wbg_init(module_or_path) {
    if (wasm !== undefined) return wasm;


    if (module_or_path !== undefined) {
        if (Object.getPrototypeOf(module_or_path) === Object.prototype) {
            ({module_or_path} = module_or_path)
        } else {
            console.warn('using deprecated parameters for the initialization function; pass a single object instead')
        }
    }

    if (module_or_path === undefined) {
        module_or_path = new URL('rend_app_wasm_bg.wasm', import.meta.url);
    }
    const imports = __wbg_get_imports();

    if (typeof module_or_path === 'string' || (typeof Request === 'function' && module_or_path instanceof Request) || (typeof URL === 'function' && module_or_path instanceof URL)) {
        module_or_path = fetch(module_or_path);
    }

    const { instance, module } = await __wbg_load(await module_or_path, imports);

    return __wbg_finalize_init(instance, module);
}

export { initSync, __wbg_init as default };
