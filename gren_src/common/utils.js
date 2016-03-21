var utils = module.exports = {
	object3DIdCount: 0,

	hasWebGLSupport: function() {
		var canvas = document.createElement('canvas');
		var context = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
		var result = context && context.getExtension('OES_texture_float');
		return result;
	},

	hex2rgb: function(hex, out) {
		out = out || [];

		out[0] = (hex >> 16 & 0xFF) / 255;
		out[1] = (hex >> 8 & 0xFF) / 255;
		out[2] = (hex & 0xFF) / 255;

		return out;
	},
};
