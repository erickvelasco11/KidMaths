class SelectGender extends Phaser.State {

    private girl: Phaser.Image;
    private boy: Phaser.Image;
    private title: Phaser.Image;
    private background: Phaser.TileSprite;

    constructor() {
        super();
    }

    create() {
        this.background = this.game.add.tileSprite(0, 0, 800, 600, "bgrOptions");
        this.title = this.game.add.image(this.game.world.centerX, 100, "titGender");
        this.title.anchor.set(0.5, 0.5);

        this.boy = this.game.add.image(this.game.world.centerX / 2, this.game.world.centerY, "imgBoy");
        this.boy.anchor.x = 0.5;
        this.boy.width = 150;
        this.boy.height = 200;
        this.boy.inputEnabled = true;
        this.boy.events.onInputDown.add(this.clickGender, this);

        this.girl = this.game.add.image(this.game.world.centerX + (this.game.world.centerX / 2), this.game.world.centerY, "imgGirl");
        this.girl.anchor.x = 0.5;
        this.girl.width = 150;
        this.girl.height = 200;
        this.girl.inputEnabled = true;
        this.girl.events.onInputDown.add(this.clickGender, this);
    }

    //Función de evento de click sobre un género
    clickGender(sprite, pointer) {
        if (sprite.key == "imgBoy") {
            avatar.gender = MALE;
        } else {
            avatar.gender = FEMALE;
        }
        this.girl.destroy();
        this.boy.destroy();
        this.title.destroy();

        this.game.state.start("PrincipalMenuState", true);
    }
}