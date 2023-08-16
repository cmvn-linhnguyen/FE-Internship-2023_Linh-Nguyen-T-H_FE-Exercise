/* 9.Write a JavaScript program that creates a class `Book` with properties for title, author, and publication year. 
Include a method to display book details.
Create a subclass called 'Ebook' that inherits from the 'Book' class and includes an additional property for book price. 
Override the display method to include the book price. Create an instance of the 'Ebook' class and display its details. */

class Book {
  constructor(title, author, publicationYear) {
    this.title = title;
    this.author = author;
    this.publicationYear = publicationYear;
  }

  display() {
    return this.title + " - " + this.author + " - " + this.publicationYear;
  }
}

class Ebook extends Book {
  constructor(title, author, publicationYear, price) {
    super(title, author, publicationYear);
    this.price = price;
  }

  display() {
    return (
      this.title +
      " - " +
      this.author +
      " - " +
      this.publicationYear +
      " - " +
      this.price
    );
  }
}
