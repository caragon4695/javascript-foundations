class Vampire {
  constructor(name, pet) {
    this.name = name;
    this.thirsty = true;
    if (pet === undefined) {
      this.pet = 'bat';
    } else {
      this.pet = pet;
    }
  }

  drink() {
    this.thirsty = false;
  }
};




module.exports = Vampire;
