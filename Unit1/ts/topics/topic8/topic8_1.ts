﻿module MrBook {
    export class Topic8_1 extends Topic {

        private imgCannon: Phaser.Sprite;
        private imgBall: Phaser.Sprite;
        private imgArrow: Phaser.Sprite;
        private grpMonkeys: Phaser.Group;
        private grpBallons: Phaser.Group;
        private grpCannon: Phaser.Group;
        private txtSum: Phaser.Text;
        private txtSum1: Phaser.Text;
        private txtSum2: Phaser.Text;
        private txtSum3: Phaser.Text;
        private txtSum4: Phaser.Text;
        private txtSum5: Phaser.Text;

        private angle: number = 0;
        private height: number = 0;
        private hypo: number = 0;
        private width: number = 0;
        private number1: number = 0;
        private number2: number = 0;
        private numbers: Array<number> = [];

        constructor() {
            super();
        }

        create() {
            this.physics.startSystem(Phaser.Physics.ARCADE);
            this.finishTopic = this.finish;
            this.actionNext = this.next;

            this.timer = new Timer(this.game);
            this.background = this.add.tileSprite(0, 0, 800, 600, "bgrJungle");
            this.grpMonkeys = this.add.group();
            this.grpBallons = this.add.group(undefined, "grpBallons", undefined, true, Phaser.Physics.ARCADE);

            this.imgArrow = this.add.sprite(this.world.centerX, this.world.height, "imgArrow");
            this.imgArrow.anchor.set(0.5, 1)
            this.imgArrow.height = 400;
            this.imgArrow.width = 10;

            this.createMonkey((this.world.width / 6));
            this.createMonkey((this.world.width / 6) * 2);
            this.createMonkey(this.world.centerX);
            this.createMonkey((this.world.width / 6) * 4);
            this.createMonkey((this.world.width / 6) * 5);

            this.createBallon((this.world.width / 6));
            this.createBallon((this.world.width / 6) * 2);
            this.createBallon(this.world.centerX);
            this.createBallon((this.world.width / 6) * 4);
            this.createBallon((this.world.width / 6) * 5);

            this.imgCannon = this.add.sprite(this.world.centerX, this.world.height, "imgCannon");
            this.imgCannon.anchor.set(0.5, 1)
            this.imgCannon.height = 120;
            this.imgCannon.width = 50;

            avatar.paint(this.game, this.world.width - 250, this.world.height - 250);

            this.txtSum = this.add.text(20, this.world.height - 50, "", {});
            this.txtSum1 = this.add.text((this.world.width / 6), 110, "", {});
            this.txtSum1.anchor.set(0.5, 0.5);
            this.txtSum2 = this.add.text((this.world.width / 6) * 2, 110, "", {});
            this.txtSum2.anchor.set(0.5, 0.5);
            this.txtSum3 = this.add.text((this.world.width / 6) * 3, 110, "", {});
            this.txtSum3.anchor.set(0.5, 0.5);
            this.txtSum4 = this.add.text((this.world.width / 6) * 4, 110, "", {});
            this.txtSum4.anchor.set(0.5, 0.5);
            this.txtSum5 = this.add.text((this.world.width / 6) * 5, 110, "", {});
            this.txtSum5.anchor.set(0.5, 0.5);
            this.prepareBall();

            this.initPointsText();
            this.initTimeText();
            this.startReadyCountdown();
        }

        update() {
            if (this.subState == PLAYING || this.subState == SHOOTING) {
                this.height = (this.world.height - this.input.y);
                this.width = (this.input.x - this.world.centerX);
                this.hypo = Math.sqrt(Math.pow(this.height, 2) + Math.pow(this.width, 2));
                this.angle = Math.asin(this.height / this.hypo) * (180 / Math.PI);

                this.imgCannon.angle = this.width < 0 ? this.angle - 90 : 90 - this.angle;
                this.imgArrow.angle = this.width < 0 ? this.angle - 90 : 90 - this.angle;
                if (this.subState != SHOOTING) {
                    this.imgBall.angle = this.width < 0 ? this.angle - 90 : 90 - this.angle;
                    this.imgBall.visible = true;
                }

                this.physics.arcade.collide(this.imgBall, this.grpBallons, this.destroyBall);
                //this.game.debug.geom(new Phaser.Point(this.imgBall.x, this.imgBall.y), '#ffff00');
                //this.game.debug.geom(new Phaser.Point(this.imgCannon.x, this.imgCannon.y), '#000000');
            } 
        }

        createMonkey(xPos: number) {
            var img = this.grpMonkeys.create(xPos, -20, "imgMonkey");
            img.anchor.x = 0.5;
            img.height = 100;
            img.width = 100;
        }

        createBallon(xPos: number) {
            var img = this.grpBallons.create(xPos, 70, "imgCloud");
            img.anchor.x = 0.5;
            img.height = 70;
            img.width = 100;
            img.body.immovable = true;
        }

        prepareBall = () => {
            this.subState = PLAYING;
            this.prepareSum();
            this.prepareBallons();

            this.imgBall = this.add.sprite(this.world.centerX, this.world.height, "imgBall");
            this.imgBall.visible = false;
            this.imgBall.anchor.set(0.5, 1);
            this.imgBall.pivot.y = 1000;
            this.imgBall.height = 50;
            this.imgBall.width = 50;
            this.physics.enable(this.imgBall, Phaser.Physics.ARCADE);
            this.imgBall.physicsEnabled = true;
            this.imgBall.body.collideWorldBounds = true;
            this.imgBall.body.bounce.set(1.0, 1.0);

            this.input.onTap.add(this.shoot);
        }

        destroyBall = (item1, item2) => {
            this.imgBall.kill();
            if (this.numbers[item2.z] == (this.number1 + this.number2)) {
                this.points++;
                this.txtPoints.setText("Puntos: " + this.points);
                this.add.audio("sndPoint").play('', 0);
            } else {
                this.add.audio("sndError").play('', 0);
            }

            this.prepareBall();
        }

        prepareSum() {
            this.number1 = (this.number1 + this.rnd.integerInRange(0, 9)) % 10;
            this.number2 = (this.number2 + this.rnd.integerInRange(0, 9)) % 10;
            this.txtSum.setText("Cuanto es: " + this.number1 + " + " + this.number2);
        }

        prepareBallons() {
            this.numbers = [];
            this.numbers.push(this.number1 + this.number2);
            this.numbers.push((this.numbers[0] + this.rnd.integerInRange(1, 4)) % 19);
            this.numbers.push((this.numbers[1] + this.rnd.integerInRange(1, 4)) % 19);
            this.numbers.push((this.numbers[2] + this.rnd.integerInRange(1, 4)) % 19);
            this.numbers.push((this.numbers[3] + this.rnd.integerInRange(1, 4)) % 19);
            shuffle(this.numbers);
            this.txtSum1.setText(this.numbers[0] + "");
            this.txtSum2.setText(this.numbers[1] + "");
            this.txtSum3.setText(this.numbers[2] + "");
            this.txtSum4.setText(this.numbers[3] + "");
            this.txtSum5.setText(this.numbers[4] + "");
        }

        shoot = () => {
            if (this.subState == PLAYING) {
                this.subState = SHOOTING;
                this.input.onTap.removeAll();
                this.physics.arcade.moveToXY(this.imgBall, this.input.x, this.input.y, 1500);
            }
        }

        finish = () => {
            this.txtSum.destroy();
            this.txtSum1.destroy();
            this.txtSum2.destroy();
            this.txtSum3.destroy();
            this.txtSum4.destroy();
            this.txtSum5.destroy();
        }

        next = () => {
            this.game.state.start("PrincipalMenu")
        }

    }

    function shuffle(array) {
        var currentIndex = array.length, temporaryValue, randomIndex;

        // While there remain elements to shuffle...
        while (0 !== currentIndex) {

            // Pick a remaining element...
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;

            // And swap it with the current element.
            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }

        return array;
    }
}