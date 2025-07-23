// array to object conversion 
//const keys = {'id','name','email','role'};
//const values = {101,'John Doe','john@example.com','Developer'};

// Task 1 : Convert Arrays To Object 
const person =
{
    id : 101,
    name : 'Jone Doe',
    email : 'john@example',
    role : 'Developer'    
}

// Task 2 Add New Property 'permissions' with value ['read','write']
person.permissions = ['read','write'];
console.log(person.permissions);

for (const keys in person)
{
    console.log(`${keys}: ${person[keys]}`);
}

//Task 3 Convert Object back to array of key-value pairs
const key = Object.keys(person);
console.log(key);
const value = Object.values(person);
console.log(value);
console.log(`${[key]},${[value]}`);
//console.log(person.id + ' ' + person.name + ' ' + person.email + ' ' + person.role);

