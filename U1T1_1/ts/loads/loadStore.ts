module MrBook {
    export class LoadStore extends Loads {

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

            this.game.load.image('bgrStore', 'https://rawgit.com/erickvelasco11/KidMaths/master/Unit1/assets/images/backgrounds/store.jpg').crossOrigin = true;

            this.game.load.image('imgRack', 'https://rawgit.com/erickvelasco11/KidMaths/master/Unit1/assets/images/rack.png').crossOrigin = true;
            this.game.load.image('imgBallon', 'https://rawgit.com/erickvelasco11/KidMaths/master/Unit1/assets/images/ballon.png').crossOrigin = true;
            this.game.load.image('imgCheck', 'https://rawgit.com/erickvelasco11/KidMaths/master/Unit1/assets/images/check.png').crossOrigin = true;

            this.game.load.spritesheet('btnMenuSkin', 'https://rawgit.com/erickvelasco11/KidMaths/master/Unit1/assets/images/buttons/menuSkin.png', 200, 200).crossOrigin = true;
            this.game.load.spritesheet('btnMenuHead', 'https://rawgit.com/erickvelasco11/KidMaths/master/Unit1/assets/images/buttons/menuHead.png', 200, 200).crossOrigin = true;
            this.game.load.spritesheet('btnMenuTorso', 'https://rawgit.com/erickvelasco11/KidMaths/master/Unit1/assets/images/buttons/menuTorso.png', 200, 200).crossOrigin = true;
            this.game.load.spritesheet('btnMenuLegs', 'https://rawgit.com/erickvelasco11/KidMaths/master/Unit1/assets/images/buttons/menuLegs.png', 200, 200).crossOrigin = true;
            this.game.load.spritesheet('btnMenuFeet', 'https://rawgit.com/erickvelasco11/KidMaths/master/Unit1/assets/images/buttons/menuFeet.png', 200, 200).crossOrigin = true;
            this.game.load.spritesheet('btnBack', 'https://rawgit.com/erickvelasco11/KidMaths/master/Unit1/assets/images/buttons/back.png', 200, 200).crossOrigin = true;
            this.game.load.spritesheet('btnSee', 'https://rawgit.com/erickvelasco11/KidMaths/master/Unit1/assets/images/buttons/see.png', 200, 200).crossOrigin = true;
            this.game.load.spritesheet('btnBuy', 'https://rawgit.com/erickvelasco11/KidMaths/master/Unit1/assets/images/buttons/buy.png', 200, 200).crossOrigin = true;


            this.game.load.onLoadStart.add(this.loadStart, this);
            this.game.load.onFileComplete.add(this.fileComplete, this);
            this.game.load.onLoadComplete.add(this.loadComplete, this);
            this.game.load.start();
        }
        
        //Esta función es de Phaser y se llama cuando la carga de archivos va a empezar
        loadStart = () => {
            this.background = this.game.add.sprite(0, 0, 'bgrLoading');
            this.background.height = this.game.world.height;
            this.background.width = this.game.world.width;
            this.background.sendToBack();

            var image = this.game.add.image(0, this.game.world.centerY, "bgrPause");

            this.loadBar = this.game.add.graphics(100, this.game.world.centerY + 100).crossOrigin = true;
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
            this.loadText.setText("Llenando la tienda...");
            if (productsStore.length == 0) {
                $.getJSON("https://www.mrbook.com.co/api/php/crud.php", { 'option': 'GetAll', 'tabla': 'mb_product' })
                    .done((data: any, textStatus: string, jqXHR: JQueryXHR) => {

                        this.loadText.setText("Mirando cuáles son tus productos...");
                        for (var i = 0; i < Object.keys(data).length; i++) {
                            Object.keys(data).forEach(function (key) {
                                productsStore[key] = data[key];
                            })
                        }

                        $.getJSON("https://www.mrbook.com.co/api/php/crud.php", { 'option': 'GetAll', 'tabla': 'mb_product_by_avatar', 'pk':'idAvatar' })
                            .done((data: any, textStatus: string, jqXHR: JQueryXHR) => {
                                Object.keys(data).forEach(function (key) {
                                    myProducts.push(data[key].idProduct);
                                })

                                this.game.load.onLoadStart.removeAll();
                                this.game.load.onFileComplete.removeAll();
                                this.game.load.onLoadComplete.removeAll();

                                this.game.state.start("Store", true);
                            })
                            .fail((jqxhr, textStatus, error) => {
                                alert("Lo sentimos. No nos hemos podido conectar con el servidor. Revisa tu conexión de internet o pregunta a tu tutor.");
                            });
                    })
                    .fail((jqxhr, textStatus, error) => {
                        alert("Lo sentimos. No nos hemos podido conectar con el servidor. Revisa tu conexión de internet o pregunta a tu tutor.");
                    });
            } else {
                this.game.load.onLoadStart.removeAll();
                this.game.load.onFileComplete.removeAll();
                this.game.load.onLoadComplete.removeAll();

                this.game.state.start("Store", true);
            }
        }
    }
}