module MrBook {

    export var LIMIT_LAUNCH = 100;
    export var WITHOUT_DIRECTION = 0;
    export var LEFT_DIRECTION = 1;
    export var RIGHT_DIRECTION = 2;
    export var SHOOT_VELOCITY = 800;
    export var CREDITS_VELOCITY = -20;

    export var avatar: Avatar;
    export var productsStore: Array<Product> = new Array<Product>();
    export var myProducts: Array<string> = new Array<string>();
    export var totalPoints: number;
}