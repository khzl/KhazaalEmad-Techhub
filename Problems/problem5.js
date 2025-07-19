// Function to count the frequency of each word in a string
// Without using any built-in methods like split, map, or reduce
function WordFrequency(str) {
    const words = {};
    let word = '';
    
    for (let i = 0; i < str.length; i++) {
        if (str[i] === ' ' || i === str.length - 1) {
            if (i === str.length - 1 && str[i] !== ' ') {
                word += str[i]; // Add last character if not a space
            }
            if (word) {
                if (words[word]) {
                    words[word]++;
                } else {
                    words[word] = 1;
                }
                word = ''; // Reset word for next iteration
            }
        } else {
            word += str[i]; // Build the current word
        }
    }
    
    return words;
}

console.log(WordFrequency("The Quick Brown Fox Jumps Over The Lazy Dog The Dog Barked"));
