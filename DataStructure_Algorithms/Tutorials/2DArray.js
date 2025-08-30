// 2D Array = Multi - Dimensional Array That Stores a matrix 
// of data in row and Columns.
// Usefual For Games , Spreadsheets , or representing images 

/* 
[[x,o,x]
[o,x,o],
[x,o,x]]
*/

const matrix = [[1,2,3],
                [4,5,6],
                [7,8,9],
                ['*', 0 , '#']];
/* 
matrix[0][0] = 'x'; // row 1 column 1
matrix[0][1] = 'o'; // row 1 column 2
matrix[0][2] = 'x'; // row 1 column 3

matrix[1][0] = 'x'; // row 2 column 1
matrix[1][1] = 'o'; // row 2 column 2
matrix[1][2] = 'x'; // row 2 column 3

matrix[2][0] = 'x'; // row 2 column 1
matrix[2][1] = 'o'; // row 2 column 2
matrix[2][2] = 'x'; // row 2 column 3

 */
for (let row of matrix)
{
    const rowString = row.join(' ');
    console.log(rowString);
}

// resource : Bro code in YouTube
//--------------------------------------------------------------

// what is a two-dimensional matrix (2D Array) ? 
// A 2D Array is an array where each element is itself an array - think of 
// it like a table with rows and columns 

const matrix1 = [[1,2,3], // row 0
                 [4,5,6], // row 1
                 [7,8,9]]; // row 2

// Accessing Elements (using Indices)
// matrix[row][column] gives the value at row row , column column

/* console.log(matrix1[0][0]);
console.log(matrix1[1][1]);
console.log(matrix1[2][2]);
console.log(matrix1[2][0]); */


// Traversing a 2D Matrix
// Using for loops 

// for loop for row 
for (let i = 0; i < matrix1.length; i++)
{
    // for loop for column 
    for (let j = 0; j < matrix1[i].length; j++)
    {
        console.log(matrix1[i][j]);
    }
}


// Updating Elements 
matrix1[1][2] = 10;
console.log(matrix1[1][2]);

/* 
======================================================================
Common Tasks With 2D Arrays 
======================================================================
Task                  || Example
======================================================================
Traverse All Elements || Nested for loops
======================================================================
Sum Rows Or Columns   || Accumulate using Indices
======================================================================
Find Max/Min Element  || Compare While Traversing
======================================================================
Transpose a matrix    || Flip Row/Column Access
======================================================================
Flatten               || Convert To 1D Using .flat()
======================================================================
*/

 /* 
 index tips 
 matrix.length = number of rows 
 matrix[i].length = number of columns in row i
 think of i as the "y-axis" and j as the "x-axis"
  */


 // Practice problems - Matrix = indexing 
 //-----------------------------------------------------------------------
 // Problem 1

 const matrix3 = [[1,2],[3,4]];
 console.log(matrix3[0][0],matrix3[1][1]);

 //------------------------------------------------------------------------
 // problem 2
 const matrix4 = [[1,2,3],[4,5,6]];

 function FindSumOfArray(arr)
 {
    let Sum = 0;
    for (let row = 0; row < matrix4.length;row++)
    {
        for (let column = 0; column < matrix4[row].length; column++)
        {
            Sum += matrix4[row][column];
        }
    }
    return Sum;
 }

 const SumArray = FindSumOfArray(matrix4);
 console.log(SumArray);

//-------------------------------------------------------------------

// problem 3

const matrix5 = [[10,20],[30,40]];

matrix5[0][0] = 99;
matrix5[1][1] = matrix5[0][1] + 1;

console.log(matrix5[1][1]);

//--------------------------------------------------------------------

// problem 4
const grid = [
[0,1,2],
[3,4,5],
[6,7,8]
];

let diagonal = grid[0][0] + grid[1][1] + grid[2][2];
console.log(diagonal);
let SecondaryDiagonal =  grid[0][2] + grid[1][1] + grid[2][0];
console.log(SecondaryDiagonal);
let upperSide = grid[0][1] + grid[0][2] + grid[1][2];
console.log(upperSide);
let LowerSide = grid[1][0] + grid[2][0] + grid[2][1];
console.log(LowerSide);

//-----------------------------------------------------------------------

// Problem 5

const matrix6 = [
[1,2],
[3,4],
[5,6]
];

function FindResult(matrix6)
{
    let result = [];
    for (let row = 0; row < matrix6.length; row++)
    {
        result.push(matrix6[row][1]);
    }
    return result;
}

const ResultEvennumber = FindResult(matrix6);
console.log(ResultEvennumber);

//-----------------------------------------------------------------------

// problem 6 

const matrix7 = [
    [1,2,3],
    [4,5,6]
];

function multiplyRowtwobyTwo(matrix7)
{
    let result = [];
    for (let column = 0; column < matrix7[0].length; column++)
    {
        result.push(matrix7[1][column] * 2);
    }
    return result;
}

const Result = multiplyRowtwobyTwo(matrix7);
console.log(Result);

//--------------------------------------------------------------------------------


