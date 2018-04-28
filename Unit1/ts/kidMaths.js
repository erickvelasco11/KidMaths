/// <reference path="constants.ts" />
var KidMaths = /** @class */ (function () {
    function KidMaths() {
        avatar = new Avatar();
        this.pGame = new Phaser.Game(800, 600, Phaser.AUTO, 'game'); //, { preload: this.preload, create: this.create });
        this.pGame.state.add("LoadsState", Loads, false);
        this.pGame.state.add("StoreState", SelectGender, false);
        this.pGame.state.add("PrincipalMenuState", PrincipalMenu, false);
        this.pGame.state.add("Topic1_1State", Topic1_1, false);
        this.pGame.state.add("Topic1_2State", Topic1_2, false);
        this.pGame.state.add("Topic1_3State", Topic1_3, false);
        this.pGame.state.start("LoadsState", true, true);
    }
    return KidMaths;
}());
window.onload = function () {
    var game = new KidMaths();
};
//# sourceMappingURL=kidMaths.js.map