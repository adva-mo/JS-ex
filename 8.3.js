const book= {
    name: 'Time traveller\'s wife',
    author: 'Audrey Niffenegger',
    year: 2005
}
const book2= {
    name: 'The 4-Hour Workweek',
    author: 'Timothy Ferriss',
    year: 2007
}
const bookUtils = {
    getFirstPublished(book1,book2){
        return book1.year > book2.year?book2:book1;
    },
    setNewEdition(book,editionYear){
        book.latestEdition = editionYear;  
    },
    setLanguage(book,language){
        book.language = language; 
    },
    setTranslation(book,language,translator){
        book.translation = {translator:language};
    }
}
bookUtils.setTranslation(book2,'some lamguage','some transkator');
console.log(book2.translation);

