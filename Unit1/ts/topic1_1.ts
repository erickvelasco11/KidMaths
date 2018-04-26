
class Topic1_1 extends Topic {

    private fruits: Array<string> = ["itmApple", "itmBananas", "itmPear", "itmStrawberry", "itmTomato"];
    private school: Array<string> = ["itmBook", "itmErase", "itmPencil", "itmPencilColors", "itmPencilCase"];
    private clothes: Array<string> = ["itmClothCap", "itmDress", "itmJacket", "itmShirt", "itmSocks"];
    private items: Phaser.Group;
    private birds: Phaser.Group;
    private boxes: Phaser.Group;

    //Función para iniciar todos los componentes del tópico 1
    constructor() {
        super();
    }

    create() {
        this.timer = new Timer(this.game);
        this.actionNext = this.next;
        this.finishTopic = this.finishTopic1_1;

        this.background = this.game.add.tileSprite(0, 0, this.game.world.width, this.game.world.height, "bgrArcade");
        this.game.physics.startSystem(Phaser.Physics.ARCADE);
        this.items = this.game.add.group(undefined, undefined, undefined, true, Phaser.Physics.ARCADE);
        this.birds = this.game.add.group(undefined, undefined, undefined, true, Phaser.Physics.ARCADE);
        this.boxes = this.game.add.group(undefined, undefined, undefined, true, Phaser.Physics.ARCADE);

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
        this.timer.startTimer(100, this.launchItemTopic1);
    }

    update() {
        if (this.subState == PLAYING) {
            this.game.physics.arcade.collide(this.items, this.boxes, this.putInChest);
        }
    }

    finishTopic1_1() {
        this.items.removeAll();
    }

    launchItemTopic1 = () => {
        var y = this.game.rnd.integerInRange(50, 300);
        var velocity = this.game.rnd.integerInRange(30, 60);
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
            var item = this.items.create(-50, y, idItem);
            item.width = 50;
            item.height = 50;
            item.body.velocity.x = velocity

            item.inputEnabled = true;
            item.input.enableDrag(false, true);
            item.events.onDragStart.add(this.onDragStart, this);
            item.events.onDragStop.add(this.onDragStop, this);
        }

        var bird = this.birds.create(-110, y - 45, 'sprBird');
        bird.animations.add('right', [0, 1, 2, 3, 4, 5], 15, true);
        bird.animations.play('right');
        bird.width = 100;
        bird.height = 100;
        bird.body.velocity.x = velocity;
        this.timer.startTimer(2000, this.launchItemTopic1);
    }

    onDragStart(item, pointer) {
        item.body.velocity.x = 0;
    }

    onDragStop(item, pointer) {
        item.body.gravity.y = GRAVITY;
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

        this.game.state.start("Topic1_2State", true);
    }
}