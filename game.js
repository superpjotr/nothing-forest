var game = new Game(create,update)
var cursors;
var DEFAULT_SPEED = 100;
var DEFAULT_GRAVITY = 100;


function create() {
    game.setGravity(DEFAULT_GRAVITY);

    for (var x=0; x < 10; x++) {
        game.addPlayer (100,100);
    }

    cursors = game.input.keyboard.createCursorKeys();
}

var move_table = {
    up: "moveUp",
    down: "moveDown",
    left: "moveLeft",
    right: "moveRight"
}

function update() {
    for (var direction in move_table) {
        if (cursors[direction].isDown) {
            game.players[0].body[move_table[direction]](DEFAULT_SPEED);
        }   
    }
        
}
