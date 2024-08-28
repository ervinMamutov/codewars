function firstNonRepeatingLetter(s) {
  // Add your code here

  const theArray = [...s.toLowerCase()];

  const result = () => {
    for (let i = 0; i < theArray.length; i++) {
      const noDuplicate = theArray.filter((item) => theArray[i] === item);
      if (noDuplicate.length === 1) {
        return s[i];
      }
    }
  };

  if (result() !== undefined) {
    return result();
  } else {
    return '';
  }
}

require('./test.js')(firstNonRepeatingLetter);
