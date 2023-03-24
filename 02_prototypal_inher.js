
Function.prototype.inherits = function(superclass) {
    function Surrogate() {}
    Surrogate.prototype = superclass.prototype;
    this.prototype = new Surrogate();
    this.prototype.constructor = this;
}

function MovingObject (speed) {
    this.speed = speed;
}

//MovingObject instance methods

function Ship (speed, type) {
    MovingObject.call(this, speed);
    this.type = type;
}
Ship.inherits(MovingObject);
//Ship instance methods
let ship1 = new Ship()

function Asteroid () {
    this.size = size;
}
Asteroid.inherits(MovingObject);
//Asteroid instance methods

