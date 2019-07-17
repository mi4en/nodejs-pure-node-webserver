const EventEmitter = require('events');
const uuid = require('uuid');
const Person = require('./person');

console.log(uuid.v4());

class Logger extends EventEmitter {
	log(msg) {
		// Call event
		this.emit('message', { id: uuid.v4(), msg });
	}
}

const logger = new Logger();
logger.on('message', data => console.log('Called Listener: ', data));

logger.log('hello world');
logger.log('bye');
logger.log('just something');

const person1 = new Person('Scorpien', 1234);
person1.greeting();
console.log(person1);

module.exports = Logger;
