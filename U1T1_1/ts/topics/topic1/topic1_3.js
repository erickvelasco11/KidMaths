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
            _this.shoes = ["itmBoot", "itmBlackShoe", "itmSandal", "itmHeel", "itmTennis"];
            _this.toys = ["itmToy1", "itmToy2", "itmToy3", "itmToy4", "itmToy5"];
            _this.utensils = ["itmSpoon", "itmKnife", "itmFork", "itmFork2", "itmAxe"];
            _this.sets = [_this.animals, _this.books, _this.figures, _this.flags, _this.flowers, _this.fruits, _this.numbers, _this.shoes, _this.toys, _this.utensils];
            _this.isChestInPlatform = false;
            _this.correct = "";
            _this.click = function (item) {
                if (item.key == _this.correct) {
                    _this.game.add.audio("sndPoint").play('', 0);
                    _this.txtPoints.setText("Puntos: " + ++_this.points);
                    _this.clear();
                }
                else {
                    _this.game.add.audio("sndError").play('', 0);
                }
            };
            _this.clear = function () {
                _this.options.removeAll();
                _this.chest.kill();
                _this.loadBar.kill();
                _this.isChestInPlatform = false;
            };
            return _this;
        }
        Topic1_3.prototype.create = function () {
            this.game.time.advancedTiming = true;
            this.isChestInPlatform = false;
            this.timer = new MrBook.Timer(this.game);
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
            if (this.subState == MrBook.PLAYING) {
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
                    this.correct = this.sets[iCorrectSet][this.game.rnd.integerInRange(0, 4)];
                    var wrong1 = this.sets[iWrongSet1][this.game.rnd.integerInRange(0, 4)];
                    var wrong2 = this.sets[iWrongSet2][this.game.rnd.integerInRange(0, 4)];
                    this.createOption(posCorrectOption, this.correct);
                    this.createOption((posCorrectOption + 1) % 3, wrong1);
                    this.createOption((posCorrectOption + 2) % 3, wrong2);
                    this.loadBar = this.game.add.graphics(0, this.game.world.height - 4);
                    this.loadBar.lineStyle(5, 0xffffff, 1);
                    this.loadBar.tint = MrBook.GREEN;
                    this.loadBar.moveTo(0, 0);
                    this.loadBar.lineTo(this.game.world.width, 0);
                    this.loadBar.scale.x = 1;
                    this.loadBar.endFill();
                }
                this.loadBar.scale.x -= 1 / (this.game.time.fps * 5);
                if (this.loadBar.scale.x <= 0) {
                    this.clear();
                    this.game.add.audio("sndError").play('', 0);
                }
                else {
                    if (this.loadBar.scale.x < 0.2) {
                        this.loadBar.tint = MrBook.RED;
                    }
                    else {
                        if (this.loadBar.scale.x < 0.5) {
                            this.loadBar.tint = MrBook.YELLOW;
                        }
                    }
                }
            }
        };
        Topic1_3.prototype.createCloud = function (x) {
            this.cloud = this.clouds.create(x, 150, "imgCloud");
            this.cloud.anchor.set(0.5, 0.5);
            this.cloud.height = 150;
            this.cloud.width = 220;
        };
        Topic1_3.prototype.createOption = function (posX, image) {
            var option = this.options.create(this.getXPosition(posX), 150, image);
            option.anchor.set(0.5, 0.5);
            option.height = 100;
            option.width = 120;
            option.inputEnabled = true;
            option.events.onInputUp.add(this.click);
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
            this.game.state.start("PrincipalMenu", true);
        };
        Topic1_3.prototype.finishTopic1_3 = function () {
            this.clear();
            MrBook.totalPoints = 0;
        };
        return Topic1_3;
    }(MrBook.Topic));
    MrBook.Topic1_3 = Topic1_3;
})(MrBook || (MrBook = {}));
//# sourceMappingURL=topic1_3.js.map