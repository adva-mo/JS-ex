let firstReq = new XMLHttpRequest();
firstReq.addEventListener("load", function () {
  console.log("it worked");
  const data = JSON.parse(this.responseText);
  for (let val of data.films) {
    console.log(val);
  }
  console.log(data);
});
firstReq.addEventListener("error", () => {
  console.log("ERROR!!!");
});
firstReq.open("GET", "https://swapi.dev/api/planets/3/");
firstReq.send();
console.log("it worked FOR SURE");

// responseText: '{"name":"Luke Skywalker","height":"172","mass":"77","hair_color":"blond","skin_color":"fair","eye_color":"blue","birth_year":"19BBY","gender":"male","homeworld":"https://swapi.dev/api/planets/1/","films":["https://swapi.dev/api/films/1/","https://swapi.dev/api/films/2/","https://swapi.dev/api/films/3/","https://swapi.dev/api/films/6/"],"species":[],"vehicles":["https://swapi.dev/api/vehicles/14/","https://swapi.dev/api/vehicles/30/"],"starships":["https://swapi.dev/api/starships/12/","https://swapi.dev/api/starships/22/"],"created":"2014-12-09T13:50:51.644000Z","edited":"2014-12-20T21:17:56.891000Z","url":"https://swapi.dev/api/people/1/"}';

//! _.send must be last
//! if we want tp use this. we need to use regular function and not an arrow function, because we want the value of this refers to the request object
//! JSON.pasre() gets a string

//? fetch
fetch("https://swapi.dev/api/planets/3/").then((response) => {
  console.log(response);
});

//!fetch is returning a promise
