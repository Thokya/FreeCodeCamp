// ARRAYS IN JAVASCRIPT

/*
- Push function in array:
An easy way to append data to the end of an array is via the push() function.
Push() takes one or more parameters and "pushes" them onto the end of the array.
*/
var arr1 = [1, 2, 3];
arr1.push(4);
// arr1 is now [1,2,3,4]

var arr2 = ["Stimpson", "J", "cat"];
arr2.push(["happy", "joy"]);

console.log(arr2);
//-------------------------------------------------------------------------------------

/*
- Pop function in array:
Another way to change the data in an array is with the .pop() function.
.pop() is used to "pop" a value off of the end of an array. We can store this "popped off" value by assigning it to a variable. In other words, .pop() removes the last element from an array and returns that element.
Any type of entry can be "popped" off of an array - numbers, strings, even nested arrays.
*/
var threeArr = [1, 4, 6];
var oneDown = threeArr.pop();

console.log(oneDown); // Returns 6
console.log(threeArr); // Returns [1, 4]
//-------------------------------------------------------------------------------------

/*
- Shift function in array:
pop() always removes the last element of an array. What if you want to remove the first?
That's where .shift() comes i
*/
var ourArray = ["Stimpson", "J", ["cat"]];
var removedFromOurArray = ourArray.shift();

console.log(removedFromOurArray);
//-------------------------------------------------------------------------------------

/*
- Unshift function in array:
Not only can you shift elements off of the beginning of an array, you can also unshift elements to the beginning of an array i.e. add elements in front of the array.
.unshift() works exactly like .push(), but instead of adding the element at the end of the array, unshift() adds the element at the beginning of the array.
*/
var ourArray = ["Stimpson", "J", "cat"];
ourArray.shift(); // ourArray now equals ["J", "cat"]
ourArray.unshift("Happy");

console.log(ourArray);
//=====================================================================================

// FUNCTIONS IN JS

/*
In JavaScript, we can divide up our code into reusable parts called functions.
Here's an example of a function:
*/
function functionName() {
    console.log("Hello World");
}
/*
You can call or invoke this function by using its name followed by parentheses, like this: functionName(); Each time the function is called it will print out the message "Hello World" on the dev console. All of the code between the curly braces will be executed every time the function is called.
*/
//=====================================================================================

// QUEUE IN JS
/*
In Computer Science a queue is an abstract Data Structure where items are kept in order. New items can be added at the back of the queue and old items are taken off from the front of the queue.
Write a function nextInLine which takes an array (arr) and a number (item) as arguments.
Add the number to the end of the array, then remove the first element of the array.
The nextInLine function should then return the element that was removed.
*/

function nextInLine(arr, item) {
    arr.push(item);
    var itemRemoved = arr.shift();
    return itemRemoved;
}

// Setup
var testArr = [1, 2, 3, 4, 5];

// Display code
console.log("Before: " + JSON.stringify(testArr));
console.log(nextInLine(testArr, 6));
console.log("After: " + JSON.stringify(testArr));
//=====================================================================================

function testLogicalOr(val) {
    // Only change code below this line

    if (val < 10 || val > 20) {
        return "Outside";
    }

    // Only change code above this line
    return "Inside";
}

console.log(testLogicalOr(10));
console.log(testLogicalOr(20));
console.log(testLogicalOr(15));
console.log(testLogicalOr(30));
//=====================================================================================

function testSize(num) {
    // Only change code below this line
    if (num <= 5) {
        return "Tiny";
    }
    else if (num < 10) {
        return "Small"
    }
    else if (num < 15) {
        return "Medium"
    }
    else if (num < 20) {
        return "Large"
    }
    else {
        return "Huge"
    }
    // Only change code above this line
}

console.log(testSize(7));
console.log(testSize(25));
console.log(testSize(5));
console.log(testSize(2));
//=====================================================================================

var names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];
function golfScore(par, strokes) {
    if (strokes == 1) {
        return names[0];
    }
    else if (strokes <= par - 2) {
        return names[1];
    }
    else if (strokes == par - 1) {
        return names[2];
    }
    else if (strokes == par) {
        return names[3];
    }
    else if (strokes == par + 1) {
        return names[4];
    }
    else if (strokes == par + 2) {
        return names[5];
    }
    else {
        return names[6];
    }
}

console.log(golfScore(5, 4));
//=====================================================================================

