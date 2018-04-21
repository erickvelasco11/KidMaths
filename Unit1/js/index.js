
//Variables para los estados
var state = LOADING;
var fps = 0;

//Variable principal para el juego que tendrá un tamaño de 800x600, será cargado en el div "game" y tendrá 3 funciones de estado
var game = new Phaser.Game(800, 600, Phaser.AUTO, 'game', { preload: preload, create: create, update: update });

//Variables de juego
var button;
var x = 32;
var y = 80;

//Variables de usuario
var gender;

function preload() {
    filesToLoad();
    
    game.load.onLoadStart.add(loadStart, this);
    game.load.onFileComplete.add(fileComplete, this);
    game.load.onLoadComplete.add(loadComplete, this);
    game.load.start();
}

function create() {
}

//Esta función actualiza la pantalla del juego en los diferentes estados
function update() {
    fps++;

    switch (state) {
        case LOADING:
        case SELECT_GENDER:
            break;
        case PRINCIPAL_MENU:
            break;
        case TOPIC1:
            if (fps % 150 == 0) {
                launchItemTopic1();
            }
            game.physics.arcade.collide(items, boxes, putInChest);
            break;
    }
}