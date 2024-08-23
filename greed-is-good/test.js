'use strict';

const assert = require('node:assert');

const { score } = require('./1-solution');

try {
  // Check for combination [2, 3, 4, 6, 2]
  assert.strictEqual(
    score([2, 3, 4, 6, 2]),
    0,
    `Incorrect answer for dice = [2, 3, 4, 6, 2] expected 0 returned ${score([
      2, 3, 4, 6, 2,
    ])}`
  );

  // Check for combination [1, 1, 1, 1, 1]
  assert.strictEqual(
    score([1, 1, 1, 1, 1]),
    1200,
    `Incorrect answer for dice = [1, 1, 1, 1, 1] expected 1200 returned ${score(
      [1, 1, 1, 1, 1]
    )}`
  );

  // Check for combination [1, 1, 1, 1, 3]
  assert.strictEqual(
    score([1, 1, 1, 1, 3]),
    1100,
    'Incorrect answer for dice = [1, 1, 1, 1, 3]'
  );

  // Check for combination [1, 1, 1, 5, 4]
  assert.strictEqual(
    score([1, 1, 1, 5, 4]),
    1050,
    'Incorrect answer for dice = [1, 1, 1, 5, 4]'
  );

  // Check for combination [1, 1, 1, 5, 5]
  assert.strictEqual(
    score([1, 1, 1, 5, 5]),
    1100,
    'Incorrect answer for dice = [1, 1, 1, 5, 5]'
  );

  // Check for combination [6, 6, 6, 1, 1]
  assert.strictEqual(
    score([6, 6, 6, 1, 1]),
    800,
    'Incorrect answer for dice = [6, 6, 6, 1, 1]'
  );

  // Check for combination [5, 5, 5, 5, 2]
  assert.strictEqual(
    score([5, 5, 5, 5, 2]),
    550,
    'Incorrect answer for dice = [5, 5, 5, 5, 2]'
  );

  // Check for combination [4, 4, 4, 2, 3]
  assert.strictEqual(
    score([4, 4, 4, 2, 3]),
    400,
    'Incorrect answer for dice = [4, 4, 4, 2, 3]'
  );

  // Check for combination [3, 3, 3, 3, 3]
  assert.strictEqual(
    score([3, 3, 3, 3, 3]),
    300,
    'Incorrect answer for dice = [3, 3, 3, 3, 3]'
  );

  // Check for combination [2, 2, 2, 2, 2]
  assert.strictEqual(
    score([2, 2, 2, 2, 2]),
    200,
    'Incorrect answer for dice = [2, 2, 2, 2, 2]'
  );

  // Check for combination [1, 5, 2, 4, 3]
  assert.strictEqual(
    score([1, 5, 2, 4, 3]),
    150,
    'Incorrect answer for dice = [1, 5, 2, 4, 3]'
  );

  // Check for combination [1, 1, 1, 6, 2]
  assert.strictEqual(
    score([1, 1, 1, 6, 2]),
    1000,
    'Incorrect answer for dice = [1, 1, 1, 6, 2]'
  );

  // Check for combination [6, 6, 6, 5, 5]
  assert.strictEqual(
    score([6, 6, 6, 5, 5]),
    700,
    'Incorrect answer for dice = [6, 6, 6, 5, 5]'
  );

  // Check for combination [3, 3, 3, 5, 1]
  assert.strictEqual(
    score([3, 3, 3, 5, 1]),
    450,
    'Incorrect answer for dice = [3, 3, 3, 5, 1]'
  );

  // Check for combination [4, 4, 4, 1, 1]
  assert.strictEqual(
    score([4, 4, 4, 1, 1]),
    600,
    'Incorrect answer for dice = [4, 4, 4, 1, 1]'
  );

  // Check for combination [5, 5, 5, 1, 1]
  assert.strictEqual(
    score([5, 5, 5, 1, 1]),
    700,
    'Incorrect answer for dice = [5, 5, 5, 1, 1]'
  );

  // Check for combination [2, 2, 2, 5, 1]
  assert.strictEqual(
    score([2, 2, 2, 5, 1]),
    350,
    'Incorrect answer for dice = [2, 2, 2, 5, 1]'
  );

  // Check for combination [2, 3, 4, 5, 1]
  assert.strictEqual(
    score([2, 3, 4, 5, 1]),
    150,
    'Incorrect answer for dice = [2, 3, 4, 5, 1]'
  );

  // Check for combination [1, 1, 5, 5, 2]
  assert.strictEqual(
    score([1, 1, 5, 5, 2]),
    300,
    'Incorrect answer for dice = [1, 1, 5, 5, 2]'
  );

  console.log('All tests passed!');
} catch (error) {
  console.error(`Test failed: ${error.message}`);
}
