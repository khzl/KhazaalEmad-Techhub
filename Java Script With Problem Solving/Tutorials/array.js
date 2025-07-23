const prompt = require('prompt-sync')();

// JavaScript Arrays
// what is an Array ? 
/* An Array in JS is a Special Variable That Can hold More Than One Value at a Time.
it`s an ordered list of elements and each element has an index (starting from 0) */
/*
   Windows: Ctrl + K + C to create single line comment 
*/
/*
The keyboard shortcut to comment multiple lines in Windows is shift + alt + A .
*/
let fruits = ["Banana","Apple","Orange"];

// how To Create an Array 
// 1- Using Square Brackets (Recmmended):
let Color = ["Red","Blue","Green","Orange"];
// 2- Using The Array Constructor
let numbers = new Array(1,2,3,4);

// Accessing Elements 
let animals = ["cat","Dog","elephant"];
console.log(animals[0]);  // cat
console.log(animals[1]);  // Dog
console.log(animals[2]);  // elephant

// Modifying Elements 
animals[0] = "Lion";
console.log(animals[0]);

// Array Length 
console.log(animals.length);

/* Common Array Methods
Method      ||  Description
----------------------------------------------------------------------------------
push()      || Adds Element To The End Of Array 
----------------------------------------------------------------------------------
pop()       || Removes Last Element 
----------------------------------------------------------------------------------
shift()     || Removes First Element 
----------------------------------------------------------------------------------
unshift()   || Adds Element To The Beginning 
----------------------------------------------------------------------------------
indexof()   || Returns index of an Element 
----------------------------------------------------------------------------------
includes()  || Checks If Value Exists In The Array
----------------------------------------------------------------------------------
slice()     || Returns a Portion Of The Array
----------------------------------------------------------------------------------
splice()    || Adds/Removes Item At Specific Index 
----------------------------------------------------------------------------------
forEach()   || Executes a Function For Each Array Element
----------------------------------------------------------------------------------
map()       || Returns a New Array by Transforming Elements 
----------------------------------------------------------------------------------
filter()    || Returns Elements That Match condition
----------------------------------------------------------------------------------
reduce()    || Reduces Array To Single Value
----------------------------------------------------------------------------------
sort()      || sorts Array Elements 
----------------------------------------------------------------------------------
*/

/* Your Task : Solve Using Logic Do Not Look For Solution Code . Try To Reason The Steps */
// Problem 1 : Access Elements 
function getElement(arr, index) {
    return arr[index];
}
let cities = ["Tokyo","London","Paris","New York"];
console.log(getElement(cities, 1));

// Problem 2 : Add And Remove Array element
function addAndRemove(arr, addValue) {
    let copy = arr.slice();
    copy.push(addValue);
    copy.pop();
    copy.shift();
    return copy;
}
let nums = [2,4,5];
console.log(addAndRemove(nums, 8));

// Problem 3 : Loop And Multiply 
function multiplyArray(arr, factor) {
    return arr.map(x => x * factor);
}
let Array = [2,4,6];
console.log(multiplyArray(Array, 2));

// Problem 4 : Filter Even Numbers 
function filterEven(arr) {
    return arr.filter(x => x % 2 === 0);
}
let List = [2,5,3,7,9,6];
console.log(filterEven(List));

// Problem 5 Count Elements Greater Than 10 
function countGreaterThan(arr, threshold) {
    return arr.filter(x => x > threshold).length;
}
let numbers1 = [4,11,14,3,25,9];
console.log(countGreaterThan(numbers1, 10));

// Problem 6 Join Strings 
function joinWords(arr, separator = " ") {
    return arr.join(separator);
}
let words = ["I","love","Programming"];
console.log("Sentence: " + joinWords(words));

// Problem 7 Reverse Array 
function reverseArray(arr) {
    return arr.slice().reverse();
}
let Letters = ["a","b","c","d"];
console.log(reverseArray(Letters));

// Problem 8 Find Max Number 
function findMax(arr) {
    return Math.max(...arr);
}
let Data = [5,19,2,33,4,5];
console.log(findMax(Data));

// Problem 9 Remove Specific Element 
function removeElement(arr, value) {
    let copy = arr.slice();
    let index = copy.indexOf(value);
    if (index !== -1) copy.splice(index, 1);
    return copy;
}
let Values = [2,3,4,5];
console.log(removeElement(Values, 5));

