// Prevent Object Mutation

/*
As seen in the previous challenge, const declaration alone doesn't really protect your data from mutation. To ensure your data doesn't change, JavaScript provides a function Object.freeze to prevent data mutation.
Once the object is frozen, you can no longer add, update, or delete properties from it. Any attempt at changing the object will be rejected without an error.
*/

let obj = {
    name: "FreeCodeCamp",
    review: "Awesome"
};
Object.freeze(obj);
// obj.review = "bad"; // will be ignored. Mutation not allowed
// obj.newProp = "Test"; // will be ignored. Mutation not allowed
console.log(obj);
//========================================================================================================================================

// Use Arrow Functions to Write Concise Anonymous Functions

/*
In JavaScript, we often don't need to name our functions, especially when passing a function as an argument to another function. Instead, we create inline functions. We don't need to name these functions because we do not reuse them anywhere else.

To achieve this, we often use the following syntax:
*/

const myFunc1 = function () {
    const myVar = "value";
    return myVar;
}

/*
ES6 provides us with the syntactic sugar to not have to write anonymous functions this way. Instead, you can use arrow function syntax:
*/

const myFunc2 = () => {
    const myVar = "value";
    return myVar;
}

/*
When there is no function body, and only a return value, arrow function syntax allows you to omit the keyword return as well as the brackets surrounding the code. This helps simplify smaller functions into one-line statements:
*/

const myFunc = () => "value";

/*This code will still return the string value by default. */
//========================================================================================================================================

// Write Arrow Functions with Parameters

/*Just like a regular function, you can pass arguments into an arrow function. */

// doubles input value and returns it
const doubler = (item) => item * 2;
doubler(4); // returns 8

/*If an arrow function has a single parameter, the parentheses enclosing the parameter may be omitted. */

// the same function, without the parameter parentheses
const tripler = item => item * 3;

/*It is possible to pass more than one argument into an arrow function. */

// multiplies the first input value by the second and returns it
const multiplier = (item, multi) => item * multi;
multiplier(4, 2); // returns 8
//========================================================================================================================================

// Set Default Parameters for Your Functions

/*
In order to help us create more flexible functions, ES6 introduces default parameters for functions.
Check out this code:
*/

const greeting = (name = "Anonymous") => "Hello " + name;

console.log(greeting("John"));
console.log(greeting());

/*
The default parameter kicks in when the argument is not specified (it is undefined). As you can see in the example above, the parameter name will receive its default value "Anonymous" when you do not provide a value for the parameter. You can add default values for as many parameters as you want.
*/
//========================================================================================================================================

// Use the Rest Parameter with Function Parameters

/*
In order to help us create more flexible functions, ES6 introduces the rest parameter for function parameters. With the rest parameter, you can create functions that take a variable number of arguments. These arguments are stored in an array that can be accessed later from inside the function.
Check out this code:
*/

function howMany(...args) {
    return "You have passed " + args.length + " arguments.";
}
console.log(howMany(0, 1, 2));
console.log(howMany("string", null, [1, 2, 3], {}));

/*
The rest parameter eliminates the need to check the args array and allows us to apply map(), filter() and reduce() on the parameters array.
*/

const sum = (...args) => args.reduce((a, b) => a + b, 0);

let result = sum(1, 2, 3, 4, 5, 7);
console.log(result);
//========================================================================================================================================

// Use the Spread Operator to Evaluate Arrays In-Place

/*
ES6 introduces the spread operator, which allows us to expand arrays and other expressions in places where multiple parameters or elements are expected.
The ES5 code below uses apply() to compute the maximum value in an array:
*/

var arr = [6, 89, 3, 45];
var maximus = Math.max.apply(null, arr);

/*
We had to use Math.max.apply(null, arr) because Math.max(arr) returns NaN. Math.max() expects comma-separated arguments, but not an array. The spread operator makes this syntax much better to read and maintain.
*/

const arr1 = [6, 89, 3, 45];
const maximus1 = Math.max(...arr);

/*
...arr returns an unpacked array. In other words, it spreads the array. However, the spread operator only works in-place, like in an argument to a function or in an array literal. The following code will not work:
*/

// const spreaded = ...arr; // will throw a syntax error
//========================================================================================================================================

// Use Destructuring Assignment to Extract Values from ObjectsPassed

/*
Destructuring assignment is special syntax introduced in ES6, for neatly assigning values taken directly from an object.
Consider the following ES5 code:
*/

const user = { name: 'John Doe', age: 34 };

const name = user.name; // name = 'John Doe'
const age = user.age; // age = 34


/*Here's an equivalent assignment statement using the ES6 destructuring syntax: */

// const { name, age } = user;
// name = 'John Doe', age = 34

