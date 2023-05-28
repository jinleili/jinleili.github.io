struct SceneUniform {
    view_proj: mat4x4<f32>,
};
struct ToolUniform {
    selected_model_index: u32,
    hovered_tool_index: u32
};

struct ModelUniformData {
    model_mat: mat4x4<f32>,
    display_color: vec4<f32>,
    pick_color: vec4<f32>,
};

@group(0) @binding(0) var<uniform> scene: SceneUniform;
@group(0) @binding(1) var<uniform> tool: ToolUniform;
@group(0) @binding(2) var<storage, read> model_buf: array<ModelUniformData>;

struct VertexOutput {
    @builtin(position) position: vec4<f32>,
    @location(0) color: vec4<f32>,
};

@vertex
fn vs_main(
    @location(0) pos: vec3<f32>,
    @location(1) normal: vec3<f32>,
    @location(2) uv: vec2<f32>,
    @location(3) index: u32,
    @location(4) display_color: vec4<f32>,
    @location(5) hover_color: vec4<f32>,
) -> VertexOutput {
    let model_uniform = model_buf[tool.selected_model_index];
    var color = display_color;
    if (tool.hovered_tool_index == index) {
        color = hover_color;
    }

    var out: VertexOutput;
    out.position = scene.view_proj * model_uniform.model_mat * vec4<f32>(pos, 1.0);
    out.color = color;
    return out;
}

@fragment
fn fs_main(in: VertexOutput) -> @location(0) vec4<f32> {
    return in.color;
}
