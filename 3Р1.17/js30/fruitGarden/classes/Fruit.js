class Fruit {
    constructor() {
        this.arr = [2];
        this.diameter = this.randomDiameter();
    }
    randomDiameter() {
        return this.arr[Math.floor(Math.random() * this.arr.length)];
    }
}

class Orange extends Fruit{
    constructor() {
        super();
        this.arr= [2, 2.1, 2.2, 2.3, 2.4, 2.5, 2.6, 2.7, 2.8, 2.9, 3.0, 3.1, 3.2];
        this.diameter = this.randomDiameter();
    }
}

class Apple extends Fruit{
    constructor(){
        super();
        this.arr = [1, 1.1, 1.2, 1.3, 1.4, 1.5, 1.6, 1.7, 1.8, 1.9, 2, 2.1, 2.2, 2.3, 2.4, 2.5];
        this.diameter = this.randomDiameter();
    }
}

class Pear extends Fruit{
    constructor(){
        super();
        this.arr = [2.4, 2.5, 2.6, 2.7, 2.8, 2.9, 3, 3.1, 3.2, 3.3, 3.4, 3.5, 3.6, 3.7, 3.8, 3.9, 4, 4.1];
        this.diameter = this.randomDiameter();
    }
}

