module MrBook {
    export class Topic15_1 extends Topic {

        private txtWarning: Phaser.Text;
        private sprCar: Phaser.Sprite;
        private grpObstacles: Phaser.Group;
        private grpCoins: Phaser.Group;
        private keyLeft: Phaser.Key;
        private keyRight: Phaser.Key;

        private obstacles: Array<string> = ["Cuidado a la izquierda", "Cuidado al centro", "Cuidado a la derecha",
            "Ve por la izquierda", "Ve por el centro", "Ve por la derecha",
            "Bonus a la izquierda", "Bonus al centro", "Bonus a la derecha"];
        private selectedIndex: number = 0;
        private velocity: number = 0;
        private roadLimitLeft: number = 240;
        private roadLimitRight: number = 430;


        constructor() {
            super();
        }

        create() {
            this.timer = new Timer(this.game);
            this.background = this.add.tileSprite(0, 0, 800, 600, "bgrCar");
            
            this.grpObstacles = this.add.group(undefined, "grpObstacles", undefined, true, Phaser.Physics.ARCADE);
            this.grpCoins = this.add.group(undefined, "grpCoins", undefined, true, Phaser.Physics.ARCADE);

            this.sprCar = this.add.sprite(320, 490, "car")
            this.sprCar.width = 30;
            this.sprCar.height = 60;
            this.physics.enable(this.sprCar, Phaser.Physics.ARCADE);
            this.sprCar.physicsEnabled = true;

            this.txtWarning = this.add.text(this.world.centerX, 110, "", { font: "24px Arial", align: "center", fill: '#dddddd' });
            this.txtWarning.anchor.set(0.5, 0.5);

            this.keyLeft = this.input.keyboard.addKey(Phaser.Keyboard.LEFT);
            this.keyRight = this.input.keyboard.addKey(Phaser.Keyboard.RIGHT);


            this.initTimeText();
            this.initPointsText();

            this.startReadyCountdown();

            this.timer.startTimer(9000, this.warningLaunch);
        }

        update() {
            if (this.subState == PLAYING) {
                if (this.keyLeft.isDown && this.sprCar.position.x > this.roadLimitLeft) {
                    this.sprCar.position.x -= 2;
                }
                if (this.keyRight.isDown && this.sprCar.position.x < this.roadLimitRight - 40) {
                    this.sprCar.position.x += 2;
                }

                if (this.velocity < 10) {
                    this.velocity += 0.05;
                }

                this.background.tilePosition.y += this.velocity;

                this.physics.arcade.collide(this.sprCar, this.grpObstacles, this.crash);
            }
        }

        crash = () => {
        }

        warningLaunch = () => {
            this.selectedIndex = (this.selectedIndex + this.rnd.integerInRange(1, 8)) % 9;
            this.txtWarning.setText(this.obstacles[this.selectedIndex]);
            this.timer.startTimer(2500, () => this.txtWarning.setText(""));
            this.timer.startTimer(1000, this.launchEnemy);
        }

        launchEnemy = () => {

            switch (this.selectedIndex) {
                case 0:
                    var enemy = this.add.sprite(260, -100, "carEnemy");
                    enemy.width = 30;
                    enemy.height = 60;
                    enemy.physicsEnabled = true;
                    enemy.physicsType = Phaser.Physics.ARCADE;
                    this.physics.arcade.enable(enemy);
                    enemy.body.velocity.y = 250;

                    this.grpObstacles.add(enemy);
                    break;
                case 1:
                    var enemy = this.add.sprite(320, -100, "carEnemy");
                    enemy.width = 30;
                    enemy.height = 60;
                    enemy.physicsEnabled = true;
                    enemy.physicsType = Phaser.Physics.ARCADE;
                    this.physics.arcade.enable(enemy);
                    enemy.body.velocity.y = 250;

                    this.grpObstacles.add(enemy);
                    break;
                case 2:
                    var enemy = this.add.sprite(380, -100, "carEnemy");
                    enemy.width = 30;
                    enemy.height = 60;
                    enemy.physicsEnabled = true;
                    enemy.physicsType = Phaser.Physics.ARCADE;
                    this.physics.arcade.enable(enemy);
                    enemy.body.velocity.y = 250;

                    this.grpObstacles.add(enemy);
                    break;
                case 3:
                    var roadBloack = this.grpObstacles.create(340, -80, "roadBlock");
                    roadBloack.width = 55;
                    roadBloack.height = 40;
                    roadBloack.anchor.set(0.5, 0.5);
                    roadBloack.body.velocity.y = 600;

                    roadBloack = this.grpObstacles.create(400, -80, "roadBlock");
                    roadBloack.width = 55;
                    roadBloack.height = 40;
                    roadBloack.anchor.set(0.5, 0.5);
                    roadBloack.body.velocity.y = 600;

                    break;
                case 4:
                    var roadBloack = this.grpObstacles.create(275, -80, "roadBlock");
                    roadBloack.width = 55;
                    roadBloack.height = 40;
                    roadBloack.anchor.set(0.5, 0.5);
                    roadBloack.body.velocity.y = 600;

                    roadBloack = this.grpObstacles.create(400, -80, "roadBlock");
                    roadBloack.width = 55;
                    roadBloack.height = 40;
                    roadBloack.anchor.set(0.5, 0.5);
                    roadBloack.body.velocity.y = 600;
                    break;
                case 5:
                    var roadBloack = this.grpObstacles.create(275, -80, "roadBlock");
                    roadBloack.width = 55;
                    roadBloack.height = 40;
                    roadBloack.anchor.set(0.5, 0.5);
                    roadBloack.body.velocity.y = 600;

                    roadBloack = this.grpObstacles.create(340, -80, "roadBlock");
                    roadBloack.width = 55;
                    roadBloack.height = 40;
                    roadBloack.anchor.set(0.5, 0.5);
                    roadBloack.body.velocity.y = 600;
                    break;
                case 6:
                    var y = -80;
                    for (var i = 0; i < 5; i++) {
                        var roadBloack = this.grpCoins.create(270, y, "sprCoin");
                        roadBloack.animations.add('coin', [0, 1, 2, 3, 4, 5], 15, true);
                        roadBloack.animations.play('coin');
                        roadBloack.width = 40;
                        roadBloack.height = 40;
                        roadBloack.anchor.set(0.5, 0.5);
                        roadBloack.body.velocity.y = 600;
                        y -= 50;
                    }
                    break;
                case 7:
                    var y = -80;
                    for (var i = 0; i < 5; i++) {
                        var roadBloack = this.grpCoins.create(335, y, "sprCoin");
                        roadBloack.animations.add('coin', [0, 1, 2, 3, 4, 5], 15, true);
                        roadBloack.animations.play('coin');
                        roadBloack.width = 40;
                        roadBloack.height = 40;
                        roadBloack.anchor.set(0.5, 0.5);
                        roadBloack.body.velocity.y = 600;
                        y -= 50;
                    }
                    break;
                 case 8:
                    var y = -80;
                    for (var i = 0; i < 5; i++) {
                        var roadBloack = this.grpCoins.create(400, y, "sprCoin");
                        roadBloack.animations.add('coin', [0, 1, 2, 3, 4, 5], 15, true);
                        roadBloack.animations.play('coin');
                        roadBloack.width = 40;
                        roadBloack.height = 40;
                        roadBloack.anchor.set(0.5, 0.5);
                        roadBloack.body.velocity.y = 600;
                        y -= 50;
                    }
                    break;
            }
            this.timer.startTimer(2000, this.warningLaunch);
        }
    }
}