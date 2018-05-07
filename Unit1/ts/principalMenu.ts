module MrBook {
    export class PrincipalMenu extends Phaser.State {

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

            this.btnStart = this.game.add.button(this.game.world.centerX - 200, 300, 'btnStart1', this.startGame1, this, 0, 1, 2);
            this.btnStart.anchor.x = 0.5;
            this.btnStart = this.game.add.button(this.game.world.centerX, 300, 'btnStart2', this.startGame2, this, 0, 1, 2);
            this.btnStart.anchor.x = 0.5;
            this.btnStart = this.game.add.button(this.game.world.centerX + 200, 300, 'btnStart3', this.startGame3, this, 0, 1, 2);
            this.btnStart.anchor.x = 0.5;

            this.btnStore = this.game.add.button(100, this.game.world.height - 80, 'btnStore', this.startStore, this, 0, 1, 2);
            this.btnStore.anchor.x = 0.5;
            this.btnStore.scale.set(0.6, 0.6);

            this.title = this.game.add.image(this.game.world.centerX, 100, 'titNameUnit');
            this.title.anchor.set(0.5, 0.5);
        }

        startGame1 = () => {
            this.btnStart.kill();
            this.title.kill();
            this.game.state.start("Topic1_1State", true);
        }

        startGame2 = () => {
            this.btnStart.kill();
            this.title.kill();
            this.game.state.start("Topic1_2State", true);
        }

        startGame3 = () => {
            this.btnStart.kill();
            this.title.kill();
            this.game.state.start("Topic1_3State", true);
        }

        startStore = () => {
            this.game.state.start("LoadStoreState");
        }
    }
}