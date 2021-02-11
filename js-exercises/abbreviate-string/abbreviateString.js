import { isString } from "util";

function abbreviateString(str) {
  const str1 = str.split(" ");

  const first = str1[0];

  const first1 = first.charAt(0).toUpperCase() + first.slice(1);
  const last = str1.pop().charAt(0).toUpperCase() + ".";
  const abbr = first1 + " " + last;
  return abbr;
}

export { abbreviateString };
