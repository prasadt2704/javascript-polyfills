//Object.keys polyfill
//Returns an array of a given object's own enumerable property names

Object.myKeys = (obj) => {
  // Match native behavior for null/undefined inputs.
  if (obj === null || obj === undefined) {
    throw new TypeError("Cannot convert undefined or null to object")
  }

  let keys = [];
  obj = Object(obj); // convert primitives

  for (let key in obj) {
    // Keep only own enumerable properties.
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      keys.push(key);
    }
  }

  // Return the final list of own keys.
  return keys;
}

// Example usage:
const obj = { a: 1, b: 2, c: 3 };
console.log(Object.myKeys(obj)); // Output: ['a', 'b', 'c']