'use strict';

const test = require('../test.js');

const cases = [
  [['---->---<'], 2],
  [['----<-->---'], -1],
  [['----><-----'], 1],
  [['>>>>--<<<<<<<<<<<<<<<<<<<<'], 2],
  [
    [
      '>---------------<--------------------------<-------->---------<------->----------<----<---->>----------<------->>>---------------<<------>',
    ],
    5,
  ],
  [['--->-<------->----<-'], 1],
];

module.exports = test(cases);

/*
const assert = require('node:assert');
const { contact } = require('./1-solution.js');

try {
  // Check for combination "---->---<"
  assert.strictEqual(
    contact('---->---<'),
    2,
    `Incorrect answer for hallway: "---->---<": expected 2 returned ${contact(
      '---->---<'
    )} `
  );
  console.log('Test 1 passed');
  // Check for combination "----<-->---"
  assert.strictEqual(
    contact('----<-->---'),
    -1,
    `Incorrect answer for hallway: "----<-->---": expected -1 returned ${contact(
      '----<-->---'
    )} `
  );
  console.log('Test 2 passed');

  // Check for combination "----><-----"
  assert.strictEqual(
    contact('----><-----'),
    1,
    `Incorrect answer for hallway: "----><-----": expected 1 returned ${contact(
      '----><-----'
    )} `
  );
  console.log('Test 3 passed');

  // Check for combination ">>>>--<<<<<<<<<<<<<<<<<<<<"
  assert.strictEqual(
    contact('>>>>--<<<<<<<<<<<<<<<<<<<<'),
    2,
    `Incorrect answer for hallway: ">>>>--<<<<<<<<<<<<<<<<<<<<": expected 2 returned ${contact(
      '>>>>--<<<<<<<<<<<<<<<<<<<<'
    )} `
  );
  console.log('Test 4 passed');

  // Check for combination ">---------------<--------------------------<-------->---------<------->----------<----<---->>----------<------->>>---------------<<------>"
  assert.strictEqual(
    contact(
      '>---------------<--------------------------<-------->---------<------->----------<----<---->>----------<------->>>---------------<<------>'
    ),
    5,
    `Incorrect answer for hallway: ">---------------<--------------------------<-------->---------<------->----------<----<---->>----------<------->>>---------------<<------>": expected 5 returned ${contact(
      '>---------------<--------------------------<-------->---------<------->----------<----<---->>----------<------->>>---------------<<------>'
    )} `
  );
  console.log('Test 5 passed');

  // Check for combination '--->-<------->----<-'
  assert.strictEqual(
    contact('--->-<------->----<-'),
    1,
    `Incorrect answer for hallway: '--->-<------->----<-': expected 1 returned ${contact(
      '--->-<------->----<-'
    )} `
  );
  console.log('Test 6 passed');
} catch (error) {
  console.error(`Test failed: ${error.message} `);
}

*/
