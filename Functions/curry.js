//Curry Polyfill

Function.prototype.myCurry = function () {
  if (typeof this !== 'function') {
    throw new TypeError("myCurry must be called on a function");
  }

  const fn = this;

  return function curried(...args) {
    if (args.length >= fn.length) {
      return fn.apply(this, args);
    } else {
      return function(...moreArgs) {
        return curried.apply(this, args.concat(moreArgs));
      }
    }
  }

}

// Example: curry a 3-argument add function
function add(a, b, c) {
  return a + b + c;
}

const curriedAdd = add.myCurry();

// All arguments at once
console.log(curriedAdd(1, 2, 3));       // 6

// One at a time
console.log(curriedAdd(1)(2)(3));       // 6

// Partial application: fix first argument, reuse
const add10 = curriedAdd(10);
console.log(add10(5)(3));               // 18
console.log(add10(1)(1));               // 12