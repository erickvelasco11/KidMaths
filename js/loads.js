/*
    Este archivo es para manejar la carga de archivos a la aplicación
    También permite visualizar la barra de carga de los créditos
*/

//Variables de manejo de estados de carga
var loadBar;
var loadText;
var loadType = LOAD_FIRST_ASSET;

//Esta función carga todos los archivos que necesita la aplicación como sonidos e imágenes
function loadAssets() {
    loadType = LOAD_LOADING;
    game.load.image('logo', 'images/logo.png');
    game.load.audio('battle', 'sounds/battle.mp3');
    game.load.spritesheet('charmander', 'images/charmander.png', 48, 48);

    game.load.start();
}

//Esta función es de Phaser y se llama cuando la carga de archivos va a empezar
function loadStart() {
    switch (loadType) {
        case LOAD_LOADING:
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
            loadText = game.add.text(game.world.centerX, game.world.centerY + 40, "Cargando...", { font: "30px Arial", align: "center", fill: '#ffffff' });
            loadText.anchor.set(0.5);
            break;
    }
}

//Esta función es de Phaser y se llama cuando un archivo se a descargado completamente y está listo para usarse
//Yo la uso para mover la barra de carga del inicio de la aplicación
function fileComplete(progress, cacheKey, success, totalLoaded, totalFiles) {
    switch (loadType) {
        case LOAD_COMPONENTS:
            loadBar.scale.x = progress * 0.01;
            player1.x = ((600 * progress) / 100) + 52;
            break;
    }
}

//Esta función es de Phaser y se llama al terminar toda la descarga de los archivos necesarios
function loadComplete() {
    switch (loadType) {
        case LOAD_LOADING:
            loadType = LOAD_COMPONENTS;
            break;
        case LOAD_COMPONENTS:
            postCreate();
            break;
    }
}

//Esta función actualiza la barra de carga de los créditos
function creditsLoadingBar() {
    if (fps % 5 == 0) {
        loadBar.scale.x += 0.0004025;
    }
}