const Person = require('./person');
const Logger = require('./logger');

const logger = new Logger();
logger.on('message', data => console.log('Called Listener: ', data));

logger.log('hello world');
logger.log('bye');
logger.log('just something');

const person1 = new Person('Scorpien', 1234);
person1.greeting();
console.log(person1);
