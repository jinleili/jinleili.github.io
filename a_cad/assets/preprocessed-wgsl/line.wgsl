struct SceneUniform {
    view_mat: mat4x4f,
    proj_mat: mat4x4f,
    view_proj: mat4x4f,
    view_ortho: mat4x4f,
    camera_pos: vec4f,
    viewport_pixels: vec2f,
};

@group(0) @binding(0) var<uniform> scene: SceneUniform;

struct LineGizmoUniform {
    use_perspective: i32,
    line_width: f32,
    depth_bias: f32,
}

@group(0) @binding(1) var<uniform> line_gizmo: LineGizmoUniform;

struct VertexOutput {
    @builtin(position) clip_position: vec4f,
    @location(0) color: vec4f,
};

fn clip_near_plane(a: vec4f, b: vec4f) -> vec4f {
    if a.z > a.w && b.z <= b.w {
        let distance_a = a.z - a.w;
        let distance_b = b.z - b.w;
        let t = distance_a / (distance_a - distance_b);
        return a + (b - a) * t;
    }
    return a;
}

@vertex
fn vs_main(@location(0) position_a: vec3f,
            @location(1) color_a: vec4f,
            @location(2) position_b: vec3f,
            @location(3) color_b: vec4f,
            @builtin(vertex_index) vertex_index: u32) -> VertexOutput {

    var positions = array<vec3f, 6>(
        vec3(0., -0.5, 0.),
        vec3(0., -0.5, 1.),
        vec3(0., 0.5, 1.),
        vec3(0., -0.5, 0.),
        vec3(0., 0.5, 1.),
        vec3(0., 0.5, 0.)
    );
    let position = positions[vertex_index];

    var clip_a = scene.view_proj * vec4(position_a, 1.);
    var clip_b = scene.view_proj * vec4(position_b, 1.);
    clip_a = clip_near_plane(clip_a, clip_b);
    clip_b = clip_near_plane(clip_b, clip_a);
    let clip = mix(clip_a, clip_b, position.z);

    let resolution = scene.viewport_pixels;
    let screen_a = resolution * (0.5 * clip_a.xy / clip_a.w + 0.5);
    let screen_b = resolution * (0.5 * clip_b.xy / clip_b.w + 0.5);

    let x_basis = normalize(screen_b - screen_a);
    let y_basis = vec2(-x_basis.y, x_basis.x);

    var color = mix(color_a, color_b, position.z);

    var line_width = line_gizmo.line_width;
    var alpha = 1.;

    if (line_gizmo.use_perspective > 0) {
        line_width /= clip.w;
    }

    if line_width > 0.0 && line_width < 1. {
        line_width = 1.;
    }

    let offset = line_width * (position.x * x_basis + position.y * y_basis);
    let screen = mix(screen_a, screen_b, position.z) + offset;

    var depth: f32;
    if line_gizmo.depth_bias >= 0. {
        depth = clip.z * (1. - line_gizmo.depth_bias);
    } else {
        let epsilon = 4.88e-04;
        depth = clip.z * exp2(-line_gizmo.depth_bias * log2(clip.w / clip.z - epsilon));
    }

    var clip_position = vec4(clip.w * ((2. * screen) / resolution - 1.), depth, clip.w);

    return VertexOutput(clip_position, color);
}

@fragment
fn fs_main(in: VertexOutput) -> @location(0) vec4f {
    return in.color;
}
