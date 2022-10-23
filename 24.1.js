// You are given a function, Square, that takes four parameters, a,
// b, c, d, denoting the length of the square edges.
// Using prototype properties, add a method to Square named
// isSquare that prints true if a Square object has equal edges
// and false if they are unequal.

function Square(a, b, c, d) {
  this.a = a;
  this.b = b;
  this.c = c;
  this.d = d;
}

var test = new Square(2, 2, 2, 2);
Square.prototype.isSquare = function () {
  const { a, b, c, d } = this;
  return (a == b) == (c == d);
};

console.log(test.isSquare());
