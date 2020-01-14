// Write the below function in five different forms. i.e
// 1. Function Decleration
// 2. Function Expression
// 3. Arrow Function Without Curly Braces
// 4. Arrow Function With Curly Braces
// 5. Function Invocation

// Example Start
/**
 * Converts a number a string.
 * @param {number} n
 * @return {string} the number as a string
 */

//Function Decleration
function convertToString(n) {
  return String(n);
}

// Function Expression
let convertToString1 = function(n) {
  return String(n);
}

// Arrow Function
let convertToString = n => String(n);

// Arrow Function With Curly Bracket

let convertToString = n => {
  return String(n);
}

// Function Invocation

convertToString(21); // "21"

// Example End






/**
 * Adds one to a given number.
 * @param {number} n
 * @return {number}
 */
// Start

//Function Decleration
function add1(n) {
  return n +1;
}

// Function Expression
let add1 = function(n) {
  return n + 1;
}

// Arrow Function
let add1 = n => n + 1;

// Arrow Function With Curly Bracket

let add1 = n => {
  return n + 1;
}

// Function Invocation

add1(25); // 26

// End







/**
 * Subtracts one from a given number.
 * @param {number} n
 * @return {number}
 */

//Start

//Function Decleration
function sub1(n) {
  return n - 1;
}

// Function Expression
let sub1 = function(n) {
  return n - 1;
}

// Arrow Function
let sub1 = n => n - 1;

// Arrow Function With Curly Bracket

let sub1 = n => {
  return n - 1;
}

// Function Invocation

sub1(21); // 20

// End






/**
 * Adds two numbers.
 * @param {number} x
 * @param {number} y
 * @return {number} the sum
 */
//Start

//Function Decleration
function addNums(x, y) {
  return x + y;
}

// Function Expression
let addNums = function(x, y) {
  return x + y;
}

// Arrow Function
let addNums = (x, y) => x + y;

// Arrow Function With Curly Bracket

let addNums = (x, y) => {
  return x + y;
}

// Function Invocation

addNums(21, 21); // 42

// End





/**
 * Subtracts the second number from the first.
 * @param {number} x
 * @param {number} y
 * @return {number} the difference
 */

//Start

//Function Decleration
function subNums(x, y) {
  return x - y;
}

// Function Expression
let subNums = function(x, y) {
  return x - y;
}

// Arrow Function
let subNums = (x, y) => x - y;

// Arrow Function With Curly Bracket

let subNums = (x, y) => {
  return x - y;
}

// Function Invocation

subNums(21, 21); // 0

// End





/**
 * Multiplies two numbers.
 * @param {number} x
 * @param {number} y
 * @return {number} the product
 */

//Start

//Function Decleration
function mulNums(x, y) {
  return x * y;
}

// Function Expression
let mulNums = function(x, y) {
  return x * y;
}

// Arrow Function
let mulNums = (x, y) => x * y;

// Arrow Function With Curly Bracket

let mulNums = (x, y) => {
  return x * y;
}

// Function Invocation

mulNums(2, 2); // 4

// End



/**
 * Divides the first number by the second.
 * @param {number} x
 * @param {number} y
 * @return {number} the quotient
 */

//Start

//Function Decleration
function divideNums(x, y) {
  return x / y;
}

// Function Expression
let divideNums = function(x, y) {
  return x / y;
}

// Arrow Function
let divideNums = (x, y) => x / y;

// Arrow Function With Curly Bracket

let divideNums = (x, y) => {
  return x / y;
}

// Function Invocation

divideNums(21, 21); // 1

// End




/**
 * Multiplies a number by itself.
 * @param {number} x, number to be squared
 * @return {number} squared
 */


//Start

//Function Decleration
function mulItself(x) {
  return x * x;
}

// Function Expression
let mulItself = function(x) {
  return x * x;
}

// Arrow Function
let mulItself = (x) => x * x;

// Arrow Function With Curly Bracket

let mulItself = (x) => {
  return x * x;
}

// Function Invocation

mulItself(2, 2); // 4

// End






/**
 * Performs a mathematical operation on two numbers.
 * Also prints out the equation: (i.e.) "1 + 5 = 6" or "8 / 2 = 4".
 * @param {string} operation "add", "subtract", "multiply", or "divide"
 * @param {number} x
 * @param {number} y
 * @return {number} the result
 */
