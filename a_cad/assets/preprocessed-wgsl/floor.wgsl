struct SceneUniform {
    view_proj: mat4x4<f32>,
};

@group(0) @binding(0) var<uniform> scene: SceneUniform;

struct VertexOutput {
    @builtin(position) position: vec4<f32>,
    @location(0) color: vec4<f32>,
};

@vertex
fn vs_main(
    @location(0) pos: vec3<f32>,
    @location(1) color: vec4<f32>,
) -> VertexOutput {
    var position = scene.view_proj * vec4<f32>(pos, 1.0);

    var out: VertexOutput;
    out.position = position;
    out.color = color;
    return out;
}

struct FragmentOutput {
	@location(0) color : vec4<f32>,
};

@fragment
fn fs_main(in: VertexOutput ) -> FragmentOutput {
    var output : FragmentOutput;
    output.color = in.color;
    return output;
}
