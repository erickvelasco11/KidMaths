
class Topic1_2 extends Topic{

    private figures: Phaser.Group;
    private graphics: Phaser.Graphics;
    private figure: Phaser.Sprite;

    private isFigureInGame: boolean;

    constructor() {
        super();
    }

    create() {
        this.timer = new Timer(this.game);
        this.actionNext = this.next;
        this.finishTopic = this.finishTopic1_2;

        this.figures = this.game.add.group();

        this.background = this.game.add.tileSprite(0, 0, this.game.world.width, this.game.world.height, "bgrPuzzle");
        this.graphics = this.game.add.graphics(0, 0);

        this.graphics.lineStyle(2, RED, 1);
        this.graphics.drawRect(0,
            this.game.world.height - (this.game.world.width / 3),
            (this.game.world.width / 3) - 2,
            this.game.world.width / 3);

        this.graphics.lineStyle(2, GREEN, 1);
        this.graphics.drawTriangle([
            new Phaser.Point(this.game.world.width / 3, this.game.world.height-1),
            new Phaser.Point(this.game.world.width / 2, this.game.world.height - (this.game.world.width / 3)),
            new Phaser.Point((this.game.world.width / 3) * 2, this.game.world.height-1)]);

        this.graphics.lineStyle(2, BLUE, 1);
        this.graphics.drawCircle(((this.game.world.width / 3) * 2) + (this.game.world.width / 6),
            this.game.world.height - (this.game.world.width / 6),
            this.game.world.width / 3);

        this.initPointsText();
        this.initTimeText();
        this.startReadyCountdown();
    }

    update() {
        if (!this.isFigureInGame && this.subState == PLAYING) {
            this.generateRandomFigure();
        }
    }

    generateRandomFigure() {
        if (!this.isFigureInGame) {
            this.isFigureInGame = true;
            var figure = this.game.rnd.integerInRange(0, 2);
            switch (figure) {
                case 0:
                    this.generateCircle();
                    break;
                case 1:
                    this.generateSquare();
                    break;
                case 2:
                    this.generateTriangle();
                    break;
            }
        }
    }

    generateCircle() {
        this.figure = this.game.add.sprite(this.game.world.centerX, this.game.world.centerY - 100, 'imgCircle');
        //let this.circle = this.figures.create(this.game.world.centerX, this.game.world.centerY - 100, 'imgCircle');
        this.figure.height = this.game.rnd.integerInRange(50, 120);
        this.figure.width = this.game.rnd.integerInRange(50, 120);
        this.figure.anchor.setTo(0.5, 0.5);
        this.figure.tint = RED;
        this.figure.inputEnabled = true;
        this.figure.input.enableDrag();
        this.figure.events.onDragStop.add(this.stopDragGraphic, this);
    }

    generateTriangle() {
        this.figure = this.game.add.sprite(this.game.world.centerX, this.game.world.centerY - 100, 'imgTriangle');
        //let this.triangle = this.figures.create(this.game.world.centerX, this.game.world.centerY - 100, 'imgTriangle');
        this.figure.height = this.game.rnd.integerInRange(50, 120);
        this.figure.width = this.game.rnd.integerInRange(50, 120);
        this.figure.anchor.setTo(0.5, 0.5);
        this.figure.tint = RED;
        this.figure.inputEnabled = true;
        this.figure.input.enableDrag();
        this.figure.events.onDragStop.add(this.stopDragGraphic, this);
    }

    generateSquare() {
        this.figure = this.game.add.sprite(this.game.world.centerX, this.game.world.centerY - 100, 'imgSquare');
        //let square = this.figures.create(this.game.world.centerX, this.game.world.centerY - 100, 'imgSquare');
        this.figure.height = this.game.rnd.integerInRange(50, 120);
        this.figure.width = this.game.rnd.integerInRange(50, 120);
        this.figure.anchor.setTo(0.5, 0.5);
        this.figure.tint = RED;
        this.figure.inputEnabled = true;
        this.figure.input.enableDrag();
        this.figure.events.onDragStop.add(this.stopDragGraphic, this);
    }

    stopDragGraphic(item, pointer) {
        if (item.centerY > this.game.world.height - (this.game.world.width / 3)) {
            switch (item.key) {
                case "imgSquare":
                    if (item.centerX < this.game.world.width / 3) {
                        this.points++;
                        this.txtPoints.setText("Puntos: " + this.points);
                        this.game.add.audio("sndPoint").play('', 0);
                    } else {
                        this.game.add.audio("sndError").play('', 0);
                    }
                    break;
                case "imgTriangle":
                    if (item.centerX < ((this.game.world.width / 3) * 2) && item.centerX > this.game.world.width / 3) {
                        this.points++;
                        this.txtPoints.setText("Puntos: " + this.points);
                        this.game.add.audio("sndPoint").play('', 0);
                    } else {
                        this.game.add.audio("sndError").play('', 0);
                    }
                    break;
                case "imgCircle":
                    if (item.centerX > (this.game.world.width / 3) * 2) {
                        this.points++;
                        this.txtPoints.setText("Puntos: " + this.points);
                        this.game.add.audio("sndPoint").play('', 0);
                    } else {
                        this.game.add.audio("sndError").play('', 0);
                    }
                    break;
            }
            item.kill();
            this.isFigureInGame = false;
        }
    }

    next() {
        this.removeResults();
        this.game.state.start("Topic1_3State", true);
    }

    finishTopic1_2() {
        this.figure.kill();
        this.figures.removeAll();
    }
}