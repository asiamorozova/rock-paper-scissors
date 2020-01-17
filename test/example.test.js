// IMPORT MODULES under test here:
// import example from '../src/example.js';
import checkResults from '../checkResults.js'


const test = QUnit.test;
QUnit.module('checkResults');

test('Rock beats scissors', assert => {
    const player = 'rock';
    const computer = 'scissors';
    const expected = 'win';
    const result = checkResults(computer, player);
    assert.equal(result, expected);
});

test('Lose', assert => {
    const player = 'rock';
    const computer = 'paper';
    const expected = 'lose';
    const result = checkResults(computer, player);
    assert.equal(result, expected);
});

test('Draw', assert => {
    const player = 'scissors';
    const computer = 'scissors';
    const expected = 'draw'
    const result = checkResults(computer, player);
    assert.equal(result, expected);
});


//Arrange
// Set up your parameters and expectations

//Act 
// Call the function you're testing and set the result to a const

//Assert
// Make assertions about what is expected valid result
