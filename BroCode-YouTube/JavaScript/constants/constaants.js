// const = a variable that can`t be changed 

const PI = 3.14159;
let Radius;
let Circumference;

Radius = window.prompt('Enter The Radius Of a Circle');
Radius = Number(Radius);

Circumference = 2 * PI * Radius;

console.log(Circumference);