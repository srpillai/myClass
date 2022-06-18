const input = require('readline-sync');

// Part A: #1 Initialize your variables

let protein = ['chicken', 'pork', 'tofu', 'beef', 'fish', 'beans'];
let grains = ['rice', 'pasta', 'corn', 'potato', 'quinoa', 'crackers'];
let veggies = ['peas', 'green beans', 'kale', 'edamame', 'broccoli', 'asparagus'];
let beverages = ['juice', 'milk', 'water', 'soy milk', 'soda', 'tea'];
let desserts = ['apple', 'banana', 'more kale', 'ice cream', 'chocolate', 'kiwi'];


//Part A #2: Complete the mealAssembly function.

function mealAssembly(protein, grains, veggies, beverages, desserts, n) {
  let pantry = [protein, grains, veggies, beverages, desserts];
  let meals = [];

  /// Code your solution for part A #2 here ... it will be a nested loop ... ///
  for (let i = 0; i < n; i++) {
        let meal = [];
        for (let j = 0; j < pantry.length; j++) {
            meal.push(pantry[j][i]);
            console.log()
        }
        meals.push(meal);
    }


  return meals;
}


//Part B: Complete the askForNumber function.

function askForNumber() {
  numMeals = input.question("How many meals would you like to make?");
  
  /// CODE YOUR SOLUTION TO PART B here ///
  while (numMeals < 1 || numMeals > 6 || isNaN(numMeals)) {
    numMeals = input.question("Invalid entry. How many meals would you like to make?");
  }

  return numMeals;
}

// Part C: Complete the generatePassword function.

function generatePassword(string1, string2) {
  let code = '';

  /// Code your Bonus Mission answer here ///
  for (let i = 0; i < string1.length; i++) {
        code+=string1[i]+string2[i];
    }

  return code;
}

function runProgram() {
  
  /// TEST PART A #2 HERE ///
  /// UNCOMMENT the next two lines that invoke the mealAssembly function and print the result ///
  /// Change the final input variable (aka numMeals) to ensure your solution makes the right number of meals ///
  let meals = mealAssembly(protein, grains, veggies, beverages, desserts, 2);
  console.log(meals)
  
  /// TEST PART B HERE ///
  /// UNCOMMENT the next two lines to test your ``askForNumber`` solution ///
  /// Tip - don't test this part until you're happy with your solution to part A #2 ///
  let mealsForX = mealAssembly(protein, grains, veggies, beverages, desserts, askForNumber());
  console.log(mealsForX);

  /// TEST BONUS MISSION HERE ///
  /// UNCOMMENT the remaining commented lines and change the password1 and password2 strings to ensure your code is doing its job ///

  let password1 = "Dog";
  let password2 = "Bed";
  console.log("Time to run the password generator so we can update the menu tomorrow.")
  console.log(`The new password is: ${generatePassword(password1, password2)}`);

}

module.exports = {
  protein: protein,
  grains: grains,
  veggies: veggies,
  beverages: beverages,
  desserts: desserts,
  mealAssembly: mealAssembly,
  askForNumber: askForNumber,
  generatePassword: generatePassword,
  runProgram: runProgram
};