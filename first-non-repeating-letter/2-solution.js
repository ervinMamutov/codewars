function firstNonRepeatingLetter(s) {
  // Add your code here
  const chars = s.toLowerCase();

  for (let i = 0; i < chars.length; i++) {
    if (chars.indexOf(chars[i]) === chars.lastIndexOf(chars[i])) return s[i];
  }

  return '';
}

require('./test.js')(firstNonRepeatingLetter);
