//Polyfill for Array.prototype.find
//Return first element matching a condition

Array.prototype.myFind = function(cbFn, thisArg) {
  if (typeof cbFn !== 'function') throw new TypeError("Callback is not a function");

  for(let i =0; i<this.length; i++) {
    if (i in this && cbFn.call(thisArg, this[i], i, this)) {
      return this[i];
    }
  }
  // If no element matches, return undefined
  return undefined;
}

const arr = [1,2,3,4,5];
console.log(arr.myFind(item => item > 4));
