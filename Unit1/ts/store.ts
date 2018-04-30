module MrBook {
    export class SelectGender extends Phaser.State {

        private girl: Phaser.Image;
        private boy: Phaser.Image;
        private btnBack: Phaser.Button;
        private platform: Phaser.Image;
        private rack: Phaser.Image;
        private background: Phaser.TileSprite;

        private grpSeeButtons: Phaser.Group;
        private grpBuyButtons: Phaser.Group;

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

            this.btnBack = this.game.add.button(50, 50, "btnBack", this.back, this, 0, 1, 2);
            this.btnBack.anchor.set(0.5, 0.5);
            this.btnBack.width = 50;
            this.btnBack.height = 50;

            this.platform = this.game.add.image((this.game.world.width / 5) * 4, this.world.height - 50, "imgPlatform");
            this.platform.anchor.set(0.5, 0.5);
            this.platform.width = 200;
            this.platform.height = 120;

            this.rack = this.game.add.image(100, 80, "imgRack");
            this.rack.width = 380;
            this.rack.height = 480;

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

            this.grpBuyButtons = this.game.add.group();
            this.grpSeeButtons = this.game.add.group();

            this.btnMenuSkin = this.game.add.button(0, 150, "btnMenuSkin", this.clickMenu, this, 0, 1, 2);
            this.btnMenuSkin.height = 50;
            this.btnMenuSkin.width = 50;
            this.btnMenuHead = this.game.add.button(0, 210, "btnMenuHead", this.clickMenu, this, 0, 1, 2);
            this.btnMenuHead.height = 50;
            this.btnMenuHead.width = 50;
            this.btnMenuTorso = this.game.add.button(0, 270, "btnMenuTorso", this.clickMenu, this, 0, 1, 2);
            this.btnMenuTorso.height = 50;
            this.btnMenuTorso.width = 50;
            this.btnMenuLegs = this.game.add.button(0, 330, "btnMenuLegs", this.clickMenu, this, 0, 1, 2);
            this.btnMenuLegs.height = 50;
            this.btnMenuLegs.width = 50;
            this.btnMenuFeet = this.game.add.button(0, 390, "btnMenuFeet", this.clickMenu, this, 0, 1, 2);
            this.btnMenuFeet.height = 50;
            this.btnMenuFeet.width = 50;
        }

        clickMenu = (item) => {
            this.grpSeeButtons.removeAll();
            this.grpBuyButtons.removeAll();

            switch (item.key) {
                case "btnMenuSkin":
                    this.addSeeBuyButtons("1");
                    break;
                case "btnMenuHead":
                    this.addSeeBuyButtons("2");
                    break;
                case "btnMenuTorso":
                    this.addSeeBuyButtons("3");
                    break;
                case "btnMenuLegs":
                    this.addSeeBuyButtons("4");
                    break;
                case "btnMenuFeet":
                    this.addSeeBuyButtons("5");
                    break;
            }
        }

        clickSee = () => {
        }

        clickBuy = () => {
        }

        addSeeBuyButtons = (idType: string) => {
            var column = 0;
            var x = 140;
            var y = 125;
            for (var i = 0; i < products.length; i++) {
                if (products[i].idType == idType) {
                    var btnSee = this.game.add.button(x, y, "btnSee", this.clickSee, this, 0, 1, 2);
                    btnSee.height = 30;
                    btnSee.width = 30;
                    this.grpSeeButtons.add(btnSee);

                    x += 40;

                    var btnBuy = this.game.add.button(x, y, "btnBuy", this.clickBuy, this, 0, 1, 2);
                    btnBuy.height = 30;
                    btnBuy.width = 30;
                    this.grpBuyButtons.add(btnBuy);

                    if (column != 2) {
                        column++
                        x += 65;
                    } else {
                        column = 0;
                        x = 140;
                        y += 75;
                    }
                }
            }
        }

        back = () => {
            this.game.state.start("PrincipalMenuState", true);
        }

    }
}