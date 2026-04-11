//Polyfill for Array.prototype.findLast
//Return last element matching a condition

Array.prototype.myFindLast = function(cbFn, thisArg) {
  if (typeof cbFn !== 'function') throw new TypeError("Callback is not a function");

  for(let i =this.length-1; i>=0; i--) {
    if (i in this && cbFn.call(thisArg, this[i], i, this)) {
      return this[i];
    }
  }
  // If no element matches, return undefined
  return undefined;
}

const arr = [1,2,3,4,5];
console.log(arr.myFindLast(item => item > 4));