/*
Here, the name and age variables will be created and assigned the values of their respective values from the user object. You can see how much cleaner this is.
You can extract as many or few values from the object as you want.
*/
//========================================================================================================================================

// Use Destructuring Assignment to Assign Variables from Objects

/*
Destructuring allows you to assign a new variable name when extracting values. You can do this by putting the new name after a colon when assigning the value.
Using the same object from the last example:
*/

const user1 = { name: 'John Doe', age: 34 };

/*Here's how you can give new variable names in the assignment:*/

const { name: userName, age: userAge } = user;
// userName = 'John Doe', userAge = 34

/*
You may read it as "get the value of user.name and assign it to a new variable named userName" and so on.
*/
//========================================================================================================================================

// Use Destructuring Assignment to Assign Variables from Nested Objects

/*
You can use the same principles from the previous two lessons to destructure values from nested objects.
Using an object similar to previous examples:
*/

const user2 = {
    johnDoe: {
        age: 34,
        email: 'johnDoe@freeCodeCamp.com'
    }
};

/*
Here's how to extract the values of object properties and assign them to variables with the same name:
*/

// const { johnDoe: { age, email } } = user;

/*
And here's how you can assign an object properties' values to variables with different names:
*/

// const { johnDoe: { age: userAge, email: userEmail } } = user;

const LOCAL_FORECAST = {
    yesterday: { low: 61, high: 75 },
    today: { low: 64, high: 77 },
    tomorrow: { low: 68, high: 80 }
};

const { today: { low: lowToday, high: highToday } } = LOCAL_FORECAST;
//========================================================================================================================================

function swap(a, b) {
    return [a, b] = [b, a];
}

let moreResult = swap(5, 7);
console.log(moreResult);
//========================================================================================================================================

const source = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// function removeFirstTwo(list) {
//     const [a, b, ...arr] = list;
//     let moreArrays = arr;
//     return moreArrays;
// }

function removeFirstTwo(list) {
    let [a, b, ...moreArrays] = list;
    return moreArrays;
}

const moreArrays = removeFirstTwo(source);
console.log(moreArrays);
//========================================================================================================================================

// Use Destructuring Assignment to Pass an Object as a Function's Parameters

/*
In some cases, you can destructure the object in a function argument itself.
Consider the code below:
*/

const profileUpdate = (profileData) => {
    const { name, age, nationality, location } = profileData;
    // do something with these variables
}

/*
This effectively destructures the object sent into the function. This can also be done in-place:
*/

const newProfileUpdate = ({ name, age, nationality, location }) => {
    /* do something with these fields */
}

/*
When profileData is passed to the above function, the values are destructured from the function parameter for use within the function.
*/

const stats = {
    max: 56.78,
    standard_deviation: 4.34,
    median: 34.54,
    mode: 23.87,
    min: -0.75,
    average: 35.85
};

// Only change code below this line
const half = ({ max, min }) => (max + min) / 2.0;
// Only change code above this line
console.log(half);
//========================================================================================================================================

/*
A new feature of ES6 is the template literal. This is a special type of string that makes creating complex strings easier.
Template literals allow you to create multi-line strings and to use string interpolation features to create strings.
Consider the code below:
*/

const person = {
    name: "Zodiac Hasbro",
    age: 56
};

const hail = `Hello, my name is ${person.name}!
  I am ${person.age} years old.`;

console.log(hail);

/*
A lot of things happened there. Firstly, the example uses backticks (`), not quotes (' or "), to wrap the string. Secondly, notice that the string is multi-line, both in the code and the output. This saves inserting \n within strings. The ${variable} syntax used above is a placeholder. Basically, you won't have to use concatenation with the + operator anymore. To add variables to strings, you just drop the variable in a template string and wrap it with ${ and }. Similarly, you can include other expressions in your string literal, for example ${a + b}. This new way of creating strings gives you more flexibility to create robust strings.
*/

[
    '<li class="text-warning">no-var</li>',
    '<li class="text-warning">var-on-top</li>',
    '<li class="text-warning">linebreak</li>'
]

const anyResults = {
    success: ["max-length", "no-amd", "prefer-arrow-functions"],
    failure: ["no-var", "var-on-top", "linebreak"],
    skipped: ["no-extra-semi", "no-dup-keys"]
};
function makeList(arr) {
    const failureItems = [];
    for (let i = 0; i < arr.length; i++) {
        failureItems.push(
            `<li class="text-warning">${arr[i]}</li>`
        );
    }
    return failureItems;
}

const failuresList = makeList(anyResults.failure);
console.log(failuresList);

//========================================================================================================================================

// Write Concise Object Literal Declarations Using Object Property Shorthand

