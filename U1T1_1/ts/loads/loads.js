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
    var Loads = /** @class */ (function (_super) {
        __extends(Loads, _super);
        function Loads() {
            return _super.call(this) || this;
        }
        Loads.prototype.superPreload = function () {
            this.load.image('imgBoy', 'assets/images/boy.png');
            this.load.image('imgGirl', 'assets/images/girl.png');
            if (MrBook.avatar == undefined || MrBook.avatar.gender == MrBook.MALE) {
                this.game.load.image('strItmSkin', 'assets/images/clothes/skins/bSkin.png');
                this.game.load.image('strItmWhite', 'assets/images/clothes/skins/bWhite.png');
                this.game.load.image('strItmYellow', 'assets/images/clothes/skins/bYellow.png');
                this.game.load.image('strItmCorn', 'assets/images/clothes/skins/bCorn.png');
                this.game.load.image('strItmBrown', 'assets/images/clothes/skins/bBrown.png');
                this.game.load.image('strItmBlack', 'assets/images/clothes/skins/bBlack.png');
            }
            else {
                this.game.load.image('strItmSkin', 'assets/images/clothes/skins/gSkin.png');
                this.game.load.image('strItmWhite', 'assets/images/clothes/skins/gWhite.png');
                this.game.load.image('strItmYellow', 'assets/images/clothes/skins/gYellow.png');
                this.game.load.image('strItmCorn', 'assets/images/clothes/skins/gCorn.png');
                this.game.load.image('strItmBrown', 'assets/images/clothes/skins/gBrown.png');
                this.game.load.image('strItmBlack', 'assets/images/clothes/skins/gBlack.png');
            }
            this.game.load.image('strItmNoHat', 'assets/images/clothes/head/noHat.png');
            this.game.load.image('strItmBoina', 'assets/images/clothes/head/boina.png');
            this.game.load.image('strItmCachucha', 'assets/images/clothes/head/cachucha.png');
            this.game.load.image('strItmGorroLana', 'assets/images/clothes/head/gorroLana.png');
            this.game.load.image('strItmPoliceHat', 'assets/images/clothes/head/policeHat.png');
            this.game.load.image('strItmCowboyHat', 'assets/images/clothes/head/cowboyHat.png');
            this.game.load.image('strItmBlazer', 'assets/images/clothes/torso/blazer.png');
            this.game.load.image('strItmCamisa', 'assets/images/clothes/torso/camisa.png');
            this.game.load.image('strItmCamiseta', 'assets/images/clothes/torso/camiseta.png');
            this.game.load.image('strItmDress', 'assets/images/clothes/torso/dress.png');
            this.game.load.image('strItmSacoLana', 'assets/images/clothes/torso/sacoLana.png');
            this.game.load.image('strItmElegantPants', 'assets/images/clothes/legs/elegantPants.png');
            this.game.load.image('strItmJean', 'assets/images/clothes/legs/jean.png');
            this.game.load.image('strItmPantaloneta', 'assets/images/clothes/legs/pantaloneta.png');
            this.game.load.image('strItmSkirt', 'assets/images/clothes/legs/skirt.png');
            this.game.load.image('strItmConverse', 'assets/images/clothes/feet/converse.png');
            this.game.load.image('strItmElegantShoes', 'assets/images/clothes/feet/elegantShoes.png');
            this.game.load.image('strItmHeels', 'assets/images/clothes/feet/heels.png');
            this.game.load.image('strItmTennis', 'assets/images/clothes/feet/tennis.png');
        };
        return Loads;
    }(Phaser.State));
    MrBook.Loads = Loads;
})(MrBook || (MrBook = {}));
//# sourceMappingURL=loads.js.map