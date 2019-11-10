class AppleTree {
    constructor() {
        this.age = 0;
        this.height = 0;
        this.fruits = 0;
    }
    passGrowingSeason() {
        if (this.age < 45) {
            this.age++;
            if (this.height < 26) {
                this.height += 2;
            }
            if (this.age >= 5) {
                this.fruits = Math.floor(Math.random() * 200 + 400);
            }
        }
    }
    isMature() {
        return !!(this.age >= 4)
    }
    isDead() {
        if (this.age >= 45) {
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
            return new Apple();
        }
    }
}