function caseInSwitch(val) {
    var answer = "";
    switch (val) {
        case 1:
            answer = "alpha";
            break;
        case 2:
            answer = "beta";
            break;
        case 3:
            answer = "gamma";
            break;
        case 4:
            answer = "delta";
            break;
    }
    return answer;
}

console.log(caseInSwitch(1));
//=====================================================================================

// Setup
function abTest(a, b) {
    if (a < 0 || b < 0) {
        return undefined;
    }
    return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
}

console.log(abTest(2, 2));
console.log(abTest(-2, 2));
console.log(abTest(2, -2));
//=====================================================================================

var count = 0;

function cc(card) {
    switch (card) {
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
            count++;
            break;

        case 7:
        case 8:
        case 9:
            count;
            break;

        case 10:
        case "J":
        case "Q":
        case "K":
        case "A":
            count--;
            break;
    }

    if (count <= 0) {
        return count + " Hold";
    }
    else {
        return count + " Bet"
    }
}

console.log(cc(2));
console.log(cc(3));
console.log(cc(7));
console.log(cc('K'));
console.log(cc('A'));
//=====================================================================================

// JS Objects:
/*
You may have heard the term object before.
Objects are similar to arrays, except that instead of using indexes to access and modify their data, you access the data in objects through what are called properties.
Objects are useful for storing data in a structured way, and can represent real world objects, like a cat.
Here's a sample cat object:
*/

var cat = {
    "name": "Whiskers",
    "legs": 4,
    "tails": 1,
    "enemies": ["Water", "Dogs"]
};

/*
In this example, all the properties are stored as strings, such as - "name", "legs", and "tails". However, you can also use numbers as properties. You can even omit the quotes for single-word string properties, as follows:
*/

var anotherObject = {
    make: "Ford",
    5: "five",
    "model": "focus"
};

/*
However, if your object has any non-string properties, JavaScript will automatically typecast them as strings.
*/
//------------------------------------------------------------------------------------------------------------------------------------------

/*
There are two ways to access the properties of an object: dot notation (.) and bracket notation ([]), similar to an array.
Dot notation is what you use when you know the name of the property you're trying to access ahead of time.
Here is a sample of using dot notation (.) to read an object's property:
*/

var myObj = {
    prop1: "val1",
    prop2: "val2"
};

var prop1val = myObj.prop1;
console.log(prop1val);

var prop2val = myObj.prop2;
console.log(prop2val);
//------------------------------------------------------------------------------------------------------------------------------------------

/*
The second way to access the properties of an object is bracket notation ([]). If the property of the object you are trying to access has a space in its name, you will need to use bracket notation.
However, you can still use bracket notation on object properties without spaces.
Here is a sample of using bracket notation to read an object's property:
*/

var myObj = {
    "Space Name": "Kirk",
    "More Space": "Spock",
    "NoSpace": "USS Enterprise"
};

console.log(myObj["Space Name"]);
console.log(myObj['More Space']);
console.log(myObj["NoSpace"]);

/*
Note that property names with spaces in them must be in quotes (single or double).
*/
//------------------------------------------------------------------------------------------------------------------------------------------

/*
Another use of bracket notation on objects is to access a property which is stored as the value of a variable. This can be very useful for iterating through an object's properties or when accessing a lookup table.
Here is an example of using a variable to access a property:
*/

var dogs = {
    Fido: "Mutt", Hunter: "Doberman", Snoopie: "Beagle"
};
var myDog = "Hunter";
var myBreed = dogs[myDog];

console.log(myBreed);

/*
Another way you can use this concept is when the property's name is collected dynamically during the program execution, as follows:
*/

var someObj = {
    propName: "John"
};

function propPrefix(str) {
    var s = "prop";
    return s + str;
}

var someProp = propPrefix("Name");

console.log(someObj[someProp]);
//------------------------------------------------------------------------------------------------------------------------------------------

/*After you've created a JavaScript object, you can update its properties at any time just like you would update any other variable. You can use either dot or bracket notation to update.
For example, let's look at ourDog:
*/

var ourDog = {
    "name": "Camper",
    "legs": 4,
    "tails": 1,
    "friends": ["everything!"]
};

/*
Since he's a particularly happy dog, let's change his name to "Happy Camper".Here's how we update his object's name property: ourDog.name = "Happy Camper"; or ourDog["name"] = "Happy Camper"; Now when we evaluate ourDog.name, instead of getting "Camper", we'll get his new name, "Happy Camper".
*/
//------------------------------------------------------------------------------------------------------------------------------------------