// Problem 10 Merge Two Arrays
function mergeArrays(a, b) {
    return a.concat(b);
}
let a = [1,2];
let b = [3,4];
console.log(mergeArrays(a, b));

//----------------------------------------------------------
/*
   reduce - map - sort 
   1- map () - modifying Element 
   returns a new array after modifying each element in the original 
*/
let numbers2 = [1,2,3];
function doubleArray(arr) {
    return arr.map(n => n * 2);
}
let doubleNumbers = doubleArray(numbers2);
console.log(doubleNumbers);

/*  
    2- reduce() - To Convert All Elements To a Single Value 
    used To Group Or Summarize The Contents Of An Array 
*/

let nums1 = [1,2,3,4];
function sumArray(arr) {
    return arr.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
}
let sum = sumArray(nums1);
console.log(sum);


/* 
   sort() - sorted Element
   arrange The Array But Change The Origin 
   you need a special comparison function when dealing with numbers 
*/

let nums3 = [10,5,2,1];

function sortNumbers(arr) {
    return arr.slice().sort((a, b) => a - b);
}

let sortedNums3 = sortNumbers(nums3);
console.log(sortedNums3);

//------------------------------------------------------------------

// Problem 1 : map() - Multiply by 3
let num4 = [2,4,6];

function MutliplyBy3(arr)
{
    return arr.map(n => n * 3);
}

let Multiplyby3 = MutliplyBy3(num4);
console.log(Multiplyby3);


// problem 2 map() - Converting To String 
let ids = [101,102,103];

function ConvertIDToString(ids)
{
    return ids.map(id => "ID-" + id);
}

let strings = ConvertIDToString(ids);
console.log(strings);

// problem 3 reduce() - Find The Sum 
let num5 = [8,10,15];

function SumArray(arr)
{
    return arr.reduce((accumulator,currentValue) => accumulator + currentValue,0);
}

let sums = SumArray(num5);
console.log(sums);


// problem 4 reduce() - Multiply All Numbers 
let num6 = [1,2,3,4];

function MultiplyAllElement(arr)
{
    return arr.reduce((accumulator,value) => accumulator * value,1);
}

let sum2 = MultiplyAllElement(num6);
console.log(sum2);


// problem 5 reduce() - Count Even Numbers 
let nums6 = [1,2,3,4,5,6,7,8];

function CountEvenNumbers(nums)
{
    return nums.reduce((accumulator,value) => {
        if (value % 2 === 0)
            accumulator++;
        return accumulator;
    },0);
}

let Count = CountEvenNumbers(nums6);
console.log(Count);


// Problem 6 sort() Sort Numbers Ascending 
let points = [10,20,50,100,30];

function SortNumbersAscending(points)
{
    return points.sort((a,b) => a - b);
}

let SortPoints = SortNumbersAscending(points);
console.log(SortPoints);

// problem 7 sort() - Sort Strings Alphabetically 

let names = ["Khazaal","Emad","Ali","Omer"];

function SortStringsAlphabetically(names)
{
    return names.sort();
}

let SortNames = SortStringsAlphabetically(names);
console.log(SortNames);

// problem 8 sort() - Descending Order

let scores = [88,66,70,100];

function DescendingOrder(score)
{
    return score.sort((a,b) => b - a);
}

let SortDescendingOrder = DescendingOrder(scores);
console.log(SortDescendingOrder);



// Problem 9 Combine map() + reduce()

let prices = [10,20,30];

function CombineMapAndReduce(price)
{
    return price.map(p => p * 1.1).reduce((sum,value) => sum + value, 0);
}

let TotalWithTax = CombineMapAndReduce(prices);
console.log(TotalWithTax);


// Problem 10 Sort Objects by Age 

let Users = [
    {name: "Khazaal" , age: 24},
    {name: "Omer" , age: 22},
    {name: "Zain" , age: 33}
];

function SortObjectsbyAge(user)
{
    return user.sort((a,b) => a.age - b.age);
}

let SortByAge = SortObjectsbyAge(Users);
console.log(SortByAge);


