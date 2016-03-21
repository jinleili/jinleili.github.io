 var vertexShader0 = [
  'attribute vec2 vertex;',
  'varying vec2 coord;',
  'void main() {',
    'coord = vertex * 0.5 + 0.5;',
    'gl_Position = vec4(vertex, 0.0, 1.0);',
  '}'
].join('\n');

 var fragmentShader0 = [
  'precision highp float;',

  'const float PI = 3.141592653589793;',
  'uniform sampler2D texture;',
  'uniform vec2 center;',
  'uniform float radius;',
  'uniform float strength;',

  'varying vec2 coord;',

  'void main() {',
    'vec4 info = texture2D(texture, coord);',

    'float drop = max(0.0, 1.0 - length(center * 0.5 + 0.5 - coord) / radius);',
    'drop = 0.5 - cos(drop * PI) * 0.5;',

    'info.r += drop * strength;',

    'gl_FragColor = info;',
  '}'
].join('\n');

 var vertexShader1 = [
  'precision highp float;',

  'attribute vec2 vertex;',
  'uniform vec2 topLeft;',
  'uniform vec2 bottomRight;',
  'uniform vec2 containerRatio;',
  'varying vec2 ripplesCoord;',
  'varying vec2 backgroundCoord;',
  'void main() {',
    'backgroundCoord = mix(topLeft, bottomRight, vertex * 0.5 + 0.5);',
    'backgroundCoord.y = 1.0 - backgroundCoord.y;',
    'ripplesCoord = vec2(vertex.x, -vertex.y) * containerRatio * 0.5 + 0.5;',
    'gl_Position = vec4(vertex.x, -vertex.y, 0.0, 1.0);',
  '}'
].join('\n');

 var fragmentShader1 = [
  'precision highp float;',

  'uniform sampler2D texture;',
  'uniform vec2 delta;',

  'varying vec2 coord;',

  'void main() {',
    'vec4 info = texture2D(texture, coord);',

    'vec2 dx = vec2(delta.x, 0.0);',
    'vec2 dy = vec2(0.0, delta.y);',

    'float average = (',
      'texture2D(texture, coord - dx).r +',
      'texture2D(texture, coord - dy).r +',
      'texture2D(texture, coord + dx).r +',
      'texture2D(texture, coord + dy).r',
    ') * 0.25;',

    'info.g += (average - info.r) * 2.0;',
    'info.g *= 0.995;',
    'info.r += info.g;',

    'gl_FragColor = info;',
  '}'
].join('\n');

 var fragmentShader2 = [
  'precision highp float;',

  'uniform sampler2D texture;',
  'uniform vec2 delta;',

  'varying vec2 coord;',

  'void main() {',
    'vec4 info = texture2D(texture, coord);',

    'vec3 dx = vec3(delta.x, texture2D(texture, vec2(coord.x + delta.x, coord.y)).r - info.r, 0.0);',
    'vec3 dy = vec3(0.0, texture2D(texture, vec2(coord.x, coord.y + delta.y)).r - info.r, delta.y);',
    'info.ba = normalize(cross(dy, dx)).xz;',

    'gl_FragColor = info;',
  '}'
].join('\n');

 var fragmentShader3 = [
  'precision highp float;',

  'uniform sampler2D samplerBackground;',
  'uniform sampler2D samplerRipples;',
  'uniform float perturbance;',
  'varying vec2 ripplesCoord;',
  'varying vec2 backgroundCoord;',

  'void main() {',
    'vec2 offset = -texture2D(samplerRipples, ripplesCoord).ba;',
    'float specular = pow(max(0.0, dot(offset, normalize(vec2(-0.6, 1.0)))), 4.0);',
    'gl_FragColor = texture2D(samplerBackground, backgroundCoord + offset * perturbance) + specular;',
  '}'
].join('\n');
