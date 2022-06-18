// 10.11.1 - 10.11.3

let variableName = "hello";

function reverseCharacters(i) {
    if (typeof(i) == "string") {
        let lettersArray = i.split('');
        let reversedLettersArray = lettersArray.reverse();
        return reversedLettersArray.join('');
    }
    else if (typeof(i) == "number") {
        let numbersString = i.toString();
        let numbersArray = numbersString.split('');
        let reversedArray = numbersArray.reverse();
        let numbersString2 = reversedArray.join('');
        return Number(numbersString2);
    }
 }

 console.log(reverseCharacters(variableName));
 console.log(reverseCharacters('1234'));

 //10.11.4

 let testArray = ['hello','world','wall-e','1234'];

 function completeReversal(n) {
    let answer = [];

    for (let x = n.length -1 ; x >= 0; x --) {
        let switched = reverseCharacters(n[x]);
        answer.push(switched);
    }

    return answer;
}

console.log(completeReversal(testArray));
