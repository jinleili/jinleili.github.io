var Program = {};

Program.make = function(vertexSource, fragmentSource, gl) {
	function compileSource(type, source) {
		var shader = gl.createShader(type);
		gl.shaderSource(shader, source);
		gl.compileShader(shader);
		if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
			throw new Error('compile error: ' + gl.getShaderInfoLog(shader));
		}
		return shader;
	}

	var program = gl.createProgram();
	gl.attachShader(program, compileSource(gl.VERTEX_SHADER, vertexSource));
	gl.attachShader(program, compileSource(gl.FRAGMENT_SHADER, fragmentSource));
	gl.linkProgram(program);
	if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
		throw new Error('link error: ' + gl.getProgramInfoLog(program));
	}

	gl.useProgram(program);
	return program;
};

// module.exports = Program;