/*
You can add new properties to existing JavaScript objects the same way you would modify them.
Here's how we would add a "bark" property to ourDog:
ourDog.bark = "bow-wow";
or
ourDog["bark"] = "bow-wow";
Now when we evaluate ourDog.bark, we'll get his bark, "bow-wow".
Example:
*/

var ourDog = {
    "name": "Camper",
    "legs": 4,
    "tails": 1,
    "friends": ["everything!"]
};

ourDog.bark = "bow-wow";

console.log(ourDog);
//------------------------------------------------------------------------------------------------------------------------------------------

/*
We can also delete properties from objects like this:
delete ourDog.bark;
Example:
*/

var ourDog = {
    "name": "Camper",
    "legs": 4,
    "tails": 1,
    "friends": ["everything!"],
    "bark": "bow-wow"
};

delete ourDog.bark;

/*
After the last line shown above, ourDog looks like:
*/

console.log(ourDog);
//------------------------------------------------------------------------------------------------------------------------------------------

/*
Using Objects for LookupsPassed
Objects can be thought of as a key/value storage, like a dictionary. If you have tabular data, you can use an object to "lookup" values rather than a switch statement or an if/else chain. This is most useful when you know that your input data is limited to a certain range.
Here is an example of a simple reverse alphabet lookup:
*/

var alpha = {
    1: "Z",
    2: "Y",
    3: "X",
    4: "W",
    24: "C",
    25: "B",
    26: "A"
};

console.log(alpha[2]);
console.log(alpha[24]);

var value = 4;

console.log(alpha[value]);
//----------------------------------------------------------------------------------------------------------------------------------------------

// Setup
function phoneticLookup(val) {
    var result = "";

    var lookup = {
        "alpha": "Adams",
        "bravo": "Boston",
        "charlie": "Chicago",
        "delta": "Denver",
        "echo": "Easy",
        "foxtrot": "Frank"
    }
    result = lookup[val]
    
    return result;
}

console.log(phoneticLookup("charlie"));
//----------------------------------------------------------------------------------------------------------------------------------------------

/*
Sometimes it is useful to check if the property of a given object exists or not. We can use the .hasOwnProperty(propname) method of objects to determine if that object has the given property name. .hasOwnProperty() returns true or false if the property is found or not.
Example
*/

var myObj = {
    top: "hat",
    bottom: "pants"
};

console.log(myObj.hasOwnProperty("top"));
console.log(myObj.hasOwnProperty("middle"));
//----------------------------------------------------------------------------------------------------------------------------------------------

/*
The sub-properties of objects can be accessed by chaining together the dot or bracket notation.
Here is a nested object:
*/

var ourStorage = {
    "desk": {
        "drawer": "stapler"
    },
    "cabinet": {
        "top drawer": {
            "folder1": "a file",
            "folder2": "secrets"
        },
        "bottom drawer": "soda"
    }
};

console.log(ourStorage.cabinet["top drawer"].folder2);
console.log(ourStorage.desk.drawer);
//------------------------------------------------------------------------------------------------------------------------------------------------

/*
As we have seen in earlier examples, objects can contain both nested objects and nested arrays. Similar to accessing nested objects, Array bracket notation can be chained to access nested arrays.
Here is an example of how to access a nested array:
*/

var ourPets = [
    {
        animalType: "cat",
        names: [
            "Meowzer",
            "Fluffy",
            "Kit-Cat"
        ]
    },
    {
        animalType: "dog",
        names: [
            "Spot",
            "Bowser",
            "Frankie"
        ]
    }
];

console.log(ourPets[0].names[1]);
console.log(ourPets[1].names[0]);

// Setup
var myPlants = [
    {
        type: "flowers",
        list: [
            "rose",
            "tulip",
            "dandelion"
        ]
    },
    {
        type: "trees",
        list: [
            "fir",
            "pine",
            "birch"
        ]
    }
];

// Only change code below this line

var secondTree = myPlants[1].list[1]; // Change this line

console.log(secondTree);
//---------------------------------------------------------------------------------------------------------------------------------------------

//DO-WHILE LOOP
/*
The next type of loop you will learn is called a do...while loop. It is called a do...while loop because it will first do one pass of the code inside the loop no matter what, and then continue to run the loop while the specified condition evaluates to true.
*/

var ourArray = [];
var i = 0;

do {
    ourArray.push(i);
    i++;
} while (i < 5);

console.log(ourArray);

/*
The example above behaves similar to other types of loops, and the resulting array will look like [0, 1, 2, 3, 4]. However, what makes the do...while different from other loops is how it behaves when the condition fails on the first check. Let's see this in action: Here is a regular while loop that will run the code in the loop as long as i < 5:
*/

