'use strict';

const score = (dice) => {
  const scoreDice = {
    1: [1000, 100, 100],
    2: [200, 0, 0],
    3: [300, 0, 0],
    4: [400, 0, 0],
    5: [500, 50, 50],
    6: [600, 0, 0],
  };

  const counts = dice.reduce((acc, item) => {
    acc[item] = (acc[item] || 0) + 1;
    return acc;
  }, {});

  let scoreResult = 0;

  for (let [number, count] of Object.entries(counts)) {
    if (count >= 3) {
      scoreResult += scoreDice[number][0];
      count -= 3;
    }
    if (count > 1) {
      scoreResult += scoreDice[number][1];
    }
    if (count > 0) {
      scoreResult += scoreDice[number][2];
    }
  }

  return scoreResult;
};

module.exports = { score };

console.log(score([2, 3, 4, 6, 2]));

/* 

Three 1's => 1000 points
 Three 6's =>  600 points
 Three 5's =>  500 points
 Three 4's =>  400 points
 Three 3's =>  300 points
 Three 2's =>  200 points
 One   1   =>  100 points
 One   5   =>   50 point

 */
