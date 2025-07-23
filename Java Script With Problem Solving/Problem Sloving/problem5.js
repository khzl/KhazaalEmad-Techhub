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