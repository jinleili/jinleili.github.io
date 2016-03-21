function vehicle(context) {
  return {
    //移动速度
    speed: 0,
    speedX: 0,
    speedY: 0,
    //旋转速度
    rotateSpeed: 0.1,
    angle: 0,
    //当前位置
    position: {x:0, y:0},
    image: undefined,
    update: function(targetX, targetY, angle) {
      if (this.image == undefined) {
        this.image = document.createElement("canvas");
        this.image.width = 80;
        this.image.height = 80;
        this.image.background = "#ff0000";
        var m_context = this.image.getContext("2d");

        //绘制车身
        drawCornerRect("#ff2222", 6, 2, 0, 20, 40, m_context);
        drawCornerRect("#ffbbbb", 3, 6, 6, 12, 28, m_context);
        drawCornerRect("#ffe8e8", 3, 9, 11, 6, 18, m_context);
        //前车灯
        drawCornerRect("#ff9999", 2, 4, 0, 5, 3, m_context);
        drawCornerRect("#ff9999", 2, 15, 0, 5, 3, m_context);

        //四个车轮
        drawCornerRect("#666666", 2, 0, 5, 3, 9, m_context);
        drawCornerRect("#666666", 2, 0, 26, 3, 9, m_context);
        drawCornerRect("#666666", 2, 21, 5, 3, 9, m_context);
        drawCornerRect("#666666", 2, 21, 26, 3, 9, m_context);
      }
      var targetAngle = angle - Math.PI/2;
      // var newPosition =
      context.save();
      context.translate(targetX, targetY-12);
      context.rotate(angle+Math.PI/2.0);
      context.drawImage(this.image, 0, 0);
      context.restore();
    }
  };
}
