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
    var Topic15_1 = /** @class */ (function (_super) {
        __extends(Topic15_1, _super);
        function Topic15_1() {
            var _this = _super.call(this) || this;
            _this.obstacles = ["Cuidado a la izquierda", "Cuidado al centro", "Cuidado a la derecha",
                "Ve por la izquierda", "Ve por el centro", "Ve por la derecha",
                "Bonus a la izquierda", "Bonus al centro", "Bonus a la derecha"];
            _this.selectedIndex = 0;
            _this.velocity = 0;
            _this.roadLimitLeft = 240;
            _this.roadLimitRight = 430;
            _this.crash = function () {
                if (_this.subState == MrBook.PLAYING) {
                    _this.subState = MrBook.PAUSE;
                    _this.velocity = 0;
                    for (var i = 0; i < _this.grpObstacles.length; i++) {
                        _this.grpObstacles.children[i].body.velocity.y = 0;
                    }
                    _this.timer.startTimer(2000, _this.reset);
                }
            };
            _this.reset = function () {
                if (_this.subState == MrBook.PAUSE) {
                    _this.sprCar.position.set(320, 490);
                    _this.grpCoins.removeAll();
                    _this.grpObstacles.removeAll();
                    _this.subState = MrBook.PLAYING;
                    _this.timer.startTimer(5000, _this.warningLaunch);
                }
            };
            _this.getBonus = function (item1, item2) {
                if (_this.subState == MrBook.PLAYING) {
                    item2.kill();
                    _this.points++;
                    _this.txtPoints.setText("Puntos: " + _this.points);
                    _this.add.audio("sndPoint").play('', 0);
                }
            };
            _this.warningLaunch = function () {
                if (_this.subState == MrBook.PLAYING) {
                    _this.selectedIndex = (_this.selectedIndex + _this.rnd.integerInRange(1, 8)) % 9;
                    _this.txtWarning.setText(_this.obstacles[_this.selectedIndex]);
                    _this.timer.startTimer(2500, function () { return _this.txtWarning.setText(""); });
                    _this.timer.startTimer(1000, _this.launchEnemy);
                }
            };
            _this.launchEnemy = function () {
                if (_this.subState == MrBook.PLAYING) {
                    switch (_this.selectedIndex) {
                        case 0:
                            var enemy = _this.add.sprite(260, -100, "carEnemy");
                            enemy.width = 30;
                            enemy.height = 60;
                            enemy.physicsEnabled = true;
                            enemy.physicsType = Phaser.Physics.ARCADE;
                            _this.physics.arcade.enable(enemy);
                            enemy.body.velocity.y = 250;
                            _this.grpObstacles.add(enemy);
                            break;
                        case 1:
                            var enemy = _this.add.sprite(320, -100, "carEnemy");
                            enemy.width = 30;
                            enemy.height = 60;
                            enemy.physicsEnabled = true;
                            enemy.physicsType = Phaser.Physics.ARCADE;
                            _this.physics.arcade.enable(enemy);
                            enemy.body.velocity.y = 250;
                            _this.grpObstacles.add(enemy);
                            break;
                        case 2:
                            var enemy = _this.add.sprite(380, -100, "carEnemy");
                            enemy.width = 30;
                            enemy.height = 60;
                            enemy.physicsEnabled = true;
                            enemy.physicsType = Phaser.Physics.ARCADE;
                            _this.physics.arcade.enable(enemy);
                            enemy.body.velocity.y = 250;
                            _this.grpObstacles.add(enemy);
                            break;
                        case 3:
                            var roadBloack = _this.grpObstacles.create(340, -80, "roadBlock");
                            roadBloack.width = 55;
                            roadBloack.height = 40;
                            roadBloack.anchor.set(0.5, 0.5);
                            roadBloack.body.velocity.y = 600;
                            roadBloack = _this.grpObstacles.create(400, -80, "roadBlock");
                            roadBloack.width = 55;
                            roadBloack.height = 40;
                            roadBloack.anchor.set(0.5, 0.5);
                            roadBloack.body.velocity.y = 600;
                            break;
                        case 4:
                            var roadBloack = _this.grpObstacles.create(275, -80, "roadBlock");
                            roadBloack.width = 55;
                            roadBloack.height = 40;
                            roadBloack.anchor.set(0.5, 0.5);
                            roadBloack.body.velocity.y = 600;
                            roadBloack = _this.grpObstacles.create(400, -80, "roadBlock");
                            roadBloack.width = 55;
                            roadBloack.height = 40;
                            roadBloack.anchor.set(0.5, 0.5);
                            roadBloack.body.velocity.y = 600;
                            break;
                        case 5:
                            var roadBloack = _this.grpObstacles.create(275, -80, "roadBlock");
                            roadBloack.width = 55;
                            roadBloack.height = 40;
                            roadBloack.anchor.set(0.5, 0.5);
                            roadBloack.body.velocity.y = 600;
                            roadBloack = _this.grpObstacles.create(340, -80, "roadBlock");
                            roadBloack.width = 55;
                            roadBloack.height = 40;
                            roadBloack.anchor.set(0.5, 0.5);
                            roadBloack.body.velocity.y = 600;
                            break;
                        case 6:
                            var y = -80;
                            for (var i = 0; i < 5; i++) {
                                var coin = _this.grpCoins.create(270, y, "sprCoin");
                                coin.animations.add('coin', [0, 1, 2, 3, 4, 5], 15, true);
                                coin.animations.play('coin');
                                coin.width = 40;
                                coin.height = 40;
                                coin.anchor.set(0.5, 0.5);
                                coin.body.velocity.y = 600;
                                y -= 50;
                            }
                            break;
                        case 7:
                            var y = -80;
                            for (var i = 0; i < 5; i++) {
                                var coin = _this.grpCoins.create(335, y, "sprCoin");
                                coin.animations.add('coin', [0, 1, 2, 3, 4, 5], 15, true);
                                coin.animations.play('coin');
                                coin.width = 40;
                                coin.height = 40;
                                coin.anchor.set(0.5, 0.5);
                                coin.body.velocity.y = 600;
                                y -= 50;
                            }
                            break;
                        case 8:
                            var y = -80;
                            for (var i = 0; i < 5; i++) {
                                var coin = _this.grpCoins.create(400, y, "sprCoin");
                                coin.animations.add('coin', [0, 1, 2, 3, 4, 5], 15, true);
                                coin.animations.play('coin');
                                coin.width = 40;
                                coin.height = 40;
                                coin.anchor.set(0.5, 0.5);
                                coin.body.velocity.y = 600;
                                y -= 50;
                            }
                            break;
                    }
                    _this.timer.startTimer(2000, _this.warningLaunch);
                }
            };
            _this.next = function () {
                _this.game.state.start("PrincipalMenu", true);
            };
            _this.finishTopic15_1 = function () {
                _this.sprCar.body.velocity.y = -600;
            };
            return _this;
        }
        Topic15_1.prototype.create = function () {
            this.timer = new MrBook.Timer(this.game);
            this.background = this.add.tileSprite(0, 0, 800, 600, "bgrCar");
            this.actionNext = this.next;
            this.finishTopic = this.finishTopic15_1;
            MrBook.totalPoints = 0;
            this.grpObstacles = this.add.group(undefined, "grpObstacles", undefined, true, Phaser.Physics.ARCADE);
            this.grpCoins = this.add.group(undefined, "grpCoins", undefined, true, Phaser.Physics.ARCADE);
            this.sprCar = this.add.sprite(320, 490, "car");
            this.sprCar.width = 30;
            this.sprCar.height = 60;
            this.physics.enable(this.sprCar, Phaser.Physics.ARCADE);
            this.sprCar.physicsEnabled = true;
            this.sprCar.body.immovable = true;
            //this.sprCar.body.moves = false;
            this.txtWarning = this.add.text(this.world.centerX, 110, "", { font: "24px Arial", align: "center", fill: '#dddddd' });
            this.txtWarning.anchor.set(0.5, 0.5);
            this.keyLeft = this.input.keyboard.addKey(Phaser.Keyboard.LEFT);
            this.keyRight = this.input.keyboard.addKey(Phaser.Keyboard.RIGHT);
            this.initTimeText();
            this.initPointsText();
            this.startReadyCountdown();
            this.timer.startTimer(9000, this.warningLaunch);
        };
        Topic15_1.prototype.update = function () {
            if (this.subState == MrBook.PLAYING) {
                if (this.keyLeft.isDown && this.sprCar.position.x > this.roadLimitLeft) {
                    this.sprCar.position.x -= 2;
                }
                if (this.keyRight.isDown && this.sprCar.position.x < this.roadLimitRight - 40) {
                    this.sprCar.position.x += 2;
                }
                if (this.velocity < 10) {
                    this.velocity += 0.05;
                }
                this.background.tilePosition.y += this.velocity;
                this.physics.arcade.collide(this.sprCar, this.grpObstacles, this.crash);
                this.physics.arcade.collide(this.sprCar, this.grpCoins, this.getBonus);
            }
        };
        return Topic15_1;
    }(MrBook.Topic));
    MrBook.Topic15_1 = Topic15_1;
})(MrBook || (MrBook = {}));
//# sourceMappingURL=topic15_1.js.map