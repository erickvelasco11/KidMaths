module MrBook {
    export class Loads extends Phaser.State {

        constructor() {
            super();
        }

        superPreload() {
            this.load.image('imgBoy', 'https://rawgit.com/erickvelasco11/KidMaths/master/Assets/images/boy.png').crossOrigin = true;
            this.load.image('imgGirl', 'https://rawgit.com/erickvelasco11/KidMaths/master/Assets/images/girl.png').crossOrigin = true;

            if (avatar == undefined || avatar.gender == MALE) {
                this.game.load.image('strItmSkin', 'https://rawgit.com/erickvelasco11/KidMaths/master/Assets/images/clothes/skins/bSkin.png').crossOrigin = true;
                this.game.load.image('strItmWhite', 'https://rawgit.com/erickvelasco11/KidMaths/master/Assets/images/clothes/skins/bWhite.png').crossOrigin = true;
                this.game.load.image('strItmYellow', 'https://rawgit.com/erickvelasco11/KidMaths/master/Assets/images/clothes/skins/bYellow.png').crossOrigin = true;
                this.game.load.image('strItmCorn', 'https://rawgit.com/erickvelasco11/KidMaths/master/Assets/images/clothes/skins/bCorn.png').crossOrigin = true;
                this.game.load.image('strItmBrown', 'https://rawgit.com/erickvelasco11/KidMaths/master/Assets/images/clothes/skins/bBrown.png').crossOrigin = true;
                this.game.load.image('strItmBlack', 'https://rawgit.com/erickvelasco11/KidMaths/master/Assets/images/clothes/skins/bBlack.png').crossOrigin = true;
            } else {
                this.game.load.image('strItmSkin', 'https://rawgit.com/erickvelasco11/KidMaths/master/Assets/images/clothes/skins/gSkin.png').crossOrigin = true;
                this.game.load.image('strItmWhite', 'https://rawgit.com/erickvelasco11/KidMaths/master/Assets/images/clothes/skins/gWhite.png').crossOrigin = true;
                this.game.load.image('strItmYellow', 'https://rawgit.com/erickvelasco11/KidMaths/master/Assets/images/clothes/skins/gYellow.png').crossOrigin = true;
                this.game.load.image('strItmCorn', 'https://rawgit.com/erickvelasco11/KidMaths/master/Assets/images/clothes/skins/gCorn.png').crossOrigin = true;
                this.game.load.image('strItmBrown', 'https://rawgit.com/erickvelasco11/KidMaths/master/Assets/images/clothes/skins/gBrown.png').crossOrigin = true;
                this.game.load.image('strItmBlack', 'https://rawgit.com/erickvelasco11/KidMaths/master/Assets/images/clothes/skins/gBlack.png').crossOrigin = true;
            }

            this.game.load.image('strItmNoHat', 'https://rawgit.com/erickvelasco11/KidMaths/master/Assets/images/clothes/head/noHat.png').crossOrigin = true;
            this.game.load.image('strItmBoina', 'https://rawgit.com/erickvelasco11/KidMaths/master/Assets/images/clothes/head/boina.png').crossOrigin = true;
            this.game.load.image('strItmCachucha', 'https://rawgit.com/erickvelasco11/KidMaths/master/Assets/images/clothes/head/cachucha.png').crossOrigin = true;
            this.game.load.image('strItmGorroLana', 'https://rawgit.com/erickvelasco11/KidMaths/master/Assets/images/clothes/head/gorroLana.png').crossOrigin = true;
            this.game.load.image('strItmPoliceHat', 'https://rawgit.com/erickvelasco11/KidMaths/master/Assets/images/clothes/head/policeHat.png').crossOrigin = true;
            this.game.load.image('strItmCowboyHat', 'https://rawgit.com/erickvelasco11/KidMaths/master/Assets/images/clothes/head/cowboyHat.png').crossOrigin = true;

            this.game.load.image('strItmBlazer', 'https://rawgit.com/erickvelasco11/KidMaths/master/Assets/images/clothes/torso/blazer.png').crossOrigin = true;
            this.game.load.image('strItmCamisa', 'https://rawgit.com/erickvelasco11/KidMaths/master/Assets/images/clothes/torso/camisa.png').crossOrigin = true;
            this.game.load.image('strItmCamiseta', 'https://rawgit.com/erickvelasco11/KidMaths/master/Assets/images/clothes/torso/camiseta.png').crossOrigin = true;
            this.game.load.image('strItmDress', 'https://rawgit.com/erickvelasco11/KidMaths/master/Assets/images/clothes/torso/dress.png').crossOrigin = true;
            this.game.load.image('strItmSacoLana', 'https://rawgit.com/erickvelasco11/KidMaths/master/Assets/images/clothes/torso/sacoLana.png').crossOrigin = true;

            this.game.load.image('strItmElegantPants', 'https://rawgit.com/erickvelasco11/KidMaths/master/Assets/images/clothes/legs/elegantPants.png').crossOrigin = true;
            this.game.load.image('strItmJean', 'https://rawgit.com/erickvelasco11/KidMaths/master/Assets/images/clothes/legs/jean.png').crossOrigin = true;
            this.game.load.image('strItmPantaloneta', 'https://rawgit.com/erickvelasco11/KidMaths/master/Assets/images/clothes/legs/pantaloneta.png').crossOrigin = true;
            this.game.load.image('strItmSkirt', 'https://rawgit.com/erickvelasco11/KidMaths/master/Assets/images/clothes/legs/skirt.png').crossOrigin = true;

            this.game.load.image('strItmConverse', 'https://rawgit.com/erickvelasco11/KidMaths/master/Assets/images/clothes/feet/converse.png').crossOrigin = true;
            this.game.load.image('strItmElegantShoes', 'https://rawgit.com/erickvelasco11/KidMaths/master/Assets/images/clothes/feet/elegantShoes.png').crossOrigin = true;
            this.game.load.image('strItmHeels', 'https://rawgit.com/erickvelasco11/KidMaths/master/Assets/images/clothes/feet/heels.png').crossOrigin = true;
            this.game.load.image('strItmTennis', 'https://rawgit.com/erickvelasco11/KidMaths/master/Assets/images/clothes/feet/tennis.png').crossOrigin = true;
        }
    }
}