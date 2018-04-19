
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
    game.stage.backgroundColor = '#182d3b';
    game.load.spritesheet('pikachu', 'assets/images/pikachu.png', 48, 48);
    game.load.image('logo', 'images/logo.png');
    game.load.audio('battle', 'sounds/battle.mp3');
    game.load.spritesheet('charmander', 'images/charmander.png', 48, 48);

    game.load.enableParallel = false;
    game.load.onLoadStart.add(loadStart, this);
    game.load.onFileComplete.add(fileComplete, this);
    game.load.onLoadComplete.add(loadComplete, this);
    game.load.start();
}

function create() {
}

function loadStart() {
    loadText = game.add.text(game.world.centerX, game.world.centerY + 40, "Cargando...", { font: "30px Arial", align: "center", fill: '#ffffff' });
    loadText.anchor.set(0.5);
}

//	This callback is sent the following parameters:
function fileComplete(progress, cacheKey, success, totalLoaded, totalFiles) {
    if (loadType == LOAD_COMPONENTS) {
        loadBar.scale.x = progress * 0.01;
        player1.x = ((600 * progress) / 100) + 52;
    } else {
        loadType = LOAD_COMPONENTS;

        loadBar = game.add.graphics(100, game.world.centerY - 12);

        loadBar.lineStyle(35, 0xffffff, 1);
        loadBar.tint = YELLOW;
        loadBar.moveTo(0, 0);
        loadBar.lineTo(game.world.width - 200, 0);
        loadBar.scale.x = 0;
        loadBar.endFill();

        player1 = game.add.sprite(52, 260, 'pikachu');
        player1.animations.add('right', [1, 2, 3, 4, 5], 10, true);
        player1.animations.play('right');
    }
}

function loadComplete() {
}

//Esta función actualiza la pantalla del juego en los diferentes estados
function update() {
    fps++;

    switch (state) {
        case LOADING:
            break;
    }
}