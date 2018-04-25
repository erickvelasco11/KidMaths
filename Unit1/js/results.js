
var points = 0;
var totalPoints = 0;
var bgrPause;
var txtResult;

function manageResult() {
    subState = RESULTS;
    bgrPause = game.add.image(0, 0, "bgrPause");
    switch (state) {
        case TOPIC1_1:
            initResultsTopic1_1();
            break;
        case TOPIC1_2:
            initResultsTopic1_2();
            break;
    }
}

function initResultsTopic1_1() {
    finishTopic1_1();

    totalPoints += points;
    txtResult = game.add.text(game.world.centerX, game.world.centerY, "Puntos: " + points, { fill: '#ffffff' });
    txtResult.anchor.setTo(0.5, 0.5);
    btnNext = game.add.button(game.world.centerX, 400, 'btnNext', closeResultsTopic1_1, this, 0, 1, 2);
    btnNext.anchor.x = 0.5;
    title.loadTexture("titCongrats", 0);
    title.bringToTop();
    title.visible = true;
}

function closeResultsTopic1_1() {
    bgrPause.kill();
    btnNext.kill();
    txtResult.kill();
    title.visible = false;
    birds.removeAll();
    boxes.removeAll();
    initTopic1_2();
}

function initResultsTopic1_2() {
    totalPoints += points;
    txtResult = game.add.text(game.world.centerX, game.world.centerY, "Puntos: " + points, { fill: '#ffffff' });
    txtResult.anchor.setTo(0.5, 0.5);
    btnNext = game.add.button(game.world.centerX, 400, 'btnNext', closeResultsTopic1_2, this, 0, 1, 2);
    btnNext.anchor.x = 0.5;
    title.loadTexture("titCongrats", 0);
    title.bringToTop();
    title.visible = true;
}

function closeResultsTopic1_2() {
    bgrPause.kill();
    btnNext.kill();
    txtResult.kill();
    title.visible = false;
    initTopic1_3();
}