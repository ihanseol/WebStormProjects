function Book(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
}

Book.prototype.getSummary = function() {
        return `${this.title} was written by ${this.author} in ${this.year}`;
}

Book.prototype.getAge = function() {
    const years = new Date().getFullYear() - this.year;
    return `${this.title} is ${years} years old`;
}


//revise // change year

Book.prototype.revise = function(newYear) {
    this.year = newYear;
    this.revised = true;

}

const book1 = new Book('Book1','kim min', 2013);
const book2 = new Book('Book2','Jone Kim',2018);


console.log(book1.title);
console.log(book1);
console.log(book1.getAge());

book1.revise('2018');
console.log(book1);






