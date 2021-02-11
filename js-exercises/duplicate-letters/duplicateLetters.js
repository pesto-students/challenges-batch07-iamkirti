function duplicateLetters(...args) {
  const arguments1 = args[0];
  const chars = {};

  for (let char of arguments1) {
    if (!chars[char]) {
      chars[char] = 1;
    } else {
      chars[char]++;
    }
  }
  let max = 1;

  for (let i in chars) {
    if (chars[i] > max) {
      max = chars[i];
    }
  }
  if (max == 1) {
    return false;
  } else {
    return max;
  }
}

export { duplicateLetters };
