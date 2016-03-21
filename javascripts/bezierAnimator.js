/*
Bezier曲线动画实现步骤
- 计算出曲线绘制点的坐标及角度,将其保存到数组中；
- 执行animateFunc
*/
var bezierFramePoints = new Array();
var bezierFrameIndex = 0;
var _animateFunc;
var bezierFrameHandle;

function excuteBezierAnimation() {
  if (bezierFrameIndex < bezierFramePoints.length) {
    var frameData = bezierFramePoints[bezierFrameIndex];
    _animateFunc(frameData.x, frameData.y, frameData.angle);
    bezierFrameIndex ++;
  }
  else {
    bezierFrameIndex = 0;
  }
  bezierFrameHandle = window.requestAnimationFrame(excuteBezierAnimation);
}

function glBezierAnimate(points, duration, animateFunc) {
  _animateFunc = animateFunc;
  var firstP = points[0];
  //为保证采样足够，先计算控制多边形的总的边长，然后定义步长为 1/总边长
  var adgeArr = new Array();
  var totalStep = calculateControlEdge(points, adgeArr);
  //预先计算好基于步长的各边的x,y的增量
  var step = 1.0/totalStep;
  var drawX, drawY;
  bezierFramePoints = [];
  for (var i=0; i<totalStep; i+=5) {
    var ps = calculateReferenceLine(points, adgeArr, i);
    //计算绘制点的斜边长 及 与X轴的夹角
    var lengthX = ps[1].x - ps[0].x;
    var lengthY = ps[1].y - ps[0].y;

    var sideLength0 = Math.sqrt(lengthX*lengthX + lengthY*lengthY) ;
    var sideLength1 = sideLength0  * (step*i);
    drawX = ps[0].x + (lengthX/sideLength0) * sideLength1;
    drawY = ps[0].y + (lengthY/sideLength0) * sideLength1;
    bezierFramePoints.push({x:drawX, y:drawY, angle:Math.atan2(lengthY, lengthX)});
  }
  window.cancelAnimationFrame(bezierFrameHandle);
  excuteBezierAnimation();

  //计算参考线,
  function calculateReferenceLine(ps, adges, index) {
    var arr = new Array();
    for (var j=0; j<(ps.length-1); j++) {
      var cx = ps[j].x + adges[j].delta.x*index;
      var cy = ps[j].y + adges[j].delta.y*index;
      arr.push({x:cx, y:cy});
    }
    if (arr.length == 2) {
      return arr;
    }
    else {
      var edgeList = new Array();
      var stepNew = step;
      var sideLength = calculateControlEdge(arr, edgeList, stepNew);
      return calculateReferenceLine(arr, edgeList,index);
    }
  }

  //计算控制多边形的边信息及总的边长
  function calculateControlEdge(points, adgeArr) {
    var sideLength = 0;
    for (var i = 1; i < points.length; i++) {
      var lengthX = points[i].x - points[i - 1].x;
      var lengthY = points[i].y - points[i - 1].y;
      var adge = edge();
      adge.length = Math.sqrt(lengthX * lengthX + lengthY * lengthY);
      adge.angleSin = lengthY / adge.length;
      adge.angleCos = lengthX / adge.length;
      sideLength += adge.length;
      adgeArr.push(adge);
    }
    if (!step) {
      step = 1.0 / sideLength;
    }
    for (var i = 1; i < points.length; i++) {
      adgeArr[i - 1].calculateDelta(step);
    }
    return sideLength;
  }
}
