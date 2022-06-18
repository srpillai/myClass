let protoArray1 = "3,6,9,12";
let protoArray2 = "A;C;M;E";
let protoArray3 = "space delimited string";
let protoArray4 = "Comma-spaces, might, require, typing, caution";


// // PART A SOLUTION //
// let str;
// // do this for each string
// str = protoArray4;
// if (str.includes(',')) {
//   console.log('This string is separated by commas!');
// } else if (str.includes(';')) {
//   console.log('This string is separated by semicolons!');
// } else {
//   console.log('This string is separated by spaces!');
// }

// PART 8.6.2 SOLUTION //
let str, newStr;
let arr = [];
// do this for each string
str = protoArray3;
// PART e SOLUTION //
if (str.includes(', ')) {
  console.log('This string is separated by commas and spaces!');
  arr = str.split(', ');
  arr.reverse();
  newStr = arr.join(',');
  // PART b SOLUTION //
} else if (str.includes(',')) {
  console.log('This string is separated by commas only!');
  arr = str.split(',');
  arr.sort();
  newStr = arr.join(',');
  // PART c SOLUTION //
} else if (str.includes(';')) {
  console.log('This string is separated by semicolons!');
  arr = str.split(';');
  arr.sort();
  newStr = arr.join(',');
  // PART d SOLUTION //
} else {
  console.log('This string is separated by spaces!');
  arr = str.split(' ');
  arr.sort();
  arr.reverse();
  newStr = arr.join(',');
}
