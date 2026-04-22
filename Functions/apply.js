// Function.prototype.apply polyfill
// Invokes a function with an explicit `this` value and an array/array-like argument list.

Function.prototype.myApply = function(context, argsArray) {
  if (typeof this !== "function") {
    throw new TypeError("myApply must be called on a function");
  }

  context = context ?? window;
  context = Object(context);
  context.fn = this;

  const data = args? context.fn(...args) : context.fn();
  delete context.fn;
  return data;
}

// Example: `myApply` sets `this` to `user` and forwards individual arguments.
const user = {
  name: "Prasad",
  isAdmin: true,
};

function describeUser(args) {
  const message = `${this.name} | admin: ${this.isAdmin} | state: ${args[0]}`;
  console.log(message);
  return message;
}

describeUser.myApply(user, ["MH"]);