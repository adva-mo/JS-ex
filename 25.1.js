// 1. What is wrong with the code? explain in your own words
// ANSWER --> when we call whoIsStronger

// Fix the code so that invoking the whoIsStronger function
// will print "I am stronger".

// whoIsStronger(hero.getStrength);

const hero = {
  health: 5,
  power: 68,
  getStrength: function () {
    if (this.health <= 5) {
      return this.power - 10;
    } else return this.power;
  },
};

function whoIsStronger(getStrength) {
  const myStrength = 82;
  if (getStrength() < myStrength) {
    return "I am stronger";
  } else return "You are stronger";
}
console.log(whoIsStronger(hero.getStrength.bind(hero)));
