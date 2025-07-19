// Explain Map Class in JavaScript
// The Map class in JavaScript is a collection of key-value pairs where keys can be of any data type, and values can also be of any data type. Maps maintain the insertion order of elements, which means that when you iterate over a Map, the elements are returned in the order they were added.
// Maps are useful when you need to associate values with unique keys, and they provide methods for adding, retrieving, and deleting key-value pairs.
class classMapExample{
    constructor() {
        this.map = new Map();
    }

    // Method to add a key-value pair to the map
    add(key, value) {
        this.map.set(key, value);
    }

    // Method to get a value by key
    get(key) {
        return this.map.get(key);
    }

    // Method to delete a key-value pair
    delete(key) {
        return this.map.delete(key);
    }

    // Method to check if a key exists in the map
    has(key) {
        return this.map.has(key);
    }

    // Method to get the size of the map
    size() {
        return this.map.size;
    }

    // Method to clear all entries in the map
    clear() {
        this.map.clear();
    }
}

// Example usage of the Map class
const myMap = new classMapExample();
myMap.add('name', 'John Doe');
console.log(myMap.get('name')); // Output: John Doe
myMap.add('age', 30);
console.log(myMap.get('age')); // Output: 30
myMap.delete('name');
console.log(myMap.has('name')); // Output: false
console.log(myMap.size()); // Output: 1
myMap.clear();
console.log(myMap.size()); // Output: 0
// Demonstrating the Map class with a real-world example
const inventory = new classMapExample();
inventory.add('apple', { quantity: 10, price: 0.5 });
inventory.add('banana', { quantity: 5, price: 0.3 });
console.log(inventory.get('apple')); // Output: { quantity: 10, price: 0.5 }
console.log(inventory.get('banana')); // Output: { quantity: 5, price: 0.3 }
inventory.add('orange', { quantity: 8, price: 0.4 });
console.log(inventory.size()); // Output: 3
inventory.delete('banana');
console.log(inventory.has('banana')); // Output: false
console.log(inventory.size()); // Output: 2
// Iterating over the Map entries
// For Of Used to iterate over Map entries
for (const [key, value] of inventory.map.entries()) {
    console.log(`${key}: ${JSON.stringify(value)}`);
}
// Output:
// apple: {"quantity":10,"price":0.5}
// orange: {"quantity":8,"price":0.4}
// Using Map methods
console.log(inventory.has('apple')); // Output: true
console.log(inventory.get('orange')); // Output: { quantity: 8, price: 0.4 }
console.log(inventory.size()); // Output: 2
inventory.clear();
console.log(inventory.size()); // Output: 0
// The Map class provides a flexible way to manage collections of key-value pairs, making it easier to work with data that requires unique keys and associated values.
// It supports various operations like adding, retrieving, deleting, and checking for keys, as well as iterating over the entries in the map. This makes it a powerful tool for managing data in JavaScript applications.

// summary
// The Map class in JavaScript is a versatile data structure that allows you to store key-value pairs with keys of any data type. It maintains the order of insertion and provides methods for adding, retrieving, deleting, and checking keys. Maps are particularly useful for scenarios where you need to associate values with unique keys, making them a powerful tool for managing collections of data in JavaScript applications.
// The example provided demonstrates how to create a Map class, add entries, retrieve values, delete entries, check for keys, and iterate over the entries. It also shows a real-world example of managing an inventory using the Map class, highlighting its practical applications in organizing and accessing data efficiently.
// The Map class is a powerful and flexible way to manage collections of key-value pairs in JavaScript

