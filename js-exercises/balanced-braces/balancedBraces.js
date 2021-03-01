function balancedBraces(args) {
  const stack1 = [];
  for (const i of args) {
    if (i === "{" || i === "(" || i === "[") {
      stack1.push(i);
    } else if (i === ")" || i === "}" || i === "]") {
      let top = stack1[stack1.length - 1];

      if (i === ")" && top === "(") {
        stack1.pop();
      } else if (i === "}" && top === "{") {
        stack1.pop();
      } else if (i === "]" && top === "[") {
        stack1.pop();
      } else {
        stack1.push(i);
      }
    } else {
    }
  }
  if (stack1.length === 0) {
    return true;
  } else {
    return false;
  }
}

export { balancedBraces };
