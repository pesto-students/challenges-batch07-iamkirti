function rot13(...args) {
  const arg1 = args[0];
  let res13 = "";
  let ch2 = 0;
  for (const i of arg1) {
    const ch1 = i.charCodeAt(0);
    if (ch1 >= 78 && ch1 <= 90) {
      ch2 = ch1 - 13;
      res13 += String.fromCharCode(ch2);
    } else if (ch1 >= 65 && ch1 < 78) {
      ch2 = ch1 - 13 + 26;
      res13 += String.fromCharCode(ch2);
    } else {
      res13 += i;
    }
  }
  return res13;
}

export { rot13 };
