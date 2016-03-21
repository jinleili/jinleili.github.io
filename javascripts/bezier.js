
function glDrawBezierCurve(points, context, showEdge) {
  var firstP = points[0];
  var lastP = points[points.length - 1];
  //为保证采样足够，先计算控制多边形的总的边长，然后定义步长为 1/总边长
  var adgeArr = new Array();
  var totalStep = calculateControlEdge(points, adgeArr);
  //预先计算好基于步长的各边的x,y的增量
  var step = 1.0/totalStep;

  // 控制边
  if (showEdge) {
    context.beginPath();
    context.strokeStyle = "#666666";
    context.moveTo(firstP.x, firstP.y);
    for (var i=1; i<points.length; i++) {
      context.lineTo(points[i].x, points[i].y);
    }
    context.stroke();
  }

  //绘制
  context.beginPath();
  context.strokeStyle = "#ffffff";
  context.moveTo(firstP.x, firstP.y);
  var drawX, drawY;

  for (var i=0; i<totalStep; i+=5) {
    var ps = calculateReferenceLine(points, adgeArr, i, context, step);
    //计算绘制点的斜边长 及 与X轴的夹角
    var lengthX = ps[1].x - ps[0].x;
    var lengthY = ps[1].y - ps[0].y;

    var sideLength0 = Math.sqrt(lengthX*lengthX + lengthY*lengthY) ;
    var sideLength1 = sideLength0  * (step*i);
    drawX = ps[0].x + (lengthX/sideLength0) * sideLength1;
    drawY = ps[0].y + (lengthY/sideLength0) * sideLength1;
    context.lineTo(drawX, drawY);
  }
  context.stroke();

  //计算参考线,
  function calculateReferenceLine(ps, adges, index) {
    var arr = new Array();
    for (var j=0; j<(ps.length-1); j++) {
      var cx = ps[j].x + adges[j].delta.x*index;
      var cy = ps[j].y + adges[j].delta.y*index;
      arr.push({x:cx, y:cy});
    }
    if (arr.length == 2) {
      // context.save();
      // context.beginPath();
      // context.strokeStyle = "#ff0000";
      // context.moveTo(arr[0].x, arr[0].y);
      // context.lineTo(arr[1].x, arr[1].y);
      // context.stroke();

      return arr;
    }
    else {
    //   context.save();
    //   context.beginPath();
    //   context.strokeStyle = "#ffffff";
    //  context.moveTo(arr[0].x, arr[0].y);
    //   for (var i=1; i<arr.length; i++) {
    //     context.lineTo(arr[i].x, arr[i].y);
    //   }
    //   context.stroke();
      var edgeList = new Array();
      var stepNew = step;
      var sideLength = calculateControlEdge(arr, edgeList, stepNew);
      return calculateReferenceLine(arr, edgeList,index, context);
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


//定义边
function edge() {
 return {
   point0: {x:0, y:0},
   point1: {x:0, y:0},
   length: 0,
   angleCos: 0,
   angleSin: 0,
   delta: {x:0, y:0},//x,y的增量
   calculateDelta: function(step) {
     this.delta.x = step * this.length * this.angleCos;
     this.delta.y = step * this.length * this.angleSin;
   },
 }
}
