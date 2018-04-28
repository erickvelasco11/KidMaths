var MrBook;
(function (MrBook) {
    /// <reference path="constants.ts" />
    var KidMaths = /** @class */ (function () {
        function KidMaths() {
            this.pGame = new Phaser.Game(800, 600, Phaser.AUTO, 'game'); //, { preload: this.preload, create: this.create });
            this.pGame.state.add("LoadsState", MrBook.Loads, false);
            this.pGame.state.add("StoreState", MrBook.SelectGender, false);
            this.pGame.state.add("PrincipalMenuState", MrBook.PrincipalMenu, false);
            this.pGame.state.add("Topic1_1State", MrBook.Topic1_1, false);
            this.pGame.state.add("Topic1_2State", MrBook.Topic1_2, false);
            this.pGame.state.add("Topic1_3State", MrBook.Topic1_3, false);
            this.pGame.state.start("LoadsState", true, true);
        }
        return KidMaths;
    }());
    MrBook.KidMaths = KidMaths;
    window.onload = function () {
        var game = new KidMaths();
    };
})(MrBook || (MrBook = {}));
//# sourceMappingURL=kidMaths.js.map