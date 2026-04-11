//Polyfill for Array.prototype.findLastIndex
//Return last index matching a condition

Array.prototype.myFindLastIndex = function(cbFn, thisArg) {
  if (typeof cbFn !== 'function') throw new TypeError("Callback is not a function");

  for(let i =this.length-1; i>=0; i--) {
    if (i in this && cbFn.call(thisArg, this[i], i, this)) {
      return i;
    }
  }
  // If no element matches, return undefined
  return -1;
}

const arr = [1,2,3,4,5];
console.log(arr.myFindLastIndex(item => item > 4));