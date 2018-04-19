
//Variables para los estados
var state = LOADING;
var fps = 0;

//Variable principal para el juego que tendrá un tamaño de 800x600, será cargado en el div "game" y tendrá 3 funciones de estado
var game = new Phaser.Game(800, 600, Phaser.AUTO, 'game', { preload: preload, create: create, update: update });

var button;
var x = 32;
var y = 80;

//Variables de manejo de estados de carga
var loadBar;
var loadText;
var loadType = LOAD_FIRST_ASSET;

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
            break;
    }
}