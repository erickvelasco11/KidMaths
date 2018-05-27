module MrBook {
    export class Topic15_1 extends Topic {

        private text: Phaser.Text;
        private car: Phaser.Image;

        private keyLeft: Phaser.Key;
        private keyRight: Phaser.Key;

        private velocity: number = 0;
        private roadLimitLeft: number = 240;
        private roadLimitRight: number = 430;


        constructor() {
            super();
        }

        create() {
            this.timer = new Timer(this.game);
            this.background = this.add.tileSprite(0, 0, 800, 600, "bgrCar");

            this.car = this.add.image(300, 490, "car")
            this.car.width = 40;
            this.car.height = 60;
            this.text = this.add.text(50, 50, "", {});

            this.keyLeft = this.input.keyboard.addKey(Phaser.Keyboard.LEFT);
            this.keyRight = this.input.keyboard.addKey(Phaser.Keyboard.RIGHT);


            this.initTimeText();
            this.initPointsText();

            this.startReadyCountdown();
        }

        update() {
            if (this.velocity < 10 && this.subState == PLAYING) {
                if (this.keyLeft.isDown && this.car.position.x > this.roadLimitLeft) {
                    this.car.position.x -= 2;
                }
                if (this.keyRight.isDown && this.car.position.x < this.roadLimitRight - 40) {
                    this.car.position.x += 2;
                }


                this.velocity += 0.05;

                this.background.tilePosition.y += this.velocity;
            }
        }
    }
}