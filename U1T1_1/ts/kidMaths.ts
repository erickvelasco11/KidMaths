namespace MrBook {
    /// <reference path="constants.ts" />
    export class KidMaths {

        //Variable principal para el juego que tendrá un tamaño de 800x600, será cargado en el div "game" y tendrá 3 funciones de estado
        public pGame: Phaser.Game;

        constructor() {
            this.pGame = new Phaser.Game(800, 600, Phaser.AUTO, 'game');//, { preload: this.preload, create: this.create });

            this.pGame.state.add("LoadGame", LoadGame, false);
            this.pGame.state.add("LoadStore", LoadStore, false);
            this.pGame.state.add("Store", SelectGender, false);
            this.pGame.state.add("PrincipalMenu", PrincipalMenu, false);
            this.pGame.state.add("Topic1_1", Topic1_1, false);
            this.pGame.state.add("LoadTopic1_1", LoadTopic1_1, false);

            this.pGame.state.start("LoadGame", true, true);
        }
    }

    window.onload = () => {
        var game = new KidMaths();
    };
}