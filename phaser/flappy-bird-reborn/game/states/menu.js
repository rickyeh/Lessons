
'use strict';
function Menu() {}

Menu.prototype = {
  preload: function() {

  },
  create: function() {
    this.background = this.game.add.sprite(0, 0, 'background');

    // add the ground sprite as a tile
    // and start scrolling in the negative x direction
    this.ground = this.game.add.tileSprite(0, 400, 335, 112, 'ground');
    this.ground.autoScroll(-200, 0);

    // Step 1
    // Create a Group To put the title assets in so they can be manipulated together
    this.titleGroup = this.game.add.group();

    // Step 2
    // Create the title sprite and add it to the group
    this.title = this.game.add.sprite (0, 0, 'title');
    this.titleGroup.add(this.title);

    // Step 3
    // Create the bird sprite and add it to the group
    this.bird = this.game.add.sprite (200, 5, 'bird');
    this.titleGroup.add(this.bird);

    // Step 4
    // Add animation to the bird and start it.
    this.bird.animations.add('flap');
    this.bird.animations.play('flap', 12, true);

    // Step 5
    // Set the origination location of the group
    this.titleGroup.x = 30;
    this.titleGroup.y = 100;

    // Step 6
    // Create an oscillating animatino tween for the group
    this.game.add.tween(this.titleGroup).to({y:115}, 350, Phaser.Easing.Linear.NONE, true, 0, 1000, true);
  
    // Add our start button with a callback
    this.startButton = this.game.add.button(this.game.width/2, 300, 'startButton', this.startClick, this);
    this.startButton.anchor.setTo(0.5, 0.5);
  },
  update: function() {
  },

  startClick: function() {
    // Start button click handler
    this.game.state.start('play');
  }

};

module.exports = Menu;
