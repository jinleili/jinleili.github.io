/*
3d 对象，包括场景，灯光，摄像机，群组，线条 等等
*/

// var utils = require('../common/utils.js');

GREN.Object3D = function() {
  Object.defineProperty(this, 'id', {
    value: GREN.utils.bject3DIdCount++
  });

  this.parent = undefined;
  this.children = [];
};

GREN.Object3D.prototype.constructor = GREN.Object3D;
// module.exports = GREN.Object3D;
