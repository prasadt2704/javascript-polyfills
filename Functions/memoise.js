// Function.prototype.memoise polyfill
// Caches (memoizes) function results based on arguments to avoid redundant computation.

Function.prototype.myMemoise = function() {
  // Guard: memoise must be called on a function.
  if (typeof this !== "function") {
    throw new TypeError("myMemoise must be called on a function");
  }

  // Capture the original function and create a cache store.
  const fn = this;
  const cache = new Map();

  // Return a wrapper that intercepts calls and checks the cache.
  return function memoized(...args) {
    // Convert arguments to a string key for cache lookup.
    const key = JSON.stringify(args);

    // Cache hit: return stored result immediately.
    if (cache.has(key)) {
      return cache.get(key);
    }

    // Cache miss: compute result, store it, and return.
    const result = fn.apply(this, args);
    cache.set(key, result);
    return result;
  };
};

// Example: memoize an expensive calculation.
function fibonacci(n) {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}

const memoFib = fibonacci.myMemoise();

console.log("First call fib(10):", memoFib(10));      // computed
console.log("Second call fib(10):", memoFib(10));     // from cache
console.log("Call fib(8):", memoFib(8));              // from cache (subset of fib(10))