//Start

//Function Decleration
function mathOperate(x, y) {
  switch (operation) {
    case "add":
      return `${x} + ${y} = ${x + y}`;
      break;
    case "subtract":
      return `${x} - ${y} = ${x - y}`;
      break;
    case "multiply":
      return `${x} * ${y} = ${x * y}`;
      break;
    case "divide":
      return `${x} / ${y} = ${x / y}`;
      break;
  }
}

// Function Expression
let mathOperate = function(x, y) {
  switch (operation) {
		case "add":
			return `${x} + ${y} = ${x + y}`;
			break;
		case "subtract":
			return `${x} - ${y} = ${x - y}`;
			break;
		case "multiply":
			return `${x} * ${y} = ${x * y}`;
			break;
		case "divide":
			return `${x} / ${y} = ${x / y}`;
			break;
	}
}

// Arrow Function With Curly Bracket

let mulItself = (x) => {
  switch (operation) {
		case "add":
			return `${x} + ${y} = ${x + y}`;
			break;
		case "subtract":
			return `${x} - ${y} = ${x - y}`;
			break;
		case "multiply":
			return `${x} * ${y} = ${x * y}`;
			break;
		case "divide":
			return `${x} / ${y} = ${x / y}`;
			break;
	}
}

// Function Invocation

mulItself(2, 2); // 4

// End






/**
 * Returns true if `a` is greater than `b`.
 * @param {number} a
 * @param {number} b
 * @return {boolean} `a` is larger than `b`
 */

//Start

//Function Decleration
function whoIsGreater(a, b) {
  return a > b;
}

// Function Expression
let whoIsGreater = function(a, b) {
  return a > b;
}

// Arrow Function
let whoIsGreater = (a, b) => a > b;

// Arrow Function With Curly Bracket

let mulItself = (a, b) => {
  return a > b;
}

// Function Invocation

mulItself(2, 3); // false

// End




/**
 * Returns true if `a` is less than `b`.
 * @param {number} a
 * @param {number} b
 * @return {boolean} `a` is smaller than `b`
 */
//Start

//Function Decleration
function whoIsSmaller(a, b) {
  return a < b;
}

// Function Expression
let whoIsSmaller = function(a, b) {
  return a < b;
}

// Arrow Function
let whoIsSmaller = (a, b) => a < b;

// Arrow Function With Curly Bracket

let mulItself = (a, b) => {
  return a < b;
}

// Function Invocation

mulItself(2, 3); // true

// End

 

/**
 * Returns true if `a` and `b` are equal.
 * @param {number} a
 * @param {number} b
 * @return {boolean} the numbers are equal
 */
//Start

//Function Decleration
function areEqual(a, b) {
  return a == b;
}

// Function Expression
let areEqual = function(a, b) {
  return a == b;
}

// Arrow Function
let areEqual = (a, b) => a == b;

// Arrow Function With Curly Bracket

let areEqual = (a, b) => {
  return a == b;
}

// Function Invocation

mulItself(2, 3); // false

// End


/**
 * Returns the smallest value of two numbers.
 * @param {number} x
 * @param {number} y
 * @return {number} the smallest number
 */
//Start

//Function Decleration
function whoIsSmallest(a, b) {
  if (a > b) {
    return `${b} is the smallest`;
  }
  else {
    return `${a} is the smallest`;
  }
}

// Function Expression
let whoIsSmallest = function(a, b) {
  if (a > b) {
		return `${b} is the smallest`;
	} else {
		return `${a} is the smallest`;
	}
}

// Arrow Function
let whoIsSmallest = (a, b) => a > b ? `${b} is smallest` : `${b} is smallest` ;

// Arrow Function With Curly Bracket

let mulItself = (a, b) => {
  if (a > b) {
		return `${b} is the smallest`;
	} else {
		return `${a} is the smallest`;
	}
}

// Function Invocation

mulItself(2, 3); // a is smallest

// End


/**
 * Returns the largest value of two numbers.
 * @param {number} x
 * @param {number} y
 * @return {number} the largest number
 */
//Start

//Function Decleration
function whoIsLargest(x, y) {
  if (x > y) {
    return `${x} is the largest`;
  }
  else {
    return `${y} is the largest`;
  }
}

