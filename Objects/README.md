# Object Polyfills

This folder contains custom polyfills for common `Object` methods and object utility behavior.
Each polyfill is implemented with a custom method name prefixed by `my` (for example, `myCreate`, `myKeys`, `myValues`).

## Polyfills Included

| File | What It Does | Unique Implementation Approach | Params |
| --- | --- | --- | --- |
| `create.js` | Creates a new object with the given prototype. | Uses a temporary constructor (`F`) to wire the prototype chain, and handles `null` prototype as a special case. | `myCreate(proto)` |
| `deepClone.js` | Creates a deep copy of arrays/objects including nested values and `Date`. | Recursive clone strategy: primitives return as-is, arrays map through recursive clone, objects clone each own key recursively. | `deepClone(obj)` |
| `entries.js` | Returns own enumerable `[key, value]` pairs. | Normalizes input with `Object(obj)` and maps `Object.keys(obj)` into tuple pairs. | `myEntries(obj)` |
| `freeze.js` | Prevents writes/reconfiguration of existing own properties. | Iterates own keys and applies `Object.defineProperty` with `writable: false` and `configurable: false`. | `myFreeze(obj)` |
| `keys.js` | Returns own enumerable property names. | Uses `for...in` with `hasOwnProperty.call` filter and primitive-to-object normalization. | `myKeys(obj)` |
| `values.js` | Returns own enumerable property values. | Reuses `Object.myKeys(obj)` and maps each key to its value for consistent own-key filtering. | `myValues(obj)` |

## Common Design Patterns Used Across These Polyfills

- Null/undefined guards: object-input methods throw `TypeError` for invalid inputs.
- Primitive normalization: methods call `Object(obj)` to mimic native coercion behavior for primitives.
- Own-property filtering: implementations use own-key iteration (`hasOwnProperty.call` or `Object.keys`) rather than inherited keys.
- Composition over duplication: `myValues` builds on `myKeys`; cloning logic is reused recursively in `deepClone`.

## Notes

- These are educational polyfills and may not perfectly match all edge cases in the ECMAScript specification.
- Method names use `my*` naming (except `deepClone`) to avoid overriding native methods directly.
- `myFreeze` is shallow: nested objects are not recursively frozen.
