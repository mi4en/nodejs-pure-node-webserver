class Person {
	constructor(name, age) {
		this.name = name;
		this.age = age;
	}

	greeting() {
		console.log(`Hello ${this.name} I am ${this.age} old.`);
	}
}

module.exports = Person;