/* 
--------------------------------------------------------------------
Method        ||   Description                                                  
---------------------------------------------------------------------
map()         || Returns a New Array by Transforming Elements 
---------------------------------------------------------------------
filter()      || Returns Elements That Match condition
---------------------------------------------------------------------
reduce()      || Reduces Array To Single Value
---------------------------------------------------------------------
sort()        || sorts Array Elements 
---------------------------------------------------------------------
*/

// problem 1 Extract Student Name Pass only 
let students = [
    {name: "Ali", grade: 85},
    {name: "Zain", grade: 45},
    {name: "Huda" , grade: 92},
    {name: "Sami", grade: 91}
];

function ExtractStudentPass(student)
{
    return student.filter(s => s.grade >= 50).map(s => s.name);
}

let PassedStudents = ExtractStudentPass(students);
console.log(PassedStudents);


// problem 2 Total prices

let cart = [
    {product: "mouse" , price: 25},
    {product: "Keyboard" , price: 45},
    {product: "monitor" , price: 150}
]

function Totalprices(cart)
{
    return cart.reduce((sum,item) => sum + item.price,0);
}

let Total = Totalprices(cart);
console.log(Total);


// problem 3 Sort Employee Names by Salary 
let employees = [
    {name: "salim" , salary: 400},
    {name: "Khazaal" , salary: 3990},
    {name: "yaser" , salary: 345}
];

function SortEmployeeNamesbySalary(employees)
{
    return employees.sort((a,b) => b.salary - a.salary); // Descending Order 
}

let SortNamesbySalary = SortEmployeeNamesbySalary(employees);
console.log(SortNamesbySalary);


// problem 4 How Many people Are Over 25 ?
let people = [
    {name: "Khazaal" , age: 24},
    {name: "Omer" , age: 25},
    {name: "Yaser" , age: 45},
    {name: "Yasen" , age: 46}
];

function CountAgeGreaterOfTwentyFive(people)
{
    return people.filter(p => p.age > 25).length;
}

let count = CountAgeGreaterOfTwentyFive(people);
console.log(count);


// problem 5 Calculate The Average Of The Students`s Grades 
let grades = [80,70,30,10,20];

function calculateAverageGrades(grades)
{
    return grades.reduce((sum,grade) => sum + grade,0) / grades.length;
}

let Average = calculateAverageGrades(grades);
console.log(Average);


//------------------------------------------------------------------
/* 
Small Project - Mini online Store
you have a list of products in the cart and you want to
1- Calculate The Total Number of Baskets 
2- Filter the Products That Are higher Than 100$
3- Sort Products by Price
4- Extracting Product names only With a 10% Tax
*/
//-------------------------------------------------------------------

let cart1 = [
    {name: "Laptop" , price: 1200},
    {name: "HeadPhones", price: 150},
    {name: "Pen" , price: 5},
    {name: "NoteBook" , price: 10},
    {name: "Monitor" , price: 300}
];

function CalculateTotalCart(cart)
{
    return cart.reduce((sum,item) => sum + item.price,0);
}

function FilterProductGreaterThan100(product)
{
    return product.filter(cart => cart.price > 100);
}

function SortproductDescending(product)
{
    return product.sort((a,b) => b.price - a.price); // Descending Order 
}

function MapWithTax(products)
{
    return products.map(item => ({
        name: item.name,
        priceWithTax: +(item.price * 1.1).toFixed(2)
    }));
}

// Run as app
function runStoreApp(cart) {
    console.log("Total Cart Value:", CalculateTotalCart(cart));
    console.log("Products > $100:", FilterProductGreaterThan100(cart));
    console.log("Sorted by Price Descending:", SortproductDescending(cart.slice()));
    console.log("Product Names with 10% Tax:", MapWithTax(cart));
}

// Call the main function to run the app
runStoreApp(cart1);
































//-------------------------------------------------------------------------------------------------------------------
// To use prompt for user input in Node.js, you need an external package like 'readline-sync' or 'prompt-sync'.
// In browsers, prompt() works directly. Here is an example for both environments:

// For browsers:
let userInput = prompt("Enter the Number:");
console.log("You entered:", userInput);

// For Node.js (install prompt-sync first: npm install prompt-sync)
let userInputNode = prompt("Enter the Number: ");
console.log("You entered:", userInputNode);

