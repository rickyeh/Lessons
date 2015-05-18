window.onload = function() {
    var game = new Phaser.Game(800, 600, Phaser.AUTO);
    var ninja;
    var ninjaGravity = 800;
    var ninjaJumpPower;

    var score = 0;
    var scoreText;
    var topScore;

    var powerBar;
    var powerTween;

    var placedPoles;
    var poleGroup;
    var minPoleGap = 100;
    var maxPoleGap = 300;

    var ninjaJumping;
    var ninjaFallingDown;

    var play = function(game) {};

    play.prototype = {
        preload: function() {
            game.load.image('ninja', 'ninja.png');
            game.load.image('pole', 'pole.png');
            game.load.image('powerbar', 'powerbar.png');
            game.load.image('sky', 'sky.png');
        },
        create: function() {
            game.stage.backgroundColor = '#87CEEB'; // Set background color
            game.add.sprite(0, 0, 'sky'); // Add sky color

            ninjaJumping = false;
            ninjaFallingDown = false;
            score = 0;
            placedPoles = 0;
            poleGroup = game.add.group();

            topScore = localStorage.getItem('topNinjaScore') === null?0:localStorage.getItem('topNinjaScore');
            scoreText = game.add.text(10, 10, '-', {
                font:'bold 16px Arial'
            });
            updateScore();

            game.physics.startSystem(Phaser.Physics.ARCADE); // Start physics engine

            ninja = game.add.sprite(80, 0, 'ninja'); // Add the main ninja sprite, a cube
            ninja.anchor.set(0.5);
            ninja.lastPole = 1;

            game.physics.arcade.enable(ninja);
            ninja.body.gravity.y = ninjaGravity;

            addPole(80);
        },
        update: function() {
            game.physics.arcade.collide(ninja, poleGroup, checkLanding);
        }
    };
    game.state.add('play', play);
    game.state.start('play');

    function updateScore() {
        scoreText.text = 'Score: ' + score + '\nBest: ' + topScore;
    }

    function prepareToJump() {

    }

    function jump() {

    }

    function addNewPoles() {

    }

    function addPole(poleX) {
        console.log('addPole called');

        if (poleX < game.width * 2) {
            placedPoles++;

            var pole = new Pole(game, poleX, game.rnd.between(250, 380));
            game.add.existing(pole);
            pole.anchor.set(0.5, 0);
            poleGroup.add(pole);

            //var nextPolePosition = poleX + game.rnd.between(minPoleGap, maxPoleGap);
            //addPole(nextPolePosition);
        }
    }

    function die() {

    }

    function checkLanding(n,p) { // ninja, pole

    }

    var Pole = function(game, x, y) {
        Phaser.Sprite.call(this, game, x, y, 'pole');
        game.physics.enable(this, Phaser.Physics.ARCADE);

        this.body.immovable = true;
        this.poleNumber = placedPoles;
    };
    Pole.prototype = Object.create(Phaser.Sprite.prototype);
    Pole.prototype.constructor = Pole;
    Pole.prototype.update = function() {
        if (ninjaJumping && !ninjaFallingDown) {
            this.body.velocity.x = ninjaJumpPower;
        } else {
            this.body.velocity.x = 0;
        }
        if (this.x < -this.width) {
            this.destroy();
            addNewPoles();
        }
    };

};