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

  this.alive = false;

  // Add physics
  this.game.physics.arcade.enableBody(this);
  this.body.allowGravity = false;

  // Add Sound
  this.flapSound = this.game.add.audio('flap');
};

Bird.prototype = Object.create(Phaser.Sprite.prototype);
Bird.prototype.constructor = Bird;

Bird.prototype.update = function() {
  
  // Check to see if our angle is less than 90.  If so, rotate bird toward ground by 2.5 deg
  if (this.angle < 90  && this.alive) {
    this.angle += 2.5;
  }
};

Bird.prototype.flap = function() {
    this.flapSound.play();

    // Launch bird upward on flap
    this.body.velocity.y = -400;

    //rotate the bird to -40 deg
    this.game.add.tween(this).to({angle: -40}, 100).start();
};

module.exports = Bird;
