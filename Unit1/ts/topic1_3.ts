
class Topic1_3 extends Topic {

    private constructor() {
        super();
    }

    create() {
        this.timer = new Timer(this.game);
        this.actionNext = this.next;
        this.finishTopic = this.finishTopic1_3;

        this.initPointsText();
        this.initTimeText();
        this.startReadyCountdown();
    }

    next() {
        this.removeResults();
        this.game.state.start("PrincipalMenuState", true);
    }

    finishTopic1_3() {
    }
}