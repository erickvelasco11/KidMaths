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
            _this.number1 = 0;
            _this.number2 = 0;
            _this.prepareBall = function () {
                _this.subState = MrBook.PLAYING;
                _this.prepareSum();
                _this.prepareBallons();
                _this.imgBall = _this.add.sprite(_this.world.centerX, _this.world.height, "imgBall");
                _this.imgBall.visible = false;
                _this.imgBall.anchor.set(0.5, 1);
                _this.imgBall.pivot.y = 1000;
                _this.imgBall.height = 50;
                _this.imgBall.width = 50;
                _this.physics.enable(_this.imgBall, Phaser.Physics.ARCADE);
                _this.imgBall.physicsEnabled = true;
                _this.imgBall.body.collideWorldBounds = true;
                _this.imgBall.body.bounce.set(1.0, 1.0);
                _this.input.onTap.add(_this.shoot);
            };
            _this.destroyBall = function () {
                _this.imgBall.kill();
                _this.prepareBall();
            };
            _this.shoot = function () {
                _this.subState = MrBook.SHOOTING;
                _this.input.onTap.removeAll();
                _this.physics.arcade.moveToXY(_this.imgBall, _this.input.x, _this.input.y, 1500);
            };
            return _this;
        }
        Topic8_1.prototype.create = function () {
            this.physics.startSystem(Phaser.Physics.ARCADE);
            this.timer = new MrBook.Timer(this.game);
            this.background = this.add.tileSprite(0, 0, 800, 600, "bgrJungle");
            this.grpMonkeys = this.add.group();
            this.grpBallons = this.add.group(undefined, "grpBalls", undefined, true, Phaser.Physics.ARCADE);
            this.createMonkey((this.world.width / 6));
            this.createMonkey((this.world.width / 6) * 2);
            this.createMonkey(this.world.centerX);
            this.createMonkey((this.world.width / 6) * 4);
            this.createMonkey((this.world.width / 6) * 5);
            this.createBallon((this.world.width / 6));
            this.createBallon((this.world.width / 6) * 2);
            this.createBallon(this.world.centerX);
            this.createBallon((this.world.width / 6) * 4);
            this.createBallon((this.world.width / 6) * 5);
            this.imgCannon = this.add.sprite(this.world.centerX, this.world.height, "imgCannon");
            this.imgCannon.anchor.set(0.5, 1);
            this.imgCannon.height = 120;
            this.imgCannon.width = 50;
            MrBook.avatar.paint(this.game, this.world.width - 250, this.world.height - 250);
            this.txtSum = this.add.text(20, this.world.height - 50, "", {});
            this.txtSum1 = this.add.text((this.world.width / 6), 110, "", {});
            this.txtSum1.anchor.set(0.5, 0.5);
            this.txtSum2 = this.add.text((this.world.width / 6) * 2, 110, "", {});
            this.txtSum2.anchor.set(0.5, 0.5);
            this.txtSum3 = this.add.text((this.world.width / 6) * 3, 110, "", {});
            this.txtSum3.anchor.set(0.5, 0.5);
            this.txtSum4 = this.add.text((this.world.width / 6) * 4, 110, "", {});
            this.txtSum4.anchor.set(0.5, 0.5);
            this.txtSum5 = this.add.text((this.world.width / 6) * 5, 110, "", {});
            this.txtSum5.anchor.set(0.5, 0.5);
            this.prepareBall();
        };
        Topic8_1.prototype.update = function () {
            this.height = (this.world.height - this.input.y);
            this.width = (this.input.x - this.world.centerX);
            this.hypo = Math.sqrt(Math.pow(this.height, 2) + Math.pow(this.width, 2));
            this.angle = Math.asin(this.height / this.hypo) * (180 / Math.PI);
            this.imgCannon.angle = this.width < 0 ? this.angle - 90 : 90 - this.angle;
            if (this.subState != MrBook.SHOOTING) {
                this.imgBall.angle = this.width < 0 ? this.angle - 90 : 90 - this.angle;
                this.imgBall.visible = true;
            }
            if (!this.imgBall.inCamera) {
                this.destroyBall();
            }
            this.physics.arcade.collide(this.imgBall, this.grpBallons, this.destroyBall);
            //this.game.debug.geom(new Phaser.Point(this.imgBall.x, this.imgBall.y), '#ffff00');
            //this.game.debug.geom(new Phaser.Point(this.imgCannon.x, this.imgCannon.y), '#000000');
        };
        Topic8_1.prototype.createMonkey = function (xPos) {
            var img = this.grpMonkeys.create(xPos, -20, "imgMonkey");
            img.anchor.x = 0.5;
            img.height = 100;
            img.width = 100;
        };
        Topic8_1.prototype.createBallon = function (xPos) {
            var img = this.grpBallons.create(xPos, 70, "imgCloud");
            img.anchor.x = 0.5;
            img.height = 70;
            img.width = 100;
            img.body.immovable = true;
        };
        Topic8_1.prototype.prepareSum = function () {
            this.number1 = (this.number1 + this.rnd.integerInRange(0, 9)) % 10;
            this.number2 = (this.number2 + this.rnd.integerInRange(0, 9)) % 10;
            this.txtSum.setText("Cuanto es: " + this.number1 + " + " + this.number2);
        };
        Topic8_1.prototype.prepareBallons = function () {
            var numbers = [];
            numbers.push(this.number1 + this.number2);
            numbers.push((numbers[0] + this.rnd.integerInRange(1, 4)) % 19);
            numbers.push((numbers[1] + this.rnd.integerInRange(1, 4)) % 19);
            numbers.push((numbers[2] + this.rnd.integerInRange(1, 4)) % 19);
            numbers.push((numbers[3] + this.rnd.integerInRange(1, 4)) % 19);
            shuffle(numbers);
            this.txtSum1.setText(numbers[0] + "");
            this.txtSum2.setText(numbers[1] + "");
            this.txtSum3.setText(numbers[2] + "");
            this.txtSum4.setText(numbers[3] + "");
            this.txtSum5.setText(numbers[4] + "");
        };
        return Topic8_1;
    }(MrBook.Topic));
    MrBook.Topic8_1 = Topic8_1;
    function shuffle(array) {
        var currentIndex = array.length, temporaryValue, randomIndex;
        // While there remain elements to shuffle...
        while (0 !== currentIndex) {
            // Pick a remaining element...
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;
            // And swap it with the current element.
            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }
        return array;
    }
})(MrBook || (MrBook = {}));
//# sourceMappingURL=topic8_1.js.map