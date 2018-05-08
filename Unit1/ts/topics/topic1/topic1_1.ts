module MrBook {
    export class Topic1_1 extends Topic {

        private fruits: Array<string> = ["itmApple", "itmBananas", "itmPear", "itmStrawberry", "itmTomato"];
        private school: Array<string> = ["itmBook", "itmErase", "itmPencil", "itmPencilColors", "itmPencilCase"];
        private clothes: Array<string> = ["itmClothCap", "itmDress", "itmJacket", "itmShirt", "itmSocks"];
        private items: Array<Phaser.Sprite> = [];
        private birds: Phaser.Group;
        private boxes: Phaser.Group;
        private floor: Phaser.Sprite;

        private item: Phaser.Sprite;
        private clickedItem;

        private dataPause: Array<number> = [];
        
        constructor() {
            super();
        }

        create() {
            this.timer = new Timer(this.game);
            this.actionNext = this.next;
            this.finishTopic = this.finishTopic1_1;
            totalPoints = 0;

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
            
        }

        update() {
            if (this.subState == PLAYING) {
                this.game.physics.arcade.collide(this.items, this.boxes, this.putInChest);
                this.game.physics.arcade.collide(this.floor, this.items);
            }
        }

        finishTopic1_1() {
            this.items.forEach((item, index, array) => {
                item.kill();
            });

            this.items = [];
        }

        launchBird = () => {
            if (this.subState != PAUSE) {
                var isFromLeft = this.game.rnd.integerInRange(0, 1) == 0 ? -1 : 1;
                var x;
                var y = this.game.rnd.integerInRange(50, 300);
                var velocity = this.game.rnd.integerInRange(50, 100) * isFromLeft;

                isFromLeft == 1 ? x = -70 : x = this.game.world.width + 50;
                
                if (this.subState == PLAYING) {
                    var category = this.game.rnd.integerInRange(0, 2);
                    var idItem;
                    switch (category) {
                        case 0:
                            idItem = this.fruits[this.game.rnd.integerInRange(0, 4)];
                            break;
                        case 1:
                            idItem = this.school[this.game.rnd.integerInRange(0, 4)];
                            break;
                        case 2:
                            idItem = this.clothes[this.game.rnd.integerInRange(0, 4)];
                            break;
                    }
                    this.item = this.game.add.sprite(x, y, idItem);
                    this.item.width = 50;
                    this.item.height = 50;
                    this.item.physicsEnabled = true;
                    this.item.physicsType = Phaser.Physics.ARCADE;
                    this.game.physics.arcade.enable(this.item);
                    this.item.body.velocity.x = velocity

                    this.item.inputEnabled = true;
                    if (+avatar.age < MINIMUM_AGE) {
                        this.item.events.onInputDown.add(this.onDragStop, this);
                    } else {
                        this.item.input.enableDrag(false, true);
                        this.item.input.pixelPerfectOver = true;
                        this.item.events.onDragStart.add(this.onDragStart, this);
                        this.item.events.onDragStop.add(this.onDragStop, this);
                        this.item.body.bounce.set(0.3);

                        this.item.body.onCollide = new Phaser.Signal();
                        this.item.body.onCollide.add(this.onFloor, this);
                    }

                    this.items.push(this.item);
                }

                isFromLeft == 1 ? x -= 60 : x += 110;
                var bird = this.birds.create(x, y - 45, 'sprBird');
                bird.animations.add('right', [0, 1, 2, 3, 4, 5], 15, true);
                bird.animations.play('right');
                bird.width = 100;
                bird.height = 100;
                bird.body.velocity.x = velocity;
                bird.scale.x *= isFromLeft;

                this.timer.startTimer(2000, this.launchBird);
            }
        }

        onFloor = (item1, item2) => {
            item1.body.onCollide.removeAll();
            this.timer.startTimer(3000, () => { item1.kill() });
        }
        disapearItem = (item) => {
            alert("Desaparecer")
            item.kill();
        }

        onDragStart = (item, pointer) => {
            item.body.velocity.x = 0;
        }

        onDragStop = (item, pointer) => {
            this.clickedItem = item;
            if (+avatar.age < MINIMUM_AGE) {
                item.body.velocity.x = 0;
                this.subState = PAUSE;

                this.putInPause(this.birds);
                this.putInPauseArray(this.items);
                this.bgrPause = this.game.add.image(0, 0, "bgrPause");
                this.game.world.bringToTop(this.boxes);
                this.game.world.bringToTop(item);

                this.timer.pause();
                this.boxes.onChildInputUp.add(this.clickBox);
            } else {
                item.body.gravity.y = GRAVITY;
            }
        }

        clickBox = (item, pointer) => {
            this.subState = PLAYING;

            this.bgrPause.kill();
            this.boxes.onChildInputUp.removeAll();
            this.removePause(this.birds);
            this.removePauseArray(this.items);
            this.putInChest(this.clickedItem, item);
            this.timer.resume();
            this.clickedItem.kill();
        }

        putInChest = (item, chest) => {
            if (this.fruits.indexOf(item.key) != -1 && chest.key == "itmFruitBasket"
                || this.clothes.indexOf(item.key) != -1 && chest.key == "itmClothesbasket"
                || this.school.indexOf(item.key) != -1 && chest.key == "itmSchoolBag") {
                this.points++;
                this.txtPoints.setText("Puntos: " + this.points);
                this.game.add.audio("sndPoint").play('', 0);
            } else {
                this.game.add.audio("sndError").play('', 0);
            }
            item.kill();
        }

        next() {
            this.removeResults();
            this.birds.removeAll();
            this.boxes.removeAll();

            this.game.state.start("PrincipalMenuState", true);
        }

        putInPause(set: Phaser.Group) {
            for (var i = 0; i < set.length; i++) {
                this.dataPause.push((set.children[i] as Phaser.Sprite).body.velocity.x);
                (set.children[i] as Phaser.Sprite).body.velocity.x = 0;
            }
        }

        putInPauseArray(set: Array<Phaser.Sprite>) {
            for (var i = 0; i < set.length; i++) {
                this.dataPause.push(set[i].body.velocity.x);
                set[i].body.velocity.x = 0;
                set[i].inputEnabled = false;
            }
        }

        removePause(set: Phaser.Group) {
            for (var i = 0; i < set.length; i++) {
                (set.children[i] as Phaser.Sprite).body.velocity.x = this.dataPause.shift();
            }
        }

        removePauseArray(set: Array<Phaser.Sprite>) {
            for (var i = 0; i < set.length; i++) {
                set[i].body.velocity.x = this.dataPause.shift();
                set[i].inputEnabled = true;
            }
        }
    }
}