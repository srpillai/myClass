// Unit Testing Exercises #1

// Part 1 is to follow a walkthrough and construct a spec.js file and use it to test a
// code sample:

// The following code is provided in the "checkFive.js" file:
function checkFive(num){
    let result = '';
    if (num < 5){
        result = num + " is less than 5.";
    } else if (num === 5){
        result = num + " is equal to 5.";
    } else {
        result = num + "is greater than 5."; //intentional typo here. Walkthrough spots this error.
    }
    return result;
}
// The students need to add this export code:
module.exports = {
    checkFive: checkFive
};

// The completed checkFive.spec.js code is: 
const test = require('../checkFive.js');

describe("checkFive", function(){

   it("returns 'num is less than 5' when num < 5.", function(){
      let output = test.checkFive(2);
      expect(output).toEqual('2 is less than 5.');
   });

   it("returns 'num is greater than 5' when num > 5.", function(){
      let output = test.checkFive(6);
      expect(output).toEqual('6 is greater than 5.');
   });

   it("returns 'num is equal to 5' when num = 5.", function(){
      let output = test.checkFive(5);
      expect(output).toEqual('5 is equal to 5.');
   });

});
