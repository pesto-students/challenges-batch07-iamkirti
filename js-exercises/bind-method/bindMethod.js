// You can change the `args`
function bind(obj, fn) {
  return function binder(...args) {
    return fn.apply(obj, args);
  };
}

module.exports = { bind };
