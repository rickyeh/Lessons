window.onload = function() {
    var game = new Phaser.Game(800, 600, Phaser.AUTO);
    var ninja;

    var play = function(game) {};

    play.prototype = {
        preload: function() {
            game.load.image('ninja', 'ninja.png');
            game.load.image('pole', 'pole.png');
            game.load.image('powerbar', 'powerbar.png');
            game.load.image('sky', 'sky.png');
        },
        create: function() {
            game.stage.backgroundColor = '#87CEEB';
            game.physics.startSystem(Phaser.Physics.ARCADE);
            game.add.sprite(0, 0, 'sky');
            ninja = game.add.sprite(80, 0, 'ninja');
        },
        update: function() {

        }
    };
    game.state.add('play', play);
    game.state.start('play');
};