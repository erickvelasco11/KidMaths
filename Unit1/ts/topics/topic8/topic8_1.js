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
    var Topic8_1 = /** @class */ (function (_super) {
        __extends(Topic8_1, _super);
        function Topic8_1() {
            var _this = _super.call(this) || this;
            _this.angle = 0;
            _this.height = 0;
            _this.hypo = 0;
            _this.width = 0;
            return _this;
        }
        Topic8_1.prototype.create = function () {
            this.physics.startSystem(Phaser.Physics.ARCADE);
            this.background = this.add.tileSprite(0, 0, 800, 600, "bgrJungle");
            this.grpMonkeys = this.add.group();
            this.createMonkey((this.world.width / 6));
            this.createMonkey((this.world.width / 6) * 2);
            this.createMonkey(this.world.centerX);
            this.createMonkey((this.world.width / 6) * 4);
            this.createMonkey((this.world.width / 6) * 5);
            this.imgCannon = this.add.image(this.world.centerX, this.world.height, "imgCannon");
            this.imgCannon.anchor.set(0.5, 0.5);
            this.imgCannon.height = 120;
            this.imgCannon.width = 50;
            this.imgBall = this.add.image(this.world.centerX, this.world.height, "imgBall");
            this.imgBall.anchor.set(0.5);
            this.imgBall.pivot.y = 700;
            this.imgBall.height = 50;
            this.imgBall.width = 50;
        };
        Topic8_1.prototype.render = function () {
        };
        Topic8_1.prototype.update = function () {
            this.height = (this.world.height - this.input.y);
            this.width = (this.input.x - this.world.centerX);
            this.hypo = Math.sqrt(Math.pow(this.height, 2) + Math.pow(this.width, 2));
            this.angle = Math.asin(this.height / this.hypo) * (180 / Math.PI);
            this.imgCannon.angle = this.width < 0 ? this.angle - 90 : 90 - this.angle;
            this.imgBall.angle = this.width < 0 ? this.angle - 90 : 90 - this.angle;
            this.game.debug.geom(new Phaser.Point(this.imgCannon.x, this.imgCannon.y - 10), '#ffff00');
            this.game.debug.geom(new Phaser.Point(this.imgBall.x, this.imgBall.y), '#ffff00');
        };
        Topic8_1.prototype.createMonkey = function (xPos) {
            var img = this.grpMonkeys.create(xPos, 0, "imgMonkey");
            img.anchor.x = 0.5;
            img.height = 100;
            img.width = 100;
        };
        return Topic8_1;
    }(MrBook.Topic));
    MrBook.Topic8_1 = Topic8_1;
})(MrBook || (MrBook = {}));
//# sourceMappingURL=topic8_1.js.map