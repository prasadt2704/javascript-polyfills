//Object.freeze polyfill
//Freezes an object, preventing new properties from being added to it and marking all existing properties as read-only

Object.myFreeze = (obj) => {
  // Match native behavior for null/undefined inputs.
  if (obj === null || obj === undefined) {
    throw new TypeError("Cannot convert undefined or null to object")
  }

  obj = Object(obj); // convert primitives

  // Mark all own properties as non-writable and non-configurable.
  Object.keys(obj).forEach(key => {
    Object.defineProperty(obj, key, {
      writable: false,
      configurable: false
    });
  });

  // Return the frozen object.
  return obj;
}

// Example usage:
const obj = { a: 1, b: 2 };
Object.myFreeze(obj);
obj.a = 3; // This will not change the value of 'a'
console.log(obj.a); // Output: 1