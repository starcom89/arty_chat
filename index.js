'use strict';

const operations = require('./operations');

const GREETING_MESSAGE = 'Hello, Arthy! Enter command name and args!';

console.log(GREETING_MESSAGE);

process.stdin.on('data', data => {
    const [ operation, argNumber1, argNumber2 ] = parseInput(data);
    const currentOperation = operations[operation];
    const result = currentOperation(argNumber1, argNumber2);
    console.log(`operation: ${operation}; args: ${argNumber1}, ${argNumber2}; result: ${result}`);
    console.log(GREETING_MESSAGE);
});

function parseInput(data) {
    const [ operation, arg1, arg2 ] = data.toString().split(',');
    const argNumber1 = parseInt(arg1, 10);
    const argNumber2 = parseInt(arg2, 10);

    return [ operation, argNumber1, argNumber2 ];
}