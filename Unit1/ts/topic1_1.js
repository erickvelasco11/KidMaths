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
            _this.dataPause = [];
            _this.launchBird = function () {
                if (_this.subState != MrBook.PAUSE) {
                    var isFromLeft = _this.game.rnd.integerInRange(0, 1) == 0 ? -1 : 1;
                    var x;
                    var y = _this.game.rnd.integerInRange(50, 300);
                    var velocity = _this.game.rnd.integerInRange(50, 100) * isFromLeft;
                    isFromLeft == 1 ? x = -110 : x = _this.game.world.width + 110;
                    var bird = _this.birds.create(x, y - 45, 'sprBird');
                    bird.animations.add('right', [0, 1, 2, 3, 4, 5], 15, true);
                    bird.animations.play('right');
                    bird.width = 100;
                    bird.height = 100;
                    bird.body.velocity.x = velocity;
                    bird.scale.x *= isFromLeft;
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
                        isFromLeft == 1 ? x += 60 : x -= 110;
                        _this.item = _this.items.create(x, y, idItem);
                        _this.item.width = 50;
                        _this.item.height = 50;
                        _this.item.body.velocity.x = velocity;
                        _this.item.inputEnabled = true;
                        _this.item.input.enableDrag(false, true);
                        _this.item.input.pixelPerfectOver = true;
                        _this.item.events.onDragStart.add(_this.onDragStart, _this);
                        if (+MrBook.avatar.age < MrBook.MINIMUM_AGE) {
                            _this.item.events.onInputDown.add(_this.onDragStop, _this);
                        }
                        else {
                            _this.item.events.onDragStop.add(_this.onDragStop, _this);
                        }
                    }
                    _this.timer.startTimer(2000, _this.launchBird);
                }
            };
            _this.onDragStart = function (item, pointer) {
                item.body.velocity.x = 0;
            };
            _this.onDragStop = function (item, pointer) {
                if (+MrBook.avatar.age < MrBook.MINIMUM_AGE) {
                    item.body.velocity.x = 0;
                    _this.clickedItem = item;
                    _this.subState = MrBook.PAUSE;
                    _this.items.remove(item, false, false);
                    putInPause(_this.birds, _this.dataPause);
                    putInPause(_this.items, _this.dataPause);
                    _this.bgrPause = _this.game.add.image(0, 0, "bgrPause");
                    _this.bgrPause.bringToTop();
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
                removePause(_this.birds, _this.dataPause);
                removePause(_this.items, _this.dataPause);
                _this.putInChest(_this.clickedItem, item);
                _this.timer.resume();
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
            this.background = this.game.add.tileSprite(0, 0, this.game.world.width, this.game.world.height, "bgrArcade");
            this.game.physics.startSystem(Phaser.Physics.ARCADE);
            this.items = this.game.add.group(this.game, "items", true, true, Phaser.Physics.ARCADE);
            this.birds = this.game.add.group(this.game, "birds", true, true, Phaser.Physics.ARCADE);
            this.boxes = this.game.add.group(this.game, "boxes", true, true, Phaser.Physics.ARCADE);
            this.boxes.inputEnableChildren = true;
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
            }
        };
        Topic1_1.prototype.finishTopic1_1 = function () {
            this.items.removeAll();
        };
        Topic1_1.prototype.next = function () {
            this.removeResults();
            this.birds.removeAll();
            this.boxes.removeAll();
            this.game.state.start("PrincipalMenuState", true);
        };
        return Topic1_1;
    }(MrBook.Topic));
    MrBook.Topic1_1 = Topic1_1;
})(MrBook || (MrBook = {}));
function putInPause(set, dataPause) {
    debugger;
    for (var i = 0; i < set.length; i++) {
        dataPause.push(set.children[i].body.velocity.x);
        set.children[i].body.velocity.x = 0;
        set.children[i].inputEnabled = false;
    }
}
function removePause(set, dataPause) {
    debugger;
    for (var i = 0; i < set.length; i++) {
        set.children[i].body.velocity.x = dataPause.shift();
        set.children[i].inputEnabled = true;
    }
}
//# sourceMappingURL=topic1_1.js.map