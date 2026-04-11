// Polyfill for Array.prototype.forEach
// Executes a provided function once for each array element.

Array.prototype.myForEach = function (cbFn, thisArgs) {
  // Validate that the callback is a function
  if (typeof cbFn !== 'function') throw new TypeError("Callback is not a function");

  for (let i = 0; i < this.length; i++) {
    // Only process elements that exist (skip holes in sparse arrays)
    if (i in this) 
      // Call the callback with the specified 'this' context, passing (element, index, array)
      //thisArgs = context
      //this[i], i, this = (element, index, array)
      cbFn.call(thisArgs, this[i], i, this);
  }
}

// Example usage:
const arr = [1, 2, 3, , 4, 5]; // Sparse array with a hole at index 3

// Use myForEach to log each element to the console (holes are skipped)
arr.myForEach((item) => {
  console.log(item);
})