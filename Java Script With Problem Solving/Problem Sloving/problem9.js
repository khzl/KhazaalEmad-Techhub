const values = [
    ['jhon',25,'Engineer'],
    ['Ali',30,'Designer'],
    ['Omer',45,'Developer']
]

const keys = [
    ['name','age','job'],
    ['name','age','job'],
    ['name','age','job']
]

function GenerateArrayOfObject(key,value)
{
    for (let i = 0; i < key.length; i++)
    {
        for (let j = 0; j < value.length; j++)
        {
            const Marge = key.concat(value);
            console.log(Marge);
        }
    }
}

const generateArrayOfObjects = GenerateArrayOfObject(keys,values);
console.log(generateArrayOfObjects);