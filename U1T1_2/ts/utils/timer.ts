module MrBook {
    export class Timer {

        private timer: Phaser.Timer;

        constructor(game: Phaser.Game) {
            this.timer = game.time.create(false);
        }

        startTimer(delay: number, callback: Function) {
            this.timer.add(delay, callback, this);
            this.timer.start();
        }

        pause() {
            this.timer.pause();
        }

        resume() {
            this.timer.resume();
        }

    }
}