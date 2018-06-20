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
    var PrincipalMenu = /** @class */ (function (_super) {
        __extends(PrincipalMenu, _super);
        function PrincipalMenu() {
            return _super.call(this) || this;
        }
        PrincipalMenu.prototype.create = function () {
            var _this = this;
            if (MrBook.avatar.gender == MrBook.MALE) {
                this.background = this.add.tileSprite(0, 0, this.world.width, this.world.height, "bgrPlayingBoy");
            }
            else {
                this.background = this.add.tileSprite(0, 0, this.world.width, this.world.height, "bgrPlayingGirl");
            }
            this.btnStart = this.add.button(this.world.centerX, 300, 'btnStart1', function () {
                _this.game.state.start("LoadTopic1_1");
            }, this, 0, 1, 2);
            this.btnStart.anchor.x = 0.5;
            this.btnStart.scale.set(0.8, 0.8);
            this.btnStore = this.add.button(100, this.world.height - 80, 'btnStore', function () {
                _this.game.state.start("LoadStore");
            }, this, 0, 1, 2);
            this.btnStore.anchor.x = 0.5;
            this.btnStore.scale.set(0.6, 0.6);
            this.title = this.add.image(this.world.centerX, 100, 'titNameUnit');
            this.title.anchor.set(0.5, 0.5);
        };
        return PrincipalMenu;
    }(Phaser.State));
    MrBook.PrincipalMenu = PrincipalMenu;
})(MrBook || (MrBook = {}));
//# sourceMappingURL=principalMenu.js.map