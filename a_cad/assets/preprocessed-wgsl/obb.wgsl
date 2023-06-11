struct SceneUniform {
    view_mat: mat4x4f,
    proj_mat: mat4x4f,
    view_proj: mat4x4f,
    view_ortho: mat4x4f,
    viewport_pixels: vec2f,
};

struct ModelUniform {
    model_mat: mat4x4f,
    display_color: vec4f,
    pick_color: vec4f,
};

struct ObbUniform {
    scale_mat: mat4x4f,
    color: vec4f,
    model_index: u32,
};

@group(0) @binding(0) var<uniform> scene: SceneUniform;
@group(0) @binding(1) var<storage, read> model_buf: array<ModelUniform>;
@group(1) @binding(0) var<uniform> obb: ObbUniform;

struct VertexOutput {
    @builtin(position) position: vec4f,
};

@vertex
fn vs_main(
    @location(0) pos: vec3f,
) -> VertexOutput {
    let model_uniform = model_buf[obb.model_index];
    var position = scene.view_proj * model_uniform.model_mat * obb.scale_mat * vec4f(pos, 1.0);

    var out: VertexOutput;
    out.position = position;
    return out;
}

struct FragmentOutput {
	@location(0) color: vec4f,
    @builtin(frag_depth) frag_depth: f32,
};

@fragment
fn fs_main(in: VertexOutput) -> FragmentOutput {
    var output: FragmentOutput;
    output.color = obb.color;
    output.frag_depth = in.position.z - 1.0;
    return output;
}
