(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("GREN"));
	else if(typeof define === 'function' && define.amd)
		define("EFFECT", ["GREN"], factory);
	else if(typeof exports === 'object')
		exports["EFFECT"] = factory(require("GREN"));
	else
		root["EFFECT"] = factory(root["GREN"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_3__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _PSSoundWave = __webpack_require__(1);

	Object.keys(_PSSoundWave).forEach(function (key) {
	  if (key === "default") return;
	  Object.defineProperty(exports, key, {
	    enumerable: true,
	    get: function get() {
	      return _PSSoundWave[key];
	    }
	  });
	});

	var _JuliaFractal = __webpack_require__(4);

	Object.keys(_JuliaFractal).forEach(function (key) {
	  if (key === "default") return;
	  Object.defineProperty(exports, key, {
	    enumerable: true,
	    get: function get() {
	      return _JuliaFractal[key];
	    }
	  });
	});

	var _MandelbrotSet = __webpack_require__(6);

	Object.keys(_MandelbrotSet).forEach(function (key) {
	  if (key === "default") return;
	  Object.defineProperty(exports, key, {
	    enumerable: true,
	    get: function get() {
	      return _MandelbrotSet[key];
	    }
	  });
	});

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.PSSoundWave = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

	var _Wave = __webpack_require__(2);

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Created by grenlight on 16/4/7.
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * 模拟 iOS 8 上面呼出 Siri 时的波形动画
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


	var GREN = __webpack_require__(3);

	var PSSoundWave = exports.PSSoundWave = function (_GREN$IAnimation) {
	    _inherits(PSSoundWave, _GREN$IAnimation);

	    function PSSoundWave() {
	        var width = arguments.length <= 0 || arguments[0] === undefined ? 300 : arguments[0];
	        var height = arguments.length <= 1 || arguments[1] === undefined ? 100 : arguments[1];
	        var workerPath = arguments[2];

	        _classCallCheck(this, PSSoundWave);

	        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(PSSoundWave).call(this));

	        _this.renderer = new GREN.WebGLRenderer();
	        _this.renderer.setStyle(width, height, 'margin:0px; position:absolute; z-index:1;');
	        _this.gl = _this.renderer.gl;

	        _this.domElement = _this.renderer.canvas;

	        if (_this.renderer.isWebGLSuported === false) {
	            return _possibleConstructorReturn(_this);
	        }
	        _this.colors = [[1.0, 1.0, 1.0, 1.0], [1.0, 1.0, 1.0, 0.4], [1.0, 1.0, 1.0, 0.3], [1.0, 1.0, 1.0, 0.2], [1.0, 1.0, 1.0, 0.1]];
	        _this.mvMatrixList = [];

	        var wavePositionY = _this.renderer.canvasHeight / 4;

	        var mvMatrix0 = GREN.Matrix4.identity();
	        GREN.Matrix4.translate(mvMatrix0, [0, wavePositionY, 0]);
	        _this.mvMatrixList.push(mvMatrix0);

	        var mvMatrix1 = GREN.Matrix4.identity();
	        GREN.Matrix4.translate(mvMatrix1, [0, wavePositionY, 0]);
	        GREN.Matrix4.scale(mvMatrix1, [1, 0.9, 1]);
	        _this.mvMatrixList.push(mvMatrix1);

	        var mvMatrix2 = GREN.Matrix4.identity();
	        GREN.Matrix4.translate(mvMatrix2, [0, wavePositionY, 0]);
	        GREN.Matrix4.scale(mvMatrix2, [1, 0.7, 1]);
	        _this.mvMatrixList.push(mvMatrix2);

	        var mvMatrix3 = GREN.Matrix4.identity();
	        GREN.Matrix4.translate(mvMatrix3, [0, wavePositionY, 0]);
	        GREN.Matrix4.scale(mvMatrix3, [1, 0.3, 1]);
	        _this.mvMatrixList.push(mvMatrix3);

	        var mvMatrix4 = GREN.Matrix4.identity();
	        GREN.Matrix4.translate(mvMatrix4, [0, wavePositionY, 0]);
	        GREN.Matrix4.scale(mvMatrix4, [1, 0.5, 1]);
	        GREN.Matrix4.rotate(mvMatrix4, mvMatrix4, Math.PI, [0, 0, 1]);
	        _this.mvMatrixList.push(mvMatrix4);

	        _this.pMatrix = GREN.Matrix4.orthogonal(0, _this.renderer.canvasWidth, 0, _this.renderer.canvasHeight, -5000.0, 5000.0);

	        _this._initProgram();

	        _this.wave = new _Wave.Wave(_this.gl, _this.prg, _this.renderer.canvasWidth, 0, workerPath, function () {
	            _this.startAnimating();
	        });
	        return _this;
	    }

	    _createClass(PSSoundWave, [{
	        key: '_interactVertice',
	        value: function _interactVertice() {
	            this.vertices = [];
	            var leftTop = void 0,
	                leftBottom = void 0,
	                rightTop = void 0,
	                rightBottom = void 0;
	            for (var i = 0; i < this.amplitudes.length; i++) {
	                var currentAmptitude = this.amplitudes[i];
	                var index = i * 4;
	                leftTop = this.vertexVectors[index];
	                leftBottom = this.vertexVectors[index + 1];
	                rightTop = this.vertexVectors[index + 2];
	                rightBottom = this.vertexVectors[index + 3];
	                this.vertices = this.vertices.concat([leftTop.x, leftTop.y + currentAmptitude, leftBottom.x, leftBottom.y + currentAmptitude, rightBottom.x, rightBottom.y + currentAmptitude, rightTop.x, rightBottom.y + currentAmptitude]);
	            }
	        }

	        /**
	         *  初始化着色器
	         */

	    }, {
	        key: '_initProgram',
	        value: function _initProgram() {
	            this.prg = this.gl.makeProgram(GREN.commonVS, GREN.commonFS);
	            if (this.prg) {
	                this.prg.setAttribLocations(['vertexPosition']);
	                this.prg.setUniformLocations(['pMatrix', 'mvMatrix', 'color']);

	                this.gl.uniformMatrix4fv(this.prg.pMatrix, false, this.pMatrix);
	            }
	        }

	        /**
	         * 绘制
	         */

	    }, {
	        key: 'enterFrame',
	        value: function enterFrame() {
	            _get(Object.getPrototypeOf(PSSoundWave.prototype), 'enterFrame', this).call(this);
	            // 先设置 clearColor, 后 clear
	            this.gl.clearColor(0.0, 0.0, 0.0, 0.0);
	            this.gl.viewport(0, 0, this.renderer.canvasWidth, this.renderer.canvasHeight);
	            this.gl.clear(this.gl.COLOR_BUFFER_BIT | this.gl.DEPTH_BUFFER_BIT);

	            this.wave.generateAWave();

	            //透明度混合
	            this.gl.enable(this.gl.BLEND);
	            this.gl.blendFunc(this.gl.SRC_ALPHA, this.gl.ONE_MINUS_SRC_ALPHA);

	            for (var i = this.mvMatrixList.length - 1; i >= 0; i--) {
	                this.gl.uniform4fv(this.prg.color, this.colors[i]);
	                this.gl.uniformMatrix4fv(this.prg.mvMatrix, false, this.mvMatrixList[i]);
	                this.wave.draw();
	            }
	            // this.stopAnimating();
	        }
	    }]);

	    return PSSoundWave;
	}(GREN.IAnimation);

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	/**
	 * Created by grenlight on 16/4/8.
	 */
	var GREN = __webpack_require__(3);

	var Wave = exports.Wave = function () {
	    function Wave(gl, prg, drawWidth, positionY, workerPath, callBack) {
	        _classCallCheck(this, Wave);

	        this.gl = gl;
	        this.prg = prg;
	        this.callBack = callBack;

	        this.indices = [];
	        this.indicesLength = 0;

	        this.worker = new Worker(workerPath);
	        console.log(this.worker);
	        this.worker.onmessage = this.handleMessage.bind(this);
	        this.worker.postMessage({ effectType: 'soundwave', params: { drawWidth: drawWidth, positionY: positionY, devicePixelRatio: window.devicePixelRatio } });
	    }

	    _createClass(Wave, [{
	        key: 'handleMessage',
	        value: function handleMessage(event) {
	            if (this.indicesLength === 0) {
	                this.indicesLength = event.data.length;
	                var indexBuffer = this.gl.createElementBufferWithData(event.data);
	                this.gl.bindBuffer(this.gl.ELEMENT_ARRAY_BUFFER, indexBuffer);

	                this.generateAWave();
	            } else {
	                var vertexBuffer = this.gl.createArrayBufferWithTypedArray(event.data);
	                this.gl.enableVertexAttribArray(this.prg.vertexPosition);
	                this.gl.bindBuffer(this.gl.ARRAY_BUFFER, vertexBuffer);
	                //这个地方要写在bind后,相当于获取并设置顶点数据
	                this.gl.vertexAttribPointer(this.prg.vertexPosition, 2, this.gl.FLOAT, false, 0, 0);

	                //保证已经有了第一帧需要的顶点数据
	                if (this.callBack) {
	                    this.callBack();
	                    this.callBack = null;
	                }
	            }
	        }
	    }, {
	        key: 'generateAWave',
	        value: function generateAWave() {
	            this.worker.postMessage(null);
	        }
	    }, {
	        key: 'draw',
	        value: function draw() {
	            this.gl.drawElements(this.gl.TRIANGLE_STRIP, this.indicesLength, this.gl.UNSIGNED_SHORT, 0);
	        }
	    }]);

	    return Wave;
	}();

/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_3__;

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.JuliaFractal = exports.pixelFS = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

	var _CommonEffectShader = __webpack_require__(5);

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	/**
	 * Created by grenlight on 16/4/12.
	 */

	var pixelFS = exports.pixelFS = '\n#ifdef GL_FRAGMENT_PRECISION_HIGH\nprecision highp float;\n#else\nprecision mediump float;\n#endif\n\nuniform vec2 screen;\nuniform vec2 mouse;\n\nconst vec2  c = vec2( -0.9, 0.37015);\n\n// 最小最大值\nconst float minX = -1.0;\nconst float maxX = 1.0;\nconst float minY = -1.0;\n\n//迭代次数\nconst float max = 50.0;\n//迭代函数使用的幂\nconst vec2  power = vec2(2, 0);\n\n// Complex math operations\n\n#define complexMult(a,b) vec2(a.x*b.x - a.y*b.y, a.x*b.y + a.y*b.x)\n#define complexLog(z) vec2( log(length(z)), float(atan(z.y, z.x)) )\n#define complexExp(z) vec2(exp(z.x) * cos(z.y), exp(z.x) * sin(z.y))\n\n// x^y = exp(y * log(x))\n#define complexPower2(z, p) vec2(complexExp(complexMult(p, complexLog(z))))\n\nfloat julia( vec2  xy ) {\n  float repeater = 0.0;\n  float xtemp;\n\n  for(float i = 1.0; i <= max; i++) {\n    xy = complexPower2( xy, power ) + c;\n    if(dot(xy, xy) > 4.0) break;\n    repeater = i;\n  }\n  return repeater;\n}\n\nvec4 getcolor(float repeater) {\n  if (repeater == max ) {\n        return vec4(0,0,0,1);\n   }\n    repeater /=(max);\n  float r = 1.0 - repeater * 2.0; \n  float g = 1.0 - repeater; \n  float b = 1.0 - repeater; \n  return vec4(r, g, b, 1.0);\n}\n\nvoid main() {\n  float current_scale = (maxX - minX) / screen.x;\n  float x       = (gl_FragCoord.x * current_scale) + minX;\n  float y       = (gl_FragCoord.y * current_scale) + minY;\n\n  gl_FragColor = getcolor( julia( vec2(x, y) ) );\n}';

	var GREN = __webpack_require__(3);

	var JuliaFractal = exports.JuliaFractal = function (_GREN$IAnimation) {
	    _inherits(JuliaFractal, _GREN$IAnimation);

	    function JuliaFractal() {
	        var width = arguments.length <= 0 || arguments[0] === undefined ? 300 : arguments[0];
	        var height = arguments.length <= 1 || arguments[1] === undefined ? 100 : arguments[1];

	        _classCallCheck(this, JuliaFractal);

	        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(JuliaFractal).call(this));

	        _this.renderer = new GREN.WebGLRenderer();
	        _this.renderer.setStyle(width, height, 'margin:0px; position:absolute; z-index:1;');
	        _this.gl = _this.renderer.gl;

	        _this.domElement = _this.renderer.canvas;

	        if (_this.renderer.isWebGLSuported === false) {
	            return _possibleConstructorReturn(_this);
	        }

	        _this.vertices = [-0.5, -0.5, -0.5, 0.5, 0.5, 0.5, 0.5, -0.5];
	        _this.indices = [1, 0, 2, 3];
	        _this.vertexBuffer = _this.gl.createArrayBufferWithData(_this.vertices);
	        _this.indexBuffer = _this.gl.createElementBufferWithData(_this.indices);
	        _this.mvMatrix = GREN.Matrix4.identity();
	        GREN.Matrix4.scale(_this.mvMatrix, [_this.renderer.canvasWidth, _this.renderer.canvasHeight, 0]);
	        _this.pMatrix = GREN.Matrix4.orthogonal(-_this.renderer.canvasWidth / 2, _this.renderer.canvasWidth / 2, -_this.renderer.canvasHeight / 2, _this.renderer.canvasHeight / 2, -5000.0, 5000.0);

	        _this._initProgram();

	        GREN.TouchManager.addTouchListener(_this.domElement, _this.touchStartHandler.bind(_this), _this.touchMoveHandler.bind(_this));
	        _this.startAnimating();
	        return _this;
	    }

	    /**
	     *  初始化着色器
	     */


	    _createClass(JuliaFractal, [{
	        key: '_initProgram',
	        value: function _initProgram() {
	            this.prg = this.gl.makeProgram(_CommonEffectShader.pixelVS, pixelFS);
	            if (this.prg) {
	                this.prg.setAttribLocations(['vertexPosition']);
	                this.prg.setUniformLocations(['pMatrix', 'mvMatrix', 'mouse', 'screen']);

	                this.gl.uniformMatrix4fv(this.prg.mvMatrix, false, this.mvMatrix);
	                this.gl.uniformMatrix4fv(this.prg.pMatrix, false, this.pMatrix);
	                this.gl.uniform2fv(this.prg.screen, [this.renderer.canvasWidth, this.renderer.canvasHeight]);
	                this.gl.uniform2fv(this.prg.mouse, [0.5, 0.5]);
	            }
	        }
	    }, {
	        key: 'enterFrame',
	        value: function enterFrame() {
	            _get(Object.getPrototypeOf(JuliaFractal.prototype), 'enterFrame', this).call(this);
	            // 先设置 clearColor, 后 clear
	            this.gl.clearColor(0.25, 0.25, 0.25, 1.0);
	            this.gl.viewport(0, 0, this.renderer.canvasWidth, this.renderer.canvasHeight);
	            this.gl.clear(this.gl.COLOR_BUFFER_BIT | this.gl.DEPTH_BUFFER_BIT);

	            //透明度混合
	            this.gl.enable(this.gl.BLEND);
	            this.gl.blendFunc(this.gl.SRC_ALPHA, this.gl.ONE_MINUS_SRC_ALPHA);

	            this.gl.enableVertexAttribArray(this.prg.vertexPosition);
	            this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.vertexBuffer);
	            //这个地方要写在bind后,相当于获取并设置顶点数据
	            this.gl.vertexAttribPointer(this.prg.vertexPosition, 2, this.gl.FLOAT, false, 0, 0);

	            this.gl.bindBuffer(this.gl.ELEMENT_ARRAY_BUFFER, this.indexBuffer);
	            this.gl.drawElements(this.gl.TRIANGLE_STRIP, this.indices.length, this.gl.UNSIGNED_SHORT, 0);
	        }
	    }, {
	        key: 'touchStartHandler',
	        value: function touchStartHandler(event) {}
	    }, {
	        key: 'touchMoveHandler',
	        value: function touchMoveHandler(event) {
	            var tpx = event.pageX ? event.pageX : event.changedTouches[0].pageX;
	            var tpy = event.pageY ? event.pageY : event.changedTouches[0].pageY;
	            tpx -= this.domElement.offsetLeft;
	            tpy -= this.domElement.offsetTop;
	            tpx = tpx / (this.renderer.canvasWidth / window.devicePixelRatio);
	            tpy = tpy / (this.renderer.canvasHeight / window.devicePixelRatio);

	            this.gl.uniform2fv(this.prg.mouse, [tpx, tpy]);
	            this.startAnimating();
	        }
	    }]);

	    return JuliaFractal;
	}(GREN.IAnimation);

