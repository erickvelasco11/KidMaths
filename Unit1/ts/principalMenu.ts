
class PrincipalMenu extends Phaser.State {
    
    private btnStart: Phaser.Button;
    private btnStore: Phaser.Button;
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

        this.btnStore = this.game.add.button(100, this.game.world.height - 80, 'btnStore', this.startStore, this, 0, 1, 2);
        this.btnStore.anchor.x = 0.5;
        this.btnStore.scale.set(0.6, 0.6);

        this.title = this.game.add.image(this.game.world.centerX, 100, 'titNameUnit');
        this.title.anchor.set(0.5, 0.5);

        this
    }

    startGame = () => {
        this.btnStart.kill();
        this.title.kill();
        this.game.state.start("Topic1_3State", true);
    }

    startStore = () => {
        this.btnStart.kill();
        this.title.kill();
        this.game.state.start("StoreState", true);
    }
}