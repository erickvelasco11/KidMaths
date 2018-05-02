var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var MrBook;
(function (MrBook) {
    var SelectGender = /** @class */ (function (_super) {
        __extends(SelectGender, _super);
        function SelectGender() {
            var _this = _super.call(this) || this;
            _this.clickMenu = function (item) {
                _this.grpSeeButtons.removeAll();
                _this.grpBuyButtons.removeAll();
                _this.grpProducts.removeAll();
                switch (item.key) {
                    case "btnMenuSkin":
                        _this.addSeeBuyButtons("1");
                        break;
                    case "btnMenuHead":
                        _this.addSeeBuyButtons("2");
                        break;
                    case "btnMenuTorso":
                        _this.addSeeBuyButtons("3");
                        break;
                    case "btnMenuLegs":
                        _this.addSeeBuyButtons("4");
                        break;
                    case "btnMenuFeet":
                        _this.addSeeBuyButtons("5");
                        break;
                }
            };
            _this.clickSee = function () {
            };
            _this.clickBuy = function () {
            };
            _this.addSeeBuyButtons = function (idType) {
                var column = 0;
                var x = 150;
                var y = 128;
                var xProduct = 150;
                var yProduct = 50;
                for (var i = 0; i < MrBook.products.length; i++) {
                    if (MrBook.products[i].idType == idType && (MrBook.products[i].gender == null || MrBook.products[i].gender == MrBook.avatar.gender)) {
                        var btnSee = _this.game.add.button(x, y, "btnSee", _this.clickSee, _this, 0, 1, 2);
                        btnSee.height = 30;
                        btnSee.width = 30;
                        _this.grpSeeButtons.add(btnSee);
                        var btnBuy = _this.game.add.button(x += 40, y, "btnBuy", _this.clickBuy, _this, 0, 1, 2);
                        btnBuy.height = 30;
                        btnBuy.width = 30;
                        _this.grpBuyButtons.add(btnBuy);
                        var prod = _this.game.add.sprite(xProduct, yProduct, "sprProducts", (+MrBook.products[i].id) - 1);
                        prod.height = 70;
                        prod.width = 70;
                        _this.grpProducts.add(prod);
                        if (column != 2) {
                            column++;
                            x += 65;
                            xProduct += 105;
                        }
                        else {
                            column = 0;
                            x = 150;
                            xProduct = 150;
                            y += 125;
                            yProduct += 125;
                        }
                    }
                }
            };
            _this.back = function () {
                _this.game.state.start("PrincipalMenuState", true);
            };
            return _this;
        }
        SelectGender.prototype.create = function () {
            this.background = this.game.add.tileSprite(0, 0, 800, 600, "bgrStore");
            this.game.add.image(0, 0, "bgrPause");
            var ballon = this.game.add.image(650, 120, "imgBallon");
            ballon.anchor.set(0.5, 0.5);
            ballon.height = 200;
            ballon.width = 300;
            this.game.add.text(530, 50, "Hola " + MrBook.avatar.name + ", me\nalegra verte otra vez.\nCómo nos vestimos hoy?", { font: "bold 20px Arial", fill: "#222222", boundsAlignH: "center", boundsAlignV: "middle" });
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
            if (MrBook.avatar.gender == MrBook.MALE) {
                this.grpAvatar.create(this.world.width - 50, this.world.height - 250, "imgBoy");
            }
            else {
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
        };
        SelectGender.prototype.getImageKey = function (key) {
            for (var i = 0; i < MrBook.products.length; i++) {
                if (MrBook.products[i].id == MrBook.avatar[key]) {
                    return MrBook.products[i].imageKey;
                }
            }
            return "";
        };
        return SelectGender;
    }(Phaser.State));
    MrBook.SelectGender = SelectGender;
})(MrBook || (MrBook = {}));
//# sourceMappingURL=store.js.map