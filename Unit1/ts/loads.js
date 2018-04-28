var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var MrBook;
(function (MrBook) {
    var Loads = /** @class */ (function (_super) {
        __extends(Loads, _super);
        function Loads() {
            var _this = _super.call(this) || this;
            _this.animateBar = false;
            //Esta función es de Phaser y se llama cuando la carga de archivos va a empezar
            _this.loadStart = function () {
                _this.loadBar = _this.game.add.graphics(100, _this.game.world.centerY + 100);
                _this.loadBar.lineStyle(35, 0xffffff, 1);
                _this.loadBar.tint = MrBook.YELLOW;
                _this.loadBar.moveTo(0, 0);
                _this.loadBar.lineTo(_this.game.world.width - 200, 0);
                _this.loadBar.scale.x = 0;
                _this.loadBar.endFill();
                _this.loadText = _this.game.add.text(_this.game.world.centerX, _this.game.world.centerY + 140, "Cargando...", { font: "30px Arial", align: "center", fill: '#ffffff' });
                _this.loadText.anchor.set(0.5);
            };
            //Esta función es de Phaser y se llama cuando un archivo se a descargado completamente y está listo para usarse
            //Yo la uso para mover la barra de carga del inicio de la aplicación
            _this.fileComplete = function (progress, cacheKey, success, totalLoaded, totalFiles) {
                switch (cacheKey) {
                    case "bgrLoading":
                        _this.background = _this.game.add.sprite(0, 0, 'bgrLoading');
                        _this.background.height = _this.game.world.height;
                        _this.background.width = _this.game.world.width;
                        _this.background.sendToBack();
                        break;
                    case "titNameUnit":
                        _this.title = _this.game.add.image(_this.game.world.centerX, 100, 'titNameUnit');
                        _this.title.anchor.x = 0.5;
                        break;
                    case "pikachu":
                        _this.player1 = _this.game.add.sprite(52, _this.game.world.centerY + 72, 'pikachu');
                        _this.player1.animations.add('right', [1, 2, 3, 4, 5], 10, true);
                        _this.player1.animations.play('right');
                        _this.animateBar = true;
                        _this.player1.bringToTop();
                        break;
                    case "bgrPause":
                        var image = _this.game.add.image(0, _this.game.world.centerY, "bgrPause");
                        while (image.z != 1) {
                            image.moveDown();
                        }
                        break;
                }
                _this.loadBar.scale.x = progress * 0.01;
                if (_this.animateBar) {
                    _this.player1.x = ((600 * progress) / 100) + 52;
                }
            };
            //Esta función es de Phaser y se llama al terminar toda la descarga de los archivos necesarios
            _this.loadComplete = function () {
                _this.loadText.setText("Conectando a la base de datos");
                $.getJSON("https://www.mrbook.com.co/api/crud.php", { 'option': 'listar', 'id': 1, 'tabla': 'mb_avatar' })
                    .done(function (data, textStatus, jqXHR) {
                    MrBook.avatar = new MrBook.Avatar();
                    Object.keys(data).forEach(function (key) {
                        MrBook.avatar[key] = data[key];
                    });
                    _this.player1.visible = false;
                    _this.loadBar.destroy();
                    _this.loadText.destroy();
                    _this.title.kill();
                    _this.game.state.start("PrincipalMenuState", true);
                })
                    .fail(function (jqxhr, textStatus, error) {
                    alert("Lo sentimos. No nos hemos podido conectar con el servidor. Revisa tu conexión de internet o pregunta a tu tutor.");
                });
            };
            return _this;
        }
        //Función para listar los componentes que se van a cargar para el juego
        Loads.prototype.preload = function () {
            this.game.load.spritesheet('pikachu', 'assets/images/pikachu.png', 48, 48);
            this.game.load.image('bgrLoading', 'assets/images/backgrounds/loading.jpg');
            this.game.load.image('titNameUnit', 'assets/images/titles/nameUnit.png');
            this.game.load.image('bgrPause', 'assets/images/backgrounds/pause.png');
            this.game.load.image('bgrOptions', 'assets/images/backgrounds/options.jpg');
            this.game.load.image('bgrPlayingBoy', 'assets/images/backgrounds/playingBoy.jpg');
            this.game.load.image('bgrPlayingGirl', 'assets/images/backgrounds/playingGirl.jpg');
            this.game.load.image('bgrArcade', 'assets/images/backgrounds/arcade.png');
            this.game.load.image('bgrPuzzle', 'assets/images/backgrounds/puzzle.jpg');
            this.game.load.image('bgrSelect', 'assets/images/backgrounds/select.png');
            this.game.load.image('bgrStore', 'assets/images/backgrounds/store.png');
            this.game.load.image('titGender', 'assets/images/titles/gender.png');
            this.game.load.image('tit1', 'assets/images/titles/1.png');
            this.game.load.image('tit2', 'assets/images/titles/2.png');
            this.game.load.image('tit3', 'assets/images/titles/3.png');
            this.game.load.image('titNow', 'assets/images/titles/now.png');
            this.game.load.image('titCongrats', 'assets/images/titles/congrats.png');
            this.game.load.image('imgBoy', 'assets/images/boy.png');
            this.game.load.image('imgGirl', 'assets/images/girl.png');
            this.game.load.image('imgOpenBox', 'assets/images/openBox.png');
            this.game.load.image('imgTriangle', 'assets/images/triangle.png');
            this.game.load.image('imgCircle', 'assets/images/circle.png');
            this.game.load.image('imgSquare', 'assets/images/square.png');
            this.game.load.image('imgPlatform', 'assets/images/platform.png');
            this.game.load.image('imgCloud', 'assets/images/cloud.png');
            this.game.load.image('itmSchoolBag', 'assets/images/items/schoolBag.png');
            this.game.load.image('itmClothesbasket', 'assets/images/items/clothesBasket.png');
            this.game.load.image('itmFruitBasket', 'assets/images/items/fruitBasket.png');
            this.game.load.image('itmApple', 'assets/images/items/apple.png');
            this.game.load.image('itmBananas', 'assets/images/items/bananas.png');
            this.game.load.image('itmStrawberry', 'assets/images/items/strawberry.png');
            this.game.load.image('itmPear', 'assets/images/items/pear.png');
            this.game.load.image('itmTomato', 'assets/images/items/tomato.png');
            this.game.load.image('itmBook', 'assets/images/items/book.png');
            this.game.load.image('itmErase', 'assets/images/items/erase.png');
            this.game.load.image('itmPencil', 'assets/images/items/pencil.png');
            this.game.load.image('itmPencilColors', 'assets/images/items/pencilColors.png');
            this.game.load.image('itmPencilCase', 'assets/images/items/pencilCase.png');
            this.game.load.image('itmClothCap', 'assets/images/items/clothCap.png');
            this.game.load.image('itmDress', 'assets/images/items/dress.png');
            this.game.load.image('itmJacket', 'assets/images/items/jacket.png');
            this.game.load.image('itmShirt', 'assets/images/items/shirt.png');
            this.game.load.image('itmSocks', 'assets/images/items/socks.png');
            this.game.load.image('itmSetAnimals', 'assets/images/items/setAnimals.jpg');
            this.game.load.image('itmSetBooks', 'assets/images/items/setBooks.png');
            this.game.load.image('itmSetFigures', 'assets/images/items/setFigures.png');
            this.game.load.image('itmSetFlags', 'assets/images/items/setFlags.png');
            this.game.load.image('itmSetFlowers', 'assets/images/items/setFlowers.png');
            this.game.load.image('itmSetFruits', 'assets/images/items/setFruits.png');
            this.game.load.image('itmSetNumbers', 'assets/images/items/setNumbers.png');
            this.game.load.image('itmSetShoes', 'assets/images/items/setShoes.jpg');
            this.game.load.image('itmSetToys', 'assets/images/items/setToys.jpg');
            this.game.load.image('itmSetUtensils', 'assets/images/items/setUtensils.jpg');
            this.game.load.image('itmBear', 'assets/images/items/animals/bear.png');
            this.game.load.image('itmCat', 'assets/images/items/animals/cat.png');
            this.game.load.image('itmHorse', 'assets/images/items/animals/horse.png');
            this.game.load.image('itmRabbit', 'assets/images/items/animals/rabbit.png');
            this.game.load.image('itmTiger', 'assets/images/items/animals/tiger.png');
            this.game.load.image('itmBook1', 'assets/images/items/books/book1.png');
            this.game.load.image('itmBook2', 'assets/images/items/books/book2.png');
            this.game.load.image('itmBook3', 'assets/images/items/books/book3.png');
            this.game.load.image('itmBook4', 'assets/images/items/books/book4.png');
            this.game.load.image('itmBook5', 'assets/images/items/books/book5.png');
            this.game.load.image('itmCircle', 'assets/images/items/figures/circle.png');
            this.game.load.image('itmTriangle', 'assets/images/items/figures/triangle.png');
            this.game.load.image('itmSquare', 'assets/images/items/figures/square.png');
            this.game.load.image('itmPentagon', 'assets/images/items/figures/pentagon.png');
            this.game.load.image('itmHexagon', 'assets/images/items/figures/hexagon.png');
            this.game.load.image('itmColombia', 'assets/images/items/flags/colombia.png');
            this.game.load.image('itmAustralia', 'assets/images/items/flags/australia.png');
            this.game.load.image('itmArgentina', 'assets/images/items/flags/argentina.png');
            this.game.load.image('itmUsa', 'assets/images/items/flags/usa.png');
            this.game.load.image('itmBrasil', 'assets/images/items/flags/brasil.png');
            this.game.load.image('itmNarciso', 'assets/images/items/flowers/narciso.png');
            this.game.load.image('itmRosa', 'assets/images/items/flowers/rosa.png');
            this.game.load.image('itmLoto', 'assets/images/items/flowers/loto.png');
            this.game.load.image('itmSakura', 'assets/images/items/flowers/sakura.png');
            this.game.load.image('itmMargarita', 'assets/images/items/flowers/margarita.png');
            this.game.load.image('itmOne', 'assets/images/items/numbers/one.png');
            this.game.load.image('itmTwo', 'assets/images/items/numbers/two.png');
            this.game.load.image('itmThree', 'assets/images/items/numbers/three.png');
            this.game.load.image('itmFour', 'assets/images/items/numbers/four.png');
            this.game.load.image('itmFive', 'assets/images/items/numbers/five.png');
            this.game.load.image('itmBoot', 'assets/images/items/shoes/boot.png');
            this.game.load.image('itmHeel', 'assets/images/items/shoes/heel.png');
            this.game.load.image('itmTennis', 'assets/images/items/shoes/tennis.png');
            this.game.load.image('itmBlackShoe', 'assets/images/items/shoes/blackShoe.png');
            this.game.load.image('itmSandal', 'assets/images/items/shoes/sandal.png');
            this.game.load.image('itmToy1', 'assets/images/items/toys/toy1.png');
            this.game.load.image('itmToy2', 'assets/images/items/toys/toy2.png');
            this.game.load.image('itmToy3', 'assets/images/items/toys/toy3.png');
            this.game.load.image('itmToy4', 'assets/images/items/toys/toy4.png');
            this.game.load.image('itmToy5', 'assets/images/items/toys/toy5.png');
            this.game.load.image('itmSpoon', 'assets/images/items/utensils/spoon.png');
            this.game.load.image('itmFork', 'assets/images/items/utensils/fork.png');
            this.game.load.image('itmFork2', 'assets/images/items/utensils/fork2.png');
            this.game.load.image('itmKnife', 'assets/images/items/utensils/knife.png');
            this.game.load.image('itmAxe', 'assets/images/items/utensils/axe.png');
            this.game.load.spritesheet('btnStart', 'assets/images/buttons/start.png', 200, 80);
            this.game.load.spritesheet('btnNext', 'assets/images/buttons/next.png', 200, 80);
            this.game.load.spritesheet('btnStore', 'assets/images/buttons/store.png', 300, 100);
            this.game.load.spritesheet('btnBack', 'assets/images/buttons/back.png', 200, 200);
            this.game.load.spritesheet('sprBird', 'assets/images/sprites/bird.png', 200, 200);
            this.game.load.audio('sndError', 'assets/sounds/error.wav');
            this.game.load.audio('sndPoint', 'assets/sounds/point.wav');
            this.game.load.audio('snd3', 'assets/sounds/three.mp3');
            this.game.load.audio('snd2', 'assets/sounds/two.mp3');
            this.game.load.audio('snd1', 'assets/sounds/one.mp3');
            this.game.load.audio('sndNow', 'assets/sounds/now.mp3');
            this.game.load.onLoadStart.add(this.loadStart, this);
            this.game.load.onFileComplete.add(this.fileComplete, this);
            this.game.load.onLoadComplete.add(this.loadComplete, this);
            this.game.load.start();
        };
        return Loads;
    }(Phaser.State));
    MrBook.Loads = Loads;
})(MrBook || (MrBook = {}));
//# sourceMappingURL=loads.js.map