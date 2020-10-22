class Magician {
  constructor(object, obj) {
    object = object || {};
    this.name = object.name;
    this.topHat = object.topHat;
    this.confident = false;
    this.castCount = 0;
    if (this.topHat === undefined) {
      this.topHat = true;
    } else {
      this.topHat = false;
    }
  }

  incantation(magic) {
    return `${magic.toUpperCase()}!`;
  }

  cast() {
    this.castCount++;
    if (this.castCount >= 3) {
      console.log(this.castCount);
      this.confident = true;
    }
    if (this.topHat === true) {
      return 'PULL RABBIT FROM TOP HAT';
    } else {
      return 'PULL DOVE FROM SLEEVE';
    }
  }

  performShowStopper() {
    if (this.confident === false) {
      return 'Oh no! Practice more before attempting this trick!';
    } else {
      return 'WOW! The magician totally just sawed that person in half!';
    }
  }
};

module.exports = Magician;
