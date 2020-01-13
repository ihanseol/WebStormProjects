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


function Magazine(title, author, year, month) {
    book1.call(this, title, author, year);
    this.month = month;
}

//Ingerit Prototype
Magazine.prototype = Object.create(Book.prototype)

// Instantiate Magazine Object

const mag1 = new Magazine('Mag One','John Doe', '2018','Jan');

