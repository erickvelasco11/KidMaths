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
    var Topic1_1 = /** @class */ (function (_super) {
        __extends(Topic1_1, _super);
        function Topic1_1() {
            var _this = _super.call(this) || this;
            _this.fruits = ["itmApple", "itmBananas", "itmPear", "itmStrawberry", "itmTomato"];
            _this.school = ["itmBook", "itmErase", "itmPencil", "itmPencilColors", "itmPencilCase"];
            _this.clothes = ["itmClothCap", "itmDress", "itmJacket", "itmShirt", "itmSocks"];
            _this.items = [];
            _this.dataPause = [];
            _this.launchBird = function () {
                if (_this.subState != MrBook.PAUSE) {
                    var isFromLeft = _this.game.rnd.integerInRange(0, 1) == 0 ? -1 : 1;
                    var x;
                    var y = _this.game.rnd.integerInRange(50, 300);
                    var velocity = _this.game.rnd.integerInRange(50, 100) * isFromLeft;
                    isFromLeft == 1 ? x = -70 : x = _this.game.world.width + 50;
                    if (_this.subState == MrBook.PLAYING) {
                        var category = _this.game.rnd.integerInRange(0, 2);
                        var idItem;
                        switch (category) {
                            case 0:
                                idItem = _this.fruits[_this.game.rnd.integerInRange(0, 4)];
                                break;
                            case 1:
                                idItem = _this.school[_this.game.rnd.integerInRange(0, 4)];
                                break;
                            case 2:
                                idItem = _this.clothes[_this.game.rnd.integerInRange(0, 4)];
                                break;
                        }
                        _this.item = _this.game.add.sprite(x, y, idItem);
                        _this.item.width = 50;
                        _this.item.height = 50;
                        _this.item.physicsEnabled = true;
                        _this.item.physicsType = Phaser.Physics.ARCADE;
                        _this.game.physics.arcade.enable(_this.item);
                        _this.item.body.velocity.x = velocity;
                        _this.item.inputEnabled = true;
                        if (+MrBook.avatar.age < MrBook.MINIMUM_AGE) {
                            _this.item.events.onInputDown.add(_this.onDragStop, _this);
                        }
                        else {
                            _this.item.input.enableDrag(false, true);
                            _this.item.input.pixelPerfectOver = true;
                            _this.item.events.onDragStart.add(_this.onDragStart, _this);
                            _this.item.events.onDragStop.add(_this.onDragStop, _this);
                            _this.item.body.bounce.set(0.3);
                            _this.item.body.onCollide = new Phaser.Signal();
                            _this.item.body.onCollide.add(_this.onFloor, _this);
                        }
                        _this.items.push(_this.item);
                    }
                    isFromLeft == 1 ? x -= 60 : x += 110;
                    var bird = _this.birds.create(x, y - 45, 'sprBird');
                    bird.animations.add('right', [0, 1, 2, 3, 4, 5], 15, true);
                    bird.animations.play('right');
                    bird.width = 100;
                    bird.height = 100;
                    bird.body.velocity.x = velocity;
                    bird.scale.x *= isFromLeft;
                    _this.timer.startTimer(2000, _this.launchBird);
                }
            };
            _this.onFloor = function (item1, item2) {
                item1.body.onCollide.removeAll();
                _this.timer.startTimer(3000, function () { item1.kill(); });
            };
            _this.disapearItem = function (item) {
                alert("Desaparecer");
                item.kill();
            };
            _this.onDragStart = function (item, pointer) {
                item.body.velocity.x = 0;
            };
            _this.onDragStop = function (item, pointer) {
                _this.clickedItem = item;
                if (+MrBook.avatar.age < MrBook.MINIMUM_AGE) {
                    item.body.velocity.x = 0;
                    _this.subState = MrBook.PAUSE;
                    _this.putInPause(_this.birds);
                    _this.putInPauseArray(_this.items);
                    _this.bgrPause = _this.game.add.image(0, 0, "bgrPause");
                    _this.game.world.bringToTop(_this.boxes);
                    _this.game.world.bringToTop(item);
                    _this.timer.pause();
                    _this.boxes.onChildInputUp.add(_this.clickBox);
                }
                else {
                    item.body.gravity.y = MrBook.GRAVITY;
                }
            };
            _this.clickBox = function (item, pointer) {
                _this.subState = MrBook.PLAYING;
                _this.bgrPause.kill();
                _this.boxes.onChildInputUp.removeAll();
                _this.removePause(_this.birds);
                _this.removePauseArray(_this.items);
                _this.putInChest(_this.clickedItem, item);
                _this.timer.resume();
                _this.clickedItem.kill();
            };
            _this.putInChest = function (item, chest) {
                if (_this.fruits.indexOf(item.key) != -1 && chest.key == "itmFruitBasket"
                    || _this.clothes.indexOf(item.key) != -1 && chest.key == "itmClothesbasket"
                    || _this.school.indexOf(item.key) != -1 && chest.key == "itmSchoolBag") {
                    _this.points++;
                    _this.txtPoints.setText("Puntos: " + _this.points);
                    _this.game.add.audio("sndPoint").play('', 0);
                }
                else {
                    _this.game.add.audio("sndError").play('', 0);
                }
                item.kill();
            };
            return _this;
        }
        Topic1_1.prototype.create = function () {
            this.timer = new MrBook.Timer(this.game);
            this.actionNext = this.next;
            this.finishTopic = this.finishTopic1_1;
            MrBook.totalPoints = 0;
            this.game.physics.startSystem(Phaser.Physics.ARCADE);
            this.background = this.game.add.tileSprite(0, 0, this.game.world.width, this.game.world.height, "bgrArcade");
            this.floor = this.game.add.sprite(0, this.game.world.height - 20, "imgFloor");
            this.game.physics.enable(this.floor, Phaser.Physics.ARCADE);
            this.floor.body.immovable = true;
            this.floor.body.checkCollision.up = true;
            //this.items = this.game.add.group(undefined, "grpItems", undefined, true, Phaser.Physics.ARCADE);
            this.birds = this.game.add.group(undefined, "grpBirds", undefined, true, Phaser.Physics.ARCADE);
            this.boxes = this.game.add.group(undefined, "grpBoxes", false, true, Phaser.Physics.ARCADE);
            this.boxes.inputEnableChildren = true;
            //this.items.inputEnableChildren = true;
            var box1 = this.boxes.create(this.game.world.centerX / 2, 500, "itmFruitBasket");
            box1.anchor.setTo(0.5, 0.5);
            box1.width = 120;
            box1.height = 120;
            box1.enableBody = true;
            box1.body.immovable = true;
            var box2 = this.boxes.create(this.game.world.centerX, 500, "itmSchoolBag");
            box2.anchor.setTo(0.5, 0.5);
            box2.width = 120;
            box2.height = 120;
            box2.enableBody = true;
            box2.body.immovable = true;
            var box3 = this.boxes.create(this.game.world.centerX + (this.game.world.centerX / 2), 500, "itmClothesbasket");
            box3.anchor.setTo(0.5, 0.5);
            box3.width = 120;
            box3.height = 120;
            box3.enableBody = true;
            box3.body.immovable = true;
            this.initTimeText();
            this.initPointsText();
            this.startReadyCountdown();
            this.timer.startTimer(100, this.launchBird);
        };
        Topic1_1.prototype.update = function () {
            if (this.subState == MrBook.PLAYING) {
                this.game.physics.arcade.collide(this.items, this.boxes, this.putInChest);
                this.game.physics.arcade.collide(this.floor, this.items);
            }
        };
        Topic1_1.prototype.finishTopic1_1 = function () {
            this.items.forEach(function (item, index, array) {
                item.kill();
            });
            this.items = [];
        };
        Topic1_1.prototype.next = function () {
            this.removeResults();
            this.birds.removeAll();
            this.boxes.removeAll();
            this.game.state.start("PrincipalMenuState", true);
        };
        Topic1_1.prototype.putInPause = function (set) {
            for (var i = 0; i < set.length; i++) {
                this.dataPause.push(set.children[i].body.velocity.x);
                set.children[i].body.velocity.x = 0;
            }
        };
        Topic1_1.prototype.putInPauseArray = function (set) {
            for (var i = 0; i < set.length; i++) {
                this.dataPause.push(set[i].body.velocity.x);
                set[i].body.velocity.x = 0;
                set[i].inputEnabled = false;
            }
        };
        Topic1_1.prototype.removePause = function (set) {
            for (var i = 0; i < set.length; i++) {
                set.children[i].body.velocity.x = this.dataPause.shift();
            }
        };
        Topic1_1.prototype.removePauseArray = function (set) {
            for (var i = 0; i < set.length; i++) {
                set[i].body.velocity.x = this.dataPause.shift();
                set[i].inputEnabled = true;
            }
        };
        return Topic1_1;
    }(MrBook.Topic));
    MrBook.Topic1_1 = Topic1_1;
})(MrBook || (MrBook = {}));
//# sourceMappingURL=topic1_1.js.map