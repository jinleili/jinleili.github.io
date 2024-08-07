
struct TrajectoryUniform {
    screen_factor: vec2<f32>,
    trajectory_view_index: i32,
    bg_view_index: i32,
};

@group(0) @binding(0) var<uniform> params: TrajectoryUniform;
@group(0) @binding(1) var trajectory_views: texture_2d_array<f32>;
@group(0) @binding(2) var tex_sampler: sampler;

struct UpdateVertexOutput {
    @location(0) fade: f32,
    @builtin(position) position: vec4<f32>,
};

@vertex
fn vs_update(
    @location(0) particle_pos: vec2<f32>,
    @location(1) particle_pos_initial: vec2<f32>,
    @location(2) particle_lifetime: f32,
    @location(3) particle_fade: f32,
    @location(4) position: vec2<f32>,
) -> UpdateVertexOutput {
    let pos = (particle_pos + position) * params.screen_factor - 1.0;
    var out: UpdateVertexOutput;
    out.position = vec4<f32>(pos.x, pos.y * (-1.0), 0.0, 1.0);
    out.fade = particle_fade;
    return out;
}


@fragment
fn fs_update(in: UpdateVertexOutput) -> @location(0) vec4<f32> {
    if (in.fade <= 0.01) {
        discard;
    }
    return vec4<f32>(1.0, 1.0, 1.0, 1.0);
}

struct VertexOutput {
    @location(0) uv: vec2<f32>,
    @builtin(position) position: vec4<f32>,
};

@vertex
fn vs_main(@builtin(vertex_index) vertexIndex: u32) -> VertexOutput {
    let uv: vec2<f32> = vec2<f32>(f32((vertexIndex << 1u) & 2u), f32(vertexIndex & 2u));
    var out: VertexOutput;
    out.position = vec4<f32>(uv * 2.0 - 1.0, 0.1, 1.0);
    out.uv = vec2<f32>(uv.x, (uv.y - 1.0) *  (-1.0));
    return out;
}

@fragment
fn fs_fadeout(in: VertexOutput) -> @location(0) vec4<f32> {
    let pixel = textureSample(trajectory_views, tex_sampler, in.uv, params.bg_view_index);
    if (pixel.a >= 0.2) {
        return pixel * 0.05;
    } else {
        return pixel * 0.5;
    }
}

@fragment
fn fs_compose(in: VertexOutput) -> @location(0) vec4<f32> {
    let val = textureSample(trajectory_views, tex_sampler, in.uv, params.trajectory_view_index);
    if (val.a < 0.1) {
        discard;
    }
    return val;
}
