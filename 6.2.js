const people = ["Greg", "Mary", "Devon", "James"];

// -----Q1
// people.forEach(element=>console.log(element));

// -----Q2

people.shift('Greg'); 

//------Q3
people.pop("James"); 

//------Q4
people.unshift("Matt"); 

//------Q5
people.push("Adva");

//------Q6
// for (i of people){
//     console.log(i);
//     if (i=='Mary'){
//         break;
//     }
// }

//------Q7
console.log(people.slice(2));

//------Q8
console.log(people.indexOf('Mary'));

//------Q9
console.log(people.indexOf('Foo'));

//------Q10
const people1 = ["Greg", "Mary", "Devon", "James"];
let removed =people1.splice(2,1, "Elizabeth","Artie");
console.log(people1);


//------Q11
let withBob = people+'bob';
console.log(withBob);



// 10. Redefine the people variable with the value you started
// with. Using the splice command, remove "Devon" from
// the array and add "Elizabeth"
// and "Artie". Your array should look like this when you are
// done ["Greg", "Mary", "Elizabeth", "Artie",
// "James"].
// 11. Create a new variable called withBob and set it equal
// to the people array concatenated with the string of "Bob".

