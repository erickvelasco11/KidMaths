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
    var LoadStore = /** @class */ (function (_super) {
        __extends(LoadStore, _super);
        function LoadStore() {
            var _this = _super.call(this) || this;
            _this.animateBar = false;
            //Esta función es de Phaser y se llama cuando la carga de archivos va a empezar
            _this.loadStart = function () {
                _this.background = _this.game.add.sprite(0, 0, 'bgrLoading');
                _this.background.height = _this.game.world.height;
                _this.background.width = _this.game.world.width;
                _this.background.sendToBack();
                var image = _this.game.add.image(0, _this.game.world.centerY, "bgrPause");
                _this.loadBar = _this.game.add.graphics(100, _this.game.world.centerY + 100);
                _this.loadBar.lineStyle(35, 0xffffff, 1);
                _this.loadBar.tint = MrBook.YELLOW;
                _this.loadBar.moveTo(0, 0);
                _this.loadBar.lineTo(_this.game.world.width - 200, 0);
                _this.loadBar.scale.x = 0;
                _this.loadBar.endFill();
                _this.loadText = _this.game.add.text(_this.game.world.centerX, _this.game.world.centerY + 140, "Cargando...", { font: "30px Arial", align: "center", fill: '#ffffff' });
                _this.loadText.anchor.set(0.5);
                _this.player1 = _this.game.add.sprite(52, _this.game.world.centerY + 72, 'pikachu');
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
                _this.loadText.setText("Llenando la tienda...");
                if (MrBook.productsStore.length == 0) {
                    $.getJSON("https://www.mrbook.com.co/api/php/crud.php", { 'option': 'GetAll', 'tabla': 'mb_product' })
                        .done(function (data, textStatus, jqXHR) {
                        _this.loadText.setText("Mirando cuáles son tus productos...");
                        for (var i = 0; i < Object.keys(data).length; i++) {
                            Object.keys(data).forEach(function (key) {
                                MrBook.productsStore[key] = data[key];
                            });
                        }
                        $.getJSON("https://www.mrbook.com.co/api/php/crud.php", { 'option': 'GetAll', 'tabla': 'mb_product_by_avatar', 'pk': 'idAvatar' })
                            .done(function (data, textStatus, jqXHR) {
                            Object.keys(data).forEach(function (key) {
                                MrBook.myProducts.push(data[key].idProduct);
                            });
                            _this.game.load.onLoadStart.removeAll();
                            _this.game.load.onFileComplete.removeAll();
                            _this.game.load.onLoadComplete.removeAll();
                            _this.game.state.start("Store", true);
                        })
                            .fail(function (jqxhr, textStatus, error) {
                            alert("Lo sentimos. No nos hemos podido conectar con el servidor. Revisa tu conexión de internet o pregunta a tu tutor.");
                        });
                    })
                        .fail(function (jqxhr, textStatus, error) {
                        alert("Lo sentimos. No nos hemos podido conectar con el servidor. Revisa tu conexión de internet o pregunta a tu tutor.");
                    });
                }
                else {
                    _this.game.load.onLoadStart.removeAll();
                    _this.game.load.onFileComplete.removeAll();
                    _this.game.load.onLoadComplete.removeAll();
                    _this.game.state.start("Store", true);
                }
            };
            return _this;
        }
        //Función para listar los componentes que se van a cargar para el juego
        LoadStore.prototype.preload = function () {
            this.superPreload();
            this.game.load.image('bgrStore', 'https://rawgit.com/erickvelasco11/KidMaths/master/Unit1/assets/images/backgrounds/store.jpg').crossOrigin = true;
            this.game.load.image('imgRack', 'https://rawgit.com/erickvelasco11/KidMaths/master/Unit1/assets/images/rack.png');
            this.game.load.image('imgBallon', 'https://rawgit.com/erickvelasco11/KidMaths/master/Unit1/assets/images/ballon.png');
            this.game.load.image('imgCheck', 'https://rawgit.com/erickvelasco11/KidMaths/master/Unit1/assets/images/check.png');
            this.game.load.spritesheet('btnMenuSkin', 'https://rawgit.com/erickvelasco11/KidMaths/master/Unit1/assets/images/buttons/menuSkin.png', 200, 200);
            this.game.load.spritesheet('btnMenuHead', 'https://rawgit.com/erickvelasco11/KidMaths/master/Unit1/assets/images/buttons/menuHead.png', 200, 200);
            this.game.load.spritesheet('btnMenuTorso', 'https://rawgit.com/erickvelasco11/KidMaths/master/Unit1/assets/images/buttons/menuTorso.png', 200, 200);
            this.game.load.spritesheet('btnMenuLegs', 'https://rawgit.com/erickvelasco11/KidMaths/master/Unit1/assets/images/buttons/menuLegs.png', 200, 200);
            this.game.load.spritesheet('btnMenuFeet', 'https://rawgit.com/erickvelasco11/KidMaths/master/Unit1/assets/images/buttons/menuFeet.png', 200, 200);
            this.game.load.spritesheet('btnBack', 'https://rawgit.com/erickvelasco11/KidMaths/master/Unit1/assets/images/buttons/back.png', 200, 200);
            this.game.load.spritesheet('btnSee', 'https://rawgit.com/erickvelasco11/KidMaths/master/Unit1/assets/images/buttons/see.png', 200, 200);
            this.game.load.spritesheet('btnBuy', 'https://rawgit.com/erickvelasco11/KidMaths/master/Unit1/assets/images/buttons/buy.png', 200, 200);
            this.game.load.onLoadStart.add(this.loadStart, this);
            this.game.load.onFileComplete.add(this.fileComplete, this);
            this.game.load.onLoadComplete.add(this.loadComplete, this);
            this.game.load.start();
        };
        return LoadStore;
    }(MrBook.Loads));
    MrBook.LoadStore = LoadStore;
})(MrBook || (MrBook = {}));
//# sourceMappingURL=loadStore.js.map