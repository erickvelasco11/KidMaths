/*
    Este archivo es para manejar la carga de archivos a la aplicación
    También permite visualizar la barra de carga de los créditos
*/

//Variables de manejo de estados de carga
var loadBar;
var loadText;
var loadType = LOAD_FIRST_ASSET;
var background;
var title;

//Función para listar los componentes que se van a cargar para el juego
function filesToLoad() {
    game.load.spritesheet('pikachu', 'assets/images/pikachu.png', 48, 48);
    game.load.image('bgr_loading', 'assets/images/backgrounds/loading.jpg');
    game.load.image('tit_name_unit', 'assets/images/titles/name_unit.png');
    game.load.image('bgr_options', 'assets/images/backgrounds/options.jpg');
    game.load.image('tit_gender', 'assets/images/titles/gender.png');
    game.load.image('img_boy', 'assets/images/boy.png');
    game.load.image('img_girl', 'assets/images/girl.png');
    game.load.audio('battle', 'assets/sounds/battle.mp3');
}

//Esta función es de Phaser y se llama cuando la carga de archivos va a empezar
function loadStart() {
    loadBar = game.add.graphics(100, game.world.centerY + 100);

    loadBar.lineStyle(35, 0xffffff, 1);
    loadBar.tint = YELLOW;
    loadBar.moveTo(0, 0);
    loadBar.lineTo(game.world.width - 200, 0);
    loadBar.scale.x = 0;
    loadBar.endFill();

    loadText = game.add.text(game.world.centerX, game.world.centerY + 140, "Cargando...", { font: "30px Arial", align: "center", fill: '#ffffff' });
    loadText.anchor.set(0.5);
}

//Esta función es de Phaser y se llama cuando un archivo se a descargado completamente y está listo para usarse
//Yo la uso para mover la barra de carga del inicio de la aplicación
function fileComplete(progress, cacheKey, success, totalLoaded, totalFiles) {
    if (cacheKey == "bgr_loading") {
        background = game.add.tileSprite(0, 0, 800, 600, 'bgr_loading');
        background.sendToBack();
    }
    if (cacheKey == "tit_name_unit") {
        title = game.add.image(game.world.centerX, 100, 'tit_name_unit');
        title.anchor.x = 0.5;
    }
    if (loadType == LOAD_COMPONENTS) {
        loadBar.scale.x = progress * 0.01;
        player1.x = ((600 * progress) / 100) + 52;
    } else {
        loadType = LOAD_COMPONENTS;

        player1 = game.add.sprite(52, game.world.centerY + 72, 'pikachu');
        player1.animations.add('right', [1, 2, 3, 4, 5], 10, true);
        player1.animations.play('right');
    }
}

//Esta función es de Phaser y se llama al terminar toda la descarga de los archivos necesarios
function loadComplete() {
    state = SELECT_GENDER;
    background.loadTexture("bgr_options", 0);
    title.loadTexture("tit_gender", 0);
    player1.visible = false;
    loadBar.destroy();
    loadText.destroy();

    var boy = game.add.image(game.world.centerX / 2, game.world.centerY, "img_boy");
    boy.anchor.x = 0.5;
    boy.width = 200;
    boy.height = 200;

    var girl = game.add.image(game.world.centerX + (game.world.centerX / 2), game.world.centerY, "img_girl");
    girl.anchor.x = 0.5;
    girl.width = 200;
    girl.height = 200;
}

//Esta función actualiza la barra de carga de los créditos
function creditsLoadingBar() {
    if (fps % 5 == 0) {
        loadBar.scale.x += 0.0004025;
    }
}