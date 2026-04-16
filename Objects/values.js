//Object.values polyfill
//Returns an array of a given object's own enumerable property values

Object.myValues = (obj) => {
  // Match native behavior for null/undefined inputs.
  if (obj === null || obj === undefined) {
    throw new TypeError("Cannot convert undefined or null to object")
  }

  obj = Object(obj); // convert primitives
  
  return Object.myKeys(obj).map(key => obj[key]);
}

// Example usage:
const obj = { a: 1, b: 2, c: 3 };
console.log(Object.myValues(obj)); // Output: [1, 2, 3]