function map(arr, callback, context) {
  var resultArr = [];
  for(var i in arr){
    if(arr.hasOwnProperty(i)){
      resultArr.push(callback.apply(context, [arr[i], i, arr]));
    }
  }
  return resultArr;
}

module.exports = map;