/*
ES6 adds some nice support for easily defining object literals.
Consider the following code:
*/

const getMousePosition = (x, y) => ({
    x: x,
    y: y
});

/*
getMousePosition is a simple function that returns an object containing two properties. ES6 provides the syntactic sugar to eliminate the redundancy of having to write x: x. You can simply write x once, and it will be converted tox: x (or something equivalent) under the hood. Here is the same function from above rewritten to use this new syntax:
*/

const getOtherMousePosition = (x, y) => ({ x, y });

const createPerson = (name, age, gender) => {
    return {
        name,
        age,
        gender
    };
};

console.log(createPerson("Zodiac Hasbro", 56, "male"));
//========================================================================================================================================

// Write Concise Declarative Functions with ES6

/*
When defining functions within objects in ES5, we have to use the keyword function as follows:
*/

const anotherperson = {
    name: "Taylor",
    sayHello: function () {
        return `Hello! My name is ${this.name}.`;
    }
};

/*
With ES6, You can remove the function keyword and colon altogether when defining functions in objects. Here's an example of this syntax:
*/

const anotherAnotherPerson = {
    name: "Taylor",
    sayHello() {
        return `Hello! My name is ${this.name}.`;
    }
};
//========================================================================================================================================

// Use class Syntax to Define a Constructor Function

/*
ES6 provides a new syntax to create objects, using the class keyword.
It should be noted that the class syntax is just syntax, and not a full-fledged class-based implementation of an object-oriented paradigm, unlike in languages such as Java, Python, Ruby, etc.
In ES5, we usually define a constructor function and use the new keyword to instantiate an object.
*/

var SpaceShuttle = function (targetPlanet) {
    this.targetPlanet = targetPlanet;
}
var zeus = new SpaceShuttle('Jupiter');

/*The class syntax simply replaces the constructor function creation: */

class AnotherSpaceShuttle {
    constructor(targetPlanet) {
        this.targetPlanet = targetPlanet;
    }
}
const thor = new SpaceShuttle('Saturn');

/*
It should be noted that the class keyword declares a new function, to which a constructor is added. This constructor is invoked when new is called to create a new object.
Notes:

* UpperCamelCase should be used by convention for ES6 class names, as in SpaceShuttle used above.
* The constructor method is a special method for creating and initializing an object created with a class. You will learn more about it in the  Object Oriented Programming section of the JavaScript Algorithms And Data Structures Certification.
*/
//========================================================================================================================================

// Use getters and setters to Control Access to an Object

/*
You can obtain values from an object and set the value of a property within an object.
These are classically called getters and setters.
Getter functions are meant to simply return (get) the value of an object's private variable to the user without the user directly accessing the private variable.
Setter functions are meant to modify (set) the value of an object's private variable based on the value passed into the setter function. This change could involve calculations, or even overwriting the previous value completely.
*/

class Book {
    constructor(author) {
        this._author = author;
    }
    // getter
    get writer() {
        return this._author;
    }
    // setter
    set writer(updatedAuthor) {
        this._author = updatedAuthor;
    }
}
const novel = new Book('anonymous');
console.log(novel.writer);
novel.writer = 'newAuthor';
console.log(novel.writer);

/*
Notice the syntax used to invoke the getter and setter. They do not even look like functions. Getters and setters are important because they hide internal implementation details. Note: It is convention to precede the name of a private variable with an underscore (_). However, the practice itself does not make a variable private.
*/

// Only change code below this line
class Thermostat {
    constructor(temp) {
        this._temp = temp;
    }

    get temperature() {
        return 5 / 9 * (this._temp - 32);
    }

    set temperature(temp) {
        this._temp = temp * 9.0 / 5 + 32;
    }
}


const thermos = new Thermostat(76);
let temp = thermos.temperature;
console.log(temp);
thermos.temperature = 26;
temp = thermos.temperature;
console.log(temp);
//========================================================================================================================================

// Off Topic
// Example of Dynamic Programming:
// Memoization:

const fib = (num, memo = {}) => {
    if (num in memo) return memo[num];
    if (num <= 2) return 1;
    memo[num] = fib(num - 1, memo) + fib(num - 2, memo);
    return memo[num];
}

const moreMoreResult = fib(1080);
console.log(moreMoreResult);
//========================================================================================================================================

// Create a Module Script

/*
JavaScript started with a small role to play on an otherwise mostly HTML web. Today, it’s huge, and some websites are built almost entirely with JavaScript. In order to make JavaScript more modular, clean, and maintainable; ES6 introduced a way to easily share code among JavaScript files. This involves exporting parts of a file for use in one or more other files, and importing the parts you need, where you need them. In order to take advantage of this functionality, you need to create a script in your HTML document with a type of module. Here’s an example:
*/

