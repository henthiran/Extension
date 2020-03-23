export class Book {
    constructor(title, author, description, Pages, currentPage, read) {
        this.title = title;
        this.author = author;
        this.description = description;
        this.Pages = Pages;
        this.currentPage = currentPage;
        this.read = read;

    }

    readBook(page) {
        if (page < 1 || page > this.Pages) {
            return 0;

        } else if (page >= 1 && page < this.Pages) {
            this.currentPage = this.page;
            return 1;
            
        } else {
            this.currentPage === this.page;
            this.read = true;
            return 1;
        }
    }

}

let firstBook = new Book();
let secondBook = new Book();
let thirdBook = new Book();
export const books = [firstBook, secondBook, thirdBook];
