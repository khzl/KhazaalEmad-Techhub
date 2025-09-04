// Problem 
/* 
Create an Object system for a Library 
1- Each Book has title , author , isAvailable 
2- Add a method borrow() -> changes isAvailable = false 
3- Add a method returnBook() -> changes isAvailable = true 
*/

class clsBook{
    constructor(title,author){
        this.title = title;
        this.author = author;
        this.IsAvailable = true;
    }

    borrow(){
        if (this.IsAvailable)
        {
            this.IsAvailable = false;
            return `${this.title} borrowed successfully.`;
        }
        else 
        {
            return `${this.title} is not available.`;
        }
    }

    returnBook(){
        this.IsAvailable = true;
        return `${this.title} has been returned.`;
    }
}

let book1 = new clsBook("JavaScript Mastery" , "Khazaal");
console.log(book1.borrow());
console.log(book1.borrow());
console.log(book1.returnBook());