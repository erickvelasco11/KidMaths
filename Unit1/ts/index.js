/// <reference path="constants.ts" />
var KidMaths = /** @class */ (function () {
    function KidMaths() {
        var _this = this;
        //Variables para los estados
        this.state = LOADING;
        this.fps = 0;
        this.x = 32;
        this.y = 80;
        this.mySelf = this;
        this.preload = function () {
            _this.loads.filesToLoad();
            _this.pGame.load.onLoadStart.add(_this.loads.loadStart, _this);
            _this.pGame.load.onFileComplete.add(_this.loads.fileComplete, _this);
            _this.pGame.load.onLoadComplete.add(_this.loads.loadComplete, _this);
            _this.pGame.load.start();
        };
        this.create = function () {
            new SelectGender(_this);
        };
        //Esta función actualiza la pantalla del juego en los diferentes estados
        this.update = function () {
            debugger;
            _this.fps++;
            switch (_this.state) {
                case LOADING:
                case SELECT_GENDER:
                    break;
                case PRINCIPAL_MENU:
                    break;
                case TOPIC1_1:
                    switch (_this.subState) {
                        case READY:
                        case RESULTS:
                            if (_this.fps % 200 == 0) {
                                //launchItemTopic1();
                            }
                            break;
                        case PLAYING:
                            if (_this.fps % 200 == 0) {
                                //launchItemTopic1();
                            }
                            //this.game.physics.arcade.collide(items, boxes, putInChest);
                            break;
                        case PAUSED:
                            break;
                    }
                    break;
                case TOPIC1_2:
                    switch (_this.subState) {
                        case READY:
                            break;
                        case PLAYING:
                            //generateRandomFigure();
                            break;
                        case PAUSED:
                            break;
                        case RESULTS:
                            break;
                    }
                    break;
            }
        };
        this.pGame = new Phaser.Game(800, 600, Phaser.AUTO, 'game', { preload: this.preload, create: this.create });
        this.loads = new Loads(this);
        this.pGame.state.start("preload");
    }
    return KidMaths;
}());
window.onload = function () {
    var game = new KidMaths();
};
//# sourceMappingURL=index.js.map