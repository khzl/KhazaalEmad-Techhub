
// function TotalSum(arr)
//function TotalSum(arr) {
  //  const Total = 0;
    //for (const i = 0; i < arr.length; i++) {
      //  Total += arr[i];
    //}
    //return Total;
//}
//const numbers = [1, 2, 3, 4, 5];
//const totalSum = TotalSum(numbers);
//console.log(totalSum); // Output: 15


function sum(...numbers) {
    let total = 0; // Initializing total to 0
    for (let num of numbers) {
        total += num; // Adding each number to total
    }
    return total; // Returning the total sum
}
let totalSum = sum(2, 4, 6, 8, 10); // Calling the function with multiple numbers
console.log(totalSum);
