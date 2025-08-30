/* 
You are given two 2D arrays:
valuesArray: Contains the values for each object
keysArray: Contains the keys for each object
Your task is to create a function that generates an array of objects by pairing each row from the keysArray with the corresponding row from the valuesArray.
Example:
javascriptconst values = [
['John', 25, 'Engineer'],
['Sarah', 30, 'Designer'],
['Mike', 28, 'Developer']
1;
const keys = [
['name', 'age', 'job'],
['name', 'age', 'job'], 
['name', 'age', 'job']
1;
// Expected output:
// [
//{ name: 'John', age: 25, job: 'Engineer' },
//{ name: 'Sarah', age: 30, job: 'Designer' },
//{ name: 'Mike', age: 28, job: 'Developer' }
//]

*/
const values = [
    ['jhon',25,'Engineer'],
    ['Ali',30,'Designer'],
    ['Omer',45,'Developer']
];

const keys = [
    ['name','age','job'],
    ['name','age','job'],
    ['name','age','job']
];


    const result = values.map((row,rowIndex) =>
    {
        const object = {};
        keys[rowIndex].forEach((key,keyIndex) =>
        {
            object[key] = row[keyIndex];
        });
        return object;
    });

console.log(result);
