function percentageOfWorld1(country,population) {
    res = `${country} has ${population}, so it\`s about ${(population/7900*100).toFixed(2)}% of the world
    population.`;
    return res;
}

let country1 = percentageOfWorld1('china',1441);
let country2 = percentageOfWorld1('mexico',2000);
let country3 = percentageOfWorld1('israel',100);

console.log(country1);
console.log(country2);
console.log(country3);

const percentageOfWorld2 = (country,population) => `${country} has ${population}, so it\`s about ${(population/7900*100).toFixed(2)}% of the world
population.`;

console.log(percentageOfWorld2('china',1441));
console.log(percentageOfWorld2('mexico',2000));
console.log(percentageOfWorld2('israel',100));