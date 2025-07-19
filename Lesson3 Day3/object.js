// Object is a collection of key-value pairs, where keys are strings and values can be any data type.
// Objects can be created using object literal notation or the Object constructor.
// Object literal notation
const person = {
    name: "John",
    age: 30,
    isStudent: false,
    greet: function() {
        console.log(`Hello, my name is ${this.name}`);
    }
};
// Accessing object properties
console.log(person.name); // Output: John
console.log(person.age); // Output: 30
console.log(person.isStudent); // Output: false
person.greet(); // Output: Hello, my name is John

// Adding a new property
person.email = "john@example.com";
console.log(person.email); // Output: john@example.com
// Modifying an existing property
person.age = 31;
console.log(person.age); // Output: 31
// Deleting a property
delete person.isStudent;
console.log(person.isStudent); // Output: undefined
// Iterating over object properties
for (let key in person) {
    console.log(`${key}: ${person[key]}`);
} // For In Used to iterate over object properties
// Output:
// name: John
// age: 31
// email: john@example.com
// Using Object.keys() to get an array of keys
const keys = Object.keys(person);
console.log(keys); // Output: ['name', 'age', 'email']
// Using Object.values() to get an array of values
const values = Object.values(person);
console.log(values); // Output: ['John', 31, 'john@example.com']

const Cars = new Map([
    ["Toyota", {color:"red"}],
    ["Honda", {color:"blue"}],
    ["Ford", {color:"green"}]
]);

// swap values toyota and honda
const temp = Cars.get("Toyota").color;
Cars.get("Toyota").color = Cars.get("Honda").color;
Cars.get("Honda").color = temp;
console.log(Cars);

// Accessing values in a Map
console.log(Cars.get("Toyota")); // Output: { color: 'blue' }
console.log(Cars.get("Honda")); // Output: { color: 'red' }
console.log(Cars.get("Ford")); // Output: { color: 'green' }

// Adding a new key-value pair to the Map
Cars.set("Chevrolet", {color: "yellow"});
console.log(Cars.get("Chevrolet")); // Output: { color: 'yellow' }
// Modifying an existing value in the Map
Cars.get("Ford").color = "black";
console.log(Cars.get("Ford")); // Output: { color: 'black' }
// Deleting a key-value pair from the Map
Cars.delete("Honda");
console.log(Cars.get("Honda")); // Output: undefined
// Iterating over Map entries
for (let [key, value] of Cars.entries()) {
    console.log(`Key: ${key}, Value: ${JSON.stringify(value)}`);
}
// Output:
// Key: Toyota, Value: {"color":"blue"}
// Key: Ford, Value: {"color":"black"}
// Key: Chevrolet, Value: {"color":"yellow"}
// Using Map methods
console.log(Cars.has("Toyota")); // Output: true (checks if key exists)
console.log(Cars.size); // Output: 3 (number of key-value pairs in the Map)
// Converting Map to an array of key-value pairs
const mapArray = Array.from(Cars.entries());
console.log(mapArray); // Output: [['Toyota', { color: 'blue' }], ['Ford', { color: 'black' }], ['Chevrolet', { color: 'yellow' }]]
// Converting Map keys to an array
const mapKeys = Array.from(Cars.keys());
console.log(mapKeys); // Output: ['Toyota', 'Ford', 'Chevrolet']

