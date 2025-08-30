/* 
// Question 1: Array to Object Conversion
const keys = ['id', 'name', 'email', 'role'];
const values = [101, 'John Doe', 'john@example.com', 'developer'];
// Task 1: Convert arrays to object
// Expected: { id: 101, name: 'John Doe', email: 'john@example.com', role: 'developer' }
// Task 2: Add new property 'permissions' with value ['read', 'write']
// Expected: { id: 101, name: 'John Doe', email: 'john@example.com', role: 'developer', permissions: //['read', 'write'] }
// Task 3: Convert object back to array of key-value pairs
// Expected: [['id', 101], ['name', 'John Doe'], ['email', 'john@example.com'], ['role', 'developer'],
['permissions', ['read', 'write']]]
console.log("Question 1 Solutions:");
// Your code here
*/

const keys = ['id', 'name', 'email', 'role'];
const values = [101, 'Khazaal', 'Khazaal@gmail.com', 'Developer'];

// Task 1 Convert Arrays To Object 
const user = Object.fromEntries(keys.map((key,index) =>
[key,values[index]]));
console.log(user);

// Task 2 Add new property 'Permissions' With Value ['read','write']
user.permissions = ['read','write'];
console.log(user);

// Task 3 Convert Object Back To Array Of Key-value Pairs
const userentries = Object.entries(user);
console.log("Question 1 Solutions");
console.log(user);
console.log(userentries);