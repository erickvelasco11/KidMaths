/// <reference path="constants.ts" />

class KidMaths {

    //Variable principal para el juego que tendrá un tamaño de 800x600, será cargado en el div "game" y tendrá 3 funciones de estado
    public pGame: Phaser.Game;

    constructor() {
        avatar = new Avatar();
        this.pGame = new Phaser.Game(800, 600, Phaser.AUTO, 'game');//, { preload: this.preload, create: this.create });

        this.pGame.state.add("LoadsState", Loads, false);
        this.pGame.state.add("SelectGenderState", SelectGender, false);
        this.pGame.state.add("PrincipalMenuState", PrincipalMenu, false);
        this.pGame.state.add("Topic1_1State", Topic1_1, false);
        this.pGame.state.add("Topic1_2State", Topic1_2, false);
        this.pGame.state.add("Topic1_3State", Topic1_3, false);

        this.pGame.state.start("LoadsState", true, true);
    }
}

window.onload = () => {
    var game = new KidMaths();
};