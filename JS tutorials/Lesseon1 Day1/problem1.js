function push(array, element)
{
    // without using the built-in push method
    array[array.length] = element;
    return array;
}
//console.log(push(['banana', 'orange'], 'apple')); // ['banana', 'orange', 'apple']
function includes(array, element)
{
    // without using the built-in includes method
    for (let i = 0; i < array.length; i++) {
        if (array[i] === element) {
            return true;
        }
    }
    return false;
}
//onsole.log(push(['banana', 'orange'], 'apple')); // ['banana', 'orange', 'apple']

function removeDuplicates(array)
{
    // without using the built-in filter method
    let uniqueArray = [];
    for (let i = 0; i < array.length; i++) {
        if (!includes(uniqueArray, array[i])) {
            push(uniqueArray, array[i]);
        }
    }
    return uniqueArray;
}

console.log(removeDuplicates(['apple', 'banana', 'apple', 'orange'])); // ['apple', 'banana', 'orange']
console.log(removeDuplicates([1, 2, 3, 1, 2, 4])); // [1, 2, 3, 4]
console.log(removeDuplicates(['a', 'b', 'c', 'a', 'b'])); // ['a', 'b', 'c']
//function removeDuplicates(array)
//{
  //  let uniqueArray = [];
    //for (let i = 0; i < array.length; i++) {
      //  if (!includes(uniqueArray, array[i])) {
        //    uniqueArray.push(array[i],);
        //}
    //}
    //return uniqueArray;
//}

//console.log(removeDuplicates(['apple', 'banana', 'apple', 'orange'])); // ['apple', 'banana', 'orange']