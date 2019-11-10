class OrangeTree {
    constructor() {
        this.age = 0;
        this.height = 0;
        this.fruits = 0;
    }
    passGrowingSeason() {
        if (this.age < 20) {
            this.age++;
            if (this.height < 25) {
                this.height +=2.5;
            }
            if (this.age >= 6) {
                this.fruits = Math.floor(Math.random() * 200 + 100);
            }
        }
    }
    isMature() {
        return !!(this.age >= 5)
    }
    isDead() {
        if (this.age >= 100) {
            return true;
        }
    }
    hasFruits() {
        if (this.fruits > 0) {
            return true;
        }
    }
    pickFruit() {
        if (this.hasFruits()) {
            this.fruits--;
            return new Orange();
        }
    }
}
