function average(a,b,c) {
    let average = (a+b+c)/3;
    return average
}

let john_average = average(91,120,103);
let mike_average = average(89,120,103);
let mary_average = average(89,120,103);
console.log(john_average,mike_average,mary_average)

if (john_average>mike_average && john_average> mary_average){
    console.log("john's team won with avrage of "+john_average);
} else if (mike_average>john_average&&mike_average> mary_average){
    console.log("mike's team won with avrage of "+mike_average);
} else if ((mary_average>mike_average && mary_average> john_average)){
    console.log("mary's team won with avrage of "+mary_average);
} else {
    console.log("its a tie! all teams has avrage of "+john_average);
}

