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
//# sourceMappingURL=timer.js.map