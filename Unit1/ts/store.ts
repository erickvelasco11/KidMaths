module MrBook {
    export class SelectGender extends Phaser.State {

        private girl: Phaser.Image;
        private boy: Phaser.Image;
        private btnBack: Phaser.Button;
        private platform: Phaser.Image;
        private rack: Phaser.Image;
        private checked: Phaser.Image;
        private background: Phaser.TileSprite;
        private sprProducts: Phaser.Sprite;

        private grpSeeButtons: Phaser.Group;
        private grpBuyButtons: Phaser.Group;
        private grpAvatar: Phaser.Group;
        private grpProducts: Phaser.Group;

        private btnMenuSkin: Phaser.Button;
        private btnMenuHead: Phaser.Button;
        private btnMenuTorso: Phaser.Button;
        private btnMenuLegs: Phaser.Button;
        private btnMenuFeet: Phaser.Button;

        private currentType: string = "0";

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

            this.rack = this.game.add.image(100, 50, "imgRack");
            this.rack.width = 380;
            this.rack.height = 500;

            this.grpBuyButtons = this.game.add.group();
            this.grpSeeButtons = this.game.add.group();
            this.grpAvatar = this.game.add.group();
            this.grpProducts = this.game.add.group();

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

            this.grpSeeButtons.onChildInputDown.add(this.clickSee, this);
            this.grpBuyButtons.onChildInputDown.add(this.clickBuy, this);

        }

        getImageKey(key:string): string {
            for (var i = 0; i < productsStore.length; i++) {
                if (productsStore[i].id == avatar[key]) {
                    return productsStore[i].imageKey;
                }
            }
            return "";
        }

        clickMenu = (item) => {
            this.grpSeeButtons.removeAll();
            this.grpBuyButtons.removeAll();
            this.grpProducts.removeAll();
            if (this.checked != undefined) {
                this.checked.destroy();
            }

            switch (item.key) {
                case "btnMenuSkin":
                    this.currentType = "1";
                    break;
                case "btnMenuHead":
                    this.currentType = "2";
                    break;
                case "btnMenuTorso":
                    this.currentType = "3";
                    break;
                case "btnMenuLegs":
                    this.currentType = "4";
                    break;
                case "btnMenuFeet":
                    this.currentType = "5";
                    break;
            }
            this.addSeeBuyButtons();
        }

        clickSee = (item, pointer) => {
            switch (+this.currentType) {
                case 1:
                    this.grpAvatar.removeChildAt(1);
                    var skin = this.game.add.image(this.world.width - 50, this.world.height - 250, productsStore[item.z].imageKey);
                    this.grpAvatar.addAt(skin, 1);
                    break;
                case 2:
                    this.grpAvatar.removeChildAt(5);
                    var skin = this.game.add.image(this.world.width - 50, this.world.height - 250, productsStore[item.z + 6].imageKey);
                    this.grpAvatar.addAt(skin, 5);
                    break;
                case 3:
                    this.grpAvatar.removeChildAt(4);
                    var skin = this.game.add.image(this.world.width - 50, this.world.height - 250, productsStore[item.z + 12].imageKey);
                    this.grpAvatar.addAt(skin, 4);
                    break;
                case 4:
                    this.grpAvatar.removeChildAt(3);
                    var skin = this.game.add.image(this.world.width - 50, this.world.height - 250, productsStore[item.z + 17].imageKey);
                    this.grpAvatar.addAt(skin, 3);
                    break;
                case 5:
                    this.grpAvatar.removeChildAt(2);
                    var skin = this.game.add.image(this.world.width - 50, this.world.height - 250, productsStore[item.z + 21].imageKey);
                    this.grpAvatar.addAt(skin, 2);
                    break;
            }
        }

        clickBuy = (item) => {
            debugger
        }

        addSeeBuyButtons = () => {
            var column = 0;
            var x = 150;
            var y = 128;
            var xProduct = 150;
            var yProduct = 50;
            for (var i = 0; i < productsStore.length; i++) {
                if (productsStore[i].idType == this.currentType) {
                    if (productsStore[i].gender == null || productsStore[i].gender == avatar.gender) {
                        var btnSee = this.game.add.button(x, y, "btnSee", null, this, 0, 1, 2);
                        btnSee.height = 30;
                        btnSee.width = 30;
                        this.grpSeeButtons.add(btnSee);
                        var btnBuy = this.game.add.button(x += 40, y, "btnBuy", this.clickBuy, this, 0, 1, 2);
                        btnBuy.height = 30;
                        btnBuy.width = 30;
                        this.grpBuyButtons.add(btnBuy);

                        var prod = this.game.add.sprite(xProduct, yProduct, "sprProducts", (+productsStore[i].id) - 1);
                        prod.height = 70;
                        prod.width = 70;
                        this.grpProducts.add(prod);

                        if (productsStore[i].id == avatar.skinColorId
                            || productsStore[i].id == avatar.capId
                            || productsStore[i].id == avatar.shirtId
                            || productsStore[i].id == avatar.pantsId
                            || productsStore[i].id == avatar.shoesId) {
                            this.checked = this.game.add.image(xProduct + 45, yProduct - 10, "imgCheck");
                            this.checked.height = 30;
                            this.checked.width = 30;
                        }

                        if (column != 2) {
                            column++
                            x += 65;
                            xProduct += 105;
                        } else {
                            column = 0;
                            x = 150;
                            xProduct = 150;
                            y += 125;
                            yProduct += 125;
                        }
                    } else {
                        this.grpSeeButtons.create(x, y, "strItmNoHat");
                        this.grpBuyButtons.create(x, y, "strItmNoHat");
                        this.grpProducts.create(x, y, "strItmNoHat");
                    }
                }
            }
        }

        back = () => {
            this.game.state.start("PrincipalMenuState", true);
        }

    }
}