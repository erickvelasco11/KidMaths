module MrBook {
    export class SelectGender extends Phaser.State {

        private girl: Phaser.Image;
        private boy: Phaser.Image;
        private btnBack: Phaser.Button;
        private platform: Phaser.Image;
        private background: Phaser.TileSprite;

        private btnMenuSkin: Phaser.Button;
        private btnMenuHead: Phaser.Button;
        private btnMenuTorso: Phaser.Button;
        private btnMenuLegs: Phaser.Button;
        private btnMenuFeet: Phaser.Button;

        constructor() {
            super();
        }

        create() {
            this.background = this.game.add.tileSprite(0, 0, 800, 600, "bgrStore");
            this.game.add.image(0, 0, "bgrPause");

            this.btnBack = this.game.add.button(50, 50, "btnBack", this.back,this,0,1,2);
            this.btnBack.anchor.set(0.5, 0.5);
            this.btnBack.width = 50;
            this.btnBack.height = 50;

            this.platform = this.game.add.image((this.game.world.width / 5) * 4, this.world.height - 50, "imgPlatform");
            this.platform.anchor.set(0.5, 0.5);
            this.platform.width = 200;
            this.platform.height = 120;

            if (avatar.gender == MALE) {
                this.boy = this.game.add.image((this.game.world.width / 5) * 4, this.world.height - 250, "imgBoy");
                this.boy.anchor.set(0.5, 0.5);
                this.boy.width = 280;
                this.boy.height = 400;
            } else {
                this.girl = this.game.add.image((this.game.world.width / 5) * 4, this.world.height - 250, "imgGirl");
                this.girl.anchor.set(0.5, 0.5);
                this.girl.width = 280;
                this.girl.height = 400;
            }

            this.btnMenuSkin = this.game.add.button(0, 150, "btnMenuSkin", this.clickMenu);
            this.btnMenuSkin.height = 50;
            this.btnMenuSkin.width = 50;
            this.btnMenuHead = this.game.add.button(0, 210, "btnMenuHead", this.clickMenu);
            this.btnMenuHead.height = 50;
            this.btnMenuHead.width = 50;
            this.btnMenuTorso = this.game.add.button(0, 270, "btnMenuTorso", this.clickMenu);
            this.btnMenuTorso.height = 50;
            this.btnMenuTorso.width = 50;
            this.btnMenuLegs = this.game.add.button(0, 330, "btnMenuLegs", this.clickMenu);
            this.btnMenuLegs.height = 50;
            this.btnMenuLegs.width = 50;
            this.btnMenuFeet = this.game.add.button(0, 390, "btnMenuFeet", this.clickMenu);
            this.btnMenuFeet.height = 50;
            this.btnMenuFeet.width = 50;
        }

        clickMenu = () => {
        }

        back = () => {
            this.game.state.start("PrincipalMenuState", true);
        }

    }
}