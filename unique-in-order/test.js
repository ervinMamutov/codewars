'use strict';

const test = require('../test.js');

const cases = [
  [['AAAABBBCCDAABBB'], ['A', 'B', 'C', 'D', 'A', 'B']],
  [['ABBCcAD'], ['A', 'B', 'C', 'c', 'A', 'D']],
  [
    [1, 2, 2, 3, 3],
    [1, 2, 3],
  ],
];

module.exports = test(cases);
