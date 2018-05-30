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
            _this.totalSum = -1;
            _this.sum1 = 0;
            _this.sum2 = 0;
            _this.xPos = 0;
            _this.yPos = 0;
            _this.isDominoesInTable = false;
            _this.sums = new Array();
            _this.startDrag = function (item, pointer) {
                _this.xPos = item.position.x;
                _this.yPos = item.position.y;
            };
            _this.endDrag = function (item, pointer) {
                if (pointer.x > 200 && pointer.x < 600 && pointer.y > 100 && pointer.y < 400) {
                    if (_this.totalSum == _this.sums[item.z]) {
                        _this.points++;
                        _this.txtPoints.setText("Puntos: " + _this.points);
                        _this.add.audio("sndPoint").play('', 0);
                    }
                    else {
                        _this.add.audio("sndError").play('', 0);
                    }
                    _this.grpDominoes.removeAll(true);
                    _this.totalSum = -1;
                    _this.sums = new Array();
                    _this.generateRandomDominoes();
                }
                else {
                    item.position.x = _this.xPos;
                    item.position.y = _this.yPos;
                }
            };
            _this.next = function () {
                _this.game.state.start("PrincipalMenu", true);
            };
            _this.finishTopic15_1 = function () {
                _this.grpDominoes.removeAll(true);
            };
            return _this;
        }
        Topic7_1.prototype.create = function () {
            this.timer = new MrBook.Timer(this.game);
            this.background = this.add.tileSprite(0, 0, 800, 600, "bgrTable");
            this.actionNext = this.next;
            this.finishTopic = this.finishTopic15_1;
            MrBook.totalPoints = 0;
            this.txtNumber = this.add.text(this.world.centerX, 250, "", { font: "180px Arial", align: "center", fill: '#dddddd' });
            this.txtNumber.anchor.set(0.5, 0.5);
            this.graphics = this.game.add.graphics(0, 0);
            this.grpDominoes = this.add.group(undefined, "grpDominoes", undefined, true, Phaser.Physics.ARCADE);
            this.graphics.lineStyle(2, MrBook.BLACK, 1);
            this.graphics.drawRect(200, 100, 400, 300);
            this.initTimeText();
            this.initPointsText();
            this.startReadyCountdown();
        };
        Topic7_1.prototype.update = function () {
            if (this.subState == MrBook.PLAYING) {
                if (!this.isDominoesInTable) {
                    this.generateRandomDominoes();
                }
            }
        };
        Topic7_1.prototype.generateRandomDominoes = function () {
            var x = 20;
            for (var i = 0; i < 8; i++) {
                var one = this.rnd.integerInRange(0, 6);
                var two = this.rnd.integerInRange(0, 6);
                if ((this.totalSum == -1 && this.rnd.integerInRange(0, 1) == 0) || (i == 7 && this.totalSum == -1)) {
                    this.sum1 = one;
                    this.sum2 = two;
                    this.totalSum = one + two;
                    this.txtNumber.setText(this.totalSum + "");
                }
                this.sums.push((one + two));
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
                domino.input.enableDrag();
                domino.events.onDragStart.add(this.startDrag, this);
                domino.events.onDragStop.add(this.endDrag, this);
                this.grpDominoes.add(domino);
                x += 100;
                this.isDominoesInTable = true;
            }
        };
        return Topic7_1;
    }(MrBook.Topic));
    MrBook.Topic7_1 = Topic7_1;
})(MrBook || (MrBook = {}));
//# sourceMappingURL=topic7_1.js.map