let food = "water bottles, meal packs, snacks, chocolate";
let equipment = "space suits, jet packs, tool belts, thermal detonators";
let pets = "parrots, cats, moose, alien eggs";
let sleepAids = "blankets, pillows, eyepatches, alarm clocks";

// PART A SOLUTION//
let foodCabinet = food.split(', ');
foodCabinet.sort();

let equipmentCabinet = equipment.split(', ');
equipmentCabinet.sort();

let petsCabinet = pets.split(', ');
petsCabinet.sort();

let sleepAidsCabinet = sleepAids.split(', ');
sleepAidsCabinet.sort();



// PART B SOLUTION //
let cargoHold = [];
cargoHold.push(foodCabinet);
cargoHold.push(equipmentCabinet);
cargoHold.push(petsCabinet);
cargoHold.push(sleepAidsCabinet);
console.log(cargoHold);


// PART C SOLUTION //
const input = require('readline-sync');
let cabinetQuery = input.question('Please select a cabinet from 0-3');

// // PART D SOLUTION //
// let selectedCabinet = cargoHold[cabinetQuery];

// if (selectedCabinet) {
//   console.log(`You selected: ${selectedCabinet}.`);
// } else {
//   console.log("That's not a cabinet!")
// }

// PART E SOLUTION //
let cargoQuery = input.question('Please select a cabinet from 0-3,followed by a particular item in that cabinet. Please separate your selection with a semicolon only.');
let responseArr = cargoQuery.split(';');

let selectedCabinet = cargoHold[responseArr[0]];

if (selectedCabinet) {
  if (selectedCabinet.includes(responseArr[1])) {
    console.log(`Cabinet ${responseArr[0]} DOES contain ${responseArr[1]}.`);
  } else {
    console.log(`Cabinet ${responseArr[0]} DOES NOT contain ${responseArr[1]}.`);
  }
} else {
  console.log("That's not a good cabinet and item choice!")
}
