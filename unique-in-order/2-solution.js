'use strict';

const uniqueInOrder = (iterable) => {
  //your code here - remember iterable can be a string or an array

  return [...iterable].filter((a, i) => a !== iterable[i - 1]);
};

require('./test.js')(uniqueInOrder);
