// Function.prototype.throttle polyfill
// Limits function invocations to at most one call per interval.

Function.prototype.myThrottle = function(delay) {
  // Guard: throttle must be called on a function.
  if (typeof this !== "function") {
    throw new TypeError("myThrottle must be called on a function");
  }

  const fn = this;
  let isThrottled = false;

  // Return a wrapper that blocks calls while throttle window is active.
  return function throttled(...args) {
    if (isThrottled) {
      return;
    }

    fn.apply(this, args);
    isThrottled = true;

    setTimeout(() => {
      isThrottled = false;
    }, delay);
  };
};

// Example: throttle a scroll handler to avoid excessive calls.
let runCount = 0;
function onScroll(position) {
  runCount++;
  console.log(`Run #${runCount} at position: ${position}`);
}

const throttledScroll = onScroll.myThrottle(200);

// Rapid calls: only the first should execute immediately.
throttledScroll(10);
throttledScroll(20);
throttledScroll(30);

// After the throttle window, next call is allowed.
setTimeout(() => {
  throttledScroll(40);
}, 250);

setTimeout(() => {
  console.log(`Total runs: ${runCount} (should be 2)`);
}, 500);

