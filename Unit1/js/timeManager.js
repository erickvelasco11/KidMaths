
var timer;
var countdown;

function initReadyTime() {
    timer.add(1500, ready, this);
    timer.start();
}

function ready() {
    stateReady--;
    if (stateReady == 0) {
        subState = PLAYING;
        titReady.loadTexture("titNow", 0);
        timer.add(1500, ready, this);
        timer.add(1000, playCountdown, this);
        timer.start();
    } else {
        if (stateReady < 0) {
            titReady.kill();
        } else {
            titReady.loadTexture("tit" + stateReady, 0);
            timer.add(1500, ready, this);
            timer.start();
        }
    }
}

function playCountdown() {
    countdown--;
    txtTime.setText(countdown);
    if (countdown > 0) {
        timer.add(1000, playCountdown, this);
        timer.start();
    } else {
        if (countdown == 0) {
            manageResult();
        }
    }
}