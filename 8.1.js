const book = {
    name : 'Ander\'s game',
    author : 'orson scott cadr',
    publisher : 'opus',
    year : 1994,
    rating : 8.5
}

function description(book){
    console.log(`The book ${book.name} was written by ${book.author} in
    // the year ${book.year}`);
}

description(book);

// 1. Create an object that represents a book. It should have
// 4-5 properties that make sense for a book to have.
// 2. Then write a function that has one argument, a book, that
// will return the following description from your book object:
// ‘The book <book name> was written by <author name> in
// the year <publishing year>’