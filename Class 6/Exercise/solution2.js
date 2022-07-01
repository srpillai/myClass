function checkFuel(level) {
    if (level > 100000){
       return 'green';
    } else if (level > 50000){
       return 'yellow';
    } else {
       return 'red';
    }
 }
 
 function holdStatus(arr){
    if (arr.length < 7) {
       return `Spaces available: ${7 - arr.length}`;
    } else if (arr.length > 7){
       return `Over capacity by ${arr.length - 7} items.`
    } else {
       return "Full";
    }
 }
 
 let fuelLevel = 200000;
 let cargoHold = ['meal kits', 'space suits', 'first-aid kit', 'satellite', 'gold', 'water', 'AE-35 unit'];
 
 console.log("Fuel level: "+ checkFuel(fuelLevel));
 console.log("Hold status: "+ holdStatus(cargoHold));

 // Part 1
let parrotFood = function(a) {
    if (checkFuel(a) === 'green') {
        return a - 100001;
    }
    else if (checkFuel(a) === 'yellow') {
        return a - 50001;
    }
    else {
        return a;
    }
};

 // Part 2
 let deckMops = function(b){
    let items = ['dilithium','gold','AE-35 unit','Legos','TI-89 calculator'];
    let arr2 = [];
    let i = 0;
    while (i < b.length) {
      if (items.includes(b[i])) {
        arr2.push(b[i]);
        b.splice(i,1,'space junk');
      }
      i++;
    }
    return arr2;
 };

 // Part 3
let irs = function(fuelLevel, cargoHold) {
    let arr = deckMops(cargoHold);
    return `Raided ${parrotFood(fuelLevel)} kg of fuel from the tanks, and stole ${arr[0]} and ${arr[1]} from the cargo hold.`
}

