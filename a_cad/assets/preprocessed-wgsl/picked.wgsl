struct SceneUniform {
    view_proj: mat4x4<f32>,
};
struct PickedParams {
    color: vec4<f32>,
};

struct ModelUniformData {
    model_mat: mat4x4<f32>,
    display_color: vec4<f32>,
    pick_color: vec4<f32>,
};

@group(0) @binding(0) var<uniform> scene: SceneUniform;
@group(0) @binding(1) var<uniform> params: PickedParams;
@group(0) @binding(2) var<storage, read> model_buf: array<ModelUniformData>;

struct VertexOutput {
    @builtin(position) position: vec4<f32>,
};

@vertex
fn vs_main(
    @location(0) pos: vec3<f32>,
    @location(1) normal: vec3<f32>,
    @location(2) uv: vec2<f32>,
    @location(3) index: u32,
) -> VertexOutput {
    let model_uniform = model_buf[index];

    var out: VertexOutput;
    out.position = scene.view_proj * model_uniform.model_mat * vec4<f32>(pos, 1.0);
    return out;
}

@fragment
fn fs_main() -> @location(0) vec4<f32> {
    return params.color;
}
