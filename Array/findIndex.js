//Polyfill for Array.prototype.findIndex
//Return first index matching a condition

Array.prototype.myFindIndex = function(cbFn, thisArg) {
  if (typeof cbFn !== 'function') throw new TypeError("Callback is not a function");

  for(let i =0; i<this.length; i++) {
    if (i in this && cbFn.call(thisArg, this[i], i, this)) {
      return i;
    }
  }
  // If no element matches, return -1
  return -1;
}

const arr = [1,2,3,4,5];
console.log(arr.myFindIndex(item => item > 4));
