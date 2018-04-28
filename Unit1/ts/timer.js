var MrBook;
(function (MrBook) {
    var Timer = /** @class */ (function () {
        function Timer(game) {
            this.timer = game.time.create(false);
        }
        Timer.prototype.startTimer = function (delay, callback) {
            this.timer.add(delay, callback, this);
            this.timer.start();
        };
        return Timer;
    }());
    MrBook.Timer = Timer;
})(MrBook || (MrBook = {}));
//# sourceMappingURL=timer.js.map