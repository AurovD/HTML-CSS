class FruitTree {
    constructor() {

        this.age = 0;
        this.height = 0;
        this.fruits = 0;

    }

    isDead(maxAge) {
        if (this.age >= maxAge) {
            return true;
        }
    }

    passGrowingSeason(maxAge, maxHeight, speedHeight, matureAge, minFruits, maxFruits) {
        if (this.age < maxAge) {
            this.age++;
            if (this.height < maxHeight) {
                this.height += speedHeight;
            }
            if (this.age >= matureAge) {
                this.fruits = Math.floor(Math.random() * (maxFruits - minFruits) + minFruits);
            }
        }
    }

    hasFruits() {
        if (this.fruits > 0) {
            return true;
        }
    }

    isMature(matureAge) {
        return !!(this.age >= matureAge-1);
    }
}