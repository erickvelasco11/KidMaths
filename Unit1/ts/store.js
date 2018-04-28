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
    var SelectGender = /** @class */ (function (_super) {
        __extends(SelectGender, _super);
        function SelectGender() {
            var _this = _super.call(this) || this;
            _this.back = function () {
                _this.game.state.start("PrincipalMenuState", true);
            };
            return _this;
        }
        SelectGender.prototype.create = function () {
            this.background = this.game.add.tileSprite(0, 0, 800, 600, "bgrStore");
            this.game.add.image(0, 0, "bgrPause");
            this.btnBack = this.game.add.button(50, 50, "btnBack", this.back, this, 0, 1, 2);
            this.btnBack.anchor.set(0.5, 0.5);
            this.btnBack.width = 50;
            this.btnBack.height = 50;
            this.platform = this.game.add.image((this.game.world.width / 5) * 4, this.world.height - 50, "imgPlatform");
            this.platform.anchor.set(0.5, 0.5);
            this.platform.width = 200;
            this.platform.height = 120;
            if (MrBook.avatar.gender == MrBook.MALE) {
                this.boy = this.game.add.image((this.game.world.width / 5) * 4, this.world.height - 250, "imgBoy");
                this.boy.anchor.set(0.5, 0.5);
                this.boy.width = 280;
                this.boy.height = 400;
            }
            else {
                this.girl = this.game.add.image((this.game.world.width / 5) * 4, this.world.height - 250, "imgGirl");
                this.girl.anchor.set(0.5, 0.5);
                this.girl.width = 280;
                this.girl.height = 400;
            }
        };
        return SelectGender;
    }(Phaser.State));
    MrBook.SelectGender = SelectGender;
})(MrBook || (MrBook = {}));
//# sourceMappingURL=store.js.map