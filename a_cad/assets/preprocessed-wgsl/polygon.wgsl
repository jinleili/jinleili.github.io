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

struct Light {
    pos: vec4f,
    color: vec4f,
    ty: vec4u,
}

struct Material {
    albedo: vec4f,
    roughness: f32,
    reflectance: f32,
    ambient_ratio: f32,
    background_ratio: f32,
}

fn light_direction(light: Light, position: vec3f) -> vec3f {
    var res: vec3f;
    if (light.ty[0] == 0u) {
        res = normalize(light.pos.xyz - position);
    } else {
        res = light.pos.xyz;
    }
    return res;
}

fn irradiance(light: Light, position: vec3f, normal: vec3f) -> vec3f {
    let light_dir = light_direction(light, position);
    return light.color.xyz * clamp(dot(light_dir, normal), 0.0, 1.0);
}

fn diffuse_brdf(material: Material) -> vec3f {
    return material.albedo.xyz * (1.0 - material.reflectance);
}

fn microfacet_distribution(middle: vec3f, normal: vec3f, alpha: f32) -> f32 {
    let dotNH = dot(normal, middle);
    let alpha2 = alpha * alpha;
    let sqrt_denom = 1.0 - dotNH * dotNH * (1.0 - alpha2);
    return alpha2 / (sqrt_denom * sqrt_denom);
}

fn schlick_approxy(v: vec3f, normal: vec3f, k: f32) -> f32 {
    let dotNV = dot(normal, v);
    return dotNV / (dotNV * (1.0 - k) + k);
}

fn geometric_decay(light_dir: vec3f, camera_dir: vec3f, normal: vec3f, alpha: f32) -> f32 {
    let k = alpha / 2.0;
    return schlick_approxy(light_dir, normal, k) * schlick_approxy(camera_dir, normal, k);
}

fn fresnel(f0: vec3f, middle: vec3f, camera_dir: vec3f) -> vec3f {
    var c: f32 = 1.0 - dot(middle, camera_dir);
    c = c * c * c * c * c;
    return f0 + (1.0 - f0) * c;
}

fn specular_brdf(material: Material, camera_dir: vec3f, light_dir: vec3f, normal: vec3f) -> vec3f {
    let specular_color = material.albedo.xyz * material.reflectance;
    let middle = normalize(camera_dir + light_dir);
    let alpha = material.roughness * material.roughness;
    let distribution = microfacet_distribution(middle, normal, alpha);
    let decay = geometric_decay(light_dir, camera_dir, normal, alpha);
    let fresnel_color = fresnel(specular_color, middle, camera_dir);
    let dotCN = clamp(dot(camera_dir, normal), 0.0, 1.0);
    let dotLN = clamp(dot(light_dir, normal), 0.0, 1.0);
    let denom = 4.0 * dotCN * dotLN;
    if (denom < 1.0e-6) {
        return vec3f(0.0, 0.0, 0.0);
    }
    return distribution * decay / denom * fresnel_color;
}

fn microfacet_color(position: vec3f, normal: vec3f, light: Light, camera_dir: vec3f, material: Material) -> vec3f {
    let light_dir = light_direction(light, position);
    let irr = irradiance(light, position, normal);
    let diffuse = diffuse_brdf(material);
    let specular = specular_brdf(material, camera_dir, light_dir, normal);
    return (diffuse + specular) * irr;
}

fn ambient_correction(pre_color: vec3f, material: Material) -> vec3f {
    return pre_color * (1.0 - material.ambient_ratio)
        + material.albedo.xyz * material.ambient_ratio;
}

fn background_correction(pre_color: vec3f, bk_color: vec3f, material: Material) -> vec3f {
    return pre_color * (1.0 - material.background_ratio)
        + bk_color * material.background_ratio;
}

fn phong_color(position: vec3f, normal: vec3f, light: Light, camera_dir: vec3f, material: Material) -> vec3f {
    let light_dir = normalize(light.pos.xyz - position);
    let half_dir = normalize(camera_dir + light_dir);
    let diffuse = max(dot(normal, half_dir), 0.0);
    let specular = pow(max(dot(normal, half_dir), 0.0), 16.0) * 0.1;

    return (0.4 + diffuse + specular) * light.color.rgb;
}

struct PickingParams {
    is_selected: i32,
};

@group(0) @binding(0) var<uniform> scene: SceneUniform;
@group(0) @binding(1) var<uniform> params: PickingParams;
@group(0) @binding(2) var<storage, read> model_buf: array<ModelUniform>;
@group(0) @binding(3) var<storage, read> material_buf: array<Material>;

struct VertexOutput {
    @builtin(position) position: vec4f,
    @location(0) uv: vec2f,
    @location(1) world_pos: vec3f,
    @location(2) world_normal: vec3f,
    @location(3) @interpolate(flat) pick_color: vec4f,
    @location(4) display_color: vec4f,
    @location(5) @interpolate(flat) model_index: u32,
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
    out.model_index = index;
    return out;
}

struct FragOutput {
    @location(0) first: vec4f,
    @location(1) second:vec4f,
};

@fragment
fn fs_main(in: VertexOutput) -> FragOutput {
    let camera_dir = normalize(scene.camera_pos.xyz - in.world_pos);
    let normal = normalize(in.world_normal);
    let material = material_buf[in.model_index];
    var light: Light;
    light.pos = vec4f(2., 3.5, 8., 1.);
    light.color = vec4f(1.);
    light.ty = vec4u(0u);

    var pre_color = vec3f(0.);
    pre_color = pre_color + microfacet_color(in.world_pos, normal, light, camera_dir, material);
    pre_color = clamp(pre_color, vec3f(0.0), vec3f(1.0));
    pre_color = background_correction(pre_color, vec3f(0.24), material);
    pre_color = ambient_correction(pre_color, material);

    var out: FragOutput;
    out.first = vec4f(pre_color, 1.0);


    out.second = in.pick_color;
    return out;
}