// <script type="module" src="filename.js"></script>

/*
A script that uses this module type can now use the import and export features you will learn about in the upcoming challenges.
*/
//========================================================================================================================================

// Use export to Share a Code Block

/*
Imagine a file called math_functions.js that contains several functions related to mathematical operations. One of them is stored in a variable, add, that takes in two numbers and returns their sum. You want to use this function in several different JavaScript files. In order to share it with these other files, you first need to export it.
*/

export const addMore = (x, y) => {
    return x + y;
}

/*
The above is a common way to export a single function, but you can achieve the same thing like this:
*/

const add = (x, y) => {
    return x + y;
}

// export { add };

/*
When you export a variable or function, you can import it in another file and use it without having to rewrite the code. You can export multiple things by repeating the first example for each thing you want to export, or by placing them all in the export statement of the second example, like this:
*/

// export { add, subtract };
//========================================================================================================================================

// Reuse JavaScript Code Using import

/*
import allows you to choose which parts of a file or module to load. In the previous lesson, the examples exported add from the math_functions.js file. Here's how you can import it to use in another file:
*/

// import { add } from './math_functions.js';

/*
Here, import will find add in math_functions.js, import just that function for you to use, and ignore the rest. The ./ tells the import to look for the math_functions.js file in the same folder as the current file. The relative file path (./) and file extension (.js) are required when using import in this way.
You can import more than one item from the file by adding them in the import statement like this:
*/

// import { add, subtract } from './math_functions.js';
//========================================================================================================================================

// Create an Export Fallback with export defaultPassed

/*
In the export lesson, you learned about the syntax referred to as a named export. This allowed you to make multiple functions and variables available for use in other files.

There is another export syntax you need to know, known as export default. Usually you will use this syntax if only one value is being exported from a file. It is also used to create a fallback value for a file or module.

Below are examples using export default:

// named function
export default function add(x, y) {
  return x + y;
}

// anonymous function
export default function(x, y) {
  return x + y;
}

Since export default is used to declare a fallback value for a module or file, you can only have one value be a default export in each module or file. Additionally, you cannot use export default with var, let, or const

*/
//========================================================================================================================================

/*
Import a Default ExportPassed

In the last challenge, you learned about export default and its uses. To import a default export, you need to use a different import syntax. In the following example, add is the default export of the math_functions.js file. Here is how to import it:

import add from "./math_functions.js";

The syntax differs in one key place. The imported value, add, is not surrounded by curly braces ({}). add here is simply a variable name for whatever the default export of the math_functions.js file is. You can use any name here when importing a default.

*/
//========================================================================================================================================

// Create a JavaScript Promise

/*
A promise in JavaScript is exactly what it sounds like - you use it to make a promise to do something, usually asynchronously. When the task completes, you either fulfill your promise or fail to do so. Promise is a constructor function, so you need to use the new keyword to create one. It takes a function, as its argument, with two parameters - resolve and reject. These are methods used to determine the outcome of the promise. The syntax looks like this:

const myPromise = new Promise((resolve, reject) => {

});

*/
//========================================================================================================================================

// Complete a Promise with resolve and reject

/*
A promise has three states: pending, fulfilled, and rejected. The promise you created in the last challenge is forever stuck in the pending state because you did not add a way to complete the promise. The resolve and reject parameters given to the promise argument are used to do this. resolve is used when you want your promise to succeed, and reject is used when you want it to fail. These are methods that take an argument, as seen below.

const myPromise = new Promise((resolve, reject) => {
  if(condition here) {
    resolve("Promise was fulfilled");
  } else {
    reject("Promise was rejected");
  }
});

The example above uses strings for the argument of these functions, but it can really be anything. Often, it might be an object, that you would use data from, to put on your website or elsewhere.
*/
//========================================================================================================================================

// Handle a Fulfilled Promise with thenPassed

/*
Promises are most useful when you have a process that takes an unknown amount of time in your code (i.e. something asynchronous), often a server request. When you make a server request it takes some amount of time, and after it completes you usually want to do something with the response from the server. This can be achieved by using the then method. The then method is executed immediately after your promise is fulfilled with resolve. Here’s an example:

myPromise.then(result => {
  // do something with the result.
});

result comes from the argument given to the resolve method.
*/
//========================================================================================================================================

// Handle a Rejected Promise with catchPassed

/*
catch is the method used when your promise has been rejected. It is executed immediately after a promise's reject method is called. Here’s the syntax:

myPromise.catch(error => {
  // do something with the error.
});

error is the argument passed in to the reject method.
*/
//========================================================================================================================================

