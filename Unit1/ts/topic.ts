
abstract class Topic extends Phaser.State {
    
    protected timer: Timer;

    private titReady: Phaser.Image;
    protected titResult: Phaser.Image;
    protected txtPoints: Phaser.Text;
    protected txtTime: Phaser.Text;
    protected txtResult: Phaser.Text;
    protected txtResult2: Phaser.Text;
    protected btnNext: Phaser.Button;
    protected background: Phaser.TileSprite;
    protected bgrPause: Phaser.Image;

    private stateReady;
    protected points;
    protected totalPoints;
    protected countdownTime;

    protected subState;

    protected actionNext: Function;
    protected finishTopic: Function;

    constructor() {
        super();
    }

    initPointsText() {
        this.points = 0;
        this.totalPoints = 0;
        this.txtPoints = this.game.add.text(20, 20, "Puntos: " + this.points, { font: "24px Arial", align: "center", fill: '#ffffff' });
    }

    initTimeText() {
        this.countdownTime = ROUND_TIME;

        this.txtTime = this.game.add.text(this.game.world.centerX, 40, this.countdownTime, { font: "48px Arial", align: "center", fill: '#ffffff' });
        this.txtTime.anchor.setTo(0.5, 0.5);
    }

    startReadyCountdown() {
        this.subState = READY;
        this.stateReady = 3;

        this.titReady = this.game.add.image(this.game.world.centerX, this.game.world.centerY - 100, "tit3");
        this.titReady.anchor.setTo(0.5, 0.5);

        this.timer.startTimer(1200, this.ready);
    }

    startTimeCountdown = () => {
        this.countdownTime--;
        if (this.countdownTime > 0) {
            this.subState = PLAYING;
            this.timer.startTimer(1000, this.startTimeCountdown);
            this.txtTime.setText(this.countdownTime);
        } else {
            this.finishTopic();
            this.initResults();
        }
    }
    
    initResults() {
        this.subState = RESULTS;
        this.bgrPause = this.game.add.image(0, 0, "bgrPause");
        this.totalPoints += this.points;
        this.txtResult = this.game.add.text(this.game.world.centerX, this.game.world.centerY-50, "Puntos: " + this.points, { fill: '#ffffff' });
        this.txtResult.anchor.setTo(0.5, 0.5);
        this.txtResult2 = this.game.add.text(this.game.world.centerX, this.game.world.centerY, "Total: " + this.totalPoints, { fill: '#ffffff' });
        this.txtResult2.anchor.setTo(0.5, 0.5);
        this.btnNext = this.game.add.button(this.game.world.centerX, 400, 'btnNext', this.actionNext, this, 0, 1, 2);
        this.btnNext.anchor.x = 0.5;
        this.titResult = this.game.add.image(this.game.world.centerX, 100, "titCongrats");
        this.titResult.bringToTop();
        this.titResult.anchor.set(0.5, 0.5);
    }

    removeResults() {
        this.bgrPause.kill();
        this.btnNext.kill();
        this.txtResult.kill();
        this.txtResult2.kill();
        this.titResult.kill();
    }

    ready = () => {
        this.stateReady--;
        if (this.stateReady == 0) {
            this.titReady.loadTexture("titNow", 0);
            this.timer.startTimer(1200, this.ready);
        } else {
            if (this.stateReady < 0) {
                this.titReady.kill();
                this.startTimeCountdown();
            } else {
                this.titReady.loadTexture("tit" + this.stateReady, 0);
                this.timer.startTimer(1200, this.ready);
            }
        }
    }
}