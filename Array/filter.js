// Polyfill for Array.prototype.filter
// This method creates a new array with values that satisfy the callback function filter.

Array.prototype.myFilter = function (cbFn, thisArgs) {
  if (typeof cbFn !== 'function') throw 'Callback is not a Function!!'

  let data = [];
  for (let i = 0; i < this.length; i++) {
    if (i in this && cbFn.call(thisArgs, this[i], i, this)) {
      //filter returns a new array with only matching elements, so it should use push, not index assignment.
      data.push(this[i])
    }
  }

  return data;
}

const spareArray = [1, 2, 3, 4, , 5];
console.log(spareArray.myFilter(item => item > 2));