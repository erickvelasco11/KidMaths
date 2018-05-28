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
    var Topic7_1 = /** @class */ (function (_super) {
        __extends(Topic7_1, _super);
        function Topic7_1() {
            var _this = _super.call(this) || this;
            _this.clicked = function () {
            };
            _this.next = function () {
                _this.game.state.start("PrincipalMenu", true);
            };
            _this.finishTopic15_1 = function () {
            };
            return _this;
        }
        Topic7_1.prototype.create = function () {
            this.timer = new MrBook.Timer(this.game);
            this.background = this.add.tileSprite(0, 0, 800, 600, "bgrTable");
            this.actionNext = this.next;
            this.finishTopic = this.finishTopic15_1;
            MrBook.totalPoints = 0;
            this.grpDominoes = this.add.group(undefined, "grpDominoes", undefined, true, Phaser.Physics.ARCADE);
            this.generateRandomDominoes();
            this.initTimeText();
            this.initPointsText();
            this.startReadyCountdown();
        };
        Topic7_1.prototype.update = function () {
            if (this.subState == MrBook.PLAYING) {
            }
        };
        Topic7_1.prototype.generateRandomDominoes = function () {
            var x = 20;
            for (var i = 0; i < 8; i++) {
                var one = this.rnd.integerInRange(0, 6);
                var two = this.rnd.integerInRange(0, 6);
                var domino = this.game.add.sprite(x, 450, 'sprDominoes');
                domino.width = 60;
                domino.height = 120;
                if (one < two) {
                    domino.frameName = one + "" + two + '.png';
                }
                else {
                    domino.frameName = two + "" + one + '.png';
                }
                domino.inputEnabled = true;
                domino.input.pixelPerfectClick = true;
                domino.events.onInputDown.add(this.clicked);
                x += 100;
            }
        };
        return Topic7_1;
    }(MrBook.Topic));
    MrBook.Topic7_1 = Topic7_1;
})(MrBook || (MrBook = {}));
//# sourceMappingURL=topic7_1.js.map