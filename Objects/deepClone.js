//Object deepClone function polyfill
//Creates a deep copy of an object, including nested objects and arrays

Object.deepClone = (obj) => {
 Object.deepClone = function deepClone(obj) {
  if (obj === null || typeof obj !== 'object') return obj;

  // Handle Date objects by creating a new Date with the same time value.
  if (obj instanceof Date) return new Date(obj.getTime());

  // Handle arrays by mapping each element through deepClone.
  if (Array.isArray(obj)) return obj.map(deepClone);

  const clonedObj = {};
  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      // Recursively clone each property value.
      clonedObj[key] = deepClone(obj[key]);
    }
  }
  return clonedObj;
};
}

// Example usage:
const original = {
  name: "Alice",
  age: 30,
  hobbies: ["reading", "hiking"],
  address: {
    city: "Wonderland",
    zip: "12345"
  },
  birthDate: new Date("1990-01-01")
};

const cloned = Object.deepClone(original);
console.log(cloned); // Output: Deeply cloned object identical to original
console.log(cloned === original); // Output: false (different references)
console.log(cloned.address === original.address); // Output: false (nested objects are also cloned)