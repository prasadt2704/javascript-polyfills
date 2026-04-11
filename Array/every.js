//Polyfill for Array.prototype.every
//Check if all elements pass the test

Array.prototype.myEvery = function(cbFn, thisArg) {
  if (typeof cbFn !== 'function') throw new TypeError("Callback is not a function");

  for (let i = 0; i < this.length; i++) {
    if (i in this && !cbFn.call(thisArg, this[i], i, this)) {
      // Return false as soon as a condition is not met
      return false;
    }
  }

  //returns true if conditon was satisfied by all elements;
  return true;
}

const arr = [1,2,3,4,5];
console.log(arr.myEvery(item => item > 4));