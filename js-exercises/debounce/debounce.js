function debounce(fn, timeInMs) {
  let timer;
  return function () {
    clearTimeout(timer);
    timer = setInterval(() => {
      fn.apply(this);
    }, timeInMs);
  };
}

export { debounce };
