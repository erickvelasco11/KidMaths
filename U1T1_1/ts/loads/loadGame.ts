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
            this.load.spritesheet('pikachu', 'https://rawgit.com/erickvelasco11/KidMaths/master/Unit1/assets/images/pikachu.png', 48, 48).crossOrigin = true;
            this.load.image('bgrLoading', 'https://rawgit.com/erickvelasco11/KidMaths/master/Unit1/assets/images/backgrounds/loading.jpg').crossOrigin = true;
            this.load.image('titNameUnit', 'https://rawgit.com/erickvelasco11/KidMaths/master/Unit1/assets/images/titles/nameUnit.png').crossOrigin = true;

            this.load.image('bgrPause', 'https://rawgit.com/erickvelasco11/KidMaths/master/Unit1/assets/images/backgrounds/pause.png').crossOrigin = true;
            this.load.image('bgrPlayingBoy', 'https://rawgit.com/erickvelasco11/KidMaths/master/Unit1/assets/images/backgrounds/playingBoy.jpg').crossOrigin = true;
            this.load.image('bgrPlayingGirl', 'https://rawgit.com/erickvelasco11/KidMaths/master/Unit1/assets/images/backgrounds/playingGirl.jpg').crossOrigin = true;

            this.load.image('tit1', 'https://rawgit.com/erickvelasco11/KidMaths/master/Unit1/assets/images/titles/1.png').crossOrigin = true;
            this.load.image('tit2', 'https://rawgit.com/erickvelasco11/KidMaths/master/Unit1/assets/images/titles/2.png').crossOrigin = true;
            this.load.image('tit3', 'https://rawgit.com/erickvelasco11/KidMaths/master/Unit1/assets/images/titles/3.png').crossOrigin = true;
            this.load.image('titNow', 'https://rawgit.com/erickvelasco11/KidMaths/master/Unit1/assets/images/titles/now.png').crossOrigin = true;
            this.load.image('titCongrats', 'https://rawgit.com/erickvelasco11/KidMaths/master/Unit1/assets/images/titles/congrats.png').crossOrigin = true;

            this.load.spritesheet('btnStart1', 'https://rawgit.com/erickvelasco11/KidMaths/master/Unit1/assets/images/buttons/start1.png', 200, 97).crossOrigin = true;
            this.load.spritesheet('btnStart2', 'https://rawgit.com/erickvelasco11/KidMaths/master/Unit1/assets/images/buttons/start2.png', 200, 97).crossOrigin = true;
            this.load.spritesheet('btnStart3', 'https://rawgit.com/erickvelasco11/KidMaths/master/Unit1/assets/images/buttons/start3.png', 200, 97).crossOrigin = true;
            this.load.spritesheet('btnNext', 'https://rawgit.com/erickvelasco11/KidMaths/master/Unit1/assets/images/buttons/next.png', 200, 80).crossOrigin = true;
            this.load.spritesheet('btnStore', 'https://rawgit.com/erickvelasco11/KidMaths/master/Unit1/assets/images/buttons/store.png', 300, 100).crossOrigin = true;

            this.load.audio('sndError', 'https://rawgit.com/erickvelasco11/KidMaths/master/Unit1/assets/sounds/error.wav').crossOrigin = true;
            this.load.audio('sndPoint', 'https://rawgit.com/erickvelasco11/KidMaths/master/Unit1/assets/sounds/point.wav').crossOrigin = true;
            this.load.audio('snd3', 'https://rawgit.com/erickvelasco11/KidMaths/master/Unit1/assets/sounds/three.mp3').crossOrigin = true;
            this.load.audio('snd2', 'https://rawgit.com/erickvelasco11/KidMaths/master/Unit1/assets/sounds/two.mp3').crossOrigin = true;
            this.load.audio('snd1', 'https://rawgit.com/erickvelasco11/KidMaths/master/Unit1/assets/sounds/one.mp3').crossOrigin = true;
            this.load.audio('sndNow', 'https://rawgit.com/erickvelasco11/KidMaths/master/Unit1/assets/sounds/now.mp3').crossOrigin = true;

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