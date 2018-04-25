
var stateReady = 3;

var titReady;
var txtTime;
var txtPoints;

function initReadyTitle() {
    stateReady = 3;
    if (titReady === undefined) {
        titReady = game.add.image(game.world.centerX, game.world.centerY - 100, "tit3");
        titReady.anchor.setTo(0.5, 0.5);
    } else {
        titReady.visible = true;
        titReady.loadTexture("tit3", 0);
    }
}

function initPointsText() {
    points = 0;
    if (txtPoints === undefined) {
        txtPoints = game.add.text(20, 20, "Puntos: " + points, { font: "24px Arial", align: "center", fill: '#ffffff' });
    } else {
        txtPoints.setText("Puntos: " + points);
    }
}

function initTimeText() {
    countdown = 10;
    if (txtPoints === undefined) {
        txtTime = game.add.text(game.world.centerX, 40, countdown, { font: "48px Arial", align: "center", fill: '#ffffff' });
        txtTime.anchor.setTo(0.5, 0.5);
    } else {
        txtTime.setText(countdown);
    }
}