var game = new Phaser.Game(1328, 752, Phaser.AUTO, 'phaser-example',
    {preload: preload, create: create, update: update});

var map;
var tileset;
var layer;
var layer2;

function preload() {
    game.load.tilemap('mario', 'Mario.json', null, Phaser.Tilemap.TILED_JSON);
    game.load.image('tiles', 'super_mario.png');
}

function create() {
    map = game.add.tilemap('mario');

    map.addTilesetImage('super_mario', 'tiles');

    layer2 = map.createLayer('Background');
    layer = map.createLayer('Foreground');

    layer.resizeWorld();

}

function update() {

}