var ourArray = [];
var i = 5;

while (i < 5) {
    ourArray.push(i);
    i++;
}

console.log(ourArray);

/*
In this example, we initialize the value of ourArray to an empty array and the value of i to 5. When we execute the while loop, the condition evaluates to false because i is not less than 5, so we do not execute the code inside the loop. The result is that ourArray will end up with no values added to it, and it will still look like [] when all of the code in the example above has completed running. Now, take a look at a do...while loop:
*/

var ourArray = [];
var i = 5;

do {
    ourArray.push(i);
    i++;
} while (i < 5);

console.log(ourArray);

/*
In this case, we initialize the value of i to 5, just like we did with the while loop. When we get to the next line, there is no condition to evaluate, so we go to the code inside the curly braces and execute it. We will add a single element to the array and then increment i before we get to the condition check. When we finally evaluate the condition i < 5 on the last line, we see that i is now 6, which fails the conditional check, so we exit the loop and are done. At the end of the above example, the value of ourArray is [5]. Essentially, a do...while loop ensures that the code inside the loop will run at least once. Let's try getting a do...while loop to work by pushing values to an array.
*/
//---------------------------------------------------------------------------------------------------------------------------------------------

//RECURSION: 
/*
Recursion is the concept that a function can be expressed in terms of itself. To help understand this, start by thinking about the following task: multiply the first n elements of an array to create the product of those elements. Using a for loop, you could do this:
*/

function multiply(arr, n) {
    var product = 1;
    
    for (var i = 0; i < n; i++) {
        product *= arr[i];
    }
    
    return product;
}

console.log(multiply([1, 2, 3, 4], 4));

/*
However, notice that multiply(arr, n) == multiply(arr, n - 1) * arr[n - 1]. That means you can rewrite multiply in terms of itself and never need to use a loop.
*/

function multiply(arr, n) {
    if (n <= 0) {
        return 1;
    } else {
        return multiply(arr, n - 1) * arr[n - 1];
    }
}

console.log(multiply([1, 2, 3, 4], 4));

/*
The recursive version of multiply breaks down like this. In the base case, where n <= 0, it returns 1. For larger values of n, it calls itself, but with n - 1. That function call is evaluated in the same way, calling multiply again until n <= 0. At this point, all the functions can return and the original multiply returns the answer.

Note: Recursive functions must have a base case when they return without calling the function again (in this example, when n <= 0), otherwise they can never finish executing.
*/

function sum(arr, n) {
    // Only change code below this line
    if (n <= 0) {
        return 0;
    } else {
        return sum(arr, n - 1) + arr[n - 1];
    }
    // Only change code above this line
}

console.log(sum([1, 2, 3, 4], 4));
console.log(sum([1], 0));
console.log(sum([2, 3, 4], 1));
console.log(sum([2, 3, 4, 5], 3));
//---------------------------------------------------------------------------------------------------------------------------------------------

// Setup
var contacts = [
    {
        "firstName": "Akira",
        "lastName": "Laine",
        "number": "0543236543",
        "likes": ["Pizza", "Coding", "Brownie Points"]
    },
    {
        "firstName": "Harry",
        "lastName": "Potter",
        "number": "0994372684",
        "likes": ["Hogwarts", "Magic", "Hagrid"]
    },
    {
        "firstName": "Sherlock",
        "lastName": "Holmes",
        "number": "0487345643",
        "likes": ["Intriguing Cases", "Violin"]
    },
    {
        "firstName": "Kristian",
        "lastName": "Vos",
        "number": "unknown",
        "likes": ["JavaScript", "Gaming", "Foxes"]
    }
];


function lookUpProfile(name, prop) {
    for (var x = 0; x < contacts.length; x++) {
        if (contacts[x].firstName === name) {
            if (contacts[x].hasOwnProperty(prop)) {
                return contacts[x][prop];
            } else {
                return "No such property";
            }
        }
    }
    
    return "No such contact";
}

console.log(lookUpProfile("Akira", "likes"));
console.log(lookUpProfile("Kristian", "lastName"));
//---------------------------------------------------------------------------------------------------------------------------------------------

// Generate Random Whole Numbers within a RangePassed

/*
Instead of generating a random whole number between zero and a given number like we did before, we can generate a random whole number that falls within a range of two specific numbers.
To do this, we'll define a minimum number min and a maximum number max.
Here's the formula we'll use. Take a moment to read it and try to understand what this code is doing:
*/

