function solve(arr) {
    const evens = arr.filter(x => x % 2 === 0);
    const odds = arr.filter(x => x % 2 !== 0);
    return { evens, odds };
}

const List1 = [1, 2, 3, 4, 5];
const List2 = [6, 7, 8, 9, 10];

const result1 = solve(List1);
const result2 = solve(List2);

console.log('Evens:', result1.evens, result2.evens);
console.log('Odds:', result1.odds, result2.odds);