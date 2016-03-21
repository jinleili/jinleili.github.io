var Box2 = function(webglContext, prg, window_width, window_Height, width, height,
  offsetX) {
  this.window_Height = window_Height;
  this.halfWindowX = window_width / 2.0;
  this.halfWindowY = window_Height / 2.0;
  this.width = width;
  this.height = height;

  //通过平移Y轴来实现这个动画
  this.translateY = 0;

  this.speed = 0;
  this.needsUpdate = false;

  this.isBufferBinded = false;

  this.gl = webglContext;
  this.prg = prg;
  this.vertices = [];
  this.indices = [];
  this.vetexBuffer = null;
  this.indexBuffer = null;
  this.baseMVMatrix = mat4.create();
  this.mvMatrix = mat4.create();
  this.pMatrix = mat4.create();

  this.mvMatrixList = [];
  this.frameIndex = 0;

  this.initBuffers();
  /*
   得到满屏模型视图矩阵
   这里的这个0.5需要与下边的顶点一致
  */
  mat4.translate(this.baseMVMatrix, this.baseMVMatrix, [0.0, 0.0, -0.5]);
  mat4.scale(this.baseMVMatrix, this.baseMVMatrix, [1, window_Height / window_width, 1]);
  //再缩放成想要的状态
  mat4.scale(this.baseMVMatrix, this.baseMVMatrix, [width / window_width, height /
    window_Height, 1
  ]);
  // 平移到X,Y轴向上的正确位置
  mat4.translate(this.baseMVMatrix, this.baseMVMatrix, [(offsetX - this.halfWindowX) /
    this.width,
    1, 0
  ]);

  this.reset();
};

Box2.prototype.reset = function() {
  this.speed = 0.001;
  this.currentHeight = 0;
  this.translateY = 0;
  this.needsUpdate = true;
  this.frameIndex = 0;
  this.mvMatrixList = [];

  this.generateMVMatrixArray();
};

Box2.prototype.updateMVMatrix = function() {
  if (this.frameIndex < this.mvMatrixList.length) {
    this.mvMatrix = this.mvMatrixList[this.frameIndex];
    this.frameIndex++;
  }
};

//以左上角为原点的像素值，需要在这里转化为以中心点为原点平移的矩阵
Box2.prototype.generateMVMatrixArray = function() {
  if (this.translateY === -1) {
    this.needsUpdate = false;
    return;
  }
  this.translateY -= this.speed;
  if (this.translateY < -1) {
    this.translateY = -1;
  }
  this.speed += (Math.random() * 0.001 + 0.0005);
  var matrix = mat4.create();
  mat4.translate(matrix, this.baseMVMatrix, [0, this.translateY, 0]);
  this.mvMatrixList.push(matrix);
  this.generateMVMatrixArray();
};

Box2.prototype.initBuffers = function() {
  // this.vertices = [-1, -1, 0, -1, 1, 0, 1, 1, 0, 1, -1, 0];
  this.vertices = [-0.5, -0.5, 0, -0.5, 0.5, 0, 0.5, 0.5, 0, 0.5, -0.5, 0];

  this.indices = [0, 1, 2, 0, 2, 3];
  // this.indices = [0, 1, 0, 2, 2, 3];

  this.vetexBuffer = this.gl.createBuffer();
  this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.vetexBuffer);
  this.gl.bufferData(this.gl.ARRAY_BUFFER, new Float32Array(this.vertices), this.gl.STATIC_DRAW);

  this.indexBuffer = this.gl.createBuffer();
  this.gl.bindBuffer(this.gl.ELEMENT_ARRAY_BUFFER, this.indexBuffer);
  this.gl.bufferData(this.gl.ELEMENT_ARRAY_BUFFER, new Uint16Array(this.indices), this.gl
    .STATIC_DRAW);

  this.gl.bindBuffer(this.gl.ELEMENT_ARRAY_BUFFER, null);
  this.gl.bindBuffer(this.gl.ARRAY_BUFFER, null);
};

Box2.prototype.update = function() {
  this.updateMVMatrix();

  this.gl.uniformMatrix4fv(this.prg.mvMatrixUniform, false, this.mvMatrix);

  if (bindCount === 0) {
    this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.vetexBuffer);
    this.gl.vertexAttribPointer(this.prg.aVertexPosition, 3, this.gl.FLOAT, false, 0, 0);
    this.gl.enableVertexAttribArray(this.prg.vertexPositionAttribute);

    this.gl.bindBuffer(this.gl.ELEMENT_ARRAY_BUFFER, this.indexBuffer);
    this.isBufferBinded = true;
    bindCount += 1;
  }
  this.gl.drawElements(this.gl.TRIANGLES, this.indices.length, this.gl.UNSIGNED_SHORT,
    0);
  // this.gl.drawElements(this.gl.LINES, this.indices.length, this.gl.UNSIGNED_SHORT, 0);

};
