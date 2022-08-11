// Unit Testing Exercises #2

// Part 2 asks the students to construct a spec.js file on their own for the following
// code sample in the RPS.js file:
function whoWon(player1,player2){
    if (player1 === player2){
        return 'TIE!';
    }

    if (player1 === 'rock' && player2 === 'paper'){
        return 'Player 2 wins!';
    }

    if (player1 === 'paper' && player2 === 'scissors'){
        return 'Player 2 wins!';
    }

    if (player1 === 'scissors' && player2 === 'rock'){  //Intentional typo fixed: 'rock ' to 'rock'
        return 'Player 2 wins!';
    }

    return 'Player 1 wins!';
}

// The students need to add this export code to the RPS.js file:
module.exports = {
    whoWon: whoWon
};

// Students must complete the following 5 tests.
// The completed spec.js code is:
const test = require('../RPS.js');

describe("whoWon", function(){

   it("returns 'Player 2 wins!' if P1 = rock & P2 = paper", function(){
      let output = test.whoWon('rock','paper');
      expect(output).toEqual("Player 2 wins!");
   });

   it("returns 'Player 2 wins!' if P1 = paper & P2 = scissors", function(){
      let output = test.whoWon('paper','scissors');
      expect(output).toEqual("Player 2 wins!");
   });

   it("returns 'Player 2 wins!' if P1 = scissors & P2 = rock", function(){
      let output = test.whoWon('scissors','rock');
      expect(output).toEqual("Player 2 wins!");
   });

   it("returns 'TIE!' if P1 & P2 choose the same option.", function(){
      let output = test.whoWon('tie','tie');
      expect(output).toEqual("TIE!");
   });

   it("returns 'Player 1 wins!' if the P2 win checks and TIE check all return false.", function(){
      let output = test.whoWon('win','lose');
      expect(output).toEqual("Player 1 wins!");
   });

});
