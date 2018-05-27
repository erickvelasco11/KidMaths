module MrBook {
    export class LoadTopic15_1 extends Loads {

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
            this.superPreload();

            this.load.image('bgrCar', 'assets/images/backgrounds/car.jpg');
            this.load.image('car', 'assets/images/car.png');

            this.load.onLoadStart.add(this.loadStart, this);
            this.load.onFileComplete.add(this.fileComplete, this);
            this.load.onLoadComplete.add(this.loadComplete, this);
            this.load.start();
        }

        loadStart = () => {
            this.background = this.add.sprite(0, 0, 'bgrLoading');
            this.background.height = this.world.height;
            this.background.width = this.world.width;
            this.background.sendToBack();

            var image = this.add.image(0, this.world.centerY, "bgrPause");

            this.loadBar = this.add.graphics(100, this.world.centerY + 100);
            this.loadBar.lineStyle(35, 0xffffff, 1);
            this.loadBar.tint = YELLOW;
            this.loadBar.moveTo(0, 0);
            this.loadBar.lineTo(this.world.width - 200, 0);
            this.loadBar.scale.x = 0;
            this.loadBar.endFill();

            this.loadText = this.add.text(this.world.centerX, this.world.centerY + 140, "Cargando...", { font: "30px Arial", align: "center", fill: '#ffffff' });
            this.loadText.anchor.set(0.5);

            this.player1 = this.add.sprite(52, this.world.centerY + 72, 'pikachu');
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
            if (productsStore.length == 0) {
                $.getJSON("https://www.mrbook.com.co/api/php/crud.php", { 'option': 'GetAll', 'tabla': 'mb_product' })
                    .done((data: any, textStatus: string, jqXHR: JQueryXHR) => {

                        this.loadText.setText("Mirando cuáles son tus productos...");
                        for (var i = 0; i < Object.keys(data).length; i++) {
                            Object.keys(data).forEach(function (key) {
                                productsStore[key] = data[key];
                            })
                        }
                        this.game.load.onLoadStart.removeAll();
                        this.game.load.onFileComplete.removeAll();
                        this.game.load.onLoadComplete.removeAll();

                        this.game.state.start("Topic15_1", true);
                    })
                    .fail((jqxhr, textStatus, error) => {
                        alert("Lo sentimos. No nos hemos podido conectar con el servidor. Revisa tu conexión de internet o pregunta a tu tutor.");
                    });
            } else {
                this.game.load.onLoadStart.removeAll();
                this.game.load.onFileComplete.removeAll();
                this.game.load.onLoadComplete.removeAll();

                this.game.state.start("Topic15_1", true);
            }
        }
    }
}