var MrBook;
(function (MrBook) {
    var Avatar = /** @class */ (function () {
        function Avatar() {
        }
        Avatar.prototype.paint = function (game, x, y) {
            this.game = game;
            this.grpAvatar = game.add.group();
            if (MrBook.avatar.gender == MrBook.MALE) {
                this.grpAvatar.create(x, y, "imgBoy");
            }
            else {
                this.grpAvatar.create(x, y, "imgGirl");
            }
            this.grpAvatar.create(x, y, this.getImageKey("skinColorId"));
            this.grpAvatar.create(x, y, this.getImageKey("shoesId"));
            this.grpAvatar.create(x, y, this.getImageKey("pantsId"));
            this.grpAvatar.create(x, y, this.getImageKey("shirtId"));
            this.grpAvatar.create(x, y, this.getImageKey("capId"));
        };
        Avatar.prototype.changeClothes = function (type, indexSprite) {
            this.grpAvatar.removeChildAt(type);
            var skin = this.game.add.image(this.game.world.width - 50, this.game.world.height - 250, MrBook.productsStore[indexSprite].imageKey);
            this.grpAvatar.addAt(skin, type);
        };
        Avatar.prototype.getImageKey = function (key) {
            for (var i = 0; i < MrBook.productsStore.length; i++) {
                if (MrBook.productsStore[i].id == MrBook.avatar[key]) {
                    return MrBook.productsStore[i].imageKey;
                }
            }
            return "";
        };
        return Avatar;
    }());
    MrBook.Avatar = Avatar;
})(MrBook || (MrBook = {}));
//# sourceMappingURL=avatar.js.map