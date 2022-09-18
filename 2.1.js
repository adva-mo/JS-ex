function countryInfo (country, population, capitalCity) {
    let text = country + ' has ' +population+ ' million people and its capital city is ' +capitalCity;
    return text;
}

let country1 = countryInfo('mexico', 24, 'mexicoDF');
let country2 = countryInfo('israel', 10, 'Jerusalem');
let country3 = countryInfo('Jappan', 15, 'Tokyo');

console.log(country1);
console.log(country2);
console.log(country3);
