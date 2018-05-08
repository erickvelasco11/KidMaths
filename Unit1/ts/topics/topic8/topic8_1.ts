module MrBook {
    export class Topic8_1 extends Topic {

        private imgCannon: Phaser.Image;
        private imgBall: Phaser.Image;
        private grpMonkeys: Phaser.Group;
        private grpCannon: Phaser.Group;

        private angle: number = 0;
        private height: number = 0;
        private hypo: number = 0;
        private width: number = 0;

        constructor() {
            super();
        }

        create() {
            this.physics.startSystem(Phaser.Physics.ARCADE);
            this.background = this.add.tileSprite(0, 0, 800, 600, "bgrJungle");
            this.grpMonkeys = this.add.group();
            this.createMonkey((this.world.width / 6));
            this.createMonkey((this.world.width / 6)*2);
            this.createMonkey(this.world.centerX);
            this.createMonkey((this.world.width / 6)*4);
            this.createMonkey((this.world.width / 6)*5);

            this.imgCannon = this.add.image(this.world.centerX, this.world.height, "imgCannon");
            this.imgCannon.anchor.set(0.5, 0.5)
            this.imgCannon.height = 120;
            this.imgCannon.width = 50;
            this.imgBall = this.add.image(this.world.centerX, this.world.height, "imgBall");
            this.imgBall.anchor.set(0.5);
            this.imgBall.pivot.y = 700;
            this.imgBall.height = 50;
            this.imgBall.width = 50;
        }
        render() {
        }
        update() {
            this.height = (this.world.height - this.input.y);
            this.width = (this.input.x - this.world.centerX);
            this.hypo = Math.sqrt(Math.pow(this.height, 2) + Math.pow(this.width, 2));
            this.angle = Math.asin(this.height / this.hypo)*(180 / Math.PI);
            this.imgCannon.angle = this.width < 0 ? this.angle - 90 : 90 - this.angle;
            this.imgBall.angle = this.width < 0 ? this.angle - 90 : 90 - this.angle;
            this.game.debug.geom(new Phaser.Point(this.imgCannon.x, this.imgCannon.y - 10), '#ffff00');
            this.game.debug.geom(new Phaser.Point(this.imgBall.x, this.imgBall.y), '#ffff00');
        }

        createMonkey(xPos: number) {
            var img = this.grpMonkeys.create(xPos, 0, "imgMonkey");
            img.anchor.x = 0.5;
            img.height = 100;
            img.width = 100;
        }

    }
}