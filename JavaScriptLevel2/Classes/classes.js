// What Are Classes in JS
/* 
// class is a blueprint for creating objects 
1- Objects are instances of a class 
2- Classes can contain properties(fields) and methods(functions)
*/

// 1- ES6 Class Declaration 
class Person{
    constructor(name,age)
    {
        this.name = name;
        this.age = age;
    }

    greet(){
        return `Hello, I'm ${this.name} , ${this.age} years old.`;
    }
}

let person1 = new Person("Khazaal",24);
console.log(person1.greet());
//=============================================================
// 2- Class Expression 
let Car = class{
    constructor(brand,model){
        this.brand = brand;
        this.model = model;
    }

    Info(){
        return `${this.brand} ${this.model}`;
    }
};

let car1 = new Car("KIA","K5");
console.log(car1.Info());
//==================================================
//