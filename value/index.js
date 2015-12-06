module.exports = function value (arg) {
  if(typeof arg === 'function') {
    return value(arg());
  }
  return arg;
}
