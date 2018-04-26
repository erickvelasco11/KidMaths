
class PrincipalMenu extends Phaser.State {
    
    private btnStart: Phaser.Button;
    private title: Phaser.Image;
    private background: Phaser.TileSprite;

    constructor() {
        super();
    }

    create() {
        if (avatar.gender == MALE) {
            this.background = this.game.add.tileSprite(0, 0, this.game.world.width, this.game.world.height, "bgrPlayingBoy");
        } else {
            this.background = this.game.add.tileSprite(0, 0, this.game.world.width, this.game.world.height, "bgrPlayingGirl");
        }
        this.btnStart = this.game.add.button(this.game.world.centerX, 400, 'btnStart', this.startGame, this, 0, 1, 2);
        this.btnStart.anchor.x = 0.5;

        this.title = this.game.add.image(this.game.world.centerX, 100, 'titNameUnit');
        this.title.anchor.set(0.5, 0.5);
    }

    startGame = () => {
        this.btnStart.visible = false;
        this.title.visible = false;
        this.game.state.start("Topic1_1State", true);
    }
}