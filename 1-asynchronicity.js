function square(num) {
	return multiply(num)
}
function multiply(num) {
	return num * num
}
/**
 * setTimeout (function, delay)
 */
setTimeout(() => {
	console.log(square(7))
}, 1000)

console.log(square(5))

setTimeout(() => {
	console.log("I am executed")
}, 0)

console.log("Am i first or second?")

let i = 0
const intervalId = setInterval(() => {
	console.log(i++)
	if (i > 10) {
		console.log("Finished counting !")
		clearInterval(intervalId)
	}
}, 1000)

let newYearsEveCount = 5

const otherIntervalId = setInterval(() => {
	console.log(newYearsEveCount--, " !!!")
}, 1000)

clearInterval(otherIntervalId)
clearInterval(intervalId)

let time = 55
const timerId = setInterval(() => {
	if (time === 57) {
		clearInterval(timerId)
	}

	printTime(time)
	time++
}, 1000)

function printTime(currentTime) {
	const minutes = Math.floor(currentTime / 60)
	console.log(currentTime, minutes)
}

function sayHello(name) {
	return `Hello ${name}`
}

sayHello("Kath")
