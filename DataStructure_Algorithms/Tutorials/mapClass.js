/* what is map() in js
map is a built-in object that allows you to store 
key-value pairs , where keys can be of any type 
(not just strings like in plain objects)
*/

/* Key features of Map()
===============================================================
Feature          || Description 
================================================================
Ordered          || Map keeps Keys in insertion Order
================================================================
Any Type key     || Keys Can be objects , Functions , Primitive
=================================================================
Size             || Use .size To Get The number of Items
=================================================================
Efficient lookUp || Optimized For Fast Retrieval 
=================================================================
Chaining Support || Most Methods Return The Map Itself
=================================================================
 */

// Syntax And Methods 
const map = new map();

// Set a Value 
map.set('a',100);
map.set(1,"number key");
map.set({x:1}, "object key");

// Getting a Value 
map.get('a');

// Check Existence 
map.has(1);

// Deleting an Entry 
map.delete(1);

// Getting Size 
map.size();

// Iterating Over Map 
for (let [key,value] of map)
{
    console.log(key,value);
}

/*
 Map Vs Object 
==============================================================
Feature    ||    Object             ||   Map                  
===============================================================
Key Types  || Only String/Symbol    || Any Type
===============================================================
Ordered    || Unordered             || Ordered
===============================================================
Iterable   || Not Directly          || Directly
===============================================================
Performance|| Slower For Large Sets || Faster
===============================================================
 */

// Problem 1: Set and override key

function problem1() {
    const map1 = new Map();
    map1.set("a", 1);
    map1.set("b", 2);
    map1.set("a", 10); // 'a' gets overwritten

    console.log("Problem 1:", map1.get("a"), map1.size); // Output: 10, 2
}

problem1();

// Problem 2: Object as key
function problem2() {
    const objectkey = { id: 1 };
    const map2 = new Map();
    map2.set(objectkey, "data");

    objectkey.id = 2; // Changes the object content, not the reference

    console.log("Problem 2:", map2.get({ id: 2 })); // undefined (different object reference)
    console.log(map2.get(objectkey));               // "data"
}

problem2();

// Problem 3: Initialize from array, delete, add, iterate
function problem3() {
    const map3 = new Map([
        [1, "One"],
        [2, "Two"]
    ]);

    map3.delete(2);
    map3.set(3, "Three");

    console.log("Problem 3:");
    for (let [key, value] of map3) {
        console.log(`${key}: ${value}`);
    }
}

problem3();

// Problem 4: Chaining and total sum with forEach
function problem4() {
    const map4 = new Map();
    map4.set("x", 100).set("y", 200).set("z", 300);

    let total = 0;
    map4.forEach(value => total += value);

    console.log("Problem 4: Total =", total); // 600
}

problem4();

// Problem 5: Object keys and mutation
function problem5() {
    const map5 = new Map();
    const key1 = {};
    const key2 = {};

    map5.set(key1, "value1");
    map5.set(key2, "value2");

    console.log("Problem 5: Size =", map5.size); // 2

    key1.key = "changed"; // Changes object content, reference remains same
    console.log(map5.get(key1)); // "value1"
}

problem5();

