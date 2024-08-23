'use strict';

const findChar = (array) => {
  let i = array[0].charCodeAt();
  array.map((char) => (char.charCodeAt() === i ? i++ : i));
  return String.fromCharCode(i);
};

console.dir({ result: findChar(['a', 'b', 'c', 'd', 'f']) });
