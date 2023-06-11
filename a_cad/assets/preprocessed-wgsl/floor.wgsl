struct SceneUniform {
    view_mat: mat4x4f,
    proj_mat: mat4x4f,
    view_proj: mat4x4f,
    view_ortho: mat4x4f,
    viewport_pixels: vec2f,
};

@group(0) @binding(0) var<uniform> scene: SceneUniform;

struct VertexOutput {
    @builtin(position) position: vec4f,
    @location(0) color: vec4f,
};

@vertex
fn vs_main(
    @location(0) pos: vec3f,
    @location(1) color: vec4f,
) -> VertexOutput {
    var position = scene.view_proj * vec4f(pos, 1.0);

    var out: VertexOutput;
    out.position = position;
    out.color = color;
    return out;
}

struct FragmentOutput {
	@location(0) color : vec4f,
};

@fragment
fn fs_main(in: VertexOutput ) -> FragmentOutput {
    var output : FragmentOutput;
    output.color = in.color;
    return output;
}
