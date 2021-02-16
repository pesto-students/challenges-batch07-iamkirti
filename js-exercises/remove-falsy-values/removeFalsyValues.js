function removeFalsyValues(array) {
  const falsyValues = [false, null, 0, NaN, undefined, ""];
  let newArray = [];
  for (const i of array) {
    if (falsyValues.includes(i)) {
    } else {
      newArray.push(i);
    }
  }
  return newArray;
}

export { removeFalsyValues };
