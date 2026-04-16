//Object.create polyfill
//Create object with a specified prototype

Object.myCreate = (proto) => {
  // Handle null prototype objects explicitly.
  if (proto === null) {
    return { __proto__: null };
  }

  // Only objects are accepted as valid prototypes in this implementation.
  if (typeof proto !== 'object') {
    throw new TypeError("Prototype must be object or null");
  }

  // Temporary constructor used to link the prototype chain.
  function F() {};
  F.prototype = proto;

  // Return a fresh object inheriting from proto.
  return new F();
}

// Example usage:
const parent = { greet: function() { return "Hello"; } };
const child = Object.myCreate(parent);
console.log(child.greet()); // Output: "Hello"