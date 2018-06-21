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
    var LoadTopic1_1 = /** @class */ (function (_super) {
        __extends(LoadTopic1_1, _super);
        function LoadTopic1_1() {
            var _this = _super.call(this) || this;
            _this.animateBar = false;
            _this.loadStart = function () {
                _this.background = _this.add.sprite(0, 0, 'bgrLoading');
                _this.background.height = _this.world.height;
                _this.background.width = _this.world.width;
                _this.background.sendToBack();
                var image = _this.add.image(0, _this.world.centerY, "bgrPause");
                _this.loadBar = _this.add.graphics(100, _this.world.centerY + 100);
                _this.loadBar.lineStyle(35, 0xffffff, 1);
                _this.loadBar.tint = MrBook.YELLOW;
                _this.loadBar.moveTo(0, 0);
                _this.loadBar.lineTo(_this.world.width - 200, 0);
                _this.loadBar.scale.x = 0;
                _this.loadBar.endFill();
                _this.loadText = _this.add.text(_this.world.centerX, _this.world.centerY + 140, "Cargando...", { font: "30px Arial", align: "center", fill: '#ffffff' });
                _this.loadText.anchor.set(0.5);
                _this.player1 = _this.add.sprite(52, _this.world.centerY + 72, 'pikachu');
                _this.player1.animations.add('right', [1, 2, 3, 4, 5], 10, true);
                _this.player1.animations.play('right');
                _this.player1.bringToTop();
                _this.animateBar = true;
            };
            //Esta función es de Phaser y se llama cuando un archivo se a descargado completamente y está listo para usarse
            //Yo la uso para mover la barra de carga del inicio de la aplicación
            _this.fileComplete = function (progress, cacheKey, success, totalLoaded, totalFiles) {
                _this.loadBar.scale.x = progress * 0.01;
                if (_this.animateBar) {
                    _this.player1.x = ((600 * progress) / 100) + 52;
                }
            };
            //Esta función es de Phaser y se llama al terminar toda la descarga de los archivos necesarios
            _this.loadComplete = function () {
                _this.game.load.onLoadStart.removeAll();
                _this.game.load.onFileComplete.removeAll();
                _this.game.load.onLoadComplete.removeAll();
                _this.game.state.start("Topic1_1", true);
                //if (productsStore.length == 0) {
                //    $.getJSON("https://www.mrbook.com.co/api/php/crud.php", { 'option': 'GetAll', 'tabla': 'mb_product' })
                //        .done((data: any, textStatus: string, jqXHR: JQueryXHR) => {
                //            this.loadText.setText("Mirando cuáles son tus productos...");
                //            for (var i = 0; i < Object.keys(data).length; i++) {
                //                Object.keys(data).forEach(function (key) {
                //                    productsStore[key] = data[key];
                //                })
                //            }
                //            this.game.load.onLoadStart.removeAll();
                //            this.game.load.onFileComplete.removeAll();
                //            this.game.load.onLoadComplete.removeAll();
                //            this.game.state.start("Topic1_1", true);
                //        })
                //        .fail((jqxhr, textStatus, error) => {
                //            alert("Lo sentimos. No nos hemos podido conectar con el servidor. Revisa tu conexión de internet o pregunta a tu tutor.");
                //        });
                //} else {
                //    this.game.load.onLoadStart.removeAll();
                //    this.game.load.onFileComplete.removeAll();
                //    this.game.load.onLoadComplete.removeAll();
                //    this.game.state.start("Topic1_1", true);
                //}
            };
            return _this;
        }
        //Función para listar los componentes que se van a cargar para el juego
        LoadTopic1_1.prototype.preload = function () {
            this.superPreload();
            this.load.image('bgrArcade', 'assets/images/backgrounds/topic1_1.png');
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
            this.load.image('itmBook1', 'assets/images/items/books/book1.png');
            this.load.image('itmBook2', 'assets/images/items/books/book2.png');
            this.load.image('itmBook3', 'assets/images/items/books/book3.png');
            this.load.image('itmBook4', 'assets/images/items/books/book4.png');
            this.load.image('itmBook5', 'assets/images/items/books/book5.png');
            this.load.image('itmBoot', 'assets/images/items/shoes/boot.png');
            this.load.image('itmHeel', 'assets/images/items/shoes/heel.png');
            this.load.image('itmTennis', 'assets/images/items/shoes/tennis.png');
            this.load.image('itmBlackShoe', 'assets/images/items/shoes/blackShoe.png');
            this.load.image('itmSandal', 'assets/images/items/shoes/sandal.png');
            this.load.spritesheet('sprBird', 'assets/images/sprites/alien.png', 413, 413);
            this.load.spritesheet('itmFruitBasket', 'assets/images/sprites/fruitBasket.png', 244, 222);
            this.load.spritesheet('itmClothesbasket', 'assets/images/sprites/clothesBasket.png', 244, 222);
            this.load.spritesheet('itmSchoolBag', 'assets/images/sprites/schoolBag.png', 244, 222);
            this.load.onLoadStart.add(this.loadStart, this);
            this.load.onFileComplete.add(this.fileComplete, this);
            this.load.onLoadComplete.add(this.loadComplete, this);
            this.load.start();
        };
        return LoadTopic1_1;
    }(MrBook.Loads));
    MrBook.LoadTopic1_1 = LoadTopic1_1;
})(MrBook || (MrBook = {}));
//# sourceMappingURL=loadTopic1_1.js.map