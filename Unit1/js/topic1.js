
var fruits = ["itmApple", "itmBananas", "itmPear", "itmStrawberry", "itmTomato"];
var school = ["itmBook", "itmErase", "itmPencil", "itmPencilColors", "itmPencilCase"];
var clothes = ["itmClothCap", "itmDress", "itmJacket", "itmShirt", "itmSocks"];
var items;
var birds;
var boxes;

var timer;
var stateReady = 3;
var countdown = 60;

var titReady;
var txtTime;
var txtPoints;
var points = 0;

//Función para iniciar todos los componentes del tópico 1
function initTopic1() {
    timer = game.time.create(false);
    game.physics.startSystem(Phaser.Physics.ARCADE);
    items = game.add.group();
    birds = game.add.group();
    boxes = game.add.group();
    items.enableBody = true;
    birds.enableBody = true;
    boxes.enableBody = true;

    var box1 = boxes.create(game.world.centerX / 2, 500, "itmFruitBasket");
    box1.anchor.setTo(0.5, 0.5);
    box1.width = 120;
    box1.height = 120;
    box1.enableBody = true;
    box1.body.immovable = true;
    var box2 = boxes.create(game.world.centerX, 500, "itmSchoolBag");
    box2.anchor.setTo(0.5, 0.5);
    box2.width = 120;
    box2.height = 120;
    box2.enableBody = true;
    box2.body.immovable = true;
    var box3 = boxes.create(game.world.centerX + (game.world.centerX / 2), 500, "itmClothesbasket");
    box3.anchor.setTo(0.5, 0.5);
    box3.width = 120;
    box3.height = 120;
    box3.enableBody = true;
    box3.body.immovable = true;

    titReady = game.add.image(game.world.centerX, game.world.centerY, "tit3");
    titReady.anchor.setTo(0.5, 0.5);

    txtTime = game.add.text(game.world.centerX, 40, countdown, { font: "48px Arial", align: "center", fill: '#ffffff' });
    txtTime.anchor.setTo(0.5, 0.5);
    txtPoints = game.add.text(30, 30, "Puntos: "+points, { font: "24px Arial", align: "center", fill: '#ffffff' });

    timer.add(1500, ready, this);
    timer.start();
}

function launchItemTopic1() {
    var y = game.rnd.integerInRange(50, 300);
    var velocity = game.rnd.integerInRange(30, 60);
    if (state == TOPIC1) {
        var category = game.rnd.integerInRange(0, 2);
        var idItem;
        switch (category) {
            case 0:
                idItem = fruits[game.rnd.integerInRange(0, 4)];
                break;
            case 1:
                idItem = school[game.rnd.integerInRange(0, 4)];
                break;
            case 2:
                idItem = clothes[game.rnd.integerInRange(0, 4)];
                break;
        }
        var item = items.create(-50, y, idItem);
        item.width = 50;
        item.height = 50;
        item.body.velocity.x = velocity

        item.inputEnabled = true;
        item.input.enableDrag(false, true);
        item.events.onDragStart.add(onDragStart, this);
        item.events.onDragStop.add(onDragStop, this);
    }

    var bird = birds.create(-110, y-45, 'sprBird');
    bird.animations.add('right', [0, 1, 2, 3, 4, 5], 15, true);
    bird.animations.play('right');
    bird.width = 100;
    bird.height = 100;
    bird.body.velocity.x = velocity;
}

function onDragStart(item, pointer) {
    item.body.velocity.x = 0;
}

function onDragStop(item, pointer) {
    item.body.gravity.y = 980;
}

function putInChest(item, chest) {
    if (fruits.includes(item.key) && chest.key == "itmFruitBasket"
        || clothes.includes(item.key) && chest.key == "itmClothesbasket"
        || school.includes(item.key) && chest.key == "itmSchoolBag") {
        points++;
        txtPoints.setText("Puntos: " + points);
    } else {
        //TODO
    }
    item.kill();
}

function ready() {
    stateReady--;
    if (stateReady == 0) {
        state = TOPIC1;
        titReady.loadTexture("titNow", 0);
        timer.add(1500, ready, this);
        timer.add(1000, manageTime, this);
        timer.start();
    } else {
        if (stateReady < 0) {
            titReady.kill();
        } else {
            titReady.loadTexture("tit" + stateReady, 0);
            timer.add(1500, ready, this);
            timer.start();
        }
    }
}

function manageTime() {
    countdown--;
    txtTime.setText(countdown);
    timer.add(1000, manageTime, this);
    timer.start();
}