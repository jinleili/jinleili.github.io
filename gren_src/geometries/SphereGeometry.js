/*
第一个顶点是正Y轴上的半径值，最后一个顶点是负半径值
旋转Z轴画一半圆，取得半圆上点的集合（想像成地球仪，除去上下两个顶点，中间有gridLines个点，弧度为 PI/(gridLines+1)）；
旋转Y轴计算新的集合(按照上一步中计算出的弧度计算，径向应该是有 【gridLines*2 + 2】 条边)；
所有的点集合就是圆的顶点；

生成triangle顶点索引：沿Y轴从上至下一圈圈计算triangle顶点索引
第一个顶点做原点，计算第一圈的三角形
for {
  上一排的顶点做原点，与当前排的当前顶点及下一个顶点组成triangle
}
最后一个顶点做原点，计算最后一圆的三角形
*/
function SphereGeometry(radius, gridLines) {
  this.radius = radius || 5;
  //切面线的条数
  this.gridLines = gridLines || 8;
  //起始节点
  this.leading = {
    "x": 0,
    "y": this.radius,
    "z": 0,
    "index": 0
  };
  //终节点
  this.trailing = {
    "x": 0,
    "y": (-this.radius),
    "z": 0,
    "index": (this.gridLines * (this.gridLines * 2 + 2) + 1)
  };

  this.vertices = [];
  this.vertexGroup = [];

  this.normals = [];

  this.calculateVertices();
}

SphereGeometry.prototype.constructor = SphereGeometry;

SphereGeometry.prototype.calculateVertices = function() {
  this.step = Math.PI / (this.gridLines + 1);
  var semiCircle = new Array(this.gridLines);
  var pi_2 = Math.PI / 2.0;
  for (var i = 0; i < this.gridLines; i++) {
    var dot = [0, 0, 0, 1];
    dot[0] = Math.cos((i + 1) * this.step + pi_2) * this.radius;
    dot[1] = Math.sin((i + 1) * this.step + pi_2) * this.radius;
    semiCircle[i] = dot;
  }
  this.vertexGroup[0] = semiCircle;

  var nMatrix = mat4.identity(mat4.create());
  for (var j = 1; j < (this.gridLines * 2 + 2); j++) {
    //得到旋转矩阵
    var rotateYMat;
    // rotateYMat = mat4.rotateY(nMatrix, nMatrix, j * this.step);
    rotateYMat = Utils.rotateYMatrix(j * this.step);
    var newSemiCircle = new Array(this.gridLines);
    for (var m = 0; m < semiCircle.length; m++) {
      newSemiCircle[m] = Utils.vectorProduct(rotateYMat, semiCircle[m]);
    }
    this.vertexGroup[j] = newSemiCircle;
  }

  this.vertices.push(this.leading.x, this.leading.y, this.leading.z);
  for (var k = 0; k < this.vertexGroup.length; k++) {
    var arr = this.vertexGroup[k];
    for (var n = 0; n < arr.length; n++) {
      var item = arr[n];
      this.vertices.push(item[0], item[1], item[2]);
    }
  }
  this.vertices.push(this.trailing.x, this.trailing.y, this.trailing.z);
};

//线段的索引
SphereGeometry.prototype.getLinesIndices = function() {
  return this.calculateIndices(0);
};

//三角形的索引
SphereGeometry.prototype.getTriangleIndices = function() {
  return this.calculateIndices(1);
};

//计算图元索引:LINES＝0，TRIANGLES＝1
SphereGeometry.prototype.calculateIndices = function(type) {
  var indices = [];

  this.calculateLeadingTrailingPrimitive(indices, 0, 0, type);

  // for (var loop = 0; loop < (this.gridLines - 1); loop++) {
  //   var indexOffset = loop + 1;
  //   for (var l = 0; l < this.vertexGroup.length; l++) {
  //     var vIndex = l * this.gridLines + indexOffset;
  //     var bottomRightIndex =
  //       (l < this.vertexGroup.length - 1 ? (vIndex + 1 + this.gridLines) : indexOffset);
  //     if (type === 0) {
  //       indices.push(vIndex, vIndex + 1);
  //       indices.push(vIndex, bottomRightIndex);
  //       indices.push(vIndex + 1, bottomRightIndex);
  //     } else {
  //       indices.push(vIndex, vIndex + 1, bottomRightIndex);
  //       indices.push(vIndex, vIndex + 1 + this.gridLines, vIndex + this.gridLines);
  //     }
  //   }
  // }

  this.calculateLeadingTrailingPrimitive(indices, (this.vertices.length / 3 - 1), this.gridLines -
    1, type);

  return indices;
};

//计算头尾连接两个触点的图元索引:LINES＝0，TRIANGLES＝1
SphereGeometry.prototype.calculateLeadingTrailingPrimitive = function(out, vIndex,
  selectIndex,
  type) {
  var verticleLines = this.vertexGroup.length;

  for (var i = 0; i < verticleLines; i++) {
    var next = i + 1;
    if (next == verticleLines) {
      next = 0;
    }
    var currentIndex = this.gridLines * i + 1 + selectIndex;
    var nextIndex = this.gridLines * next + 1 + selectIndex;
    if (type === 0) {
      out.push(vIndex, currentIndex);
      out.push(currentIndex, nextIndex);
    } else {
      out.push(vIndex, currentIndex, nextIndex);
    }
  }
};

// module.exports = Ball;
