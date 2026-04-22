// Function.prototype.call polyfill
// Calls a function with an explicit `this` value and individual arguments.

Function.prototype.myCall = function(context, ...args) {
  // Guard: myCall must be invoked on a function object.
    if (typeof this !== 'function') throw new TypeError("myCall must be called on a function");

  // Match native call behavior for null/undefined by defaulting to the global object.
    context = context ?? window;
  // Box primitives (number, string, boolean) so they can hold temporary properties.
    context = Object(context);

  // Temporarily attach the target function to context and invoke it.
    context.fn = this;
    let data = context.fn(...args);
  // Clean up the temporary property to avoid side effects.
    delete context.fn;
    return data;

}


// Example: `myCall` sets `this` to `user` and forwards individual arguments.
const user = {
  name: "Prasad",
  isAdmin: true,
};

function describeUser(state, country) {
  const message = `${this.name} | admin: ${this.isAdmin} | state: ${state} | country: ${country}`;
  console.log(message);
  return message;
}

describeUser.myCall(user, "MH", "India");