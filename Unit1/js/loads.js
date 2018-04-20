/*
    Este archivo es para manejar la carga de archivos a la aplicación
    También permite visualizar la barra de carga de los créditos
*/

//Variables de manejo de estados de carga
var loadBar;
var loadText;
var animateBar = false;
var background;
var title;

//Función para listar los componentes que se van a cargar para el juego
function filesToLoad() {
    game.load.spritesheet('pikachu', 'assets/images/pikachu.png', 48, 48);
    game.load.image('bgrLoading', 'assets/images/backgrounds/loading.jpg');
    game.load.image('titNameUnit', 'assets/images/titles/nameUnit.png');
    game.load.image('bgrOptions', 'assets/images/backgrounds/options.jpg');
    game.load.image('bgrPlayingBoy', 'assets/images/backgrounds/playingBoy.jpg');
    game.load.image('bgrPlayingGirl', 'assets/images/backgrounds/playingGirl.jpg');
    game.load.image('titGender', 'assets/images/titles/gender.png');
    game.load.image('imgBoy', 'assets/images/boy.png');
    game.load.image('imgGirl', 'assets/images/girl.png');
    game.load.spritesheet('btnStart', 'assets/images/buttons/btnStart.png', 200, 80);
    game.load.image('bgrTopics', 'assets/images/backgrounds/topics.png');
    game.load.image('imgOpenBox', 'assets/images/openBox.png');
    game.load.image('itmApple', 'assets/images/items/apple.png');
    game.load.image('itmBananas', 'assets/images/items/bananas.png');
    game.load.image('itmStrawberry', 'assets/images/items/strawberry.png');
    game.load.image('itmPear', 'assets/images/items/pear.png');
    game.load.image('itmTomato', 'assets/images/items/tomato.png');
    //game.load.audio('battle', 'assets/sounds/battle.mp3');
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
    if (cacheKey == "bgrLoading") {
        background = game.add.tileSprite(0, 0, 800, 600, 'bgrLoading');
        background.sendToBack();
    }
    if (cacheKey == "titNameUnit") {
        title = game.add.image(game.world.centerX, 100, 'titNameUnit');
        title.anchor.x = 0.5;
    }
    if (cacheKey == "pikachu") {
        player1 = game.add.sprite(52, game.world.centerY + 72, 'pikachu');
        player1.animations.add('right', [1, 2, 3, 4, 5], 10, true);
        player1.animations.play('right');
        animateBar = true;
    }

    loadBar.scale.x = progress * 0.01;
    if (animateBar) {
        player1.x = ((600 * progress) / 100) + 52;
    }
}

//Esta función es de Phaser y se llama al terminar toda la descarga de los archivos necesarios
function loadComplete() {
    player1.visible = false;
    loadBar.destroy();
    loadText.destroy();

    initSelectGender();
}

//Esta función actualiza la barra de carga de los créditos
function creditsLoadingBar() {
    if (fps % 5 == 0) {
        loadBar.scale.x += 0.0004025;
    }
}
