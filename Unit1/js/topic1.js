
var fruits = ["itmApple", "itmBananas", "itmPear", "itmStrawberry", "itmTomato"];
var school = ["itmBook", "itmErase", "itmPencil", "itmPencilColors", "itmPencilCase"];
var clothes = ["itmClothCap", "itmDress", "itmJacket", "itmShirt", "itmSocks"];
var birds;

//Función para iniciar todos los componentes del tópico 1
function initTopic1() {
    items = game.add.group();
    birds = game.add.group();
    items.enableBody = true;
    birds.enableBody = true;

    var box1 = game.add.image(game.world.centerX/2, 500, "itmFruitBasket");
    box1.anchor.x = 0.5;
    box1.anchor.y = 0.5;
    box1.width = 120;
    box1.height = 120;
    var box2 = game.add.image(game.world.centerX, 500, "itmSchoolBag");
    box2.anchor.x = 0.5;
    box2.anchor.y = 0.5;
    box2.width = 120;
    box2.height = 120;
    var box3 = game.add.image(game.world.centerX + (game.world.centerX/2), 500, "itmClothesbasket");
    box3.anchor.x = 0.5;
    box3.anchor.y = 0.5;
    box3.width = 120;
    box3.height = 120;
}

function launchItemTopic1() {
    var y = game.rnd.integerInRange(50, 300);
    var velocity = game.rnd.integerInRange(15, 30);
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
    item.body.immovable = true;
    item.width = 50;
    item.height = 50;
    item.body.velocity.x = velocity;
    item.body.checkCollision.up = true;
    item.body.checkCollision.down = true;
    item.body.checkCollision.left = true;
    item.body.checkCollision.right = true;

    var bird = birds.create(-110, y-45, 'sprBird');
    bird.animations.add('right', [0, 1, 2, 3, 4, 5], 15, true);
    bird.animations.play('right');
    bird.width = 100;
    bird.height = 100;
    bird.body.velocity.x = velocity;

    item.inputEnabled = true;
    item.input.enableDrag(false, true);
}