/* 
// Question 2: Object Property Counter
const users = [
{ name: 'Alice', age: 30, role: 'admin', active: true },
{ name: 'Bob', age: 25, role: 'user' },
{ name: 'Charlie', role: 'admin', active: false, department: 'IT' },
{ age: 35, role: 'user', active: true, department: 'HR' }
];
// Task: Count how many times each property appears across all objects
// Expected: { name: 3, age: 3, role: 4, active: 3, department: 2 }
console.log("Question 2 Solution:");
// Your code here
*/

const users = 
[
{ name: 'Alice', age: 30, role: 'admin', active: true },
{ name: 'Bob', age: 25, role: 'user' },
{ name: 'Charlie', role: 'admin', active: false, department: 'IT' },
{ age: 35, role: 'user', active: true, department: 'HR' }
];

// Task: Count how many times each property appears across all objects
//const propertyCount = []; // Empty Array
const propertyCount = {}; // Empty Object 
for (const user of users)
{
    for (const key in user)
    {
        if (propertyCount[key])
            propertyCount[key]++;
        else
            propertyCount[key] = 1;
    }
}

console.log("Questions Solutions");
console.log(propertyCount);