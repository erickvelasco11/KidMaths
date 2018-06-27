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
            this.load.image('imgBoy', 'https://rawgit.com/erickvelasco11/KidMaths/master/Unit1/assets/images/boy.png').crossOrigin = true;
            this.load.image('imgGirl', 'https://rawgit.com/erickvelasco11/KidMaths/master/Unit1/assets/images/girl.png').crossOrigin = true;
            if (MrBook.avatar == undefined || MrBook.avatar.gender == MrBook.MALE) {
                this.game.load.image('strItmSkin', 'https://rawgit.com/erickvelasco11/KidMaths/master/Unit1/assets/images/clothes/skins/bSkin.png').crossOrigin = true;
                this.game.load.image('strItmWhite', 'https://rawgit.com/erickvelasco11/KidMaths/master/Unit1/assets/images/clothes/skins/bWhite.png').crossOrigin = true;
                this.game.load.image('strItmYellow', 'https://rawgit.com/erickvelasco11/KidMaths/master/Unit1/assets/images/clothes/skins/bYellow.png').crossOrigin = true;
                this.game.load.image('strItmCorn', 'https://rawgit.com/erickvelasco11/KidMaths/master/Unit1/assets/images/clothes/skins/bCorn.png').crossOrigin = true;
                this.game.load.image('strItmBrown', 'https://rawgit.com/erickvelasco11/KidMaths/master/Unit1/assets/images/clothes/skins/bBrown.png').crossOrigin = true;
                this.game.load.image('strItmBlack', 'https://rawgit.com/erickvelasco11/KidMaths/master/Unit1/assets/images/clothes/skins/bBlack.png').crossOrigin = true;
            }
            else {
                this.game.load.image('strItmSkin', 'https://rawgit.com/erickvelasco11/KidMaths/master/Unit1/assets/images/clothes/skins/gSkin.png').crossOrigin = true;
                this.game.load.image('strItmWhite', 'https://rawgit.com/erickvelasco11/KidMaths/master/Unit1/assets/images/clothes/skins/gWhite.png').crossOrigin = true;
                this.game.load.image('strItmYellow', 'https://rawgit.com/erickvelasco11/KidMaths/master/Unit1/assets/images/clothes/skins/gYellow.png').crossOrigin = true;
                this.game.load.image('strItmCorn', 'https://rawgit.com/erickvelasco11/KidMaths/master/Unit1/assets/images/clothes/skins/gCorn.png').crossOrigin = true;
                this.game.load.image('strItmBrown', 'https://rawgit.com/erickvelasco11/KidMaths/master/Unit1/assets/images/clothes/skins/gBrown.png').crossOrigin = true;
                this.game.load.image('strItmBlack', 'https://rawgit.com/erickvelasco11/KidMaths/master/Unit1/assets/images/clothes/skins/gBlack.png').crossOrigin = true;
            }
            this.game.load.image('strItmNoHat', 'https://rawgit.com/erickvelasco11/KidMaths/master/Unit1/assets/images/clothes/head/noHat.png').crossOrigin = true;
            this.game.load.image('strItmBoina', 'https://rawgit.com/erickvelasco11/KidMaths/master/Unit1/assets/images/clothes/head/boina.png').crossOrigin = true;
            this.game.load.image('strItmCachucha', 'https://rawgit.com/erickvelasco11/KidMaths/master/Unit1/assets/images/clothes/head/cachucha.png').crossOrigin = true;
            this.game.load.image('strItmGorroLana', 'https://rawgit.com/erickvelasco11/KidMaths/master/Unit1/assets/images/clothes/head/gorroLana.png').crossOrigin = true;
            this.game.load.image('strItmPoliceHat', 'https://rawgit.com/erickvelasco11/KidMaths/master/Unit1/assets/images/clothes/head/policeHat.png').crossOrigin = true;
            this.game.load.image('strItmCowboyHat', 'https://rawgit.com/erickvelasco11/KidMaths/master/Unit1/assets/images/clothes/head/cowboyHat.png').crossOrigin = true;
            this.game.load.image('strItmBlazer', 'https://rawgit.com/erickvelasco11/KidMaths/master/Unit1/assets/images/clothes/torso/blazer.png').crossOrigin = true;
            this.game.load.image('strItmCamisa', 'https://rawgit.com/erickvelasco11/KidMaths/master/Unit1/assets/images/clothes/torso/camisa.png').crossOrigin = true;
            this.game.load.image('strItmCamiseta', 'https://rawgit.com/erickvelasco11/KidMaths/master/Unit1/assets/images/clothes/torso/camiseta.png').crossOrigin = true;
            this.game.load.image('strItmDress', 'https://rawgit.com/erickvelasco11/KidMaths/master/Unit1/assets/images/clothes/torso/dress.png').crossOrigin = true;
            this.game.load.image('strItmSacoLana', 'https://rawgit.com/erickvelasco11/KidMaths/master/Unit1/assets/images/clothes/torso/sacoLana.png').crossOrigin = true;
            this.game.load.image('strItmElegantPants', 'https://rawgit.com/erickvelasco11/KidMaths/master/Unit1/assets/images/clothes/legs/elegantPants.png').crossOrigin = true;
            this.game.load.image('strItmJean', 'https://rawgit.com/erickvelasco11/KidMaths/master/Unit1/assets/images/clothes/legs/jean.png').crossOrigin = true;
            this.game.load.image('strItmPantaloneta', 'https://rawgit.com/erickvelasco11/KidMaths/master/Unit1/assets/images/clothes/legs/pantaloneta.png').crossOrigin = true;
            this.game.load.image('strItmSkirt', 'https://rawgit.com/erickvelasco11/KidMaths/master/Unit1/assets/images/clothes/legs/skirt.png').crossOrigin = true;
            this.game.load.image('strItmConverse', 'https://rawgit.com/erickvelasco11/KidMaths/master/Unit1/assets/images/clothes/feet/converse.png').crossOrigin = true;
            this.game.load.image('strItmElegantShoes', 'https://rawgit.com/erickvelasco11/KidMaths/master/Unit1/assets/images/clothes/feet/elegantShoes.png').crossOrigin = true;
            this.game.load.image('strItmHeels', 'https://rawgit.com/erickvelasco11/KidMaths/master/Unit1/assets/images/clothes/feet/heels.png').crossOrigin = true;
            this.game.load.image('strItmTennis', 'https://rawgit.com/erickvelasco11/KidMaths/master/Unit1/assets/images/clothes/feet/tennis.png').crossOrigin = true;
        };
        return Loads;
    }(Phaser.State));
    MrBook.Loads = Loads;
})(MrBook || (MrBook = {}));
//# sourceMappingURL=loads.js.map