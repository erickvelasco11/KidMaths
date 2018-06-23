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
    var Topic = /** @class */ (function (_super) {
        __extends(Topic, _super);
        function Topic() {
            var _this = _super.call(this) || this;
            _this.startTimeCountdown = function () {
                _this.countdownTime--;
                if (_this.countdownTime > 0) {
                    _this.timer.startTimer(1000, _this.startTimeCountdown);
                }
                else {
                    _this.finishTopic();
                    _this.initResults();
                }
                _this.txtTime.setText(_this.countdownTime);
            };
            _this.ready = function () {
                _this.stateReady--;
                if (_this.stateReady == 0) {
                    _this.game.add.audio("sndNow").play('', 0);
                    _this.titReady.loadTexture("titNow", 0);
                    _this.timer.startTimer(1200, _this.ready);
                }
                else {
                    if (_this.stateReady < 0) {
                        _this.titReady.kill();
                        _this.subState = MrBook.PLAYING;
                        _this.timer.startTimer(1000, _this.startTimeCountdown);
                    }
                    else {
                        _this.game.add.audio("snd" + _this.stateReady).play('', 0);
                        _this.titReady.loadTexture("tit" + _this.stateReady, 0);
                        _this.timer.startTimer(1200, _this.ready);
                    }
                }
            };
            return _this;
        }
        Topic.prototype.initPointsText = function () {
            this.points = 0;
            this.txtPoints = this.game.add.text(20, 20, "Puntos: " + this.points, { font: "24px Arial", align: "center", fill: '#ffffff' });
        };
        Topic.prototype.initTimeText = function () {
            this.countdownTime = MrBook.ROUND_TIME;
            this.txtTime = this.game.add.text(this.game.world.centerX, 40, this.countdownTime, { font: "48px Arial", align: "center", fill: '#ffffff' });
            this.txtTime.anchor.setTo(0.5, 0.5);
        };
        Topic.prototype.startReadyCountdown = function () {
            this.subState = MrBook.READY;
            this.stateReady = 3;
            this.titReady = this.game.add.image(this.game.world.centerX, this.game.world.centerY - 100, "tit3");
            this.titReady.anchor.setTo(0.5, 0.5);
            this.game.add.audio("snd" + this.stateReady).play('', 0);
            this.timer.startTimer(1200, this.ready);
        };
        Topic.prototype.initResults = function () {
            this.subState = MrBook.RESULTS;
            this.bgrPause = this.game.add.image(0, 0, "bgrPause");
            MrBook.totalPoints += this.points;
            this.txtResult = this.game.add.text(this.game.world.centerX, this.game.world.centerY - 50, "Puntos: " + this.points, { fill: '#ffffff' });
            this.txtResult.anchor.setTo(0.5, 0.5);
            this.txtResult2 = this.game.add.text(this.game.world.centerX, this.game.world.centerY, "Total: " + MrBook.totalPoints, { fill: '#ffffff' });
            this.txtResult2.anchor.setTo(0.5, 0.5);
            this.btnNext = this.game.add.button(this.game.world.centerX, 400, 'btnNext', this.actionNext, this, 0, 1, 2);
            this.btnNext.anchor.x = 0.5;
            this.titResult = this.game.add.image(this.game.world.centerX, 100, "titCongrats");
            this.titResult.bringToTop();
            this.titResult.anchor.set(0.5, 0.5);
        };
        Topic.prototype.removeResults = function () {
            this.bgrPause.kill();
            this.btnNext.kill();
            this.txtResult.kill();
            this.txtResult2.kill();
            this.titResult.kill();
        };
        Topic.prototype.gofull = function () {
            if (this.scale.isFullScreen) {
                this.scale.stopFullScreen();
            }
            else {
                this.scale.startFullScreen(false);
            }
        };
        return Topic;
    }(Phaser.State));
    MrBook.Topic = Topic;
})(MrBook || (MrBook = {}));
//# sourceMappingURL=topic.js.map