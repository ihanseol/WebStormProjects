
const book1 = {

    title : 'Book One',
    author : 'John Doe',
    year : '2013',
    getSummary : function() {
        return `${this.title} was written by ${this.author} in ${this.year}`;
    }

};

const book2 = {

    title : 'Book Two',
    author : 'John Kim',
    year : '2014',
    getSummary : function() {
        return `${this.title} was written by ${this.author} in ${this.year}`;
    }

};

console.log(book2.title);
alert(book2.title);
alert(book2.getSummary());









