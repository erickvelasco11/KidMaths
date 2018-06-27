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
                this.background = this.add.tileSprite(0, 0, this.world.width, this.world.height, "bgrPlayingBoy");
            } else {
                this.background = this.add.tileSprite(0, 0, this.world.width, this.world.height, "bgrPlayingGirl");
            }
            
            this.btnStart = this.add.button(this.world.centerX, 250, 'btnStart2', () => {
                this.game.state.start("LoadTopic1_2")
            }, this, 0, 1, 2);
            this.btnStart.anchor.x = 0.5;
            this.btnStart.scale.set(0.8, 0.8);

            this.btnStore = this.add.button(100, this.world.height - 80, 'btnStore', () => {
                this.game.state.start("LoadStore")
            }, this, 0, 1, 2);
            this.btnStore.anchor.x = 0.5;
            this.btnStore.scale.set(0.6, 0.6);

            this.title = this.add.image(this.world.centerX, 100, 'titNameUnit');
            this.title.anchor.set(0.5, 0.5);
        }
    }

}