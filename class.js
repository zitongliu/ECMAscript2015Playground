class Car {
  constructor({ title }) {
    this.title = title;
  }
  drive() {
    return 'vroom';
  }
}

const car = new Car({title: 'Toyota'});
console.log(car);
console.log(car.drive());


class Toyota extends Car {
  constructor(options) {
    super(options); // Car.constructor()

    this.color = options.color;
  }

  honk() {
    return 'beep';
  }
}

const toyota = new Toyota({color: 'red', title: 'Daily Driver'});
console.log(toyota.honk());
console.log(toyota.color);
console.log(toyota.drive());


//

class Monster {
  constructor( {name} ) {
    this.name = name;
    this.health = 100;
  }
}

class Snake extends Monster {
  constructor(options) {
    super(options);
  }
  bite(opponentSnake) {
    return opponentSnake.health -= 10;
  }
}

const snake1 = new Snake({name: 'snake1'});
const snake2 = new Snake({name: 'snake2'});
snake1.bite(snake2);
console.log(snake2);
