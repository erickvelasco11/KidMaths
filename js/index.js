
//Variables para los estados
var state = LOADING;
var fps = 0;

//Variable principal para el juego que tendrá un tamaño de 800x600, será cargado en el div "game" y tendrá 3 funciones de estado
var game = new Phaser.Game(800, 600, Phaser.AUTO, 'game', { preload: preload, create: create, update: update });

//Esta función se ejecuta al principio y me permite cargar el personaje principal para hacer la animación de la pantalla de cargando
function preload() {
    game.load.spritesheet('pikachu', 'images/pikachu.png', 48, 48);

    game.load.onLoadStart.add(loadStart, this);
    game.load.onFileComplete.add(fileComplete, this);
    game.load.onLoadComplete.add(loadComplete, this);
};

//Esta función crea los elementos necesarios para iniciar el juego
function create() {
    loadAssets();
    //initSounds();
};

//Esta función actualiza la pantalla del juego en los diferentes estados
function update() {
    fps++;

    switch (state) {
        case LOADING:
            break;
    }
}