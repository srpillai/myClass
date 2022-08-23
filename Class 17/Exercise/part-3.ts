// Part 2. Create function
function getDaysToLocation(kilometersAway: number): number {
  let milesAway: number = kilometersAway * milesPerKilometer;
  let hours: number = milesAway / speedMph;
  return hours / 24;
}
console.log(`${spaceCraft} would take ${getDaysToLocation(kilomitersToMars)} days to get to Mars.`);
console.log(`${spaceCraft} would take ${getDaysToLocation(kilometersToTheMoon)} days to get to the Moon.`);