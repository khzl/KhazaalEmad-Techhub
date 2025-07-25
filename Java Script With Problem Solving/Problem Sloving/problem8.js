/* 
Replace odd numbers with zeros in a 4x4
Input:
javascript[
[12, 15, 8, 21],
[7, 14, 33, 6],
[19, 22, 5, 18],
[4, 27, 16, 11]
]
Output:
javascript [
[12,0,8,0],
[0, 14, 0,6],
[0, 22, 0, 18],
[4,0,16,0]
]
*/

function ReplaceOddNumberWithZero(arr)
{
   for (let row = 0; row < arr.length; row++)
   {
    for (let column = 0; column < arr[row].length; column++)
    {
        if (arr[row][column] % 2 !== 0)
        {
            arr[row][column] = 0;
        }
    }
   }
   return arr;
}

let array = [[12,15,8,21],
             [7,14,33,6],
             [19,22,5,18],
             [4,27,16,11]];

let ReplaceWithZero = ReplaceOddNumberWithZero(array);
console.log(ReplaceWithZero);

let array1 = [[12,15,8,21],
             [7,14,33,6],
             [19,22,5,18],
             [4,27,16,11]];

let result = array1.map(row => row.map(value => value % 2 !== 0 ? 0 : value));
console.log(result);