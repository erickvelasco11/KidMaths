
var btnStart;

function initPrincipalMenu() {
    btnStart = game.add.button(game.world.centerX, 400, 'btnStart', startGame, this, 0, 1, 2);
    btnStart.anchor.x = 0.5;
}

function startGame() {
    alert("Iniciar el juego")
}