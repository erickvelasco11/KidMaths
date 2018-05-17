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
    var LoadTopic8_1 = /** @class */ (function (_super) {
        __extends(LoadTopic8_1, _super);
        function LoadTopic8_1() {
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
                if (MrBook.productsStore.length == 0) {
                    $.getJSON("https://www.mrbook.com.co/api/php/crud.php", { 'option': 'GetAll', 'tabla': 'mb_product' })
                        .done(function (data, textStatus, jqXHR) {
                        _this.loadText.setText("Mirando cuáles son tus productos...");
                        for (var i = 0; i < Object.keys(data).length; i++) {
                            Object.keys(data).forEach(function (key) {
                                MrBook.productsStore[key] = data[key];
                            });
                        }
                        _this.game.load.onLoadStart.removeAll();
                        _this.game.load.onFileComplete.removeAll();
                        _this.game.load.onLoadComplete.removeAll();
                        _this.game.state.start("Topic8_1", true);
                    })
                        .fail(function (jqxhr, textStatus, error) {
                        alert("Lo sentimos. No nos hemos podido conectar con el servidor. Revisa tu conexión de internet o pregunta a tu tutor.");
                    });
                }
                else {
                    _this.game.load.onLoadStart.removeAll();
                    _this.game.load.onFileComplete.removeAll();
                    _this.game.load.onLoadComplete.removeAll();
                    _this.game.state.start("Topic8_1", true);
                }
            };
            return _this;
        }
        //Función para listar los componentes que se van a cargar para el juego
        LoadTopic8_1.prototype.preload = function () {
            this.superPreload();
            this.load.image('bgrJungle', 'assets/images/backgrounds/jungle.jpg');
            this.load.image('imgCannon', 'assets/images/cannon.png');
            this.load.image('imgBall', 'assets/images/ball.png');
            this.load.image('imgMonkey', 'assets/images/monkey.png');
            this.load.image('imgArrow', 'assets/images/arrow.png');
            this.load.onLoadStart.add(this.loadStart, this);
            this.load.onFileComplete.add(this.fileComplete, this);
            this.load.onLoadComplete.add(this.loadComplete, this);
            this.load.start();
        };
        return LoadTopic8_1;
    }(MrBook.Loads));
    MrBook.LoadTopic8_1 = LoadTopic8_1;
})(MrBook || (MrBook = {}));
//# sourceMappingURL=loadTopic8_1.js.map