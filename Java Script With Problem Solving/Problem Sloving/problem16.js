// problem 1 Merge Arrays Of Objects 
const arr1 = [
    {id:1 , name:"Khazaal"},
    {id:2 , name:"Ali"}
];
const arr2 = [
    {id:3 , name:"Omer"},
    {id:4 , name:"Yaser"}
];

const Merge = arr1.concat(arr2);
console.log(Merge);
//-----------------------------------------------------------------------------
// Problem 2 Count items By Category
const items = [
    {name: 'apple', type: 'fruit'},
    {name: 'Carrot', type: 'vegetable'},
    {name: 'banana', type: 'fruit'},
    {name: 'Lettuce', type: 'vegetable'},
    {name: 'Orange', type: 'fruit'} 
];

function CountitembyCategory(items)
{
    const itemsCount = {};
    for (const item of items)
    {
        for (const value in item)
        {
            if (itemsCount[value])
                itemsCount[value]++;
            else 
                itemsCount[value] = 1;
        }
    }
    return itemsCount;
}

console.log(CountitembyCategory(items));

//----------------------------------------------------------------------
