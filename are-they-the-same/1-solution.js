'use strict';

/* 
const compareArray = (array1, array2) => {
  if (!Array.isArray(array1) || !Array.isArray(array2)) return false;
  const matchResult = [];
  // const badNumber = [];
  const length = array1.length;
  for (let i = 0; i < length; i++) {
    for (let j = 0; j < length; j++) {
      if (array1[i] === Math.sqrt(array2[j])) {
        console.log(`${array1[i]} =  ${array2[j]} / (${Math.sqrt(array2[j])})`);
        matchResult.push(i);
        array2.splice(j, 1);
        // console.dir({ j: array2[j] });
        break;
      }
      // else {
      //   return false;
      // }
    }
  }
  console.log(
    `${array1.length} / ${array1.length === matchResult.length} / ${
      matchResult.length
    }`
  );
  return matchResult.length === array1.length;
};


// const a = [2, 2, 3];
// const b = [4, 9, 9];

*/

const comp = (array1, array2) => {
  if (!Array.isArray(array1) || !Array.isArray(array2)) return false;
  const matchResult = [];
  const length = array1.length;
  for (let i = 0; i < length; i++) {
    for (let j = 0; j < length; j++) {
      if (array1[i] === Math.sqrt(array2[j])) {
        matchResult.push(i);
        array2.splice(j, 1);
        break;
      }
    }
  }
};

const a = [121, 144, 19, 161, 19, 144, 19, 11];
const b = [121, 14641, 20736, 361, 25921, 361, 20736, 361];

console.log(compareArray(a, b));
