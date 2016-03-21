var canvas = document.getElementById("canvas");
var ctx = canvas.getContext('2d');

ctx.canvas.height  = 80 ;

var canvasWidth = canvas.offsetWidth;
var canvasHeight = canvas.offsetHeight;
var centerX = canvasWidth/2.0, centerY = canvasHeight/2.0;
var currentX, currentY, currentAngle;

var rawWidth = 20, rawHeight = 30;

function glCanvas(ctx, cvs) {
  return {
    element: cvs,
    context: ctx,
    canvasWidth: cvs.offsetWidth,
    canvasHeight: cvs.offsetHeight,
  };
}

function getCanvasByID(tagID) {
  var cvs = document.getElementById(tagID);
  cvs.retinaResolutionEnabled = true;
  cvs.MSAAEnabled = true;
  cvs.MSAASamples = 2;

  cvs.width = cvs.offsetWidth * window.devicePixelRatio;
  cvs.height = cvs.offsetHeight * window.devicePixelRatio;
  cvs.style.width = cvs.offsetWidth  + 'px';
  cvs.style.height = cvs.offsetHeight + 'px';

  var context = cvs.getContext('2d');
  context.scale(window.devicePixelRatio, window.devicePixelRatio);

  return glCanvas(context, cvs);
}

//监听鼠标按下事件
canvas.addEventListener("mousedown", mouseDown, false);

function mouseDown() {
  var e = event;
  var rect = canvas.getBoundingClientRect();
  var canX = e.pageX - rect.left;
  var canY = e.pageY - rect.top;
  fire(canX, canY);
}

function fire(canX, canY) {

}

function setCanvasScaleIfNeeds() {
  if (window.devicePixelRatio > 1) {
    canvas.width = canvasWidth * window.devicePixelRatio;
    canvas.height = canvasHeight * window.devicePixelRatio;
    canvas.style.width = canvasWidth  + 'px';
    canvas.style.height = canvasHeight + 'px';
    ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
  }
}

//绘制箭头
function drawARow(px, py, angle) {
  currentX = px;
  currentY = py;
  currentAngle = angle;

  ctx.save();
  ctx.fillStyle = "#ff0000";
  ctx.strokeStyle = "#000000";
  ctx.translate(px, py);
  //因为绘制的是向上的箭头，旋转角度是从横向X轴开始算的
  ctx.rotate(angle + Math.PI/2);
  ctx.beginPath();
  ctx.moveTo(0, -rawHeight/2);
  ctx.lineTo(rawWidth/2, 0);
  ctx.lineTo(rawWidth/4, 0);
  ctx.lineTo(rawWidth/4, rawHeight/2);
  ctx.lineTo(-rawWidth/4, rawHeight/2);
  ctx.lineTo(-rawWidth/4, 0);
  ctx.lineTo(-rawWidth/2, 0);
  ctx.lineTo(0,  -rawHeight/2);
  ctx.fill();

  ctx.restore();
}

//绘制圆
function drawACircle(fillColor, cX, cY, radius) {
  ctx.save();
  ctx.translate(cX, cY);
  ctx.fillStyle = fillColor;
  //IE包括目前的Edge都不支持Path2D
  // var pin = new Path2D();
  // pin.arc(0, 0, radius, 0, 2 * Math.PI, false);
  // ctx.fill(pin);
  ctx.beginPath();
  ctx.arc(0, 0, radius, 0, 2 * Math.PI, false);
  ctx.fill();
  ctx.restore();
}

//绘制圆角
function drawCornerRect(fillColor, cornerRadius, startX, startY, width, height, context) {
  if ((!context) || context == undefined) {
    context = ctx;
  }
  context.fillStyle = fillColor;
  var x=startX, y=startY;
  context.beginPath();
  context.moveTo(x + cornerRadius, y);
  context.lineTo(x + width - cornerRadius, y);
  context.quadraticCurveTo(x + width, y, x + width, y + cornerRadius);
  context.lineTo(x + width, y + height - cornerRadius);
  context.quadraticCurveTo(x + width, y + height, x + width - cornerRadius, y + height );
  context.lineTo(x + cornerRadius, y + height);
  context.quadraticCurveTo(x, y + height, x, y + height - cornerRadius);
  context.lineTo(x, y + cornerRadius);
  context.quadraticCurveTo(x, y, x + cornerRadius, y);
  context.closePath();
  context.fill();
}

function drawCanvasBackground(context) {
  if ((!context) || context == "undefine") {
    context = ctx;
  }
  drawCornerRect(backgroundColor, 3, 0, 0, canvasWidth, canvasHeight, context);
}

//生成椭圆绘制路径
function createEllipsePath(context, w, h) {
  var k = 0.5522848;
  var radiusX = w/2.0;
  var radiusY = h/2.0;
  context.moveTo(0, -radiusY);
  context.bezierCurveTo(-radiusX*k, -radiusY, -radiusX, -radiusY*k, -radiusX, 0);
  context.bezierCurveTo(-radiusX, radiusY*k, -radiusX*k, radiusY, 0, radiusY);
  context.bezierCurveTo(radiusX*k, radiusY, radiusX, radiusY*k, radiusX, 0);
  context.bezierCurveTo(radiusX, -radiusY*k, radiusX*k, -radiusY, 0, -radiusY);
}
