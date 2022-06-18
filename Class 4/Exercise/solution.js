// For loop exercises:
// #1
for (let i = 0; i <= 20; i++) {
  console.log(i);
}

for (let i = 3; i <= 29; i+=2) {
  console.log(i);
}

for (let i = 12; i >= -14; i-=2) {
  console.log(i);
}

for (let i = 50; i >= 20; i--) {
  if (i%3 === 0) {
   console.log(i); 
  }
}

// #2
let str = 'LaunchCode';
let arr = [1, 5, 'LC101', 'blue', 42];

for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

for (let i = str.length-1; i >=0 ; i--) {
  console.log(str[i]);
}

// #3

let otherArr = [2, 3, 13, 18, -5, 38, -10, 11, 0, 104];
let evens = [], odds = [];

for (let i = 0; i < otherArr.length; i++) {
  if (otherArr[i]%2 === 0) {
    evens.push(otherArr[i]);
  } else {
    odds.push(otherArr[i]);
  }
}
console.log(evens);
console.log(odds);

// While loop exercises:
// #4
const input = require('readline-sync');
let fuelLevel = 0, numAstronauts = 0, altitude = 0;

while (fuelLevel <= 5000 || fuelLevel > 30000 || isNaN(fuelLevel)) {
  fuelLevel = input.question("Enter the starting fuel level: ");
}

while (numAstronauts <= 0 || numAstronauts > 7 || isNaN(numAstronauts)) {
  numAstronauts = input.question("Enter the number of astronauts: ");
}

while (fuelLevel-100*numAstronauts >= 0) {
  altitude += 50;
  fuelLevel -= 100*numAstronauts;
}

// #5
let output = `The shuttle gained an altitude of ${altitude} km.`;
if (altitude >= 2000) {
  output += " Orbit achieved!";
} else {
  output += " Failed to reach orbit.";
}
