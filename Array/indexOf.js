//Polyfill for Array.prototype.indexOf
//Find first index of a value

Array.prototype.myIndexOf = function(searchElement, fromIndex) {
  let startIndex = fromIndex >=0? fromIndex : this.length + fromIndex;
  // Ensure startIndex is not negative
  startIndex = Math.max(startIndex, 0);

  for(let i =startIndex; i<this.length; i++) {
    if (i in this && this[i] === searchElement) {
      return i;
    }
  }
  // If no element matches, return -1
  return -1;
}

const arr = [1,2,3,4,5];
console.log(arr.myIndexOf(item => item > 4));