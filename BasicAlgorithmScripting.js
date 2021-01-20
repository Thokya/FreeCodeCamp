// Convert Celsius to Fahrenheit

/*
The algorithm to convert from Celsius to Fahrenheit is the temperature in Celsius times 9/5, plus 32.
You are given a variable celsius representing a temperature in Celsius. Use the variable fahrenheit already defined and assign it the Fahrenheit temperature equivalent to the given Celsius temperature. Use the algorithm mentioned above to help convert the Celsius temperature to Fahrenheit.
*/

function convertToF(celsius) {
    let fahrenheit = (celsius * 9 / 5) + 32;
    return fahrenheit;
}

console.log(convertToF(30));
//============================================================================================================================================

// Reverse a String

/*
Reverse the provided string.
You may need to turn the string into an array before you can reverse it.
Your result must be a string.
*/

function reverseString(str) {
    let reverse = "";
    for (let i = str.length - 1; i >= 0; i--) {
        reverse += str[i];
    }
    return reverse;
}

// function reverseString(str) {
//     return str.split("").reverse().join("");
// }

console.log(reverseString("hello"))
//============================================================================================================================================

// Factorialize a Number

/*
Return the factorial of the provided integer.
If the integer is represented with the letter n, a factorial is the product of all positive integers less than or equal to n.
Factorials are often represented with the shorthand notation n!
For example: 5! = 1 * 2 * 3 * 4 * 5 = 120
Only integers greater than or equal to zero will be supplied to the function.
*/

function factorialize(num) {
    if (num <= 0) {
        return 1;
    } else {
        return num * factorialize(num - 1);
    }
}

console.log(factorialize(5));
console.log(factorialize(20));
//============================================================================================================================================

// Find the Longest Word in a String

/*
Return the length of the longest word in the provided sentence.
Your response should be a number.
*/

function findLongestWordLength(str) {
    let newArr = str.split(" ");
    let largestWord = newArr[0].length || null;
    let word = null;

    for (let i = 0; i < newArr.length; i++) {
        word = newArr[i].length;
        largestWord = Math.max(largestWord, word);
    }
    return largestWord;
}

console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog"))
//============================================================================================================================================

// Return Largest Numbers in Arrays

/*
Return an array consisting of the largest number from each provided sub-array. For simplicity, the provided array will contain exactly 4 sub-arrays.
Remember, you can iterate through an array with a simple for loop, and access each member with array syntax arr[i].
*/

function largestOfFour(arr) {
    let maxArray = new Array();

    for (let i = 0; i < arr.length; i++) {
        let largestNumber = arr[i][0];
        for (let j = 0; j < arr[i].length; j++) {
            if (arr[i][j] > largestNumber) {
                largestNumber = arr[i][j];
            }
        }
        maxArray.push(largestNumber);
    }
    return maxArray;
}

console.log(largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]));
console.log(largestOfFour([[13, 27, 18, 26], [4, 5, 1, 3], [32, 35, 37, 39], [1000, 1001, 857, 1]]));
console.log(largestOfFour([[17, 23, 25, 12], [25, 7, 34, 48], [4, -10, 18, 21], [-72, -3, -17, -10]]));
console.log(largestOfFour([[-17, -23, -25, -12], [-25, -7, -34, -48], [-4, -10, -18, -21], [-72, -3, -17, -10]]));
//============================================================================================================================================

// Confirm the Ending

/*
Check if a string (first argument, str) ends with the given target string (second argument, target).
This challenge can be solved with the .endsWith() method, which was introduced in ES2015. But for the purpose of this challenge, we would like you to use one of the JavaScript substring methods instead.
*/

// function confirmEnding(str, target) {
//     return str.slice(-target.length) == target;
// }

// function confirmEnding(str, target) {
//     let testRegex = new RegExp(target + "$",);
//     return testRegex.test(str);
// }

function confirmEnding(str, target) {
    return str.slice(str.length - target.length) == target;
}

console.log(confirmEnding("Bastian", "n"));
console.log(confirmEnding("Congratulation", "on"));
console.log(confirmEnding("Walking on water and developing software from a specification are easy if both are frozen", "specification"));
console.log(console.log(confirmEnding("Open sesame", "same")));
//============================================================================================================================================

