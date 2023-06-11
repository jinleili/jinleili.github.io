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

struct PickingParams {
    is_selected: i32,
};

@group(0) @binding(0) var<uniform> scene: SceneUniform;
@group(0) @binding(1) var<uniform> params: PickingParams;
@group(0) @binding(2) var<storage, read> model_buf: array<ModelUniform>;

struct VertexOutput {
    @builtin(position) position: vec4f,
    @location(0) uv: vec2f,
    @location(1) world_pos: vec3f,
    @location(2) world_normal: vec3f,
    @location(3) pick_color: vec4f,
    @location(4) display_color: vec4f,
};

@vertex
fn vs_main(
    @location(0) pos: vec3f,
    @location(1) normal: vec3f,
    @location(2) uv: vec2f,
    @location(3) index: u32,
) -> VertexOutput {
    let model_uniform = model_buf[index];
    let m = model_uniform.model_mat;
    let world_pos = scene.view_mat * m * vec4f(pos, 1.0);
    var out: VertexOutput;
    out.position = scene.proj_mat * world_pos;
    out.uv = uv;
    out.world_pos = world_pos.xyz;
    out.world_normal = mat3x3f(m[0].xyz, m[1].xyz, m[2].xyz) * normal;;
    out.pick_color = model_uniform.pick_color;
    out.display_color = model_uniform.display_color;
    return out;
}

struct FragOutput {
    @location(0) first: vec4f,
    @location(1) second:vec4f,
};
@fragment
fn fs_main(in: VertexOutput) -> FragOutput {
    var out: FragOutput;
    let light_color = vec3f(1.0);
    let light_pos = vec3f(2.0, 3.5, 8.0);
    let ambient_strength = 0.6;
    let light_dir = normalize(light_pos - in.world_pos);
    let normal = normalize(in.world_normal);
    let diffuse_strength = max(dot(normal, light_dir), 0.0) * 0.7;
    let color = (ambient_strength + diffuse_strength) * light_color * in.display_color.rgb;
    out.first = vec4f(color, 1.0);
    out.second = in.pick_color;
    return out;
}
