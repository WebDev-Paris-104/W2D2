// 3 types of scopes
// General scope
// Block scopes
// function scopes

const hello = "hi"
console.log(hello, "in the global scope")

if (true) {
	// console.log(hello) This won't work, because we create a variable with the same name
	let hello = "What???"
	console.log("In a block scope, shadwing the hello variable: ", hello)
}

console.log(hello, "In the global scope again")

const anotherVariable = 7

if (true) {
	console.log(anotherVariable)
	const aNestedVariable = true
}
// Cannot access a variable from an other scope
// console.log(aNestedVariable)

let myArray = ["cat", "dog", "bird", "horse"]

function sayHi(array) {
	array = ["alligator", "giraffe"]

	array.forEach((el) => console.log("Hi ", el))
}

sayHi(myArray)

let result

console.log("Before function call", result)
sum(3, 5)

console.log("After function call", result)

function doSomething(array1) {}
function doSomethingElse(array2) {}

// var i = 0

// var i = 5
// var index = "a string"

// for (var index = 0; index < 5; index++) {}

// console.log(index)

// console.log(aVarVariable)
// var aVarVariable = "Damn that's weird."

function sum(a, b) {
	let result
	result = a + b
	if (result < 10) {
		const result = 25
		if (true) {
			console.log(result)
		}
	}
}

console.log(square(5))
// let myArray = ["cat", "dog", "bird", "horse"]

console.log(myArray.filter(getElementsWithO))

function getElementsWithO(element) {
	return !element.includes("o")
}

// myFunFunFunction("Lucky luke")
// A function created as a variable won't be hoisted
/**
 * const aFunction = () => {}
 *
 * const anotherFunction = function () {}
 *
 */

// const myFunFunFunction = (name) => `Howdy ${name}`
function square(num) {
	insideSquare()
	function insideSquare() {}
	return multiply(num)
}

function multiply(num) {
	return num * num
}

function addToNumber(increment) {
	let baseValue = 5
	function add() {
		return (baseValue += increment)
	}
	return add
}
const aFunctionReturnedByAFunction = addToNumber(2)
console.log(aFunctionReturnedByAFunction())
console.log(aFunctionReturnedByAFunction())
console.log(aFunctionReturnedByAFunction())
console.log(aFunctionReturnedByAFunction())
