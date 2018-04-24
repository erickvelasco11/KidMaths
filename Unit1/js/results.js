var bgrPause;
var txtResult;

function initResultsTopic1_1() {
    state = RESULTS_TOPIC1_1;
    bgrPause = game.add.image(0, 0, "bgrPause");
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
    state = TOPIC1_2;
    initTopic1_2();
}