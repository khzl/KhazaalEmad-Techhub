/* 
// Question 1: Array to Object Conversion
const keys = ['id', 'name', 'email', 'role'];
const values = [101, 'John Doe', 'john@example.com', 'developer'];
// Task 1: Convert arrays to object
// Expected: { id: 101, name: 'John Doe', email: 'john@example.com', role: 'developer' }
// Task 2: Add new property 'permissions' with value ['read', 'write']
// Expected: { id: 101, name: 'John Doe', email: 'john@example.com', role: 'developer', permissions: ['read', 'write'] }
// Task 3: Convert object back to array of key-value pairs
// Expected: [['id', 101], ['name', 'John Doe'], ['email', 'john@example.com'], ['role', 'developer'], ['permissions', ['read', 'write']]]
console.log("Question 1 Solutions:");
// Your code here
*/

const keys = ['id','name','email','role'];
const values = [101,'Khazaal','Khazaal24@gmail.com','Developer'];

// Task 1 Convert Arrays To Objects 
const User = Object.fromEntries(keys.map((keys,index) =>
[keys,values[index]]));

//console.log(User);

//Task 2 Add New Property 'permissions' With Value ['read','write']
User.permissions = ['read','write'];
//console.log(User);

//Task 3 Convert Object Back To Array Of Key-Value Pairs 
const Userentries = Object.entries(User);
//console.log(Userentries);

console.log("Questions 1 Solutions");
console.log(User);
console.log(Userentries);


/* 
================================================================
Action                   || Method Used
================================================================
Convert Arrays To Object || map() + Object.fromEntries()
================================================================
add new property         || Dot notation user.property = value
================================================================
Convert Object To Array  || Object.entries()
================================================================
*/

