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
var Topic1_3 = /** @class */ (function (_super) {
    __extends(Topic1_3, _super);
    function Topic1_3() {
        return _super.call(this) || this;
    }
    Topic1_3.prototype.create = function () {
        this.timer = new Timer(this.game);
        this.actionNext = this.next;
        this.finishTopic = this.finishTopic1_3;
        this.background = this.game.add.tileSprite(0, 0, this.game.world.width, this.game.world.height, "bgrSelect");
        this.platform = this.game.add.image(this.game.world.centerX, this.game.world.height - 80, "imgPlatform");
        this.platform.anchor.set(0.5, 0.5);
        this.platform.width = 300;
        this.platform.height = 200;
        this.initPointsText();
        this.initTimeText();
        this.startReadyCountdown();
    };
    Topic1_3.prototype.next = function () {
        this.removeResults();
        this.game.state.start("PrincipalMenuState", true);
    };
    Topic1_3.prototype.finishTopic1_3 = function () {
    };
    return Topic1_3;
}(Topic));
//# sourceMappingURL=topic1_3.js.map