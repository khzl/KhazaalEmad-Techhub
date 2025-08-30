// objects = a collection of related properties and/or methods
// can represent real world objects (People , products , Places)
// object = {key: value ,
//            function()};

const person1 = {
    FirstName: "Khazaal",
    LastName: "Emad",
    Age: 24,
    isEmployed: true,
    sayHello: function() {
        console.log("Hi, I am Khazaal...!");
    },
    Eat: function(){
        console.log("I am Eating a Pizza");
    },
}

console.log(person1.FirstName);
console.log(person1.LastName);
console.log(person1.Age);
console.log(person1.isEmployed);
person1.sayHello();
person1.Eat();

const person2 = {
    FirstName: "Yazen",
    LastName: "Emad",
    Age: 10,
    isEmployed: false,
    sayHello: function() {
        console.log("Hi, I am Yazen...!");
    },
    Eat: function(){
        console.log("I am Eating a Shwarma");
    },
}


console.log(person2.FirstName);
console.log(person2.LastName);
console.log(person2.Age);
console.log(person2.isEmployed);
person2.sayHello();
person2.Eat();



// Resources : Bro Code Channel Subject (Objects in JS);
//---------------------------------------------------------------------
// Resources : Bro Code Channel Subject (What Is This in JS);

/*
this = reference to the object where this is used 
(the object depends on the immediate context)
person.name = this.name  
*/

const person3 = {
    name : "Ali",
    FavFood: "Orange",
    sayHello: function() {
        console.log(`Hi I am ${this.favfood}`)
    },
    eat: function(){
        console.log(`${this.name} is Eating ${this.FavFood}`)
    },
}

const person4 = {
    name : "Omer",
    FavFood: "banana",
    sayHello: function() {
        console.log(`Hi I am ${this.favfood}`)
    },
    eat: function(){
        console.log(`${this.name} is Eating ${this.FavFood}`)
    },
}

person4.eat();
person3.eat();



//--------------------------------------------------------------------

// arrow functions = a concise way to write function expressions 
// good for simple functions that you use only once 
//       (parameters) => some code 

const hello = (name,age) => {console.log(`Hello ${name}`)
                             console.log(`You Are ${age} Years Old`)};

hello("Khazaal",24);

setTimeout( () => console.log("Hello"),3000);

const numbers = [1,2,3,4,5,6];

const squares = numbers.map((element) => Math.pow(element,2));
console.log(squares);

const cubes = numbers.map((element) => Math.pow(element,3));
console.log(cubes);

const EvenNumber = numbers.filter((element) => element % 2 === 0);
console.log(EvenNumber);

const oddnumber = numbers.filter((element) => element % 2 !== 0);
console.log(oddnumber);

const total = numbers.reduce((accumulator,element) => accumulator + element);
console.log(total);

//-----------------------------------------------------------------------

/*
what is an Object in Js
Definition : An Object is An Unordered Collection Of Key-Value Pairs 

keys(Properties) can be strings or symbols ;
value can be any js type (primitive,function,another object,etc..);
*/

// Creating Objects 

// 1- Object literal 
const person5 = {
    name: "Khazaal",
    age: 24,
    IsAdmin: false
};

// 2- Constructor Function 
function Person(name,age){
    this.name = name;
    this.age = age;
}

const bob = new Person("Khazaal",24);

// object.create 
const proto = {
    greet()
    {
        return "!Hello";
    }
};
const obj1 = Object.create(proto);
obj1.name = "Khazaal";
console.log(obj1.name);


//  Accessing Properties 
// 1- Dot Notation : obj.propertyName
// 2- Bracket Notation : obj["propertyname"] (Allows Dynamic Keys)

// Adding , Modifying & Deleting 
// adding 
obj1.IsProgrammer = true ;
// Update 
obj1.IsProgrammer = false;
// Delete 
delete obj1.IsProgrammer;

// Methods 
// Function - Valued Property
const calculate = {
    x:10,
    y:20,

    sum()
    {
        return this.x + this.y;
    }
}

sum();

// Dynamic Nature 
// you can Add , change or Delete properties at runtime-even on built - ins 
Array.prototype.describe = function()
{
    return `this is array has ${this.length} items...`;
};


/* 
Prototypes & Inheritance 
1- Every Object Has An Internal Prototype Reference (__proto__) to another Object 
2- property LookUp Walks this chain until it finds the property or reaches null 
*/
//------------------------------------------------------
//Problem 1
const user = {
    name : "Khazaal",
    scores: [10,20,30],
    getTotal()
    {
        return this.scores.reduce((a,b) => a + b);
    }
};

user.scores.push(40);
console.log(user.getTotal());

//--------------------------------------------------
// problem 2
const ObjectA = {
    value: 5
};

const objectB = ObjectA; // As A Reference
objectB.value = 10;
console.log(ObjectA.value,objectB.value);

//----------------------------------------------------
// problem 3 
const proto1 = {
    greet()
    {
        return "Hi";
    }
};

const obj2 = Object.create(proto1);
console.log(obj2.greet, obj2.greet());
console.log(obj2.hasOwnProperty("greet"));

//-----------------------------------------------
// problem 4
const person6 = {
    first: "Khazaal",
    last: "Emad",
    get fullName()
    {
        return `${this.first} ${this.last}`;
    },
    set fullName(name)
    {
        [this.first,this.last] = name.split(" ");
    }
};

person6.fullName = "Khazaal Emad";
console.log(person6.first,person6.last,person6.fullName);

//-------------------------------------------------------------
// problem 5 

const obj4 = {};
obj4[Symbol.for("id")] = 123;
console.log(Object.keys(obj4).length,
Object.getOwnPropertySymbols(obj4).length);

// --------------------------------------------------------------
// problem 6

const data1 = {
    items : [
        {x:1},
        {x:2},
        {x:3}
    ],
};

data1.items.forEach(obj7 => {
    obj7.x *= 2;
});

console.log(data1.items.map(obj7 => obj7.x).join(","));








