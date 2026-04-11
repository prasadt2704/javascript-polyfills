// Polyfill for Array.prototype.fill
// Fills a range of elements in an array with a static value

Array.prototype.myFill = function (item, start, end) {

  // Calculate the starting index:
  // If start is positive, use it; if negative, count from the end of the array
  let startIndex = start >= 0 ? start : this.length + start;

  // Calculate the ending index:
  // If end is positive, use it; if negative, count from the end of the array
  let endIndex = end >= 0 ? end : this.length + end;

  // Ensure startIndex is not less than 0
  startIndex = Math.max(startIndex, 0);

  // Ensure endIndex is not less than the array length
  endIndex = Math.max(endIndex, this.length);

  // Fill the array from startIndex up to, but not including, endIndex
  for (let i = startIndex; i < endIndex; i++) {
    this[i] = item; // Set each element in the range to the specified item
  }

  // Return the modified array
  return this;
}

const arr = [];
console.log(arr.myFill(5));