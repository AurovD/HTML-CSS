class PearTree {
    constructor() {
        this.age = 0;
        this.height = 0;
        this.fruits = 0;
    }
    passGrowingSeason() {
        if (this.age <40 ) {
            this.age++;
            if (this.height < 20) {
                this.height += 2.5;
            }
            if (this.age >= 5) {
                this.fruits = Math.floor(Math.random() * 50 + 175);
            }
        }
    }
    isMature() {
        return !!(this.age >= 4)
    }
    isDead() {
        if (this.age >= 40) {
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
            return new Pear();
        }
    }
}
