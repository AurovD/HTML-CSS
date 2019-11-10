class OrangeTree {
  constructor() {
    this.year = 2019;
    this.age = 0;
    this.height = 0;
    this.mature = this.isMature();
    this.alive = this.isDead();
    this.hasOrange = this.hasOranges();
    this.count = this.getCount();
  }


  passGrowingSeason(){
    this.year += 1;
    this.age += 1;
    if (this.height <= 25) {
        let randomHeight = Math.random() * 3.5;
        randomHeight = +randomHeight.toFixed(1);
        this.height += randomHeight;
    }
  }

  getCount() {
    if(this.mature === true) {
      this.count = Math.floor(Math.random() * (300 - 100) + 100);
    } else {
      this.count = 0;
    }
  }


  //  Returns true if the tree is old enough to bear fruit (6), false otherwise
  isMature(){
    if (this.age > 6 && this.age < 100) {
      this.mature = true;
    } else {
      this.mature = false;
    }
  }

  isDead() {
    this.alive = true;
    if (this.age > 100 && this.alive == false) {
      let rand = Math.floor(Math.random() * 101);
      if(rand % 2 == 0) {
        this.alive = true;
      } else {
        this.alive = false
      }
    }
  }


  //  Returns +true+ if there are any oranges on the tree, +false+ otherwise
  hasOranges(){
    // let orange = new Orange();
    if (this.count !== 0) {
      this.hasOrange = true;
    } else {
      this.hasOrange = false;
    }
  }


  //  Returns an Orange if there are any
  //  Raises a NoOrangesError otherwise
  pickAnOrange() {
    if(!this.hasOranges()){
      throw Error("This tree has no oranges");
    }
  }



    //  orange-picking logic goes here

}



module.exports = OrangeTree;
