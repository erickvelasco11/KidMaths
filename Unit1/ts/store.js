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
            _this.currentType = "0";
            _this.clickMenu = function (item) {
                _this.grpSeeButtons.removeAll();
                _this.grpBuyButtons.removeAll();
                _this.grpProducts.removeAll();
                if (_this.checked != undefined) {
                    _this.checked.destroy();
                }
                switch (item.key) {
                    case "btnMenuSkin":
                        _this.currentType = "1";
                        break;
                    case "btnMenuHead":
                        _this.currentType = "2";
                        break;
                    case "btnMenuTorso":
                        _this.currentType = "3";
                        break;
                    case "btnMenuLegs":
                        _this.currentType = "4";
                        break;
                    case "btnMenuFeet":
                        _this.currentType = "5";
                        break;
                }
                _this.addSeeBuyButtons();
            };
            _this.clickSee = function (item, pointer) {
                switch (+_this.currentType) {
                    case 1:
                        _this.grpAvatar.removeChildAt(1);
                        var skin = _this.game.add.image(_this.world.width - 50, _this.world.height - 250, MrBook.productsStore[item.z].imageKey);
                        _this.grpAvatar.addAt(skin, 1);
                        break;
                    case 2:
                        _this.grpAvatar.removeChildAt(5);
                        var skin = _this.game.add.image(_this.world.width - 50, _this.world.height - 250, MrBook.productsStore[item.z + 6].imageKey);
                        _this.grpAvatar.addAt(skin, 5);
                        break;
                    case 3:
                        _this.grpAvatar.removeChildAt(4);
                        var skin = _this.game.add.image(_this.world.width - 50, _this.world.height - 250, MrBook.productsStore[item.z + 12].imageKey);
                        _this.grpAvatar.addAt(skin, 4);
                        break;
                    case 4:
                        _this.grpAvatar.removeChildAt(3);
                        var skin = _this.game.add.image(_this.world.width - 50, _this.world.height - 250, MrBook.productsStore[item.z + 17].imageKey);
                        _this.grpAvatar.addAt(skin, 3);
                        break;
                    case 5:
                        _this.grpAvatar.removeChildAt(2);
                        var skin = _this.game.add.image(_this.world.width - 50, _this.world.height - 250, MrBook.productsStore[item.z + 21].imageKey);
                        _this.grpAvatar.addAt(skin, 2);
                        break;
                }
            };
            _this.clickBuy = function (item) {
                var purchase = {};
                purchase["0"] = MrBook.avatar.id;
                switch (+_this.currentType) {
                    case 1:
                        _this.grpAvatar.removeChildAt(1);
                        purchase["1"] = item.z + 1;
                        var skin = _this.game.add.image(_this.world.width - 50, _this.world.height - 250, MrBook.productsStore[item.z].imageKey);
                        _this.grpAvatar.addAt(skin, 1);
                        break;
                    case 2:
                        _this.grpAvatar.removeChildAt(5);
                        purchase["1"] = item.z + 6;
                        var skin = _this.game.add.image(_this.world.width - 50, _this.world.height - 250, MrBook.productsStore[item.z + 6].imageKey);
                        _this.grpAvatar.addAt(skin, 5);
                        break;
                    case 3:
                        _this.grpAvatar.removeChildAt(4);
                        purchase["1"] = item.z + 12;
                        var skin = _this.game.add.image(_this.world.width - 50, _this.world.height - 250, MrBook.productsStore[item.z + 12].imageKey);
                        _this.grpAvatar.addAt(skin, 4);
                        break;
                    case 4:
                        _this.grpAvatar.removeChildAt(3);
                        purchase["1"] = item.z + 17;
                        var skin = _this.game.add.image(_this.world.width - 50, _this.world.height - 250, MrBook.productsStore[item.z + 17].imageKey);
                        _this.grpAvatar.addAt(skin, 3);
                        break;
                    case 5:
                        _this.grpAvatar.removeChildAt(2);
                        purchase["1"] = item.z + 21;
                        var skin = _this.game.add.image(_this.world.width - 50, _this.world.height - 250, MrBook.productsStore[item.z + 21].imageKey);
                        _this.grpAvatar.addAt(skin, 2);
                        break;
                }
                _this.insertPurchase(purchase);
            };
            _this.insertPurchase = function (purchase) {
                $.ajax("https://www.mrbook.com.co/api/php/crud.php", {
                    type: "post",
                    data: {
                        'option': 'Insert', 'tabla': 'mb_products_by_avatar', 'datos': purchase, 'pk': ''
                    }
                }).done(function (data, textStatus, jqXHR) {
                }).fail(function (jqxhr, textStatus, error) {
                });
            };
            _this.addSeeBuyButtons = function () {
                var column = 0;
                var x = 150;
                var y = 128;
                var xProduct = 150;
                var yProduct = 50;
                for (var i = 0; i < MrBook.productsStore.length; i++) {
                    if (MrBook.productsStore[i].idType == _this.currentType) {
                        if (MrBook.productsStore[i].gender == null || MrBook.productsStore[i].gender == MrBook.avatar.gender) {
                            var btnSee = _this.game.add.button(x, y, "btnSee", null, _this, 0, 1, 2);
                            btnSee.height = 30;
                            btnSee.width = 30;
                            _this.grpSeeButtons.add(btnSee);
                            var btnBuy = _this.game.add.button(x += 40, y, "btnBuy", _this.clickBuy, _this, 0, 1, 2);
                            btnBuy.height = 30;
                            btnBuy.width = 30;
                            _this.grpBuyButtons.add(btnBuy);
                            var prod = _this.game.add.sprite(xProduct, yProduct, "sprProducts", (+MrBook.productsStore[i].id) - 1);
                            prod.height = 70;
                            prod.width = 70;
                            _this.grpProducts.add(prod);
                            if (MrBook.productsStore[i].id == MrBook.avatar.skinColorId
                                || MrBook.productsStore[i].id == MrBook.avatar.capId
                                || MrBook.productsStore[i].id == MrBook.avatar.shirtId
                                || MrBook.productsStore[i].id == MrBook.avatar.pantsId
                                || MrBook.productsStore[i].id == MrBook.avatar.shoesId) {
                                _this.checked = _this.game.add.image(xProduct + 45, yProduct - 10, "imgCheck");
                                _this.checked.height = 30;
                                _this.checked.width = 30;
                            }
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
                        else {
                            _this.grpSeeButtons.create(x, y, "strItmNoHat");
                            _this.grpBuyButtons.create(x, y, "strItmNoHat");
                            _this.grpProducts.create(x, y, "strItmNoHat");
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
            this.grpSeeButtons.onChildInputDown.add(this.clickSee, this);
            this.grpBuyButtons.onChildInputDown.add(this.clickBuy, this);
        };
        SelectGender.prototype.getImageKey = function (key) {
            for (var i = 0; i < MrBook.productsStore.length; i++) {
                if (MrBook.productsStore[i].id == MrBook.avatar[key]) {
                    return MrBook.productsStore[i].imageKey;
                }
            }
            return "";
        };
        return SelectGender;
    }(Phaser.State));
    MrBook.SelectGender = SelectGender;
})(MrBook || (MrBook = {}));
//# sourceMappingURL=store.js.map