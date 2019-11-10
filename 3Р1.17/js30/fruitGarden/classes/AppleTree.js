class AppleTree extends FruitTree {
    constructor() {
        super();
        this.maxHeight = 26;
        this.speedHeight = 2;
        this.matureAge = 5;
        this.minFruits = 400;
        this.maxFruits = 600;
        this.maxAge = 45;
    }
    passGrowingSeason() {
        super.passGrowingSeason(this.maxAge, this.maxHeight, this.speedHeight, this.matureAge, this.minFruits, this.maxFruits);
    }
    isMature() {
        return super.isMature(this.matureAge);
    }
    isDead() {
       return super.isDead(this.maxAge);
        
    }
    // hasFruits() {
    //     if (this.fruits > 0) {
    //         return true;
    //     }
    // }
    pickFruit() {
        if (this.hasFruits()) {
            this.fruits--;
            return new Apple();
        }
    }
}
