module MrBook {
    export class SelectGender extends Phaser.State {

        private girl: Phaser.Image;
        private boy: Phaser.Image;
        private btnBack: Phaser.Button;
        private platform: Phaser.Image;
        private rack: Phaser.Image;
        private background: Phaser.TileSprite;
        private sprProducts: Phaser.Sprite;

        private grpSeeButtons: Phaser.Group;
        private grpBuyButtons: Phaser.Group;
        private grpAvatar: Phaser.Group;

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

            var ballon = this.game.add.image(650, 120, "imgBallon");
            ballon.anchor.set(0.5, 0.5);
            ballon.height = 200;
            ballon.width = 300;
            this.game.add.text(530, 50, "Hola " + avatar.name + ", me\nalegra verte otra vez.\nCómo nos vestimos hoy?", { font: "bold 20px Arial", fill: "#222222", boundsAlignH: "center", boundsAlignV: "middle" });

            this.btnBack = this.game.add.button(50, 50, "btnBack", this.back, this, 0, 1, 2);
            this.btnBack.anchor.set(0.5, 0.5);
            this.btnBack.width = 50;
            this.btnBack.height = 50;

            this.platform = this.game.add.image((this.game.world.width / 5) * 4, this.world.height - 50, "imgPlatform");
            this.platform.anchor.set(0.5, 0.5);
            this.platform.width = 250;
            this.platform.height = 120;

            this.rack = this.game.add.image(100, 70, "imgRack");
            this.rack.width = 380;
            this.rack.height = 480;

            this.grpBuyButtons = this.game.add.group();
            this.grpSeeButtons = this.game.add.group();
            this.grpAvatar = this.game.add.group();

            if (avatar.gender == MALE) {
                this.grpAvatar.create(this.world.width - 50, this.world.height - 250, "imgBoy");
            } else {
                this.grpAvatar.create(this.world.width - 50, this.world.height - 250, "imgGirl");
            }
            this.grpAvatar.create(this.world.width - 50, this.world.height - 250, this.getImageKey("skinColorId"));
            this.grpAvatar.create(this.world.width - 50, this.world.height - 250, this.getImageKey("shoesId"));
            this.grpAvatar.create(this.world.width - 50, this.world.height - 250, this.getImageKey("pantsId"));
            this.grpAvatar.create(this.world.width - 50, this.world.height - 250, this.getImageKey("shirtId"));
            this.grpAvatar.create(this.world.width - 50, this.world.height - 250, this.getImageKey("capId"));
            this.grpAvatar.width = 200;
            this.grpAvatar.height = 400;
            this.grpAvatar.position.set(250, 20);

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

        getImageKey(key:string): string {
            for (var i = 0; i < products.length; i++) {
                if (products[i].id == avatar[key]) {
                    return products[i].imageKey;
                }
            }
            return "";
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
            var x = 150;
            var y = 127;
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
                        x = 150;
                        y += 97;
                    }
                }
            }
        }

        back = () => {
            this.game.state.start("PrincipalMenuState", true);
        }

    }
}