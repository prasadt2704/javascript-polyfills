# Function Polyfills

This folder contains custom polyfills and utility helpers for function behavior.
Most polyfills are implemented with a custom method name prefixed by `my` (for example, `myCall`, `myBind`, `myDebounce`).

## Polyfills Included

| File | What It Does | Unique Implementation Approach | Params |
| --- | --- | --- | --- |
| `apply.js` | Invokes a function with an explicit `this` and array-like arguments. | Temporarily assigns the target function on the context object, invokes it with spread args, then cleans up the temporary property. | `myApply(context, argsArray)` |
| `bind.js` | Returns a new function with bound `this` and optional preset args. | Uses closure over preset arguments and checks constructor usage (`this instanceof boundFn`) so `new` calls use the created instance. | `myBind(context, ...args1)` |
| `call.js` | Invokes a function with explicit `this` and positional arguments. | Temporarily attaches the target function to context and calls it with spread positional arguments before cleanup. | `myCall(context, ...args)` |
| `compose.js` | Composes functions right-to-left into one function. | Uses `reduceRight` so output of each function feeds into the previous one from right to left. | `myCompose(...fns)` |
| `curry.js` | Curries a function so args can be provided across multiple calls. | Recursively collects arguments until required arity (`fn.length`) is met, then executes the original function. | `myCurry()` |
| `debounce.js` | Delays execution until calls stop for a given delay. | Clears the previous timer on every call and schedules only the latest call to execute after the quiet period. | `myDebounce(delay)` |
| `memoise.js` | Caches function results by input arguments. | Uses `Map` with `JSON.stringify(args)` as cache key to return cached values for repeated calls. | `myMemoise()` |
| `pipe.js` | Pipes functions left-to-right into one function. | Uses `reduce` so each function receives the previous function's output in left-to-right order. | `myPipe(...fns)` |
| `throttle.js` | Limits execution to at most once per interval. | Uses a throttle flag and timer window to block intermediate calls until the delay has elapsed. | `myThrottle(delay)` |

## Common Design Patterns Used Across These Polyfills

- Function validation: prototype methods check whether `this` is a function and throw `TypeError` when invalid.
- Wrapper functions: methods like debounce, throttle, memoise, bind, and curry return closures that capture internal state.
- Context forwarding: most methods use `fn.apply(thisArg, args)` to preserve runtime context and argument forwarding.
- Temporary attachment pattern: call/apply implementations attach function to context object for invocation.
- Educational naming: methods use `my*` naming to avoid overriding native methods directly.

## Notes

- These implementations are educational and may not cover every edge case from the ECMAScript specification.
- Some files (such as compose/pipe) are utility helpers instead of `Function.prototype` methods, but are grouped here because they are function utilities.
