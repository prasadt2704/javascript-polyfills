//Function.prototype.bind polyfill
//Return new function with bound `this`

Function.prototype.myBind = function(context, ...args1) {
  if (typeof this !== 'function') {
    throw new TypeError("myBind must be called on a function");
  }

  const fn = this;

  function boundFn(...args2) {
    const isNew = this instanceof boundFn;

    return fn.apply(
      isNew ? this : context,
      [...args1, ...args2]
    );
  }

  return boundFn;
}

const user = {
  name: "Prasad",
  isAdmin: true,
};

function describeUser(state, country) {
  const message = `${this.name} | admin: ${this.isAdmin} | state: ${state} | country: ${country}`;
  console.log(message);
  return message;
}

const polyfillBound = describeUser.myBind(user, "MH");
polyfillBound("India");
