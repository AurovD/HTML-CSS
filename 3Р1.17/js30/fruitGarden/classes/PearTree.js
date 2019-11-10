class PearTree extends FruitTree{
    constructor() {
        super();
        this.maxHeight = 20;
        this.speedHeight = 2.5;
        this.matureAge = 5;
        this.minFruits = 175;
        this.maxFruits = 225;
        this.maxAge = 40;
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
            return new Pear();
        }
    }
}
