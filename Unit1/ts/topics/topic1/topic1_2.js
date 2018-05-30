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
    var Topic1_2 = /** @class */ (function (_super) {
        __extends(Topic1_2, _super);
        function Topic1_2() {
            return _super.call(this) || this;
        }
        Topic1_2.prototype.create = function () {
            this.timer = new MrBook.Timer(this.game);
            this.actionNext = this.next;
            this.finishTopic = this.finishTopic1_2;
            this.background = this.game.add.tileSprite(0, 0, this.game.world.width, this.game.world.height, "bgrPuzzle");
            this.graphics = this.game.add.graphics(0, 0);
            this.graphics.lineStyle(2, MrBook.GREEN, 1);
            this.graphics.drawTriangle([
                new Phaser.Point(0, this.game.world.height - 2),
                new Phaser.Point(this.game.world.width / 6, this.game.world.height - (this.game.world.width / 3)),
                new Phaser.Point(this.game.world.width / 3, this.game.world.height - 2),
                new Phaser.Point(0, this.game.world.height - 2)
            ]);
            this.graphics.lineStyle(2, MrBook.RED, 1);
            this.graphics.drawRect(this.game.world.width / 3, this.game.world.height - (this.game.world.width / 3), (this.game.world.width / 3) - 2, this.game.world.width / 3);
            this.graphics.lineStyle(2, MrBook.BLUE, 1);
            this.graphics.drawCircle(((this.game.world.width / 3) * 2) + (this.game.world.width / 6), this.game.world.height - (this.game.world.width / 6), this.game.world.width / 3);
            this.initPointsText();
            this.initTimeText();
            this.startReadyCountdown();
        };
        Topic1_2.prototype.update = function () {
            if (!this.isFigureInGame && this.subState == MrBook.PLAYING) {
                this.generateRandomFigure();
            }
        };
        Topic1_2.prototype.generateRandomFigure = function () {
            if (!this.isFigureInGame) {
                this.isFigureInGame = true;
                var figure = this.game.rnd.integerInRange(0, 2);
                switch (figure) {
                    case 0:
                        this.generateCircle();
                        break;
                    case 1:
                        this.generateSquare();
                        break;
                    case 2:
                        this.generateTriangle();
                        break;
                }
            }
        };
        Topic1_2.prototype.generateCircle = function () {
            this.figure = this.game.add.sprite(this.game.world.centerX, this.game.world.centerY - 100, 'imgCircle');
            this.figureProperties();
        };
        Topic1_2.prototype.generateTriangle = function () {
            this.figure = this.game.add.sprite(this.game.world.centerX, this.game.world.centerY - 100, 'imgTriangle');
            this.figureProperties();
        };
        Topic1_2.prototype.generateSquare = function () {
            this.figure = this.game.add.sprite(this.game.world.centerX, this.game.world.centerY - 100, 'imgSquare');
            this.figureProperties();
        };
        Topic1_2.prototype.figureProperties = function () {
            this.figure.height = this.game.rnd.integerInRange(50, 120);
            this.figure.width = this.game.rnd.integerInRange(50, 120);
            this.figure.anchor.setTo(0.5, 0.5);
            this.figure.tint = Phaser.Color.getRandomColor();
            this.figure.inputEnabled = true;
            this.figure.input.enableDrag();
            this.figure.events.onDragStop.add(this.stopDragGraphic, this);
        };
        Topic1_2.prototype.stopDragGraphic = function (item, pointer) {
            if (item.centerY > this.game.world.height - (this.game.world.width / 3)) {
                switch (item.key) {
                    case "imgTriangle":
                        if (item.centerX < this.game.world.width / 3) {
                            this.points++;
                            this.txtPoints.setText("Puntos: " + this.points);
                            this.game.add.audio("sndPoint").play('', 0);
                        }
                        else {
                            this.game.add.audio("sndError").play('', 0);
                        }
                        break;
                    case "imgSquare":
                        if (item.centerX < ((this.game.world.width / 3) * 2) && item.centerX > this.game.world.width / 3) {
                            this.points++;
                            this.txtPoints.setText("Puntos: " + this.points);
                            this.game.add.audio("sndPoint").play('', 0);
                        }
                        else {
                            this.game.add.audio("sndError").play('', 0);
                        }
                        break;
                    case "imgCircle":
                        if (item.centerX > (this.game.world.width / 3) * 2) {
                            this.points++;
                            this.txtPoints.setText("Puntos: " + this.points);
                            this.game.add.audio("sndPoint").play('', 0);
                        }
                        else {
                            this.game.add.audio("sndError").play('', 0);
                        }
                        break;
                }
                item.kill();
                this.isFigureInGame = false;
            }
        };
        Topic1_2.prototype.next = function () {
            this.removeResults();
            this.game.state.start("PrincipalMenu", true);
        };
        Topic1_2.prototype.finishTopic1_2 = function () {
            MrBook.totalPoints = 0;
            this.figure.kill();
        };
        return Topic1_2;
    }(MrBook.Topic));
    MrBook.Topic1_2 = Topic1_2;
})(MrBook || (MrBook = {}));
//# sourceMappingURL=topic1_2.js.map