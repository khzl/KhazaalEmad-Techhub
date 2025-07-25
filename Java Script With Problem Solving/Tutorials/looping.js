/* 
 Looping In JS
 Loops Allows You To Repeat a Block Of Code Multiple Times until a Certain Condition Is Met 
 */

 /* For Loop (Most Common) */
 for (let row = 0; row < 5 ; row++)
 {
    console.log(row);
 }

 for (let row = 0; row < 5 ; row+=1)
 {
    console.log(row);
 }

 /* 
 Initialization : let row = 0 -> start point
 Condition : i < 5 -> loop until this becomes false 
 Update : i++ Increment on Each iteration 
 */

 // while loop 
 let row = 0;
 while (row < 5)
 {
    console.log(row);
    row++;
 }

 // Repeats as long as the condition is true

 // do ..... while loop 
 let row1 = 0;
 do 
 {
    console.log(row1);
    row1++;
 } while(row1 < 5);

// Always runs at least once (even if condition is false on the first check)

// for .. of loop
// used to iterate over iterables like arrays or strings

const arr1 = ["a","b","c"];
for (let items of arr1)
{
    console.log(items);
}


// for ... in loop 
// used to iterate over keys/properties in objects

const object1 = {
    a:1,
    b:2
};

for (let key in object1)
{
    console.log(key,object1[key]);
}

// loop controls : break and continue 
// break = exits the loop early 
// continue = skips to the next iteration

for (let row = 0; row < 5 ; row++)
{
    if (row === 1)
        continue;
    if (row === 3)
        break;
    console.log(row);
}

//-------------------------------------------------------------------------------
// Problems 
//-------------------------------------------------------------------------------
// problem 1

let nums = [1,2,3,4,5];
function SumNums(num)
{
    let sum = 0;
    for (let row = 0 ; row <= num.length; row++)
    {
        sum += row;
    }
    return sum;
}
console.log(SumNums(nums));

// ---------------------------------------------------------------
// problem 2

const array1 = [2,4,6,8];
function DoubleThenumber(arr)
{
    for (let row = 0 ; row < arr.length; row++)
    {
        arr[row] *= 2;
    }
    return arr;
}
console.log(DoubleThenumber(array1));

//-----------------------------------------------------------------

// problem 3 
function LoopOverWhileLoop()
{
    let row = 0;
    while (row < 7)
    {
        console.log("Loop",row);
        row++;
    }
}

LoopOverWhileLoop();

// -------------------------------------------------------------
// problem 4 
function loopOverLoopForOf()
{
    const str = "JS";
    for (let char of str)
    {
        console.log(char,"!");
    }
}
loopOverLoopForOf();

//--------------------------------------------------------
// problem 5
const Object2 = {
        x:1,
        y:2,
        z:3
    };

    let keys = [];

function LengthKeys(obj)
{
    for (let key in obj)
    {
        keys.push(key);
    }
    return keys;
}
console.log(LengthKeys(Object2));

// ------------------------------------------------------

// problem 6 

function IterateOverContinue()
{
    for (let row = 0; row < 5 ; row++)
    {
        if (row === 2)
            continue;
        console.log(row);
    }
}
IterateOverContinue();

// -------------------------------------------------------------

// problem 7
function Count()
{
    let count = 0;
    do {
        count++;
    } while (count < 3);
    console.log(count);
}
Count();
//-----------------------------------------------------------------