// Part 4. Create a Location class, pass that getDaysToLocation(location: Location)
class SpaceLocation {
  kilometersAway: number;
  name: string;

  constructor(name: string, kilometersAway: number) {
    this.name = name;
    this.kilometersAway = kilometersAway;
  }
}

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
    let hours: number = milesAway / this.speedMph;
    return hours / 24;
  }

  printDaysToLocation(location: SpaceLocation) {
    console.log(`${this.name} would take ${this.getDaysToLocation(location.kilometersAway)} days to get to ${location.name}.`);
  }
}

let spaceShuttle2 = new Spacecraft('Space Shuttle', 17500);
spaceShuttle2.printDaysToLocation(new SpaceLocation('Mars', 225000000));
spaceShuttle2.printDaysToLocation(new SpaceLocation('the Moon', 384400));