// 1. Create three instances of the Pokemon and save them in
// a variable.
// 2. Using prototype properties, add the following methods:
// ● A method called callPokemon will print the following:
// “I choose you, <pokemon name>
// ● • A method called attack that takes one parameter,
// an attack number, that will print the specific attack
// method from the pokemonAttackList array as the
// following: “<pokemon name> used <attack method>”
// Call each pokemon with the 2 methods you created.

function Pokemon(pokemonName, pokemonType, pokemonAttackList) {
  this.name = pokemonName;
  this.type = pokemonType;
  this.attackList = pokemonAttackList;
}

let pokemon1 = new Pokemon("pokemon1", "type1", ["1", "2", "3"]);
let pokemon2 = new Pokemon("pokemon2", "type2", ["1", "2", "3"]);
let pokemon3 = new Pokemon("pokemon3", "type3", ["1", "2", "3"]);

Pokemon.prototype.callPokemon = function () {
  console.log(`I choose you, ${this.name}`);
};

Pokemon.prototype.attack = function (num) {
  console.log(`${this.name} used ${this.attackList[num]}`);
};

pokemon1.callPokemon();
pokemon2.callPokemon();
pokemon3.callPokemon();

pokemon1.attack(0);
pokemon2.attack(1);
pokemon3.attack(2);
