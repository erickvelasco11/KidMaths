
var fruits = ["itmApple", "itmBananas", "itmPear", "itmStrawberry", "itmTomato"]


//Función para iniciar todos los componentes del tópico 1
function initTopic1() {
    items = game.add.group();
    items.enableBody = true;

    var box1 = game.add.image(200, 500, "imgOpenBox");
    box1.anchor.x = 0.5;
    box1.anchor.y = 0.5;
    box1.width = 150;
    box1.height = 150;
    var box2 = game.add.image(600, 500, "imgOpenBox");
    box2.anchor.x = 0.5;
    box2.anchor.y = 0.5;
    box2.width = 150;
    box2.height = 150;
}

function launchItemTopic1() {
    var index = game.rnd.integerInRange(0, 4);
    var item = items.create(-50, game.rnd.integerInRange(100, 300), fruits[index]);
    item.body.immovable = true;
    item.width = 50;
    item.height = 50;
    item.body.velocity.x = game.rnd.integerInRange(15, 30);
    item.body.checkCollision.up = true;
    item.body.checkCollision.down = true;
    item.body.checkCollision.left = true;
    item.body.checkCollision.right = true;

    item.inputEnabled = true;
    item.input.enableDrag(false, true);
}