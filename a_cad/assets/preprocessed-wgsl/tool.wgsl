struct SceneUniform {
    view_mat: mat4x4f,
    proj_mat: mat4x4f,
    view_proj: mat4x4f,
    view_ortho: mat4x4f,
    camera_pos: vec4f,
    viewport_pixels: vec2f,
};

struct ModelUniform {
    model_mat: mat4x4f,
    display_color: vec4f,
    pick_color: vec4f,
};

struct ToolUniform {
    scale_mat: mat4x4f,
    selected_model_index: u32,
    hovered_tool_index: u32
};

@group(0) @binding(0) var<uniform> scene: SceneUniform;
@group(0) @binding(1) var<uniform> tool: ToolUniform;
@group(0) @binding(2) var<storage, read> model_buf: array<ModelUniform>;

struct VertexOutput {
    @builtin(position) position: vec4f,
    @location(0) display_color: vec4f,
    @location(1) pick_color: vec4f,
};

@vertex
fn vs_main(
    @location(0) pos: vec3f,
    @location(1) normal: vec3f,
    @location(2) uv: vec2f,
    @location(3) index: u32,
    @location(4) display_color: vec4f,
    @location(5) pick_color: vec4f,
) -> VertexOutput {
    let model_uniform = model_buf[tool.selected_model_index];
    var color = display_color;
    if tool.hovered_tool_index == index {
        color = vec4f(0.94, 0.85, 0.4, 1.0);
    }

    var proj_pos = scene.view_proj * model_uniform.model_mat * tool.scale_mat * vec4f(pos, 1.0);
   
    var out: VertexOutput;
    out.position = proj_pos;
    out.display_color = color;
    out.pick_color = pick_color;
    return out;
}


struct FragOutput {
    @location(0) first: vec4f,
    @location(1) second: vec4f,
    @builtin(frag_depth) frag_depth: f32,
};
@fragment
fn fs_main(in: VertexOutput) -> FragOutput {
    var out: FragOutput;
    out.first = in.display_color;
    out.second = in.pick_color;
    out.frag_depth = in.position.z - 1.0;
    return out;
}
