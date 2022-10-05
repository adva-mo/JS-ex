const data = [
  {
    name: "John",
    birthday: "1-1-1995",
    favoriteFoods: {
      meats: ["hamburgers", "sausages"],
      fish: ["salmon", "pike"],
    },
  },
  {
    name: "Mark",
    birthday: "10-5-1980",
    favoriteFoods: {
      meats: ["hamburgers", "steak", "lamb"],
      fish: ["tuna", "salmon", "barracuda"],
    },
  },
  {
    name: "Mary",
    birthday: "1-10-1977",
    favoriteFoods: {
      meats: ["ham", "chicken"],
      fish: ["pike"],
    },
  },
  {
    name: "Thomas",
    birthday: "1-10-1990",
    favoriteFoods: {
      meats: ["bird", "rooster"],
      fish: ["salmon"],
    },
  },
  {
    name: "Mary",
    birthday: "1-10-1977",
    favoriteFoods: {
      meats: ["hamburgers", "lamb"],
      fish: ["anchovies", "tuna"],
    },
  },
];

// 1. Create a function that returns all the names from the array.

function getNames(arr) {
  let res = arr.map(function (person) {
    return person.name;
  });
  return res;
}

// 2. Create a function that returns all the objects that are born
// before 1990.

function getDates(arr) {
  let res = [];
  arr.forEach((person) => {
    let year = parseInt(person.birthday.split("-")[2]);
    if (year < 1990) {
      console.log(person);
    }
  });
}

getDates(data);
// 3. Create a function that returns an object of all the different
// foods from all the objects as the key and the number of
// times that food is present in all the objects as the value.

function getFood(arr) {
  let res = {};
  arr.forEach((p) => {
    p.favoriteFoods.meats.forEach((food) => {
      if (res[food]) {
        res[food] = res[food] + 1;
      } else {
        res[food] = 1;
      }
    });
    p.favoriteFoods.fish.forEach((food) => {
      if (res[food]) {
        res[food] = res[food] + 1;
      } else {
        res[food] = 1;
      }
    });
  });

  return res;
}
// console.log(getFood(data));
// getFood;

// let x = data[0];
// x = x.favoriteFoods; //object
// x = x.meats;
