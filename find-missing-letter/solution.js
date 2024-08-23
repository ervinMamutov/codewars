'use strict';

const uppercaseLetters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z',
];

const lowercaseLetters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z',
];

const isUpperCase = (char) => char === char.toUpperCase();

const findLetter = (letters) => {
  if (isUpperCase(letters[0])) {
    // const missingLetter = [];
    let missingLetter = '';
    let count = 0;
    const indexUpperFirst = uppercaseLetters.indexOf(letters[0]);
    const indexUpperLast = uppercaseLetters.indexOf(
      letters[letters.length - 1]
    );

    for (let i = indexUpperFirst; i < indexUpperLast; i++) {
      if (uppercaseLetters[i] !== letters[count]) {
        missingLetter = uppercaseLetters[i];
        count--;
      }
      count++;
    }
    return missingLetter;
  } else {
    // const missingLetter = [];
    let missingLetter = '';

    let count = 0;
    const indexLowerFirst = lowercaseLetters.indexOf(letters[0]);
    const indexLowerLast = lowercaseLetters.indexOf(
      letters[letters.length - 1]
    );

    for (let i = indexLowerFirst; i < indexLowerLast; i++) {
      if (lowercaseLetters[i] !== letters[count]) {
        missingLetter = lowercaseLetters[i];
        count--;
      }
      count++;
    }
    return missingLetter;
  }
};

console.dir({ upper: findLetter(['O', 'Q', 'R', 'S']) });
console.dir({ lower: findLetter(['a', 'b', 'c', 'd', 'f']) });
