// Part 3. Create SpaceCraft
class Spacecraft {
  milesPerKilometer: number = 0.621;
  name: string;
  speedMph: number;

  constructor(name: string, speedMph: number) {
    this.name = name;
    this.speedMph = speedMph;
  }

  getDaysToLocation(kilometersAway: number): number {
    let milesAway: number = kilometersAway * this.milesPerKilometer;
    let hoursToMars: number = milesAway / this.speedMph;
    return hoursToMars / 24;
  }
}

let spaceShuttle = new Spacecraft('Space Shuttle', 17500);
console.log(`${spacecraft} would take ${spaceShuttle.getDaysToLocation(kilomitersToMars)} days to get to Mars.`);
console.log(`${spacecraft} would take ${spaceShuttle.getDaysToLocation(kilometersToTheMoon)} days to get to the Moon.`);