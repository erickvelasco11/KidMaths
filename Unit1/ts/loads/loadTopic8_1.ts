module MrBook {
    export class LoadTopic8_1 extends Phaser.State {

        //Variables de manejo de estados de carga
        private loadBar: Phaser.Graphics;
        private loadText: Phaser.Text;
        private animateBar: boolean = false;
        private title: Phaser.Image;
        private background: Phaser.Image;
        private player1: Phaser.Sprite;

        constructor() {
            super();
        }

        //Función para listar los componentes que se van a cargar para el juego
        preload() {
            this.game.load.image('bgrJungle', 'assets/images/backgrounds/jungle.jpg');
            this.game.load.image('imgCannon', 'assets/images/cannon.png');
            this.game.load.image('imgBall', 'assets/images/ball.png');
            this.game.load.image('imgMonkey', 'assets/images/monkey.png');

            this.game.load.onLoadStart.add(this.loadStart, this);
            this.game.load.onFileComplete.add(this.fileComplete, this);
            this.game.load.onLoadComplete.add(this.loadComplete, this);
            this.game.load.start();
        }

        loadStart = () => {
            this.background = this.game.add.sprite(0, 0, 'bgrLoading');
            this.background.height = this.game.world.height;
            this.background.width = this.game.world.width;
            this.background.sendToBack();

            var image = this.game.add.image(0, this.game.world.centerY, "bgrPause");

            this.loadBar = this.game.add.graphics(100, this.game.world.centerY + 100);
            this.loadBar.lineStyle(35, 0xffffff, 1);
            this.loadBar.tint = YELLOW;
            this.loadBar.moveTo(0, 0);
            this.loadBar.lineTo(this.game.world.width - 200, 0);
            this.loadBar.scale.x = 0;
            this.loadBar.endFill();

            this.loadText = this.game.add.text(this.game.world.centerX, this.game.world.centerY + 140, "Cargando...", { font: "30px Arial", align: "center", fill: '#ffffff' });
            this.loadText.anchor.set(0.5);

            this.player1 = this.game.add.sprite(52, this.game.world.centerY + 72, 'pikachu');
            this.player1.animations.add('right', [1, 2, 3, 4, 5], 10, true);
            this.player1.animations.play('right');
            this.player1.bringToTop();
            this.animateBar = true;
        }

        //Esta función es de Phaser y se llama cuando un archivo se a descargado completamente y está listo para usarse
        //Yo la uso para mover la barra de carga del inicio de la aplicación
        fileComplete = (progress, cacheKey, success, totalLoaded, totalFiles) => {
            this.loadBar.scale.x = progress * 0.01;
            if (this.animateBar) {
                this.player1.x = ((600 * progress) / 100) + 52;
            }
        }

        //Esta función es de Phaser y se llama al terminar toda la descarga de los archivos necesarios
        loadComplete = () => {
            this.game.load.onLoadStart.removeAll();
            this.game.load.onFileComplete.removeAll();
            this.game.load.onLoadComplete.removeAll();

            this.game.state.start("Topic8_1", true);
        }
    }
}