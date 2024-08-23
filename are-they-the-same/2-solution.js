'use strict';

const compare = (array1, array2) => {
  if (array1 === null || array2 === null) return false;
  array1.sort((a, b) => a - b);
  array2.sort((a, b) => a - b);

  return array1.map((v) => v * v).every((v, i) => v === array2[i]);
};

const a = [121, 144, 19, 161, 19, 144, 19, 11];
const b = [121, 14641, 20736, 361, 25921, 361, 20736, 361];

console.log(compare(a, b));
