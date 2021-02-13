const sumEvenArgs = (...args) => {
  const filteredarguments = args.filter((number) => number % 2 === 0);
  const sumevenargs = filteredarguments.reduce(
    (total, currentargument) => total + currentargument,
    0
  );

  return sumevenargs;
};

export { sumEvenArgs };
