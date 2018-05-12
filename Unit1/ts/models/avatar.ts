module MrBook {
    export class Avatar {

        private grpAvatar: Phaser.Group;
        private game: Phaser.Game;

        public id: string;
        public name: string;
        public age: string;
        public gender: string;
        public skinColorId: string;
        public capId: string;
        public shirtId: string;
        public pantsId: string;
        public shoesId: string;

        constructor() {
        }

        paint(game: Phaser.Game, x: number, y: number) {
            this.game = game;
            this.grpAvatar = game.add.group();
            if (avatar.gender == MALE) {
                this.grpAvatar.create(x, y, "imgBoy");
            } else {
                this.grpAvatar.create(x, y, "imgGirl");
            }
            this.grpAvatar.create(x, y, this.getImageKey("skinColorId"));
            this.grpAvatar.create(x, y, this.getImageKey("shoesId"));
            this.grpAvatar.create(x, y, this.getImageKey("pantsId"));
            this.grpAvatar.create(x, y, this.getImageKey("shirtId"));
            this.grpAvatar.create(x, y, this.getImageKey("capId"));
        }

        changeClothes(type: number, indexSprite: number) {
            this.grpAvatar.removeChildAt(type);
            var skin = this.game.add.image(this.game.world.width - 50, this.game.world.height - 250, productsStore[indexSprite].imageKey);
            this.grpAvatar.addAt(skin, type);
        }
        
        getImageKey(key: string): string {
            for (var i = 0; i < productsStore.length; i++) {
                if (productsStore[i].id == avatar[key]) {
                    return productsStore[i].imageKey;
                }
            }
            return "";
        }

    }
}