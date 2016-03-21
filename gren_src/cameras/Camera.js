GREN.Camera = function() {
  GREN.Object3D.call(this);

  this.type = 'Camera';

  this.projectionMatrix = new Matrix4();
};

// GREN.Camera.prototype = Object.create(GREN.Object3D.prototype);
GREN.Camera.prototype.constructor = GREN.Camera;

// module.exports = GREN.Camera;
