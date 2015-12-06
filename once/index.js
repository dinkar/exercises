function once (func) {
  var isCalled = false;
  return function() {
    if(!isCalled) {
        isCalled = true;
        func.apply(this, arguments);
    }
  }
}

module.exports = once;
