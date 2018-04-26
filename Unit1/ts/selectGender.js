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
var SelectGender = /** @class */ (function (_super) {
    __extends(SelectGender, _super);
    function SelectGender() {
        return _super.call(this) || this;
    }
    SelectGender.prototype.create = function () {
        this.background = this.game.add.tileSprite(0, 0, 800, 600, "bgrOptions");
        this.title = this.game.add.image(this.game.world.centerX, 100, "titGender");
        this.title.anchor.set(0.5, 0.5);
        this.boy = this.game.add.image(this.game.world.centerX / 2, this.game.world.centerY, "imgBoy");
        this.boy.anchor.x = 0.5;
        this.boy.width = 200;
        this.boy.height = 200;
        this.boy.inputEnabled = true;
        this.boy.events.onInputDown.add(this.clickGender, this);
        this.girl = this.game.add.image(this.game.world.centerX + (this.game.world.centerX / 2), this.game.world.centerY, "imgGirl");
        this.girl.anchor.x = 0.5;
        this.girl.width = 200;
        this.girl.height = 200;
        this.girl.inputEnabled = true;
        this.girl.events.onInputDown.add(this.clickGender, this);
    };
    //Función de evento de click sobre un género
    SelectGender.prototype.clickGender = function (sprite, pointer) {
        if (sprite.key == "imgBoy") {
            avatar.gender = MALE;
        }
        else {
            avatar.gender = FEMALE;
        }
        this.girl.destroy();
        this.boy.destroy();
        this.title.destroy();
        this.game.state.start("PrincipalMenuState", true);
    };
    return SelectGender;
}(Phaser.State));
//# sourceMappingURL=selectGender.js.map