//Object.entries polyfill
//Returns an array of a given object's own enumerable property [key, value] pairs

Object.myEntries = (obj) => {
  // Match native behavior for null/undefined inputs.
  if (obj === null || obj === undefined) {
    throw new TypeError("Cannot convert undefined or null to object")
  }
  
  obj = Object(obj); // convert primitives
  return Object.keys(obj).map(key => [key, obj[key]]);
}

// Example usage:
const obj = { a: 1, b: 2, c: 3 };
console.log(Object.myEntries(obj)); // Output: [['a', 1], ['b', 2], ['c', 3]]