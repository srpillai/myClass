// Part 1. Declare variables
let spaceCraft: string = "Space Shuttle";
let speedMph: number = 17500;
let kilomitersToMars: number = 225000000;
let kilometersToTheMoon: number = 384400;
let milesPerKilometer: number = 0.621;

let milesToMars: number = kilomitersToMars * milesPerKilometer;
let hoursToMars: number = milesToMars / speedMph;
let daysToMars: number = hoursToMars / 24;

console.log(`${spaceCraft} would take ${daysToMars} days to get to Mars.`);