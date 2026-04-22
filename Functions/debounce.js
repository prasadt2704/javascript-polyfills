// Function.prototype.debounce polyfill
// Delays function execution until after a quiet period (no new calls for the specified delay).

Function.prototype.myDebounce = function (delay) {
  if (typeof this !== "function") {
    throw new TypeError("Debounce needs to used on a Function");
  }

  // Capture the target function for use in the wrapper.
  const fn = this;
  let timer;
  return function (...args) {
    // Cancel any pending execution from a previous call.
    clearTimeout(timer);

    // Preserve the execution context.
    const context = this;

    // Schedule the function to execute after the specified delay.
    timer = setTimeout(() => {
      fn.apply(context, args);
    }, delay);
  };
};

// Example: debounce a search handler to avoid excessive API calls
let searchCount = 0;
function handleSearch(query) {
  searchCount++;
  console.log(`Search #${searchCount}: "${query}"`);
}

const debouncedSearch = handleSearch.myDebounce(300);

// Simulate rapid user input (like typing in a search box)
debouncedSearch("j");
debouncedSearch("ja");
debouncedSearch("jav");
debouncedSearch("java");

console.log(`Calls during input: ${searchCount} (should be 0, waiting for quiet period)`);

// After delay passes with no new calls, only the last call executes
setTimeout(() => {
  console.log(`After 400ms: ${searchCount} searches executed (should be 1, only last input)`);
}, 400);
