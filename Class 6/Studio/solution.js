//1) Create a function with an array of numbers as its parameter. The function should iterate through the array and return the minimum value from the array. Hint: Use what you know about if statements to identify and store the smallest value within the array.

function findMinValue(numberArray) {
    let smallestNumber = numberArray[0];

    for (let i = 1; i < numberArray.length; i = i + 1) {
        if (numberArray[i] < smallestNumber) {
            smallestNumber = numberArray[i];
        }
    }

    return smallestNumber;
}

//Sample arrays for testing:
let nums1 = [5, 10, 2, 42];
let nums2 = [-2, 0, -10, -44, 5, 3, 0, 3];
let nums3 = [200, 5, 4, 10, 8, 5, -3.3, 4.4, 0];



//Using one of the test arrays as the argument, call your function inside the console.log statement below.

//console.log(sortArray(nums1));
console.log(findMinValue(nums1));
console.log(findMinValue(nums2));
console.log(findMinValue(nums3));
  
//Create a function with an array of numbers as its parameter. This function will return a new array with the numbers sorted from least to greatest value.
  
  /*Within the function:
  a) Define a new, empty array to hold the final sorted numbers.
  b) Use the findMinValue function to find the minimum value in the old array.
  c) Add the minimum value to the new array, and remove the minimum value from the old array.
  d) Repeat parts b & c until the old array is empty.
  e) Return the new sorted array.
  f) Be sure to print the results in order to verify your code.*/
  
  //Your function here...
  
function sortArray(unsortedArray) {
    let newArray = [];

    while(unsortedArray.length !== 0) {
        let smallestValue = findMinValue(unsortedArray);
        newArray.push(smallestValue);
        unsortedArray.splice(unsortedArray.indexOf(smallestValue),1);
    }

    return newArray;
}

// BONUS MISSION: Refactored sortArray function using recursion:

function recursiveSortArray (unsortedArray, newArray=[]){
    if (unsortedArray.length===1){
        newArray.push(unsortedArray[0]);
    } else {
        newArray.push(findMinValue(unsortedArray));
        unsortedArray.splice(unsortedArray.indexOf(findMinValue(unsortedArray)),1);
        recursiveSortArray(unsortedArray,newArray);
    }
    return newArray;
}


console.log(sortArray(nums1));
console.log(sortArray(nums2));
console.log(sortArray(nums3));

// NEW VARIABLES ARE NEEDED, because the sortArray function alters the passed in array.
let nums4 = [5, 10, 2, 42];
let nums5 = [-2, 0, -10, -44, 5, 3, 0, 3];
let nums6 = [200, 5, 4, 10, 8, 5, -3.3, 4.4, 0];

// Sort each array in ascending order.
console.log(nums4.sort(function(a, b){ return a - b; }));
console.log(nums5.sort(function(a, b){ return a - b; }));
console.log(nums6.sort(function(a, b){ return a - b; }));

//Sort each array in descending order.
console.log(nums4.sort(function(a, b){ return b - a; }));
console.log(nums5.sort(function(a, b){ return b - a; }));
console.log(nums6.sort(function(a, b){ return b - a; }));
//arrayName.sort(function(a, b){return b-a});

// Answer the final question, "Does this sorting method alter the original arrays?""
console.log("Yes")