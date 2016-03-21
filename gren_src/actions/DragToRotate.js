/*
通过鼠标划动旋转图形
1，记录mousedown的坐标为原点，设置一个距离与弧度的比，如：x轴上50px相当于PI个弧度
2，通过move到的坐标计算与原点在x,y上的偏移量，得到旋转角度，计录下当前坐标做为结束move后的加速度计算
3，mouseup时，通过当前坐标与上一步的坐标差生成当前速度，设定一个加速度，同时生成一个减速动画函数并调用
4，当速度小于等于0时，退出动画调用
*/
function DragToRotate(callBack, pixelToPI_Ratio) {
  this.element = null;
  this.pixelToPI_Ratio = pixelToPI_Ratio;
  this.animationHandler = null;
  this.mouseMoveHandler = this.mouseMove.bind(this);
  this.callBack = callBack;
  this.matrix = null;

  this.mouseDownPoint = {
    "x": 0,
    "y": 0,
  };
  this.lastMovedPoint = null;
  //鼠标移动事伯的触发次数，用于计算速度
  this.movedFrameCount = 0;

  this.speed = {
    "x": 0,
    "y": 0
  };
  this.accelerate = 0.95;


}
DragToRotate.prototype.constructor = DragToRotate;

DragToRotate.prototype.addListner = function (elementId) {
  this.element = document.getElementById(elementId);
  this.element.addEventListener("mouseup", this.mouseUp.bind(this), false);
  this.element.addEventListener("touchend", this.mouseUp.bind(this), false);
  this.element.addEventListener("touchcancel", this.mouseUp.bind(this), false);

  this.element.addEventListener("mousedown", this.mouseDown.bind(this), false);
  this.element.addEventListener("touchstart", this.mouseDown.bind(this), false);
};

DragToRotate.prototype.mouseUp = function () {
  this.element.removeEventListener("touchmove", this.mouseMoveHandler, false);
  this.element.removeEventListener("mousemove", this.mouseMoveHandler, false);

  var upPoint = DragToRotate.getElementInnerPoint(event, this.element);

  //判定是否为点击
  if (upPoint.x || isNaN(this.mouseDownPoint.x)) {
    return;
  }
  this.speed = {
    "x": (upPoint.x - this.mouseDownPoint.x) / this.movedFrameCount,
    "y": (upPoint.y - this.mouseDownPoint.y) / this.movedFrameCount
  };

  requestAnimationFrame(this.enterFrame.bind(this));
};

DragToRotate.prototype.mouseDown = function () {
  cancelAnimationFrame(this.animationHandler);
  this.movedFrameCount = 0;
  this.mouseDownPoint = DragToRotate.getElementInnerPoint(event, this.element);
  this.lastMovedPoint = this.mouseDownPoint;
  this.element.addEventListener("mousemove", this.mouseMoveHandler, false);
  this.element.addEventListener("touchmove", this.mouseMoveHandler, false);
};

DragToRotate.prototype.mouseMove = function () {
  var point = DragToRotate.getElementInnerPoint(event, this.element);
  this.excuteCallBack(point);
  this.movedFrameCount++;
};

DragToRotate.prototype.excuteCallBack = function (cp) {
  var offsetX = (cp.x - this.lastMovedPoint.x);
  var offsetY = cp.x - this.lastMovedPoint.y;
  //计算垂直相交于move方向的旋转轴
  // var b = Math.PI / 2.0 - Math.atan(offsetY / offsetX);
  // var axisY = Math.tan(b) * offsetX;
  // this.callBack(Math.sqrt(offsetX * offsetX + offsetY * offsetY) * this.pixelToPI_Ratio, [
  //   offsetX, axisY, 0
  // ]);

  this.callBack(offsetY * this.pixelToPI_Ratio, offsetX * this.pixelToPI_Ratio);
  // var m = Utils.vectorProduct(this.matrix, [offsetX, offsetY, -30, 0]);
  // this.callBack(offsetX * this.pixelToPI_Ratio, 0);
  this.lastMovedPoint = cp;
};

DragToRotate.prototype.enterFrame = function () {
  if (Math.abs(this.speed.x) < 1 || Math.abs(this.speed.y) < 1) {
    cancelAnimationFrame(this.animationHandler);
  } else {
    var newPoint = {
      "x": this.lastMovedPoint.x + this.speed.x,
      "y": this.lastMovedPoint.x + this.speed.y
    };
    this.speed.x *= this.accelerate;
    this.speed.y *= this.accelerate;
    this.excuteCallBack(newPoint);
    this.animationHandler = requestAnimationFrame(this.enterFrame.bind(this));
  }
};

DragToRotate.getElementInnerPoint = function (e, element) {
  var rect = element.getBoundingClientRect();
  return {
    "x": (e.pageX - rect.left),
    "y": (canY = e.pageY - rect.top)
  };
};
// module.exports = DragToRotate;