/***/ },
/* 5 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	/**
	 * Created by grenlight on 16/4/14.
	 */

	//顶点插值
	var pixelVS = exports.pixelVS = "\nattribute vec2 vertexPosition;\n\nuniform mat4 mvMatrix;\nuniform mat4 pMatrix;\n\nvoid main(void) {\n    gl_Position = pMatrix * mvMatrix * vec4(vertexPosition, 0.0, 1.0);\n}";

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.MandelbrotSet = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _CommonEffectShader = __webpack_require__(5);

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	/**
	 * Created by grenlight on 16/4/13.
	 *
	 * 曼德博集合: 是一种在复平面上组成分形的点的集合
	 *
	 * https://zh.wikipedia.org/zh-cn/曼德博集合
	 *
	 */

	var pixelFS = '\n#ifdef GL_FRAGMENT_PRECISION_HIGH\nprecision highp float;\n#else\nprecision mediump float;\n#endif\n\nuniform vec2 screen;\n\nconst int maxRepeats = 30;\nconst vec2 topRight = vec2(1, -1);\nconst vec2 bottomLeft = vec2(-2, 1);\nfloat drow = (topRight.y - bottomLeft.y);\nfloat dcol = (topRight.x - bottomLeft.x);\n\nvec2 multiply(vec2 a, vec2 b) {\n\treturn vec2(a.x*b.x - a.y*b.y,  a.y*b.x + a.x*b.y);\n}\nvoid main(void) {\n    vec2 Z = vec2(0, 0);\n    vec2 p = vec2(bottomLeft.x + (gl_FragCoord.x/screen.x)*dcol, bottomLeft.y + (gl_FragCoord.y/screen.y)*drow);\n   // vec2 p = vec2(gl_FragCoord.x, gl_FragCoord.y);\n    //vec2(bottomLeft.x + gl_FragCoord.x*dcol, bottomLeft.y +  gl_FragCoord.y*drow);\n\n    int stepper = 0;\n    for (int i=0; i<maxRepeats; i++) {\n        if (abs(dot(Z, Z)) > 4.0) {\n            break;\n        }\n        Z = multiply(Z, Z) + p;\n        stepper += 1;\n    }\n    if (stepper == maxRepeats) {\n        //float c =  mod(float(stepper), 255.0);\n        gl_FragColor = vec4(Z.x, Z.y,  0.5, 1.);\n       // gl_FragColor = vec4(0., 0., 0., 1.);\n    } else {\n        gl_FragColor = vec4(0., 0., 0., 1.);\n    }\n  }';

	var GREN = __webpack_require__(3);

	var MandelbrotSet = exports.MandelbrotSet = function (_GREN$IAnimation) {
	    _inherits(MandelbrotSet, _GREN$IAnimation);

	    function MandelbrotSet() {
	        var width = arguments.length <= 0 || arguments[0] === undefined ? 300 : arguments[0];
	        var height = arguments.length <= 1 || arguments[1] === undefined ? 100 : arguments[1];

	        _classCallCheck(this, MandelbrotSet);

	        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(MandelbrotSet).call(this));

	        _this.renderer = new GREN.WebGLRenderer();
	        _this.renderer.setStyle(width, height, 'margin:0px;');
	        _this.gl = _this.renderer.gl;

	        _this.domElement = _this.renderer.canvas;

	        if (_this.renderer.isWebGLSuported === false) {
	            return _possibleConstructorReturn(_this);
	        }

	        _this.vertices = [-0.5, -0.5, -0.5, 0.5, 0.5, 0.5, 0.5, -0.5];
	        _this.indices = [1, 0, 2, 3];
	        _this.indexBuffer = _this.gl.createElementBufferWithData(_this.indices);

	        _this.scale = 1.0;
	        _this.mvMatrix = GREN.Matrix4.identity();
	        GREN.Matrix4.scale(_this.mvMatrix, [_this.renderer.canvasWidth, _this.renderer.canvasHeight, 1]);
	        _this.pMatrix = GREN.Matrix4.orthogonal(-_this.renderer.canvasWidth / 2, _this.renderer.canvasWidth / 2, -_this.renderer.canvasHeight / 2, _this.renderer.canvasHeight / 2, -5000.0, 5000.0);

	        _this._initProgram();

	        _this.startAnimating();
	        return _this;
	    }

	    /**
	     *  初始化着色器
	     */


	    _createClass(MandelbrotSet, [{
	        key: '_initProgram',
	        value: function _initProgram() {
	            this.prg = this.gl.makeProgram(_CommonEffectShader.pixelVS, pixelFS);
	            if (this.prg) {
	                this.prg.setAttribLocations(['vertexPosition']);
	                this.prg.setUniformLocations(['pMatrix', 'mvMatrix', 'screen']);

	                this.gl.uniformMatrix4fv(this.prg.pMatrix, false, this.pMatrix);
	                this.gl.uniform2fv(this.prg.screen, [this.renderer.canvasWidth, this.renderer.canvasHeight]);
	            }
	        }
	    }, {
	        key: 'enterFrame',
	        value: function enterFrame() {
	            // super.enterFrame();
	            // 先设置 clearColor, 后 clear
	            this.gl.clearColor(0.25, 0.25, 0.25, 1.0);
	            this.gl.viewport(0, 0, this.renderer.canvasWidth, this.renderer.canvasHeight);
	            this.gl.clear(this.gl.COLOR_BUFFER_BIT | this.gl.DEPTH_BUFFER_BIT);

	            //透明度混合
	            this.gl.enable(this.gl.BLEND);
	            this.gl.blendFunc(this.gl.SRC_ALPHA, this.gl.ONE_MINUS_SRC_ALPHA);

	            /**
	             *  要达到放大局部的效果,需要缩小顶点坐标值的同时,放大模型视图矩阵,
	             *  直接缩放模型视图矩阵达不到想要的效果,因为着色时没有局部的信息
	             */
	            var newMatrix = GREN.Matrix4.copy(this.mvMatrix);
	            GREN.Matrix4.scale(newMatrix, [this.scale, this.scale, 1.0]);
	            this.gl.uniformMatrix4fv(this.prg.mvMatrix, false, newMatrix);

	            var newVertices = new Float32Array(this.vertices.length);
	            for (var i = 0; i < this.vertices.length; i++) {
	                newVertices[i] = this.vertices[i] / this.scale;
	            }
	            var vertexBuffer = this.gl.createArrayBufferWithTypedArray(newVertices);
	            this.scale += 0.01;

	            this.gl.enableVertexAttribArray(this.prg.vertexPosition);
	            this.gl.bindBuffer(this.gl.ARRAY_BUFFER, vertexBuffer);
	            //这个地方要写在bind后,相当于获取并设置顶点数据
	            this.gl.vertexAttribPointer(this.prg.vertexPosition, 2, this.gl.FLOAT, false, 0, 0);

	            this.gl.bindBuffer(this.gl.ELEMENT_ARRAY_BUFFER, this.indexBuffer);
	            this.gl.drawElements(this.gl.TRIANGLE_STRIP, this.indices.length, this.gl.UNSIGNED_SHORT, 0);
	        }
	    }]);

	    return MandelbrotSet;
	}(GREN.IAnimation);

/***/ }
/******/ ])
});
;