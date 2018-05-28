module MrBook {
    export class Topic7_1 extends Topic {

        private grpDominoes: Phaser.Group;

        constructor() {
            super();
        }

        create() {
            this.timer = new Timer(this.game);
            this.background = this.add.tileSprite(0, 0, 800, 600, "bgrTable");
            this.actionNext = this.next;
            this.finishTopic = this.finishTopic15_1;
            totalPoints = 0;

            this.grpDominoes = this.add.group(undefined, "grpDominoes", undefined, true, Phaser.Physics.ARCADE);

            this.generateRandomDominoes();

            this.initTimeText();
            this.initPointsText();

            this.startReadyCountdown();
            
        }

        update() {
            if (this.subState == PLAYING) {
            }
        }

        generateRandomDominoes() {
            var x = 20;
            for (var i = 0; i < 8; i++) {
                var one = this.rnd.integerInRange(0, 6);
                var two = this.rnd.integerInRange(0, 6);

                var domino = this.game.add.sprite(x, 450, 'sprDominoes');
                domino.width = 60;
                domino.height = 120;
                if (one < two) {
                    domino.frameName = one + "" + two + '.png';
                } else {
                    domino.frameName = two + "" + one + '.png';
                }
                domino.inputEnabled = true;
                domino.input.pixelPerfectClick = true;
                domino.events.onInputDown.add(this.clicked);

                x += 100;
            }
        }

        clicked = () => {

        }
        
        
        next = () => {
            this.game.state.start("PrincipalMenu", true);
        }

        finishTopic15_1 = () => {

        }
    }
}