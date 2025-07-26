/* 
2D Array Row Maximum Challenge
You are given a 2D array (matrix) containing numbers.
Your task is to create a function that finds the maximum
value in each row and returns these maximum values in a new 1D array.
Example:
javascript
const matrix = [
[3, 7, 2, 9, 1],
[15, 4, 8, 12, 6],
[20, 11, 5, 18, 14],
[2, 25, 9, 13, 7]
];
// Expected output: [9, 15, 20, 25]
// 
 */

const matrix = [
[3, 7, 2, 9, 1],
[15, 4, 8, 12, 6],
[20, 11, 5, 18, 14],
[2, 25, 9, 13, 7]
];

function FindMaximumValueForEachRow(array)
{
    let max = array[0][0];
    let result = [];
    for (let row = 0 ; row < array.length; row++)
    {
        for (let column = 0; column < array[row].length; column++)
        {
            if (array[row][column] > max)
            {
                max = array[row][column];
            }
        }
        result.push(max);
    }
    return result;
}

console.log(FindMaximumValueForEachRow(matrix));