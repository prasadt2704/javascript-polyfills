//Polyfill for Array.prototype.some
//Check if at least one element passes the test

Array.prototype.mySome = function(cbFn, thisArg) {
  if (typeof cbFn !== 'function') throw new TypeError("Callback is not a function");

  for (let i = 0; i < this.length; i++) {
    if (i in this && cbFn.call(thisArg, this[i], i, this)) {
      // Return true as soon as a matching element is found
      return true;
    }
  }

  //returns false if conditon was not satisfied by the array members;
  return false;
}

const arr = [1,2,3,4,5];
console.log(arr.mySome(item => item > 4));