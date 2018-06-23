module MrBook {
    export class LoadGame extends Loads {

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
            this.load.spritesheet('pikachu', 'assets/images/pikachu.png', 48, 48);
            this.load.image('bgrLoading', 'assets/images/backgrounds/loading.jpg');
            this.load.image('titNameUnit', 'assets/images/titles/nameUnit.png');

            this.load.image('bgrPause', 'assets/images/backgrounds/pause.png');
            this.load.image('bgrSelect', 'assets/images/backgrounds/select.png');
            this.load.image('bgrPlayingBoy', 'assets/images/backgrounds/playingBoy.jpg');
            this.load.image('bgrPlayingGirl', 'assets/images/backgrounds/playingGirl.jpg');
            this.load.image('bgrArcade', 'assets/images/backgrounds/arcade.png');
            this.load.image('bgrPuzzle', 'assets/images/backgrounds/puzzle.jpg');
            
            this.load.image('tit1', 'assets/images/titles/1.png');
            this.load.image('tit2', 'assets/images/titles/2.png');
            this.load.image('tit3', 'assets/images/titles/3.png');
            this.load.image('titNow', 'assets/images/titles/now.png');
            this.load.image('titCongrats', 'assets/images/titles/congrats.png');
            
            this.load.image('imgTriangle', 'assets/images/triangle.png');
            this.load.image('imgCircle', 'assets/images/circle.png');
            this.load.image('imgSquare', 'assets/images/square.png');
            this.load.image('imgPlatform', 'assets/images/platform.png');
            
            this.load.spritesheet('btnStart2', 'assets/images/buttons/start2.png', 200, 97);
            this.load.spritesheet('btnNext', 'assets/images/buttons/next.png', 200, 80);
            this.load.spritesheet('btnStore', 'assets/images/buttons/store.png', 300, 100);

            this.load.audio('sndError', 'assets/sounds/error.wav');
            this.load.audio('sndPoint', 'assets/sounds/point.wav');
            this.load.audio('snd3', 'assets/sounds/three.mp3');
            this.load.audio('snd2', 'assets/sounds/two.mp3');
            this.load.audio('snd1', 'assets/sounds/one.mp3');
            this.load.audio('sndNow', 'assets/sounds/now.mp3');

            this.load.onLoadStart.add(this.loadStart, this);
            this.load.onFileComplete.add(this.fileComplete, this);
            this.load.onLoadComplete.add(this.loadComplete, this);
            this.load.start();
        }


        //Esta función es de Phaser y se llama cuando la carga de archivos va a empezar
        loadStart = () => {
            this.loadBar = this.add.graphics(100, this.world.centerY + 100);

            this.loadBar.lineStyle(35, 0xffffff, 1);
            this.loadBar.tint = YELLOW;
            this.loadBar.moveTo(0, 0);
            this.loadBar.lineTo(this.world.width - 200, 0);
            this.loadBar.scale.x = 0;
            this.loadBar.endFill();

            this.loadText = this.add.text(this.world.centerX, this.world.centerY + 140, "Cargando...", { font: "30px Arial", align: "center", fill: '#ffffff' });
            this.loadText.anchor.set(0.5);
        }

        //Esta función es de Phaser y se llama cuando un archivo se a descargado completamente y está listo para usarse
        //Yo la uso para mover la barra de carga del inicio de la aplicación
        fileComplete = (progress, cacheKey, success, totalLoaded, totalFiles) => {
            switch (cacheKey) {
                case "bgrLoading":
                    this.background = this.add.sprite(0, 0, 'bgrLoading');
                    this.background.height = this.world.height;
                    this.background.width = this.world.width;
                    this.background.sendToBack();
                    break;
                case "titNameUnit":
                    this.title = this.add.image(this.world.centerX, 100, 'titNameUnit');
                    this.title.anchor.x = 0.5;
                    break;
                case "pikachu":
                    this.player1 = this.add.sprite(52, this.world.centerY + 72, 'pikachu');
                    this.player1.animations.add('right', [1, 2, 3, 4, 5], 10, true);
                    this.player1.animations.play('right');
                    this.animateBar = true;
                    this.player1.bringToTop();
                    break;
                case "bgrPause":
                    var image = this.add.image(0, this.world.centerY, "bgrPause");
                    while (image.z != 1) {
                        image.moveDown();
                    }
                    break;
            }

            this.loadBar.scale.x = progress * 0.01;
            if (this.animateBar) {
                this.player1.x = ((600 * progress) / 100) + 52;
            }
        }

        //Esta función es de Phaser y se llama al terminar toda la descarga de los archivos necesarios
        loadComplete = () => {
            this.loadText.setText("Consiguiendo tu nombre...");
            $.getJSON("https://www.mrbook.com.co/api/php/crud.php", { 'option': 'GetById', 'id': 1, 'tabla': 'mb_avatar', 'pk':'id' })
                .done((data: any, textStatus: string, jqXHR: JQueryXHR) => {
                    avatar = new Avatar();
                    Object.keys(data).forEach(function (key) {
                        avatar[key] = data[key];
                    })
                    this.player1.visible = false;
                    this.loadBar.destroy();
                    this.loadText.destroy();
                    this.title.kill();

                    this.load.onLoadStart.removeAll();
                    this.load.onFileComplete.removeAll();
                    this.load.onLoadComplete.removeAll();

                    this.game.state.start("PrincipalMenu", true);
                })
                .fail((jqxhr, textStatus, error) => {
                    if (confirm("Lo sentimos. No nos hemos podido conectar con el servidor. Revisa tu conexión de internet o pregunta a tu tutor.")) {
                        this.loadComplete();
                    }
                });
        }
    }
}