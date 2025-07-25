/* 
1. Two-dimensional array (3x4) - Sort each row
Input:
javascript[
[64, 23, 45, 12],
[78, 34, 56,89],
[25, 67, 11, 43]
]
Output:
javascript[
[12, 23, 45,64],
[34, 56, 78, 89]
[11, 25, 43,67]
]
 */

function SortArrayAscending(arr)
{
    for (let i = 0; i < arr.length; i++)
    {
        arr[i].sort(function(a, b) {
            return a - b;
        });
    }
    return arr;
}

let array = [[64,23,45,12],
             [78,34,56,89],
             [25,67,11,43]
            ];

let sortArray = SortArrayAscending(array);
console.log(sortArray);


let Inputarray = [[64,23,45,12],
                  [78,34,56,89],
                  [25,67,11,43]
                  ];

function SortnumberArray(Inputarray)
{
    let OutputArray = Inputarray.map(row => 
      {
        return row.sort((a,b) => a - b);
      }
    );
     return OutputArray;
}

console.log(SortnumberArray(Inputarray));