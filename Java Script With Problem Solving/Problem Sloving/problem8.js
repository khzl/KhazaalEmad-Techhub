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