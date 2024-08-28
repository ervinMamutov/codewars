'use strict';

const test = require('../test.js');

const cases = [
  [['a'], 'a'],
  [['stress'], 't'],
  [['moonmen'], 'e'],
  [['abba'], ''],
  [['aa'], ''],
  [['sTreSS'], 'T'],
];

module.exports = test(cases);
