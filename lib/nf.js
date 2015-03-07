var game_wrap = document.getElementById("game-canvas-wrap");

function Game(create, update) {
    this.custom_create = function() { 
        default_create(this);
        create(); 
    };
    this.name = "nothing forest";
    this.players = [];
    this.setGravity = function(y) {
        this.physics.p2.gravity.y = y;
    };
        
    this.addPlayer = function(x, y) {
        var x    = x    || 100;
        var y    = y    || 100;

        var p = this.add.sprite(x,y,'player', 4);
        this.physics.p2.enable(p);
        this.players.push(p);
    },
    this.base = Phaser.Game
    this.base(450, 450, Phaser.AUTO, game_wrap, {
        boot: function() {console.log("boot")},
        preload: default_preload,
        create:  this.custom_create || default_create,
        update:  update  || default_update }, true, false);
}
Game.prototype = Object.create(Phaser.Game.prototype);

function default_create(game) {
    game.add.tileSprite(0, 0, 450, 450, 'background');
    game.world.setBounds(0, 0, 450, 450);
    game.physics.startSystem(Phaser.Physics.P2JS);
}

function default_preload() {
    this.load.tilemap('map','/static/assets/tilemaps/csv/catastrophi_level2.csv', null, Phaser.Tilemap.CSV);
    this.load.image('tiles', '/static/assets/tilemaps/tiles/catastrophi_tiles_16.png');
    this.load.image('debug-grid', 'static/assets/debug-grid-1920x1920.png');
    this.load.spritesheet('player','static/assets/dude.png', 32, 48);
}

function default_update() {
}

