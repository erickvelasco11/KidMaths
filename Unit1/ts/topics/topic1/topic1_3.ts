module MrBook {
    export class Topic1_3 extends Topic {

        private platform: Phaser.Image;
        private cloud: Phaser.Image;
        private clouds: Phaser.Group;
        private options: Phaser.Group;
        private chest: Phaser.Image;
        private loadBar: Phaser.Graphics;

        private chests: Array<string> = ["itmSetAnimals", "itmSetBooks", "itmSetFigures", "itmSetFlags", "itmSetFlowers",
            "itmSetFruits", "itmSetNumbers", "itmSetShoes", "itmSetToys", "itmSetUtensils"];
        private animals: Array<string> = ["itmBear", "itmRabbit", "itmHorse", "itmTiger", "itmCat"];
        private books: Array<string> = ["itmBook1", "itmBook2", "itmBook3", "itmBook4", "itmBook5"];
        private figures: Array<string> = ["itmCircle", "itmTriangle", "itmSquare", "itmPentagon", "itmHexagon"];
        private flags: Array<string> = ["itmColombia", "itmBrasil", "itmUsa", "itmArgentina", "itmAustralia"];
        private flowers: Array<string> = ["itmRosa", "itmMargarita", "itmNarciso", "itmSakura", "itmLoto"];
        private fruits: Array<string> = ["itmApple", "itmBananas", "itmPear", "itmStrawberry", "itmTomato"];
        private numbers: Array<string> = ["itmOne", "itmTwo", "itmThree", "itmFour", "itmFive"];
        private shoes: Array<string> = ["itmBoot", "itmBlackShoe", "itmSandal", "itmHeel", "itmTennis"];
        private toys: Array<string> = ["itmToy1", "itmToy2", "itmToy3", "itmToy4", "itmToy5"];
        private utensils: Array<string> = ["itmSpoon", "itmKnife", "itmFork", "itmFork2", "itmAxe"];
        private sets: Array<Array<string>> = [this.animals, this.books, this.figures, this.flags, this.flowers, this.fruits, this.numbers, this.shoes, this.toys, this.utensils];

        private isChestInPlatform: boolean = false;
        private correct: string = "";

        private constructor() {
            super();
        }

        create() {
            this.game.time.advancedTiming = true;
            this.isChestInPlatform = false;
            this.timer = new Timer(this.game);
            this.actionNext = this.next;
            this.finishTopic = this.finishTopic1_3;

            this.background = this.game.add.tileSprite(0, 0, this.game.world.width, this.game.world.height, "bgrSelect");
            this.platform = this.game.add.image(this.game.world.centerX, this.game.world.height - 80, "imgPlatform");
            this.platform.anchor.set(0.5, 0.5);
            this.platform.width = 300;
            this.platform.height = 200;

            this.clouds = this.game.add.group();
            this.createCloud(this.game.world.width / 5);
            this.createCloud(this.game.world.centerX);
            this.createCloud((this.game.world.width / 5) * 4);

            this.options = this.game.add.group();

            this.initPointsText();
            this.initTimeText();
            this.startReadyCountdown();
        }

        update() {
            if (this.subState == PLAYING) {
                if (!this.isChestInPlatform) {
                    this.isChestInPlatform = true;
                    var iCorrectSet = this.game.rnd.integerInRange(0, 9);
                    var iWrongSet1 = (iCorrectSet + this.game.rnd.integerInRange(1, 4)) % 10;
                    var iWrongSet2 = (iWrongSet1 + this.game.rnd.integerInRange(1, 4)) % 10;
                    this.chest = this.game.add.image(this.game.world.centerX, this.game.world.height - 180, this.chests[iCorrectSet]);
                    this.chest.anchor.set(0.5, 0.5);
                    this.chest.height = 130;
                    this.chest.width = 170;

                    var posCorrectOption = this.game.rnd.integerInRange(0, 2);
                    this.correct = this.sets[iCorrectSet][this.game.rnd.integerInRange(0, 4)];
                    var wrong1 = this.sets[iWrongSet1][this.game.rnd.integerInRange(0, 4)];
                    var wrong2 = this.sets[iWrongSet2][this.game.rnd.integerInRange(0, 4)];

                    this.createOption(posCorrectOption, this.correct);
                    this.createOption((posCorrectOption + 1) % 3, wrong1);
                    this.createOption((posCorrectOption + 2) % 3, wrong2);
                    
                    this.loadBar = this.game.add.graphics(0, this.game.world.height-4);
                    this.loadBar.lineStyle(5, 0xffffff, 1);
                    this.loadBar.tint = GREEN;
                    this.loadBar.moveTo(0, 0);
                    this.loadBar.lineTo(this.game.world.width, 0);
                    this.loadBar.scale.x = 1;
                    this.loadBar.endFill();
                }
                this.loadBar.scale.x -= 1 / (this.game.time.fps * 5);

                if (this.loadBar.scale.x <= 0) {
                    this.clear();
                    this.game.add.audio("sndError").play('', 0);
                } else {
                    if (this.loadBar.scale.x < 0.2) {
                        this.loadBar.tint = RED;
                    } else {
                        if (this.loadBar.scale.x < 0.5) {
                            this.loadBar.tint = YELLOW;
                        }
                    }
                }
            }
        }

        createCloud(x: number) {
            this.cloud = this.clouds.create(x, 150, "imgCloud");
            this.cloud.anchor.set(0.5, 0.5);
            this.cloud.height = 150;
            this.cloud.width = 220;
        }

        createOption(posX: number, image: string) {
            var option = this.options.create(this.getXPosition(posX), 150, image);
            option.anchor.set(0.5, 0.5);
            option.height = 100;
            option.width = 120;
            option.inputEnabled = true;
            option.events.onInputUp.add(this.click);
        }

        click = (item) => {
            if (item.key == this.correct) {
                this.game.add.audio("sndPoint").play('', 0);
                this.txtPoints.setText("Puntos: " + ++this.points);
                this.clear();
            } else {
                this.game.add.audio("sndError").play('', 0);
            }
        }

        clear=() => {
            this.options.removeAll();
            this.chest.kill();
            this.loadBar.kill();
            this.isChestInPlatform = false;
        }

        getXPosition(i: number): number {
            switch (i) {
                case 0:
                    return this.game.world.width / 5;
                case 1:
                    return this.game.world.centerX;
                case 2:
                    return (this.game.world.width / 5) * 4;
            }
        }

        next() {
            this.removeResults();
            this.game.state.start("PrincipalMenu", true);
        }

        finishTopic1_3() {
            this.clear();
            totalPoints = 0;
        }
    }
}