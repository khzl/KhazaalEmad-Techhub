// Explain Strings in JavaScript
// Strings in JavaScript are sequences of characters used to represent text. They can be created using single quotes, double quotes, or backticks (template literals).
const singleQuoteString = 'Hello, world!';
const doubleQuoteString = "Hello, world!";
const templateLiteralString = `Hello, world!`;
// Strings are immutable, meaning once created, they cannot be changed. However, you can create new strings based on existing ones by performing operations like concatenation, slicing, and more.
// Common String Operations
// 1. Concatenation: Combining two or more strings using the + operator or template literals.
const greeting = singleQuoteString + ' ' + doubleQuoteString; // Using + operator
console.log(greeting); // Output: Hello, world! Hello, world!
const templateGreeting = `${singleQuoteString} ${templateLiteralString}`; // Using template literals
console.log(templateGreeting); // Output: Hello, world! Hello, world!
// 2. Length: Getting the length of a string using the length property.
const stringLength = singleQuoteString.length; // Length of the string
console.log(stringLength); // Output: 13
// 3. Accessing Characters: Accessing individual characters in a string using indexing.
const firstCharacter = singleQuoteString[0]; // Accessing the first character
console.log(firstCharacter); // Output: H
const lastCharacter = singleQuoteString[singleQuoteString.length - 1]; // Accessing the last character
console.log(lastCharacter); // Output: !
// 4. Slicing: Extracting a portion of a string using the slice method.
const slicedString = singleQuoteString.slice(0, 5); // Extracting characters from index 0 to 4
console.log(slicedString); // Output: Hello
