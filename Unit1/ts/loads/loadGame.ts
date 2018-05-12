﻿module MrBook {
    export class LoadGame extends Phaser.State {

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

            this.load.image('imgBoy', 'assets/images/boy.png');
            this.load.image('imgGirl', 'assets/images/girl.png');
            this.load.image('imgOpenBox', 'assets/images/openBox.png');
            this.load.image('imgTriangle', 'assets/images/triangle.png');
            this.load.image('imgCircle', 'assets/images/circle.png');
            this.load.image('imgSquare', 'assets/images/square.png');
            this.load.image('imgPlatform', 'assets/images/platform.png');
            this.load.image('imgCloud', 'assets/images/cloud.png');
            this.load.image('imgFloor', 'assets/images/floor.png');

            this.load.image('itmSchoolBag', 'assets/images/items/schoolBag.png');
            this.load.image('itmClothesbasket', 'assets/images/items/clothesBasket.png');
            this.load.image('itmFruitBasket', 'assets/images/items/fruitBasket.png');
            this.load.image('itmApple', 'assets/images/items/apple.png');
            this.load.image('itmBananas', 'assets/images/items/bananas.png');
            this.load.image('itmStrawberry', 'assets/images/items/strawberry.png');
            this.load.image('itmPear', 'assets/images/items/pear.png');
            this.load.image('itmTomato', 'assets/images/items/tomato.png');
            this.load.image('itmBook', 'assets/images/items/book.png');
            this.load.image('itmErase', 'assets/images/items/erase.png');
            this.load.image('itmPencil', 'assets/images/items/pencil.png');
            this.load.image('itmPencilColors', 'assets/images/items/pencilColors.png');
            this.load.image('itmPencilCase', 'assets/images/items/pencilCase.png');
            this.load.image('itmClothCap', 'assets/images/items/clothCap.png');
            this.load.image('itmDress', 'assets/images/items/dress.png');
            this.load.image('itmJacket', 'assets/images/items/jacket.png');
            this.load.image('itmShirt', 'assets/images/items/shirt.png');
            this.load.image('itmSocks', 'assets/images/items/socks.png');

            this.load.image('itmSetAnimals', 'assets/images/items/setAnimals.jpg');
            this.load.image('itmSetBooks', 'assets/images/items/setBooks.png');
            this.load.image('itmSetFigures', 'assets/images/items/setFigures.png');
            this.load.image('itmSetFlags', 'assets/images/items/setFlags.png');
            this.load.image('itmSetFlowers', 'assets/images/items/setFlowers.png');
            this.load.image('itmSetFruits', 'assets/images/items/setFruits.png');
            this.load.image('itmSetNumbers', 'assets/images/items/setNumbers.png');
            this.load.image('itmSetShoes', 'assets/images/items/setShoes.jpg');
            this.load.image('itmSetToys', 'assets/images/items/setToys.jpg');
            this.load.image('itmSetUtensils', 'assets/images/items/setUtensils.jpg');

            this.load.image('itmBear', 'assets/images/items/animals/bear.png');
            this.load.image('itmCat', 'assets/images/items/animals/cat.png');
            this.load.image('itmHorse', 'assets/images/items/animals/horse.png');
            this.load.image('itmRabbit', 'assets/images/items/animals/rabbit.png');
            this.load.image('itmTiger', 'assets/images/items/animals/tiger.png');

            this.load.image('itmBook1', 'assets/images/items/books/book1.png');
            this.load.image('itmBook2', 'assets/images/items/books/book2.png');
            this.load.image('itmBook3', 'assets/images/items/books/book3.png');
            this.load.image('itmBook4', 'assets/images/items/books/book4.png');
            this.load.image('itmBook5', 'assets/images/items/books/book5.png');

            this.load.image('itmCircle', 'assets/images/items/figures/circle.png');
            this.load.image('itmTriangle', 'assets/images/items/figures/triangle.png');
            this.load.image('itmSquare', 'assets/images/items/figures/square.png');
            this.load.image('itmPentagon', 'assets/images/items/figures/pentagon.png');
            this.load.image('itmHexagon', 'assets/images/items/figures/hexagon.png');

            this.load.image('itmColombia', 'assets/images/items/flags/colombia.png');
            this.load.image('itmAustralia', 'assets/images/items/flags/australia.png');
            this.load.image('itmArgentina', 'assets/images/items/flags/argentina.png');
            this.load.image('itmUsa', 'assets/images/items/flags/usa.png');
            this.load.image('itmBrasil', 'assets/images/items/flags/brasil.png');

            this.load.image('itmNarciso', 'assets/images/items/flowers/narciso.png');
            this.load.image('itmRosa', 'assets/images/items/flowers/rosa.png');
            this.load.image('itmLoto', 'assets/images/items/flowers/loto.png');
            this.load.image('itmSakura', 'assets/images/items/flowers/sakura.png');
            this.load.image('itmMargarita', 'assets/images/items/flowers/margarita.png');

            this.load.image('itmOne', 'assets/images/items/numbers/one.png');
            this.load.image('itmTwo', 'assets/images/items/numbers/two.png');
            this.load.image('itmThree', 'assets/images/items/numbers/three.png');
            this.load.image('itmFour', 'assets/images/items/numbers/four.png');
            this.load.image('itmFive', 'assets/images/items/numbers/five.png');

            this.load.image('itmBoot', 'assets/images/items/shoes/boot.png');
            this.load.image('itmHeel', 'assets/images/items/shoes/heel.png');
            this.load.image('itmTennis', 'assets/images/items/shoes/tennis.png');
            this.load.image('itmBlackShoe', 'assets/images/items/shoes/blackShoe.png');
            this.load.image('itmSandal', 'assets/images/items/shoes/sandal.png');

            this.load.image('itmToy1', 'assets/images/items/toys/toy1.png');
            this.load.image('itmToy2', 'assets/images/items/toys/toy2.png');
            this.load.image('itmToy3', 'assets/images/items/toys/toy3.png');
            this.load.image('itmToy4', 'assets/images/items/toys/toy4.png');
            this.load.image('itmToy5', 'assets/images/items/toys/toy5.png');

            this.load.image('itmSpoon', 'assets/images/items/utensils/spoon.png');
            this.load.image('itmFork', 'assets/images/items/utensils/fork.png');
            this.load.image('itmFork2', 'assets/images/items/utensils/fork2.png');
            this.load.image('itmKnife', 'assets/images/items/utensils/knife.png');
            this.load.image('itmAxe', 'assets/images/items/utensils/axe.png');

            this.load.spritesheet('btnStart1', 'assets/images/buttons/start1.png', 200, 97);
            this.load.spritesheet('btnStart2', 'assets/images/buttons/start2.png', 200, 97);
            this.load.spritesheet('btnStart3', 'assets/images/buttons/start3.png', 200, 97);
            this.load.spritesheet('btnNext', 'assets/images/buttons/next.png', 200, 80);
            this.load.spritesheet('btnStore', 'assets/images/buttons/store.png', 300, 100);

            this.load.spritesheet('sprBird', 'assets/images/sprites/bird.png', 200, 200);

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