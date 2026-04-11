//Polyfill for Array.prototype.lastIndexOf
//Find first index of a value

Array.prototype.mylastIndexOf = function(searchElement, fromIndex=0) {
  let startIndex = fromIndex >=0? fromIndex : this.length + fromIndex;
  // Ensure startIndex is not negative
  startIndex = Math.min(startIndex, this.length - 1);

  // Iterate backwards from the end of the array to startIndex
  for(let i =this.length-1; i>=startIndex; i--) {
    if (i in this && this[i] === searchElement) {
      return i;
    }
  }
  // If no element matches, return -1
  return -1;
}

const arr = [1,2,3,4,5];
console.log(arr.mylastIndexOf(item => item > 4));