// Math.floor(Math.random() * (max - min + 1)) + min -- this is kinda formula to generate random number between min and max

function randomRange(myMin, myMax) {
    // Only change code below this line
    return Math.floor(Math.random() * (myMax - myMin + 1) + myMin);
    // Only change code above this line
}

let result = randomRange(45, 79);

console.log(result);
//---------------------------------------------------------------------------------------------------------------------------------------------

// Use the parseInt Function with a Radix

/*
The parseInt() function parses a string and returns an integer. It takes a second argument for the radix, which specifies the base of the number in the string. The radix can be an integer between 2 and 36.
The function call looks like:
parseInt(string, radix);
And here's an example:
*/

var a = parseInt("11", 2);

/*
The radix variable says that "11" is in the binary system, or base 2. This example converts the string "11" to an integer 3.
*/

function convertToInteger(str) {
    return parseInt(str, 2);
}

console.log(convertToInteger("10011"));
//---------------------------------------------------------------------------------------------------------------------------------------------

// Use the Conditional (Ternary) OperatorPassed

/*
The conditional operator, also called the ternary operator, can be used as a one line if-else expression.
The syntax is:
condition ? expression-if-true : expression-if-false;
The following function uses an if-else statement to check a condition:
*/

function findGreater(a, b) {
    if (a > b) {
        return "a is greater";
    }
    else {
        return "b is greater";
    }
}

/*
This can be re-written using the conditional operator:
*/

function findGreater(a, b) {
    return a > b ? "a is greater" : "b is greater";
}
//---------------------------------------------------------------------------------------------------------------------------------------------

// Use Multiple Conditional (Ternary) Operators

/*
In the previous challenge, you used a single conditional operator. You can also chain them together to check for multiple conditions.
The following function uses if, else if, and else statements to check multiple conditions:
*/

function findGreaterOrEqual(a, b) {
    if (a === b) {
        return "a and b are equal";
    }
    else if (a > b) {
        return "a is greater";
    }
    else {
        return "b is greater";
    }
}

/*
The above function can be re-written using multiple conditional operators:
*/

function findGreaterOrEqual(a, b) {
    return (a === b) ? "a and b are equal"
        : (a > b) ? "a is greater"
            : "b is greater";
}

/*
It is considered best practice to format multiple conditional operators such that each condition is on a separate line, as shown above. Using multiple conditional operators without proper indentation may make your code hard to read. For example:
*/

function findGreaterOrEqual(a, b) {
    return (a === b) ? "a and b are equal" : (a > b) ? "a is greater" : "b is greater";
}
//---------------------------------------------------------------------------------------------------------------------------------------------

// Use Recursion to Create a Countdown

/*
In a previous challenge, you learned how to use recursion to replace a for loop. Now, let's look at a more complex function that returns an array of consecutive integers starting with 1 through the number passed to the function.

As mentioned in the previous challenge, there will be a base case. The base case tells the recursive function when it no longer needs to call itself. It is a simple case where the return value is already known. There will also be a recursive call which executes the original function with different arguments. If the function is written correctly, eventually the base case will be reached.

For example, say you want to write a recursive function that returns an array containing the numbers 1 through n. This function will need to accept an argument, n, representing the final number. Then it will need to call itself with progressively smaller values of n until it reaches 1. You could write the function as follows:
*/

function countup(n) {
    if (n < 1) {
        return [];
    } else {
        const countArray = countup(n - 1);
        countArray.push(n);
        
        return countArray;
    }
}
console.log(countup(5));

/*
At first, this seems counterintuitive since the value of n decreases, but the values in the final array are increasing. This happens because the push happens last, after the recursive call has returned. At the point where n is pushed into the array, countup(n - 1) has already been evaluated and returned [1, 2, ..., n - 1].
*/

// Only change code below this line
function countdown(n) {
    if (n < 1) {
        return [];
    } else {
        const countArray = countdown(n - 1);
        countArray.unshift(n);
        
        return countArray;
    }
}
// Only change code above this line

let another = countdown(10);
console.log(another);

//==========================================================

function rangeOfNumbers(startNum, endNum) {
    if (startNum == endNum) {
        return [startNum];
    } else {
        let countArray = rangeOfNumbers(startNum, endNum - 1);
        countArray.push(endNum);
        
        return countArray;
    }
};

console.log(rangeOfNumbers(6, 9));
console.log(rangeOfNumbers(1, 10));
