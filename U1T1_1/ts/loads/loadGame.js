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
    var LoadGame = /** @class */ (function (_super) {
        __extends(LoadGame, _super);
        function LoadGame() {
            var _this = _super.call(this) || this;
            _this.animateBar = false;
            //Esta función es de Phaser y se llama cuando la carga de archivos va a empezar
            _this.loadStart = function () {
                _this.loadBar = _this.add.graphics(100, _this.world.centerY + 100);
                _this.loadBar.lineStyle(35, 0xffffff, 1);
                _this.loadBar.tint = MrBook.YELLOW;
                _this.loadBar.moveTo(0, 0);
                _this.loadBar.lineTo(_this.world.width - 200, 0);
                _this.loadBar.scale.x = 0;
                _this.loadBar.endFill();
                _this.loadText = _this.add.text(_this.world.centerX, _this.world.centerY + 140, "Cargando...", { font: "30px Arial", align: "center", fill: '#ffffff' });
                _this.loadText.anchor.set(0.5);
            };
            //Esta función es de Phaser y se llama cuando un archivo se a descargado completamente y está listo para usarse
            //Yo la uso para mover la barra de carga del inicio de la aplicación
            _this.fileComplete = function (progress, cacheKey, success, totalLoaded, totalFiles) {
                switch (cacheKey) {
                    case "bgrLoading":
                        _this.background = _this.add.sprite(0, 0, 'bgrLoading');
                        _this.background.height = _this.world.height;
                        _this.background.width = _this.world.width;
                        _this.background.sendToBack();
                        break;
                    case "titNameUnit":
                        _this.title = _this.add.image(_this.world.centerX, 100, 'titNameUnit');
                        _this.title.anchor.x = 0.5;
                        break;
                    case "pikachu":
                        _this.player1 = _this.add.sprite(52, _this.world.centerY + 72, 'pikachu');
                        _this.player1.animations.add('right', [1, 2, 3, 4, 5], 10, true);
                        _this.player1.animations.play('right');
                        _this.animateBar = true;
                        _this.player1.bringToTop();
                        break;
                    case "bgrPause":
                        var image = _this.add.image(0, _this.world.centerY, "bgrPause");
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
                _this.loadText.setText("Consiguiendo tu nombre...");
                $.getJSON("https://www.mrbook.com.co/api/php/crud.php", { 'option': 'GetById', 'id': 1, 'tabla': 'mb_avatar', 'pk': 'id' })
                    .done(function (data, textStatus, jqXHR) {
                    MrBook.avatar = new MrBook.Avatar();
                    Object.keys(data).forEach(function (key) {
                        MrBook.avatar[key] = data[key];
                    });
                    _this.player1.visible = false;
                    _this.loadBar.destroy();
                    _this.loadText.destroy();
                    _this.title.kill();
                    _this.load.onLoadStart.removeAll();
                    _this.load.onFileComplete.removeAll();
                    _this.load.onLoadComplete.removeAll();
                    _this.game.state.start("PrincipalMenu", true);
                })
                    .fail(function (jqxhr, textStatus, error) {
                    if (confirm("Lo sentimos. No nos hemos podido conectar con el servidor. Revisa tu conexión de internet o pregunta a tu tutor.")) {
                        _this.loadComplete();
                    }
                });
            };
            return _this;
        }
        //Función para listar los componentes que se van a cargar para el juego
        LoadGame.prototype.preload = function () {
            this.load.spritesheet('pikachu', 'assets/images/pikachu.png', 48, 48);
            this.load.image('bgrLoading', 'assets/images/backgrounds/loading.jpg');
            this.load.image('titNameUnit', 'assets/images/titles/nameUnit.png');
            this.load.image('bgrPause', 'assets/images/backgrounds/pause.png');
            this.load.image('bgrPlayingBoy', 'assets/images/backgrounds/playingBoy.jpg');
            this.load.image('bgrPlayingGirl', 'assets/images/backgrounds/playingGirl.jpg');
            this.load.image('tit1', 'assets/images/titles/1.png');
            this.load.image('tit2', 'assets/images/titles/2.png');
            this.load.image('tit3', 'assets/images/titles/3.png');
            this.load.image('titNow', 'assets/images/titles/now.png');
            this.load.image('titCongrats', 'assets/images/titles/congrats.png');
            this.load.spritesheet('btnStart1', 'assets/images/buttons/start1.png', 200, 97);
            this.load.spritesheet('btnStart2', 'assets/images/buttons/start2.png', 200, 97);
            this.load.spritesheet('btnStart3', 'assets/images/buttons/start3.png', 200, 97);
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
        };
        return LoadGame;
    }(MrBook.Loads));
    MrBook.LoadGame = LoadGame;
})(MrBook || (MrBook = {}));
//# sourceMappingURL=loadGame.js.map