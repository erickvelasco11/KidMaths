var MrBook;
(function (MrBook) {
    /// <reference path="constants.ts" />
    var KidMaths = /** @class */ (function () {
        function KidMaths() {
            this.pGame = new Phaser.Game(800, 600, Phaser.AUTO, 'game'); //, { preload: this.preload, create: this.create });
            this.pGame.state.add("LoadGame", MrBook.LoadGame, false);
            this.pGame.state.add("LoadStore", MrBook.LoadStore, false);
            this.pGame.state.add("Store", MrBook.SelectGender, false);
            this.pGame.state.add("PrincipalMenu", MrBook.PrincipalMenu, false);
            this.pGame.state.add("Topic1_2", MrBook.Topic1_2, false);
            this.pGame.state.add("LoadTopic1_2", MrBook.LoadTopic1_2, false);
            this.pGame.state.start("LoadGame", true, true);
        }
        return KidMaths;
    }());
    MrBook.KidMaths = KidMaths;
    window.onload = function () {
        var game = new KidMaths();
    };
})(MrBook || (MrBook = {}));
//# sourceMappingURL=kidMaths.js.map