module.exports = function debounce(funct, delayTime) {
  var startTime;
  var args;
  var ctx;
  var func = funct;
  var delTime = delayTime;
  var timeoutPromise;

  return function () {
    var now = Date.now();
    if(!startTime) {
      startTime = now;
      args = arguments;
      ctx = this;
      timeoutPromise = setTimeout(function() {
        func.apply(ctx, args);
        startTime = undefined;
      }, delTime);
    } else if(startTime + delTime >= now) {
      clearTimeout(timeoutPromise);
      args = arguments;
      ctx = this;
      timeoutPromise = setTimeout(function() {
        func.apply(ctx, args);
        startTime = undefined;
      }, startTime - now + delTime);
    }
  }
}
