// // PART A SOLUTION //
// const input = require(`readline-sync`);
// let str = "LaunchCode";
// let firstThreeChars = str.slice(0,3);
// let nextChars = str.slice(3);
// let newStr = nextChars + firstThreeChars;
// console.log(`${newStr} means ${str} in pseudo-pig latin.`);

// // PART B SOLUTION //
// const input = require(`readline-sync`);
// let str = "LaunchCode";
// let numCharsStr = input.question('How many letters to relocate?');
// let numCharsInt = Number(numCharsStr);
// let firstChars = str.slice(0,numCharsInt);
// let nextChars = str.slice(numCharsInt);
// let newStr = nextChars + firstChars;
// console.log(`${newStr} means ${str} in pseudo-pig latin.`);


// PART C SOLUTION //
const input = require(`readline-sync`);
let str = "LaunchCode";
let numCharsStr = input.question('How many letters to relocate?');
let numCharsInt = Number(numCharsStr);
if (numCharsInt > str.length) {
  let firstChars = str.slice(0,3);
  let nextChars = str.slice(3);
  let newStr = nextChars + firstChars;
  console.log(`"${str}" is too short for that! ${newStr} means ${str} in pseudo-pig latin.`);
} else {
  let firstChars = str.slice(0,numCharsInt);
  let nextChars = str.slice(numCharsInt);
  let newStr = nextChars + firstChars;
  console.log(`${newStr} means ${str} in pseudo-pig latin.`);
}
