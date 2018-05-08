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
            this.imgCannon = this.add.image(this.world.centerX, this.world.height, "imgCannon");
            this.imgCannon.anchor.set(0.5, 0.5);
            //this.imgCannon.pivot.set(this.world.centerX, this.world.height);
            this.imgCannon.height = 120;
            this.imgCannon.width = 50;
            this.text = this.add.text(10, 10, "Cargando...", { font: "20px Arial", align: "center", fill: '#ffffff' });
        };
        Topic8_1.prototype.update = function () {
            this.height = (this.world.height - this.input.y);
            this.width = (this.input.x - this.world.centerX);
            this.hypo = Math.sqrt(Math.pow(this.height, 2) + Math.pow(this.width, 2));
            this.angle = Math.asin(this.height / this.hypo) * (180 / Math.PI);
            this.text.setText("Alto: " + this.height + ", Ancho: " + this.width + ", Hipo: " + this.hypo + ", Angulo: " + (this.width < 0 ? this.angle - 90 : 90 - this.angle));
            this.imgCannon.angle = this.width < 0 ? this.angle - 90 : 90 - this.angle;
        };
        return Topic8_1;
    }(MrBook.Topic));
    MrBook.Topic8_1 = Topic8_1;
})(MrBook || (MrBook = {}));
//# sourceMappingURL=topic8_1.js.map