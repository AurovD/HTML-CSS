class OrangeTree extends FruitTree {
    constructor() {
        super();
        this.maxHeight = 25;
        this.speedHeight = 2.5;
        this.matureAge = 6;
        this.minFruits = 100;
        this.maxFruits = 300;
        this.maxAge = 100;
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
    pickFruit() {
        if (this.hasFruits()) {
            this.fruits--;
            return new Orange();
        }
    }
}
