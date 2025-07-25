/* 
what is a string in js ?
a string in js is a sequence of characters used to represent text
it can include letters , numbers , symbols , and spaces 
*/


// How To Create Strings 
let name = "Khazaal";
let Age = '24';
let Message = `hi ${name}`; // template literal 

// String Properties And Methods 
// Length 
"Hello".length; // 5

// Access Characters 
"Hello"[1]; // e
"Hello".charAt(1); // e

/* 
String Methods (Most Common)
=============================================================================================
Method              || Description                       || Example 
=============================================================================================
toUpperCase         || Converts To UpperCase             || "hi".toUpperCase() -> "HI" 
=============================================================================================
toLowerCase         || Converts to LowerCase             || "HI*.Lowercase() -> "hi
=============================================================================================
trim()              || Removes Whitespace                || "  Hello  ".trim() -> "hello"
=============================================================================================
slice(start,end)    || Extract Part Of The String        || "hello".slice(1,4) -> "ell"
=============================================================================================
substring(start,end)|| Similar to slice but no negatives || "hello".substring(1,4) -> "ell"
=============================================================================================
substr(start,length)|| Deprecated but still used         || "hello".substr(1,3) -> "ell"
==============================================================================================
replace(old,new)    || Replaces first match              || "abcabc".replace("a","x") -> "xbcxbc"
==================================================================================================
replaceAll(old,new) || Replaces all Matches              || "abcabc".replaceAll("a","x") -> "xbcxbc"
=====================================================================================================
includes(sub)       || checks for substring              || "hello".includes("el") -> true
======================================================================================================
indexof(sub)        || index of first match              || "hello".indexof("1") -> 2
======================================================================================================
lastIndexOf(sub)    || index of last match               || "hello".lastIndexOf("1") -> 3
=======================================================================================================
split(delimiter)    || Converts To Array                 || "a,b,c".split(",") -> ["a","b","c"]
=======================================================================================================
repeat(n)           || Repeats String                    || "ha".repeat(3) -> "hahaha"
=======================================================================================================
startsWith(sub)     || Check Start                       || "hello".startsWith("he") -> true
=======================================================================================================
endsWith(sub)       || Check End                         || "hello".endsWith("lo") -> true
=======================================================================================================
*/

// Strings immutability
// strings are immutable - you cannot change individual characters 

let str = "hello";
str[0] = "H"; // Does Nothings 

// Template literals (Backticks)
let name1 = "Khazaal";
let Message1 = `Hello , ${name}`;

// ------------------------------------------------------------------
// Problems 
//-------------------------------------------------------------------
// problem 1 

let str1 = "  javaScript  ";
console.log(str1.trim().toUpperCase());

// --------------------------------------------------------------------
// problem 2

let name2 = "Hello";
console.log(name2.slice(1,4), name2[0],name2.length);
//-----------------------------------------------------------------------
// problem 3

let text = "Hello Khazaal Hello";
console.log(text.replace("Hello","Hi"));
console.log(text.replaceAll("Hello","Hi"));

// --------------------------------------------------------------------------
// problem 4

let str4 = "javaScript";
console.log(str4.includes("Script"), str4.startsWith("java"), str4.endsWith("pt"));

//----------------------------------------------------------------------------------
// problem 5
let str5 = "Apple,Banana,Cherry";
let fruits5 = str5.split(",");
console.log(fruits5,"Length: " + fruits5.length);

//--------------------------------------------------------------------------------
// problem 6

let First = "Hello";
let Second = "World";
let Combined = `${First} ${Second}`;
console.log(Combined, Combined.length);
//---------------------------------------------------------------------------------