(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

//global variables
window.onload = function () {
  var game = new Phaser.Game(288, 505, Phaser.AUTO, 'flappy-bird-reborn');

  // Game States
  game.state.add('boot', require('./states/boot'));
  game.state.add('menu', require('./states/menu'));
  game.state.add('play', require('./states/play'));
  game.state.add('preload', require('./states/preload'));
  

  game.state.start('boot');
};
},{"./states/boot":7,"./states/menu":8,"./states/play":9,"./states/preload":10}],2:[function(require,module,exports){
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
  if (this.alive) {
    this.flapSound.play();

    // Launch bird upward on flap
    this.body.velocity.y = -400;

    //rotate the bird to -40 deg
    this.game.add.tween(this).to({angle: -40}, 100).start();
  }
};

module.exports = Bird;

},{}],3:[function(require,module,exports){
'use strict';

var Ground = function(game, x, y, width, height) {
  Phaser.TileSprite.call(this, game, x, y, width, height, 'ground');

  // Enable physics on ground sprite, needed for collision detection
  this.game.physics.arcade.enableBody(this);

  // Start scrolling our ground
  this.autoScroll(-200, 0);

  this.body.allowGravity = false;
  this.body.immovable = true;
  
};

Ground.prototype = Object.create(Phaser.TileSprite.prototype);
Ground.prototype.constructor = Ground;

Ground.prototype.update = function() {
  
  // write your prefab's specific update code here
  
};

module.exports = Ground;

},{}],4:[function(require,module,exports){
'use strict';

var Pipe = function(game, x, y, frame) {
  Phaser.Sprite.call(this, game, x, y, 'pipe', frame);

  this.anchor.setTo(0.5,0.5);
  this.game.physics.arcade.enableBody(this);

  this.body.allowGravity = false;
  this.body.immovable = true;
};

Pipe.prototype = Object.create(Phaser.Sprite.prototype);
Pipe.prototype.constructor = Pipe;

Pipe.prototype.update = function() {
  
  // write your prefab's specific update code here
  
};

module.exports = Pipe;

},{}],5:[function(require,module,exports){
'use strict';

var Pipe = require('./pipe');

var PipeGroup = function(game, parent) {
    Phaser.Group.call(this, game, parent);

    this.topPipe = new Pipe(this.game, 0, 0, 0);
    this.add(this.topPipe);

    this.bottomPipe = new Pipe(this.game, 0, 440, 1);
    this.add(this.bottomPipe);

    this.hasScored = false;

    this.setAll('body.velocity.x', -200);

    this.pipeHit = this.game.add.audio('pipeHit');
};

PipeGroup.prototype = Object.create(Phaser.Group.prototype);
PipeGroup.prototype.constructor = PipeGroup;

PipeGroup.prototype.update = function() {
    //this.checkWorldBounds();
};

PipeGroup.prototype.reset = function(x, y) {
    // Step 1
    this.topPipe.reset(0, 0);

    // Step 2
    this.bottomPipe.reset(0, 440);

    // Step 3
    this.x = x;
    this.y = y;

    // Step 4
    this.setAll('body.velocity.x', -200);

    // Step 5
    this.hasScored = false;

    // Step 6
    this.exists = true;
};

PipeGroup.prototype.checkWorldBounds = function() {
    if (!this.topPipe.inWorld) {
        this.exists = false;
    }
};

PipeGroup.prototype.stop = function() {
    this.setAll('body.velocity.x', 0);
    this.pipeHit.play();
}

module.exports = PipeGroup;
},{"./pipe":4}],6:[function(require,module,exports){
'use strict';

var Scoreboard = function(game) {
    var gameover;

    Phaser.Group.call(this, game);

    gameover = this.create(this.game.width / 2, 100, 'gameover');
    gameover.anchor.setTo(0.5, 0.5);

    this.scoreboard = this.create(this.game.width / 2, 200, 'scoreboard');
    this.scoreboard.anchor.setTo(0.5, 0.5);

    this.scoreText = this.game.add.bitmapText(this.scoreboard.width, 180, 'flappyfont', '', 18);
    this.add(this.scoreText);

    this.bestScoreText = this.game.add.bitmapText(this.scoreboard.width, 230, 'flappyfont', '', 18);
    this.add(this.bestScoreText);

    // add our start button with a callback
    this.startButton = this.game.add.button(this.game.width/2, 300, 'startButton', this.startClick, this);
    this.startButton.anchor.setTo(0.5, 0.5);

    this.add(this.startButton);

    this.y = this.game.height;
    this.x = 0;
  
};

Scoreboard.prototype = Object.create(Phaser.Group.prototype);
Scoreboard.prototype.constructor = Scoreboard;

Scoreboard.prototype.update = function() {
};

Scoreboard.prototype.show = function(score) {
    var medal, bestScore;

    // Step 1
    this.scoreText.setText(score.toString());
    if(!!localStorage) {
        // Step 2
        bestScore = localStorage.getItem('bestScore');
    }

    // Step 3
    if(!bestScore || bestScore < score) {
        bestScore = score;
        localStorage.setItem('bestScore', bestScore);
    }

    //Step 4
    this.bestScoreText.setText(bestScore.toString());

    // Step 5 and 6
    if (score >= 10 && score < 20) {
        medal = this.game.add.sprite(-65, 7, 'medals', 0);
        medal.anchor.setTo(0.5, 0.5);
        this.scoreboard.addChild(medal);
    } else if (score >= 20) {
        medal = this.game.add.sprite(-65, 7, 'medals', 1);
        medal.anchor.setTo(0.5, 0.5);
        this.scoreboard.addChild(medal);
    }

    // Step 7
    // if (medal) {

    //     var emitter = this.game.add.emitter(medal.x, medal.y, 200);
    //     this.scoreboard.addChild(emitter);
    //     emitter.width = medal.width;
    //     emitter.height = medal.height;

    //     emitter.makeParticles('particle');

    //     emitter.setRotation(-100, 100);
    //     emitter.setXSpeed(0,0);
    //     emitter.setYSpeed(0,0);
    //     emitter.minParticleScale = 0.25;
    //     emitter.maxParticleScale = 0.5;
    //     emitter.setAll('body.allowGravity', false);

    //     emitter.start(false, 1000, 1000);
    // }
    this.game.add.tween(this).to({y: 0}, 1000, Phaser.Easing.Bounce.Out, true);
};

Scoreboard.prototype.startClick = function() {
    this.game.state.start('play');
}

module.exports = Scoreboard;

},{}],7:[function(require,module,exports){

'use strict';

function Boot() {
}

Boot.prototype = {
  preload: function() {
    this.load.image('preloader', 'assets/preloader.gif');
  },
  create: function() {
    this.game.input.maxPointers = 1;
    this.game.state.start('preload');
  }
};

module.exports = Boot;

},{}],8:[function(require,module,exports){

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

},{}],9:[function(require,module,exports){

  'use strict';

  var Bird = require('../prefabs/bird');
  var Ground = require('../prefabs/ground');
  var PipeGroup = require('../prefabs/pipeGroup');
  var Scoreboard = require('../prefabs/scoreboard');

  function Play() {}

  Play.prototype = {

    create: function() {
      this.game.physics.startSystem(Phaser.Physics.ARCADE);
      this.game.physics.arcade.gravity.y = 1200;

      // Add Background sprite
      this.background = this.game.add.sprite(0,0,'background');

      // Create a new bird object
      // and add it to the game
      this.bird = new Bird(this.game, 100, this.game.height/2);
      this.game.add.existing(this.bird);

      // Create and add a group to hold our pipeGroup prefabs
      this.pipes = this.game.add.group();

      // Create and Add new Ground Obj
      this.ground = new Ground(this.game, 0, 400, 335, 112);
      this.game.add.existing(this.ground);

      // Keep spacebar from propogating up to the browser
      this.game.input.keyboard.addKeyCapture(Phaser.Keyboard.SPACEBAR);

      // Add keyboard controls
      // this.flapKey = this.game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
      // this.flapKey.onDown.addOnce(this.startGame, this);
      // this.flapKey.onDown.add(this.bird.flap, this.bird);

      // add mouse/touch controls
      this.game.input.onDown.addOnce(this.startGame, this);
      this.game.input.onDown.add(this.bird.flap, this.bird);

      this.instructionGroup = this.game.add.group();
      this.instructionGroup.add(this.game.add.sprite(this.game.width/2, 100, 'getReady'));
      this.instructionGroup.add(this.game.add.sprite(this.game.width/2, 325, 'instructions'));
      this.instructionGroup.setAll('anchor.x', 0.5);
      this.instructionGroup.setAll('anchor.y', 0.5);

      this.score = 0;

      this.scoreText = this.game.add.bitmapText(this.game.width/2, 10, 'flappyfont', this.score.toString(), 24);
      this.scoreText.visible = false;

      this.scoreSound = this.game.add.audio('score');
    },

    update: function() {
      this.game.physics.arcade.collide(this.bird, this.ground, this.deathHandler, null, this);

      // enable collisions between the bird an deach group in the pipes group
      this.pipes.forEach(function(pipeGroup) {
        this.checkScore(pipeGroup);
        this.game.physics.arcade.collide(this.bird, pipeGroup, this.deathHandler, null, this);
      }, this);
    },

    generatePipes: function() {
      var pipeY = this.game.rnd.integerInRange(-100 , 100);
      var pipeGroup = this.pipes.getFirstExists(false);

      pipeGroup = new PipeGroup(this.game, this.pipes);

      if(!pipeGroup) {
        pipeGroup = new PipeGroup(this.game, this.pipes);
      }

      pipeGroup.reset(this.game.width + pipeGroup.width/2, pipeY);
      pipeGroup.x = this.game.width;
      pipeGroup.y = pipeY;
    },

    deathHandler: function() {
      if (this.bird.alive){
        this.bird.body.velocity.x = 0;
        this.bird.alive = false;
        this.bird.animations.stop();
        this.pipes.callAll('stop');
        this.pipeGenerator.timer.stop();
        this.ground.stopScroll();

        this.scoreboard = new Scoreboard(this.game);
        this.game.add.existing(this.scoreboard);
        this.scoreboard.show(this.score);
      }
    },

    shutdown: function() {
      this.game.input.keyboard.removeKey(Phaser.Keyboard.SPACEBAR);
      this.bird.destroy();
      this.pipes.destroy();
      this.scoreboard.destroy();
    },

    startGame: function() {
      this.bird.body.allowGravity = true;
      this.bird.alive = true;

      // Add a timer
      this.pipeGenerator = this.game.time.events.loop( Phaser.Timer.SECOND * 1.25, this.generatePipes, this);
      this.pipeGenerator.timer.start();

      this.scoreText.visible = true;

      this.instructionGroup.destroy();
    },

    checkScore: function(pipeGroup) {
      if(pipeGroup.exists && !pipeGroup.hasScored && pipeGroup.topPipe.world.x <= this.bird.world.x) {
        pipeGroup.hasScored = true;
        this.score++;
        this.scoreText.setText(this.score.toString());
        this.scoreSound.play();
      }
    }
  };
  
  module.exports = Play;
},{"../prefabs/bird":2,"../prefabs/ground":3,"../prefabs/pipeGroup":5,"../prefabs/scoreboard":6}],10:[function(require,module,exports){
'use strict';

function Preload() {
  this.asset = null;
}

Preload.prototype = {
  preload: function() {
    this.asset = this.add.sprite(this.game.width / 2, this.game.height / 2, 'preloader');
    this.asset.anchor.setTo(0.5, 0.5);
    this.load.onLoadComplete.addOnce(this.onLoadComplete, this);
    this.load.setPreloadSprite(this.asset);

    this.load.image('background', 'assets/background.png');
    this.load.image('ground', 'assets/ground.png');
    this.load.image('title', 'assets/title.png');
    this.load.image('startButton', 'assets/start-button.png');

    this.load.spritesheet('bird', 'assets/bird.png', 34, 24, 3);
    this.load.spritesheet('pipe', 'assets/pipes.png', 54, 320, 2);

    this.load.image('instructions', 'assets/instructions.png');
    this.load.image('getReady', 'assets/get-ready.png');

    this.load.bitmapFont('flappyfont', 'assets/fonts/flappyfont/flappyfont.png', 'assets/fonts/flappyfont/flappyfont.fnt');
  
    this.load.audio('score', 'assets/score.wav');
    this.load.audio('flap', 'assets/flap.wav');
    this.load.audio('pipeHit', 'assets/pipe-hit.wav');

    this.load.image('scoreboard', 'assets/scoreboard.png');
    this.load.image('gameover', 'assets/gameover.png');
    this.load.spritesheet('medals', 'assets/medals.png', 44, 46, 2);
    this.load.image('particle', 'assets/particle.png');
  },
  create: function() {
    this.asset.cropEnabled = false;
  },
  update: function() {},
  onLoadComplete: function() {
    this.game.state.start('menu');
  }
};

module.exports = Preload;
},{}]},{},[1])