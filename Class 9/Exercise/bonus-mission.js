// Unit Testing Exercises #3

// This is the modified code for the bonus mission. It validates user input.
function whoWon(player1,player2){
    let validEntries = ['rock', 'paper', 'scissors'];

    // The validation could check player1 and player2 together rather than separately. 
    if (!validEntries.includes(player1)) {
        return "Invalid entry, player 1.";
    } else if (!validEntries.includes(player2)) {
        return "Invalid entry, player 2.";
    }

    if (player1 === player2){
        return 'TIE!';
    }

    if (player1 === 'rock' && player2 === 'paper'){
        return 'Player 2 wins!';
    }

    if (player1 === 'paper' && player2 === 'scissors'){
        return 'Player 2 wins!';
    }

    if (player1 === 'scissors' && player2 === 'rock '){ //Intentional typo fixed: 'rock ' to 'rock'
        return 'Player 2 wins!';
    }

    return 'Player 1 wins!';
}

module.exports = {
    whoWon: whoWon
};

// One new it statement is needed of P1 & P2 are validated together.
// For the separate validation used above, two it statements are needed.
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
      let outputs = [];
      outputs.push(test.whoWon('rock','rock'));
      outputs.push(test.whoWon('paper','paper'));
      outputs.push(test.whoWon('scissors','scissors'));
      for (let i = 0; i < outputs.length; i++) {
        expect(outputs[i]).toEqual("TIE!");
      }      
   });

   it("returns 'Player 1 wins!' if the P2 win checks and TIE check all return false.", function(){
      let outputs = [];
      outputs.push(test.whoWon('rock','scissors'));
      outputs.push(test.whoWon('paper','rock'));
      outputs.push(test.whoWon('scissors','paper'));
      for (let i = 0; i < outputs.length; i++) {
        expect(outputs[i]).toEqual("Player 1 wins!");
      }
   });

   it("returns 'Invalid entry, player 1.' if P1 does NOT enter 'rock', 'paper', or 'scissors'", function(){
      let output = test.whoWon('invalid','rock');
      expect(output).toEqual("Invalid entry, player 1.");
   });

   it("returns 'Invalid entry, player 2.' if P2 does NOT enter 'rock', 'paper', or 'scissors'", function(){
      let output = test.whoWon('rock','invalid');
      expect(output).toEqual("Invalid entry, player 2.");
   });

});
