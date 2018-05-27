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
    var Topic15_1 = /** @class */ (function (_super) {
        __extends(Topic15_1, _super);
        function Topic15_1() {
            var _this = _super.call(this) || this;
            _this.velocity = 0;
            _this.roadLimitLeft = 240;
            _this.roadLimitRight = 430;
            return _this;
        }
        Topic15_1.prototype.create = function () {
            this.timer = new MrBook.Timer(this.game);
            this.background = this.add.tileSprite(0, 0, 800, 600, "bgrCar");
            this.car = this.add.image(300, 490, "car");
            this.car.width = 40;
            this.car.height = 60;
            this.text = this.add.text(50, 50, "", {});
            this.keyLeft = this.input.keyboard.addKey(Phaser.Keyboard.LEFT);
            this.keyRight = this.input.keyboard.addKey(Phaser.Keyboard.RIGHT);
            this.initTimeText();
            this.initPointsText();
            this.startReadyCountdown();
        };
        Topic15_1.prototype.update = function () {
            if (this.velocity < 10 && this.subState == MrBook.PLAYING) {
                if (this.keyLeft.isDown && this.car.position.x > this.roadLimitLeft) {
                    this.car.position.x -= 2;
                }
                if (this.keyRight.isDown && this.car.position.x < this.roadLimitRight - 40) {
                    this.car.position.x += 2;
                }
                this.velocity += 0.05;
                this.background.tilePosition.y += this.velocity;
            }
        };
        return Topic15_1;
    }(MrBook.Topic));
    MrBook.Topic15_1 = Topic15_1;
})(MrBook || (MrBook = {}));
//# sourceMappingURL=topic15_1.js.map