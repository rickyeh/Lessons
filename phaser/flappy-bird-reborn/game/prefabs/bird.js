'use strict';

var Bird = function(game, x, y, frame) {
  // initialize your prefab here
  // The super call to Phaser.Sprite
  Phaser.Sprite.call(this, game, x, y, 'bird', frame);

  // set the Sprite's Anchor to center
  this.anchor.setTo(0.5, 0.5);

  // Add and play animations
  this.animations.add('flap');
  this.animations.play('flap', 12, true);

  // Add physics
  this.game.physics.arcade.enableBody(this);
  this.enableBody = true;
};

Bird.prototype = Object.create(Phaser.Sprite.prototype);
Bird.prototype.constructor = Bird;

Bird.prototype.update = function() {
  
  // write your prefab's specific update code here
};

Bird.prototype.flap = function() {
    this.body.velocity.y = -400;
};
module.exports = Bird;
