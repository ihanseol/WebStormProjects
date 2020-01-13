// const book1 = {

//     title : 'Book One',
//     author : 'John Doe',
//     year : '2013',
//     getSummary : function() {
//         return `${this.title} was written by ${this.author} in ${this.year}`;
//     }

// };

// const book2 = {

//     title : 'Book Two',
//     author : 'John Kim',
//     year : '2014',
//     getSummary : function() {
//         return `${this.title} was written by ${this.author} in ${this.year}`;
//     }

// };

function Book(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;

    this.getSummary = function(){
        return `${this.title} was written by ${this.author} in ${this.year}`;
    }

}

const book1 = new Book('Book1','kim min', 2013);
const book2 = new Book('Book2','Jone Kim',2018);


console.log(book1.title);
console.log(book1);


