
function RippleEffect() {
  return {
    animationHandle:null,
    canvas:null,
    gl: null,
    running: true,
    perturbance: 0.03,
    resolution: 256,
    dropRadius: 20,
    backgroundWidth: 0,
    backgroundHeight: 0,
    textureDelta: new Float32Array([1 / this.resolution, 1 / this.resolution]),

    dropProgram: null,
    updateProgram: null,
    renderProgram: null,
    // vertices: [
		// 	-1, -1, 0,
		// 	+1, -1, 0,
		// 	+1, +1, 0,
		// 	-1, +1, 0
		// ],
    vertices: [
			-1, -1, 0,
			+1, -1, 0,
			+1, +1, 0,
			-1, +1, 0
		],
    backgroundTexture: null,
    quadBuffer: null,
    textures: [],
    framebuffers: [],
    initData: function(canvasID, imgURL) {
      if (hasWebGLSupport()) {
        this.canvas = document.getElementById(canvasID);
        this.gl = this.canvas.getContext('webgl') || this.canvas.getContext('experimental-webgl');
        that = this;
        this.canvas.addEventListener("mousemove", function(e) {
          if (that.running) {
            that.dropAtMouse(e, that.dropRadius, 0.01);
          }
        }, false);

        // Load extensions
        this.gl.getExtension('OES_texture_float');
        var linearSupport = this.gl.getExtension('OES_texture_float_linear');
        this.configTextureAndFramebuffer(linearSupport);

        //Creating WebGL buffers
        this.quadBuffer = this.gl.createBuffer();
    		this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.quadBuffer);
        // he typed arrays used by WebGL are Int8Array, Uint8Array, Int16Array, Uint16Array, Int32Array, UInt32Array, Float32Array, and Float64Array.
    		this.gl.bufferData(this.gl.ARRAY_BUFFER, new Float32Array(this.vertices), this.gl.STATIC_DRAW);

        this.initShaders();
        this.initTextures(imgURL);
      }
      else {
        console.log("亲，你用的浏览器不支持WebGL哦。");
      }
    },
    initShaders: function() {
      this.dropProgram = makeProgram(vertexShader0, fragmentShader0, this.gl);
      this.updateProgram = [0,0];
      this.updateProgram[0] = makeProgram(vertexShader0, fragmentShader1, this.gl);
      this.gl.uniform2fv(this.updateProgram[0].locations.delta, this.textureDelta);

      this.updateProgram[1] = makeProgram(vertexShader0, fragmentShader2, this.gl);
      this.gl.uniform2fv(this.updateProgram[1].locations.delta, this.textureDelta);

      this.renderProgram = makeProgram(vertexShader1, fragmentShader3, this.gl);
      this.gl.uniform1f(this.renderProgram.locations.perturbance, this.perturbance);
    },
    initTextures: function(backgroundUrl) {
      var image = new Image;
  		image.crossOrigin = '';
      gl = this.gl;
      that = this;

  		image.onload = function() {
  			function isPowerOfTwo(x) {
  				return (x & (x - 1)) == 0;
  			}

  			var wrapping = (isPowerOfTwo(image.width) && isPowerOfTwo(image.height)) ? gl.REPEAT : gl.CLAMP_TO_EDGE;

  			that.backgroundWidth = image.width;
  			that.backgroundHeight = image.height;

  			that.backgroundTexture = gl.createTexture();

        var texture = gl.createTexture();
  			gl.bindTexture(gl.TEXTURE_2D, texture);
  			gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, 1);
  			gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
  			gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
  			gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, wrapping);
  			gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, wrapping);
  			gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, image);
  		};
  		image.src = backgroundUrl;
    },
    configTextureAndFramebuffer: function(linearSupport) {
      var gl = this.gl;
      for (var i = 0; i < 2; i++) {
  			var texture = gl.createTexture();
  			var framebuffer = gl.createFramebuffer();

  			gl.bindFramebuffer(gl.FRAMEBUFFER, framebuffer);
  			framebuffer.width = this.resolution;
  			framebuffer.height = this.resolution;

  			gl.bindTexture(gl.TEXTURE_2D, texture);
  			gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, linearSupport ? gl.LINEAR : gl.NEAREST);
  			gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, linearSupport ? gl.LINEAR : gl.NEAREST);
  			gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
  			gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
  			gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, this.resolution, this.resolution, 0, gl.RGBA, gl.FLOAT, null);

  			gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D, texture, 0);
  			if (gl.checkFramebufferStatus(gl.FRAMEBUFFER) != gl.FRAMEBUFFER_COMPLETE) {
  				throw new Error('Rendering to this texture is not supported (incomplete framebuffer)');
  			}

  			gl.bindTexture(gl.TEXTURE_2D, null);
  			gl.bindFramebuffer(gl.FRAMEBUFFER, null);

  			this.textures.push(texture);
  			this.framebuffers.push(framebuffer);
  		}
    },
    bindTexture: function(texture, unit) {
      gl.activeTexture(gl.TEXTURE0 + (unit || 0));
      gl.bindTexture(gl.TEXTURE_2D, texture);
    },
    drawQuad: function() {
      var gl = this.gl;
			gl.bindBuffer(gl.ARRAY_BUFFER, this.quadBuffer);
			gl.vertexAttribPointer(0, 2, gl.FLOAT, false, 0, 0);
			gl.drawArrays(gl.TRIANGLE_FAN, 0, 4);
		},

    render: function() {
      var gl = this.gl;
			gl.viewport(0, 0, this.canvas.width, this.canvas.height);
			gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);

			gl.useProgram(this.renderProgram.id);

			this.bindTexture(this.backgroundTexture, 0);
			this.bindTexture(this.textures[0], 1);

			gl.uniform2fv(this.renderProgram.locations.topLeft, this.renderProgram.uniforms.topLeft);
			gl.uniform2fv(this.renderProgram.locations.bottomRight, this.renderProgram.uniforms.bottomRight);
			gl.uniform2fv(this.renderProgram.locations.containerRatio, this.renderProgram.uniforms.containerRatio);
			gl.uniform1i(this.renderProgram.locations.samplerBackground, 0);
			gl.uniform1i(this.renderProgram.locations.samplerRipples, 1);

			this.drawQuad();
		},
		update: function() {
      var gl = this.gl;
			gl.viewport(0, 0, this.resolution, this.resolution);

			for (var i = 0; i < 2; i++) {
				gl.bindFramebuffer(gl.FRAMEBUFFER, this.framebuffers[i]);
				this.bindTexture(this.textures[1-i]);
				gl.useProgram(this.updateProgram[i].id);

				this.drawQuad();
			}

			gl.bindFramebuffer(gl.FRAMEBUFFER, null);
		},
    computeTextureBoundaries: function() {
			this.renderProgram.uniforms.topLeft = new Float32Array([
				0.0,
				0.0
			]);
			this.renderProgram.uniforms.bottomRight = new Float32Array([
				this.renderProgram.uniforms.topLeft[0] + 0.9,
				this.renderProgram.uniforms.topLeft[1] +0.9
			]);

			var maxSide = Math.max(this.canvas.width, this.canvas.height);

			this.renderProgram.uniforms.containerRatio = new Float32Array([
				this.canvas.width / maxSide,
				this.canvas.height / maxSide
			]);
		},
    tapped: function(e) {

    },
    animate: function() {
      cancelAnimationFrame(this.animationHandle);
      this.enterFrame();
    },
    enterFrame: function() {
      this.computeTextureBoundaries();

      if (this.running) {
        this.update();
      }
      this.render();

      this.animationHandle = requestAnimationFrame(this.enterFrame.bind(this));
    },

    dropAtMouse: function(e, radius, strength) {
			this.drop(
				e.pageX,
				e.pageY,
				radius,
				strength
			);
		},

		drop: function(x, y, radius, strength) {
			var that = this;
			gl = this.gl;

			var elWidth = 800;
			var elHeight = 600;
			var longestSide = Math.max(elWidth, elHeight);

			radius = radius / longestSide;

			var dropPosition = new Float32Array([
				(2 * x - elWidth) / longestSide,
				(elHeight - 2 * y) / longestSide
			]);

			gl.viewport(0, 0, this.resolution, this.resolution);

			// Render onto texture/framebuffer 0
			gl.bindFramebuffer(gl.FRAMEBUFFER, this.framebuffers[0]);

			// Using texture 1
			this.bindTexture(this.textures[1]);

			gl.useProgram(this.dropProgram.id);
			gl.uniform2fv(this.dropProgram.locations.center, dropPosition);
			gl.uniform1f(this.dropProgram.locations.radius, radius);
			gl.uniform1f(this.dropProgram.locations.strength, strength);

			this.drawQuad();

			// Switch textures
			var t = this.framebuffers[0]; this.framebuffers[0] = this.framebuffers[1]; this.framebuffers[1] = t;
			t = this.textures[0]; this.textures[0] = this.textures[1]; this.textures[1] = t;

			gl.bindFramebuffer(gl.FRAMEBUFFER, null);
		},
  };
}
