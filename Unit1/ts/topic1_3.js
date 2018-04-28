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
        var _this = _super.call(this) || this;
        _this.chests = ["itmSetAnimals", "itmSetBooks", "itmSetFigures", "itmSetFlags", "itmSetFlowers",
            "itmSetFruits", "itmSetNumbers", "itmSetShoes", "itmSetToys", "itmSetUtensils"];
        _this.animals = ["itmBear", "itmRabbit", "itmHorse", "itmTiger", "itmCat"];
        _this.books = ["itmBook1", "itmBook2", "itmBook3", "itmBook4", "itmBook5"];
        _this.figures = ["itmCircle", "itmTriangle", "itmSquare", "itmPentagon", "itmHexagon"];
        _this.flags = ["itmColombia", "itmBrasil", "itmUsa", "itmArgentina", "itmAustralia"];
        _this.flowers = ["itmRosa", "itmMargarita", "itmNarciso", "itmSakura", "itmLoto"];
        _this.fruits = ["itmApple", "itmBananas", "itmPear", "itmStrawberry", "itmTomato"];
        _this.numbers = ["itmOne", "itmTwo", "itmThree", "itmFour", "itmFive"];
        _this.shoes = ["itmBoot", "itmBlackShow", "itmSandal", "itmHeel", "itmTennis"];
        _this.toys = ["itmToy1", "itmToy2", "itmToy3", "itmToy4", "itmToy5"];
        _this.utensils = ["itmSpoon", "itmKnife", "itmFork", "itmFork2", "itmAxe"];
        _this.sets = [_this.animals, _this.books, _this.figures, _this.flags, _this.flowers, _this.fruits, _this.numbers, _this.shoes, _this.toys, _this.utensils];
        _this.isChestInPlatform = false;
        _this.click = function () {
            _this.options.removeAll();
            _this.chest.kill();
            _this.isChestInPlatform = false;
        };
        return _this;
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
        this.clouds = this.game.add.group();
        this.createCloud(this.game.world.width / 5);
        this.createCloud(this.game.world.centerX);
        this.createCloud((this.game.world.width / 5) * 4);
        this.options = this.game.add.group();
        this.initPointsText();
        this.initTimeText();
        this.startReadyCountdown();
    };
    Topic1_3.prototype.update = function () {
        if (this.subState == PLAYING) {
            if (!this.isChestInPlatform) {
                this.isChestInPlatform = true;
                var iCorrectSet = this.game.rnd.integerInRange(0, 9);
                var iWrongSet1 = (iCorrectSet + this.game.rnd.integerInRange(1, 4)) % 10;
                var iWrongSet2 = (iWrongSet1 + this.game.rnd.integerInRange(1, 4)) % 10;
                this.chest = this.game.add.image(this.game.world.centerX, this.game.world.height - 180, this.chests[iCorrectSet]);
                this.chest.anchor.set(0.5, 0.5);
                this.chest.height = 130;
                this.chest.width = 170;
                var posCorrectOption = this.game.rnd.integerInRange(0, 2);
                var correct = this.sets[iCorrectSet][this.game.rnd.integerInRange(0, 4)];
                var wrong1 = this.sets[iWrongSet1][this.game.rnd.integerInRange(0, 4)];
                var wrong2 = this.sets[iWrongSet2][this.game.rnd.integerInRange(0, 4)];
                this.createOption(posCorrectOption, correct, true);
                this.createOption((posCorrectOption + 1) % 3, wrong1, false);
                this.createOption((posCorrectOption + 2) % 3, wrong2, false);
            }
        }
    };
    Topic1_3.prototype.createCloud = function (x) {
        this.cloud = this.clouds.create(x, 150, "imgCloud");
        this.cloud.anchor.set(0.5, 0.5);
        this.cloud.height = 150;
        this.cloud.width = 220;
    };
    Topic1_3.prototype.createOption = function (posX, image, isCorrect) {
        var option = this.options.create(this.getXPosition(posX), 150, image);
        option.anchor.set(0.5, 0.5);
        option.height = 100;
        option.width = 120;
        if (isCorrect) {
            option.inputEnabled = true;
            option.events.onInputUp.add(this.click);
        }
    };
    Topic1_3.prototype.getXPosition = function (i) {
        switch (i) {
            case 0:
                return this.game.world.width / 5;
            case 1:
                return this.game.world.centerX;
            case 2:
                return (this.game.world.width / 5) * 4;
        }
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