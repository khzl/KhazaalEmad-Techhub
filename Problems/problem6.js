//write a function called groupbyAgeRange that takes an array of people objects ({name,age}) and returns an object grouping people into the object of array
function groupByAgeRange(people) {
    const ageGroups = {
        '0-17': [], // Group for ages 0-17
        '18-25': [], // Group for ages 18-25
        '26-40': [], // Group for ages 26-40
        '41+': []    // Group for ages 41 and above
    };

    for (let i = 0; i < people.length; i++) {
        const person = people[i];
        if (person.age >= 0 && person.age <= 17) {
            ageGroups['0-17'].push(person.name);
        } else if (person.age >= 18 && person.age <= 25) {
            ageGroups['18-25'].push(person.name);
        } else if (person.age >= 26 && person.age <= 40) {
            ageGroups['26-40'].push(person.name);
        } else if (person.age >= 41) {
            ageGroups['41+'].push(person.name);
        }
    }

    return ageGroups;
}

const people = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 17 },
    { name: "Charlie", age: 36 },
    { name: "David", age: 30 },
    { name: "Eve", age: 40 }
];

const grouped = groupByAgeRange(people);
console.log(grouped);