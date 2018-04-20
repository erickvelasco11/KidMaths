
var girl;
var boy;

//Función inicial para cargar toda la página de selección de Género
function initSelectGender() {
    background.loadTexture("bgrOptions", 0);
    title.loadTexture("titGender", 0);

    boy = game.add.image(game.world.centerX / 2, game.world.centerY, "imgBoy");
    boy.anchor.x = 0.5;
    boy.width = 200;
    boy.height = 200;
    boy.inputEnabled = true;
    boy.events.onInputDown.add(clickGender, this);

    girl = game.add.image(game.world.centerX + (game.world.centerX / 2), game.world.centerY, "imgGirl");
    girl.anchor.x = 0.5;
    girl.width = 200;
    girl.height = 200;
    girl.inputEnabled = true;
    girl.events.onInputDown.add(clickGender, this);

    state = SELECT_GENDER;
}

//Función de evento de click sobre un género
function clickGender(sprite, pointer) {
    if (sprite.key == "imgBoy") {
        gender = MALE;
        background.loadTexture("bgrPlayingBoy", 0);
        title.loadTexture("titGender", 0);
    } else {
        gender = FEMALE;
        background.loadTexture("bgrPlayingGirl", 0);
        title.loadTexture("titGender", 0);
    }
    girl.destroy();
    boy.destroy();
    title.loadTexture("titNameUnit");
    state = PRINCIPAL_MENU;

    initPrincipalMenu();
}