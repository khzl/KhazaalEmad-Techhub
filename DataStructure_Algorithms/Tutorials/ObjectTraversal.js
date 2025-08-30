/* 
Object Traversal 
what is object traversal ?
object traversal means
*/

// Traversal 
// 1- for ... in loop  (recommended for objects)
const object = {
    a:1,
    b:2,
    c:3
};
for(let key in object)
{
    console.log(key,object[key]);
}

// Object.keys(object)
// returns an array of all keys 

Object.keys(object).forEach(key =>
{
    console.log(key,object[key]);
}
);

// Object.values(object)
// return an array of values 

Object.values(object).forEach(value => {
    console.log(value);
});


// Object.entries(object)
// returns an array of [key,value] pairs
Object.entries(object).forEach(([key,value]) =>
console.log(key,value)
);

// Object Manipulation 
// Add // Update property
object.newkey = 100;
object.a = 99;

// delete property 
delete object.b;

// rename property (manually)
object.newKey = object.oldKey;
delete object.oldKey;

/* 
=================================================================
Task                  || How
=================================================================
Count Properties      || Object.keys(obj).length
=================================================================
Sum Values            || loop & add obj[key]
=================================================================
Filter by Condition   || Check If (obj[key] > x)
=================================================================
Modify all values     || Loop And Update obj[key]
================================================================
*/

const user = 
{
    name: "Khazaal",
    age: 24,
    city: "Mosul"
};

function LengthObject(user)
{
    let keys = [];
    for (let key in user)
    {
        keys.push(key);
    }
    return keys;
}

console.log(LengthObject(user));

// ---------------------------------------------
// problem 2
const data = {
    a:1,
    b:2,
    c:3
};
function Sum(data)
{
    let sum = 0;
    Object.values(data).forEach(value => sum += value);
    return sum;
}
console.log(Sum(data));
//---------------------------------------------------------
// problem 3 
const object5 = {
    x:2,
    y:4,
    z:6
};
function DoubleTheNumber(obj)
{
    for (let key in obj)
    {
        obj[key] *= 2;
    }
    return obj;
}
console.log(DoubleTheNumber(object5));

// ---------------------------------------------------
// problem 4
const person = {
    name: "Khazaal",
    role: "Developer"
};

delete person.role;
person.country = "Iraq";
console.log(Object.keys(person).length);

// ------------------------------------------------
// problem 5
const info = {
    id: 101,
    active: true,
    score: 50
};

let result = [];
for (let [key,value] of Object.entries(info))
{
    result.push(typeof value);
}
console.log(result);

// ------------------------------------------------------

// problem 6
const product = {
    name: "phone",
    price : 300,
    discount: 50
};

let final = product.price - product.discount;
product.finalPrice = final;
console.log(product.finalPrice);



