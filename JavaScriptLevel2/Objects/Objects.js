/* 
What Is An Object (Quick Mental Model)
1- a Bag Of Key -> Value Pairs are strings/symbols 
values can be anything (numbers,strings,arrays,other objects , functions...)
2- Objects are reference types (assigning/copying a variable copies the reference not the data)
*/

/* 
object is a collection of key-value pairs (properties + methods)
1- property => key:value
2- method => function inside object 
*/

// 6 main ways to define objects 
//===================================================
// 1- Object Literal 
// Define using {}
let Person = {
    name: "Khazaal",
    Age: 24,
    IsStudent: true,

    greet: function(){
        return "Hello , My Name Is " + this.name;
    }
};

console.log(Person.name);
console.log(Person.greet());
// the Most Common And Easiest Way
//=====================================================
// 2- Using new Object()
let car = new Object();
car.brand = "KIA";
car.model = "K5";
car.year = 2025;

car.start = function(){
    return this.brand + " is starting.......";
}

console.log(car.start());
//Less common But Works 
//===============================================
// 3- using Constructor Function
function Student(name,age)
{
    this.name = name;
    this.age = age;
    this.study = function(){
        return this.name + " Is Studying..";
    };
}

let student1 = new Student("Khazaal" , 24);
let student2 = new Student("Sara" , 24);
let student3 = new Student("Noor" , 24);

console.log(student1.study());
console.log(student2.study());
console.log(student3.study());
// good for creating multiple objects with the same structure 
//===============================================================
// 4- Using ES6 Classes 
class Employee{
    constructor(name,salary)
    {
        this.name = name;
        this.salary = salary;
    }

    Work(){
        return this.name + " Is Working...";
    }
}

let employee1 = new Employee("Khazaal",5000);
let employee2 = new Employee("Sara", 3000);
console.log(employee1.Work());
console.log(employee2.Work());
// Modern Way (syntactic sugar over constructor functions)
//=================================================================
// 5- Using Object.create()
let animal = {
    type: "Unknown",
    sound: function(){
        return "this " + this.type + " make a sound";
    }
};

let dog = Object.create(animal);
dog.type = "Dog";
console.log(dog.sound());
// Used For Inheritance
//===================================================
// 6- Using Factory Function 
function createBook(title,author)
{
    return {
        title,
        author,
        read(){
            return `Reading "${this.title}" by ${this.author}`;
        }
    };
}

let book1 = createBook("JS GUIDE", "Khazaal");
console.log(book1.read());
// function that returns an object 
//====================================================================
