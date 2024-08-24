'use strict';

const uniqueInOrder = (iterable) => {
  //your code here - remember iterable can be a string or an array

  if (!Array.isArray(iterable)) {
    var theArray = Array.from(iterable);
  } else {
    var theArray = iterable.slice();
  }
  if (theArray.length === 0) return [];
  let uniqElement = iterable[0];
  const newIterable = [];
  newIterable.push(uniqElement);

  for (let i = 1; i < theArray.length; i++) {
    if (theArray[i] !== uniqElement) {
      newIterable.push(theArray[i]);
      uniqElement = theArray[i];
    }
  }
  return newIterable;
};

require('./test.js')(uniqueInOrder);
