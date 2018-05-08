module MrBook {
    export class Topic8_1 extends Topic {

        private imgCannon: Phaser.Image;
        private angle: number = 0;
        private height: number = 0;
        private hypo: number = 0;
        private width: number = 0;
        private text: Phaser.Text;

        constructor() {
            super();
        }

        create() {
            this.physics.startSystem(Phaser.Physics.ARCADE);
            this.background = this.add.tileSprite(0, 0, 800, 600, "bgrJungle");
            this.imgCannon = this.add.image(this.world.centerX, this.world.height, "imgCannon");
            this.imgCannon.anchor.set(0.5, 0.5)
            //this.imgCannon.pivot.set(this.world.centerX, this.world.height);
            this.imgCannon.height = 120;
            this.imgCannon.width = 50;

            this.text = this.add.text(10, 10, "Cargando...", { font: "20px Arial", align: "center", fill: '#ffffff' });
        }

        update() {
            this.height = (this.world.height - this.input.y);
            this.width = (this.input.x - this.world.centerX);
            this.hypo = Math.sqrt(Math.pow(this.height, 2) + Math.pow(this.width, 2));
            this.angle = Math.asin(this.height / this.hypo)*(180 / Math.PI);
            this.text.setText("Alto: " + this.height + ", Ancho: " + this.width + ", Hipo: " + this.hypo + ", Angulo: " + (this.width < 0 ? this.angle - 90 : 90 - this.angle));
            this.imgCannon.angle = this.width < 0 ? this.angle - 90 : 90 - this.angle;
        }

    }
}