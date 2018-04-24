var graphics

function initTopic1_2() {
	background.loadTexture("bgrPuzzle");
	graphics = game.add.graphics(0, 0);

	graphics.lineStyle(2, RED, 1);
	graphics.drawRect(0, 400, (game.world.width / 3)-2, 200);

	graphics.lineStyle(2, GREEN, 1);
	graphics.drawRect(game.world.width / 3, 400, (game.world.width / 3)-2, 200);

	graphics.lineStyle(2, BLUE, 1);
	graphics.drawRect((game.world.width / 3) * 2, 400, game.world.width / 3, 200);

	generateRandomFigure();
}

function generateRandomFigure() {
	var figure = game.rnd.integerInRange(0, 2);
	switch (figure) {
		case 0:
			generateCircle();
			break;
		case 1:
			generateSquare();
			break;
		case 2:
			generateTriangle();
			break;
	}
}

function generateCircle() {
	circle = game.add.sprite(game.world.centerX, game.world.centerY - 100, 'imgCircle');
	circle.height = game.rnd.integerInRange(50, 120);
	circle.width = game.rnd.integerInRange(50, 120);
	circle.anchor.setTo(0.5, 0.5);
	circle.tint = RED;
	circle.inputEnabled = true;
	circle.input.enableDrag();
	circle.events.onDragStop.add(stopDragGraphic, this);
}

function generateTriangle() {
	circle = game.add.sprite(game.world.centerX, game.world.centerY - 100, 'imgTriangle');
	circle.height = game.rnd.integerInRange(50, 120);
	circle.width = game.rnd.integerInRange(50, 120);
	circle.anchor.setTo(0.5, 0.5);
	circle.tint = RED;
	circle.inputEnabled = true;
	circle.input.enableDrag();
	circle.events.onDragStop.add(stopDragGraphic, this);
}

function generateSquare() {
	circle = game.add.sprite(game.world.centerX, game.world.centerY - 100, 'imgSquare');
	circle.height = game.rnd.integerInRange(50, 120);
	circle.width = game.rnd.integerInRange(50, 120);
	circle.anchor.setTo(0.5, 0.5);
	circle.tint = RED;
	circle.inputEnabled = true;
	circle.input.enableDrag();
	circle.events.onDragStop.add(stopDragGraphic, this);
}

function stopDragGraphic(item, pointer) {
	if (item.centerY > 400) {
		item.kill();
		generateRandomFigure();
	}
}