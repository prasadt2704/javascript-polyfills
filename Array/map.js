// Polyfill for Array.prototype.map
// This method creates a new array populated with the results of calling a provided function on every element in the calling array.

Array.prototype.myMap = function (cbFn, thisArgs) {
  // Ensure the callback provided is a function
  if (typeof cbFn !== 'function') throw new TypeError("Callback is not a function");

  let data = [];
  for (let i = 0; i < this.length; i++) {
    // Check if the index exists in the array (handles sparse arrays)
    if (i in this) {  
      // Call the callback with the correct 'this' context, passing (element, index, array)
      data[i] = cbFn.call(thisArgs, this[i], i, this);
    }
  }

  // Return the new mapped array
  return data;
}

// Example: sparse array with a hole at index 3
const spareArray = [1, 2, 3, , 4, 5]; 

// Using myMap to double each element; holes are preserved
spareArray.myMap((item) => {
  return item + item;
})

// Example: regular array
const arr = [1,2,3,4,5];

// Using myMap to square each element
arr.myMap((item) => {
  return item * item;
})