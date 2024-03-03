// TypeError: trim is not a function in JavaScript

// EXAMPLE 1 - Make sure to only call the `trim()` method on strings

const str = ' hello ';

const result = str.trim();

console.log(result); // 👉️ "hello"

// ------------------------------------------------------------------

// // EXAMPLE 2 - Check if the value is of type string before calling `trim()`

// const str = null;

// const result = typeof str === 'string' ? str.trim() : '';

// console.log(result); // 👉️ ""

// ------------------------------------------------------------------

// // EXAMPLE 3 - Using an `if` statement

// const str = null;

// let result = '';

// if (typeof str === 'string') {
//   result = str.trim();
// }

// console.log(result); // 👉️ ""

// ------------------------------------------------------------------

// // EXAMPLE 4 - Call the `trim()` method on all strings in an Array

// const arr = [' bobby ', ' hadz ', '  com  '];

// const result = arr.map(str => str.trim());

// // 👇️ [ 'bobby', 'hadz', 'com' ]
// console.log(result);

// ------------------------------------------------------------------

// // EXAMPLE 5 - Accessing a string property on an object before calling trim()

// // ✅ with Objects
// const obj = {
//   site: '   bobbyhadz.com   ',
// };

// const result1 = obj.site.trim();
// console.log(result1); // 👉️ "bobbyhadz.com"

// // -------------------------------------------

// // ✅ with Arrays

// const arr = ['   bobby  ', '  hadz  ', '  com '];

// const result2 = arr[0].trim();
// console.log(result2); // 👉️ "bobby"
