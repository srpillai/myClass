function randomFromArray(arr){
    let index = Math.floor(Math.random()*arr.length);
    return arr[index];
  }
  
  // Export the randomFromArray function.
  module.exports = randomFromArray;
  