// Function Expression
let whoIsLargest = function(x, y) {
  if (x > y) {
		return `${x} is the largest`;
	} else {
		return `${y} is the largest`;
	}
}

// Arrow Function
let whoIsLargest = (x, y) => a > b ? `${x} is largest` : `${y} is largest` ;

// Arrow Function With Curly Bracket

let whoIsLargest = (x, y) => {
  if (x > y) {
		return `${x} is the largest`;
	} else {
		return `${y} is the largest`;
	}
}

// Function Invocation

whoIsLargest(2, 3); // 3 is smallest

// End







/**
 * Returns true if `n` is even.
 * @param {number} n
 * @return {boolean} the number is even
 */
//Start

//Function Decleration
function isEven(n) {
  return n % 2 == 0;
}

// Function Expression
let isEven = function(n) {
  return n % 2 == 0;
}

// Arrow Function
let isEven = (n) => n % 2 == 0;

// Arrow Function With Curly Bracket

let isEven = (n) => {
  return n % 2 == 0;
}

// Function Invocation

isEven(2); // true

// End




/**
 * Returns true if `n` is odd.
 * @param {number} n
 * @return {boolean} the number is odd
 */
//Start

//Function Decleration
function isOdd(n) {
  return n % 2 != 0;
}

// Function Expression
let isOdd = function(n) {
  return n % 2 != 0;
}

// Arrow Function
let isOdd = (n) => n % 2 != 0;

// Arrow Function With Curly Bracket

let isOdd = (n) => {
  return n % 2 != 0;
}

// Function Invocation

isOdd(2); // false

// End

 

/**
 * Returns a letter grade.
 * "A": 90-100%
 * "B": 80-89%
 * "C": 70-79%
 * "D": 60-69%
 * "F": 0-59%
 * @param {number} score
 * @param {number} total maximum possible score
 * @return {string} the score represented as a letter grade
 */

//Start

//Function Decleration
function letterGrade(marks, maxMarks) {
  let percentage = ((marks / maxMarks) / 100);
  switch (percentage) {
		case percentage >= 90 && percentage <= 100:
			return `A`;
			break;
		case percentage >= 80 && percentage <= 89:
			return `B`;
			break;
		case percentage >= 70 && percentage <= 79:
			return `C`;
			break;
		case percentage >= 60 && percentage <= 69:
			return `D`;
      break;
    case percentage >= 0 && percentage <= 59:
      return `F`;
      break;
	}
}

// Function Expression
let letterGrade = function(marks, maxMarks) {
	let percentage = marks / maxMarks / 100;
	switch (percentage) {
		case percentage >= 90 && percentage <= 100:
			return `A`;
			break;
		case percentage >= 80 && percentage <= 89:
			return `B`;
			break;
		case percentage >= 70 && percentage <= 79:
			return `C`;
			break;
		case percentage >= 60 && percentage <= 69:
			return `D`;
			break;
		case percentage >= 0 && percentage <= 59:
			return `F`;
			break;
	}
};

// Arrow Function With Curly Bracket

let letterGrade = (marks, maxMarks) => {
  let percentage = marks / maxMarks / 100;
	switch (percentage) {
		case percentage >= 90 && percentage <= 100:
			return `A`;
			break;
		case percentage >= 80 && percentage <= 89:
			return `B`;
			break;
		case percentage >= 70 && percentage <= 79:
			return `C`;
			break;
		case percentage >= 60 && percentage <= 69:
			return `D`;
			break;
		case percentage >= 0 && percentage <= 59:
			return `F`;
			break;
	}
}

// Function Invocation

mulItself(2, 4); // F

// End




/**
 * Joins two strings with a space.
 * @param {string} word1
 * @param {string} word2
 * @return {string} joined the words joined with a space
 */

 //Start

//Function Decleration
function twoStringsAttached(string1, string2) {
  return `${string1} ${string2}`;
}

// Function Expression
let twoStringsAttached = function(string1, string2) {
  return `${string1} ${string2}`;
}

// Arrow Function
let twoStringsAttached = (string1, string2 ) => `${string1} ${string2}`;

// Arrow Function With Curly Bracket

let twoStringsAttached = (string1, string2) => {
  return `${string1} ${string2}`;
}

// Function Invocation

twoStringsAttached('Anas', `Ansari`); // "Anas Ansari"

// End
