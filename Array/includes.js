//Polyfill for Array.prototype.includes
//It checks: “Does this array contain a specific value?
//Check if an element exists in the array

Array.prototype.myIncludes = function(value, fromIndex=0) {

  let startIndex = fromIndex >= 0
    ? fromIndex
    : this.length + fromIndex;  //here fromIndex can be negative so it add and then compares with 0
  // Ensure startIndex is not negative
  startIndex = Math.max(startIndex, 0);

  for (let i = startIndex; i < this.length; i++) {
                                            //to handle the NaN check which returns true in includes
    if (i in this && (this[i] === value || (this[i] !== this[i] && value !== value))) {
      // Return true as soon as a match is found
      return true;
    }
  }

   // Return false if no match is found
  return false;
}

const arr = [1,2,3,4,5];
console.log(arr.myIncludes(5));