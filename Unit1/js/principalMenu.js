
var btnStart;

function initPrincipalMenu() {
    timer = game.time.create(false);

    btnStart = game.add.button(game.world.centerX, 400, 'btnStart', startGame, this, 0, 1, 2);
    btnStart.anchor.x = 0.5;
}

function startGame() {
    btnStart.visible = false;
    title.visible = false;
    initTopic1_1();
}