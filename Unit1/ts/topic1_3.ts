
class Topic1_3 extends Topic {

    private platform: Phaser.Image;
    private cloud: Phaser.Image;
    private clouds: Phaser.Group;
    private options: Phaser.Group;
    private chest: Phaser.Image;

    private chests: Array<string> = ["itmSetAnimals", "itmSetBooks", "itmSetFigures", "itmSetFlags", "itmSetFlowers",
        "itmSetFruits", "itmSetNumbers", "itmSetShoes", "itmSetToys", "itmSetUtensils"];
    private animals: Array<string> = ["itmApple", "itmBananas", "itmPear", "itmStrawberry", "itmTomato"];
    private books: Array<string> = ["itmBook", "itmErase", "itmPencil", "itmPencilColors", "itmPencilCase"];
    private figures: Array<string> = ["itmClothCap", "itmDress", "itmJacket", "itmShirt", "itmSocks"];
    private flags: Array<string> = ["itmApple", "itmBananas", "itmPear", "itmStrawberry", "itmTomato"];
    private flowers: Array<string> = ["itmApple", "itmBananas", "itmPear", "itmStrawberry", "itmTomato"];
    private fruits: Array<string> = ["itmApple", "itmBananas", "itmPear", "itmStrawberry", "itmTomato"];
    private numbers: Array<string> = ["itmApple", "itmBananas", "itmPear", "itmStrawberry", "itmTomato"];
    private shoes: Array<string> = ["itmBook", "itmErase", "itmPencil", "itmPencilColors", "itmPencilCase"];
    private toys: Array<string> = ["itmClothCap", "itmDress", "itmJacket", "itmShirt", "itmSocks"];
    private utensils: Array<string> = ["itmClothCap", "itmDress", "itmJacket", "itmShirt", "itmSocks"];

    private isChestInPlatform: boolean = false;

    private constructor() {
        super();
    }

    create() {
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

    createCloud(x: number) {
        this.cloud = this.clouds.create(x, 150, "imgCloud");
        this.cloud.anchor.set(0.5, 0.5);
        this.cloud.height = 150;
        this.cloud.width = 220;
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
                var posX = this.getXPosition(posCorrectOption);
                var correct;

                switch (iCorrectSet) {
                    case 0:
                        correct = this.animals[this.game.rnd.integerInRange(0, 4)];
                        break;
                    case 1:
                        correct = this.books[this.game.rnd.integerInRange(0, 4)];
                        break;
                    case 2:
                        correct = this.figures[this.game.rnd.integerInRange(0, 4)];
                        break;
                    case 3:
                        correct = this.flags[this.game.rnd.integerInRange(0, 4)];
                        break;
                    case 4:
                        correct = this.flowers[this.game.rnd.integerInRange(0, 4)];
                        break;
                    case 5:
                        correct = this.fruits[this.game.rnd.integerInRange(0, 4)];
                        break;
                    case 6:
                        correct = this.numbers[this.game.rnd.integerInRange(0, 4)];
                        break;
                    case 7:
                        correct = this.shoes[this.game.rnd.integerInRange(0, 4)];
                        break;
                    case 8:
                        correct = this.toys[this.game.rnd.integerInRange(0, 4)];
                        break;
                    case 9:
                        correct = this.utensils[this.game.rnd.integerInRange(0, 4)];
                        break;
                }
                
                var option = this.options.create(posX, 150, correct);
                option.anchor.set(0.5, 0.5);
                option.height = 100;
                option.width = 120;
            }
        }
    }

    getXPosition(i: number):number {
        switch (i) {
            case 0:
                return this.game.world.width/5;
            case 1:
                return this.game.world.centerX;
            case 2:
                return (this.game.world.width/5)*4;
        }
    }

    next() {
        this.removeResults();
        this.game.state.start("PrincipalMenuState", true);
    }

    finishTopic1_3() {
    }
}