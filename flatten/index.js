function flatten (args){
  var array = [];
  for(var i in args) {
    if(args.hasOwnProperty(i)) {
      if(Object.prototype.toString.call(args[i]) === "[object Array]") {
        array = array.concat(flatten(args[i]));
      } else {
        array.push(args[i]);
      }
    }
  }
  return array;
}

module.exports = flatten;
