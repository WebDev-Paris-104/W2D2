class Fridge {
	constructor() {
		this.items = []
	}
	addFood(food) {
		this.items.push(food)
	}

	// Get food method : get a food by it's name

	findByName(name) {
		const foundFood = this.items.find((element) => {
			return element.name === name
		})
		return foundFood
	}

	// Get the total amount of foods in my fridge

	getTotalQuantity() {
		const total = this.items.reduce((acc, val) => {
			return acc + val.quantity
		}, 0)
		console.log(total)
	}
}

class Food {
	constructor(name, quantity) {
		this.name = name
		this.quantity = quantity
	}

	changeName(newName) {
		this.name = newName
	}
}

const myFridge = new Fridge()
const kiwis = new Food("Kiwi", 3)
const avocado = new Food("Avocado", 2)
avocado.changeName("Avocadi")
const pepperoni = new Food("Pepperoni", 3)

console.log(avocado)
myFridge.addFood(kiwis)
myFridge.addFood(avocado)
myFridge.addFood(pepperoni)

myFridge.findByName("Banana")

myFridge.getTotalQuantity()

class War {
	constructor() {
		this.saxonArmy = []
		this.vikingArmy = []
	}

	getVikingNames() {
		return this.vikingArmy.map((vik) => vik.name)
	}

	// vikingAttack() {
	// 	const randomVikingIndex = Math.floor(Math.random() * this.vikingArmy.length)
	// 	const randomSaxonIndex = Math.floor(Math.random() * this.saxonArmy.length)
	// 	const randomViking = this.vikingArmy[randomVikingIndex]
	// 	const randomSaxon = this.saxonArmy[randomSaxonIndex]

	// 	const battleResult = randomSaxon.receiveDamage(randomViking.strength)

	// 	if (randomSaxon.health <= 0) {
	// 		this.saxonArmy.splice(this.saxonArmy.indexOf(randomSaxon), 1)
	// 	}
	// 	return battleResult
	// }
	// saxonAttack() {
	// 	const randomVikingIndex = Math.floor(Math.random() * this.vikingArmy.length)
	// 	const randomSaxonIndex = Math.floor(Math.random() * this.saxonArmy.length)
	// 	const randomViking = this.vikingArmy[randomVikingIndex]
	// 	const randomSaxon = this.saxonArmy[randomSaxonIndex]

	// 	const battleResult = randomViking.receiveDamage(randomSaxon.strength)
	// 	// A saxon was hit and died  ||  The saxon got hit for x damage
	// 	if (randomViking.health <= 0) {
	// 		this.vikingArmy.splice(randomVikingIndex, 1)
	// 	}
	// 	return battleResult
	// }

	attack(attackingArmy, defendingArmy) {
		const randomAttackerIndex = Math.floor(Math.random() * attackingArmy.length)
		const randomDefenderIndex = Math.floor(Math.random() * defendingArmy.length)
		const randomAttacker = attackingArmy[randomAttackerIndex]
		const randomDefender = defendingArmy[randomDefenderIndex]

		const battleResult = randomDefender.receiveDamage(randomAttacker.strength)
		// A saxon was hit and died  ||  The saxon got hit for x damage
		if (randomDefender.health <= 0) {
			attackingArmy.splice(randomDefenderIndex, 1)
		}
		return battleResult
	}
}

const war = new War()
//   Attacker   ,   Defender
console.log(war.attack(war.vikingArmy, war.saxonArmy))
war.attack(war.saxonArmy, war.vikingArmy)

const myArray = ["computer", "vikings", "sun", "car"]

function getARandomElement() {
	const randomEl = myArray[Math.floor(Math.random() * myArray.length)]
	console.log(randomEl, myArray.indexOf(randomEl))
	console.log(randomEl)
}
getARandomElement()
getARandomElement()
getARandomElement()
