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
var PrincipalMenu = /** @class */ (function (_super) {
    __extends(PrincipalMenu, _super);
    function PrincipalMenu() {
        var _this = _super.call(this) || this;
        _this.startGame = function () {
            _this.btnStart.kill();
            _this.title.kill();
            _this.game.state.start("Topic1_3State", true);
        };
        _this.startStore = function () {
            _this.btnStart.kill();
            _this.title.kill();
            _this.game.state.start("StoreState", true);
        };
        return _this;
    }
    PrincipalMenu.prototype.create = function () {
        if (avatar.gender == MALE) {
            this.background = this.game.add.tileSprite(0, 0, this.game.world.width, this.game.world.height, "bgrPlayingBoy");
        }
        else {
            this.background = this.game.add.tileSprite(0, 0, this.game.world.width, this.game.world.height, "bgrPlayingGirl");
        }
        this.btnStart = this.game.add.button(this.game.world.centerX, 400, 'btnStart', this.startGame, this, 0, 1, 2);
        this.btnStart.anchor.x = 0.5;
        this.btnStore = this.game.add.button(100, this.game.world.height - 80, 'btnStore', this.startStore, this, 0, 1, 2);
        this.btnStore.anchor.x = 0.5;
        this.btnStore.scale.set(0.6, 0.6);
        this.title = this.game.add.image(this.game.world.centerX, 100, 'titNameUnit');
        this.title.anchor.set(0.5, 0.5);
        this;
    };
    return PrincipalMenu;
}(Phaser.State));
//# sourceMappingURL=principalMenu.js.map