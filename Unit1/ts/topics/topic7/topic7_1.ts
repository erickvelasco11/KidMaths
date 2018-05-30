module MrBook {
    export class Topic7_1 extends Topic {

        private graphics: Phaser.Graphics;
        private grpDominoes: Phaser.Group;
        private txtNumber: Phaser.Text;

        private totalSum: number = -1;
        private sum1: number = 0;
        private sum2: number = 0;
        private xPos: number = 0;
        private yPos: number = 0;
        private isDominoesInTable: boolean = false;
        private sums: Array<number> = new Array<number>();

        constructor() {
            super();
        }

        create() {
            this.timer = new Timer(this.game);
            this.background = this.add.tileSprite(0, 0, 800, 600, "bgrTable");
            this.actionNext = this.next;
            this.finishTopic = this.finishTopic15_1;
            totalPoints = 0;

            this.txtNumber = this.add.text(this.world.centerX, 250, "", { font: "180px Arial", align: "center", fill: '#dddddd' });
            this.txtNumber.anchor.set(0.5, 0.5);

            this.graphics = this.game.add.graphics(0, 0);
            this.grpDominoes = this.add.group(undefined, "grpDominoes", undefined, true, Phaser.Physics.ARCADE);

            this.graphics.lineStyle(2, BLACK, 1);
            this.graphics.drawRect(200, 100, 400, 300);

            this.initTimeText();
            this.initPointsText();

            this.startReadyCountdown();
        }

        update() {
            if (this.subState == PLAYING) {
                if (!this.isDominoesInTable) {
                    this.generateRandomDominoes();
                }
            }
        }

        generateRandomDominoes() {
            var x = 20;
            for (var i = 0; i < 8; i++) {
                var one = this.rnd.integerInRange(0, 6);
                var two = this.rnd.integerInRange(0, 6);

                if ((this.totalSum == -1 && this.rnd.integerInRange(0, 1) == 0) || (i == 7 && this.totalSum == -1)) {
                    this.sum1 = one;
                    this.sum2 = two;
                    this.totalSum = one + two;
                    this.txtNumber.setText(this.totalSum + "");
                }
                this.sums.push((one + two));

                var domino = this.game.add.sprite(x, 450, 'sprDominoes');
                domino.width = 60;
                domino.height = 120;
                if (one < two) {
                    domino.frameName = one + "" + two + '.png';
                } else {
                    domino.frameName = two + "" + one + '.png';
                }
                domino.inputEnabled = true;
                domino.input.pixelPerfectClick = true;
                domino.input.enableDrag();
                domino.events.onDragStart.add(this.startDrag, this);
                domino.events.onDragStop.add(this.endDrag, this);
                this.grpDominoes.add(domino);

                x += 100;
                this.isDominoesInTable = true;
            }
        }

        startDrag = (item, pointer: Phaser.Pointer) => {
            this.xPos = item.position.x;
            this.yPos = item.position.y;
        }

        endDrag = (item, pointer: Phaser.Pointer) => {
            if (pointer.x > 200 && pointer.x < 600 && pointer.y > 100 && pointer.y < 400) {
                if (this.totalSum == this.sums[item.z]) {
                    this.points++;
                    this.txtPoints.setText("Puntos: " + this.points);
                    this.add.audio("sndPoint").play('', 0);
                } else {
                    this.add.audio("sndError").play('', 0);
                }
                this.grpDominoes.removeAll(true);
                this.totalSum = -1;
                this.sums = new Array<number>();
                this.generateRandomDominoes();
            } else {
                item.position.x = this.xPos;
                item.position.y = this.yPos;
            }
        }


        next = () => {
            this.game.state.start("PrincipalMenu", true);
        }

        finishTopic15_1 = () => {
            this.grpDominoes.removeAll(true);
        }
    }
}