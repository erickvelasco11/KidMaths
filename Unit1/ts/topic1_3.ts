
class Topic1_3 extends Topic {

    private platform: Phaser.Image;
    private cloud: Phaser.Image;
    private clouds: Phaser.Group;

    private constructor() {
        super();
    }

    create() {
        this.timer = new Timer(this.game);
        this.actionNext = this.next;
        this.finishTopic = this.finishTopic1_3;

        this.background = this.game.add.tileSprite(0, 0, this.game.world.width, this.game.world.height, "bgrSelect");
        this.platform = this.game.add.image(this.game.world.centerX, this.game.world.height - 80, "imgPlatform");
        this.platform.anchor.set(0.5, 0.5);
        this.platform.width = 300;
        this.platform.height = 200;

        this.clouds = this.game.add.group();
        this.createCloud(this.game.world.width / 5);
        this.createCloud(this.game.world.centerX);
        this.createCloud((this.game.world.width / 5) * 4);

        this.initPointsText();
        this.initTimeText();
        this.startReadyCountdown();
    }

    createCloud(x: number) {
        this.cloud = this.clouds.create(x, 150, "imgCloud");
        this.cloud.anchor.set(0.5, 0.5);
        this.cloud.height = 150;
        this.cloud.width = 220;
    }

    next() {
        this.removeResults();
        this.game.state.start("PrincipalMenuState", true);
    }

    finishTopic1_3() {
    }
}