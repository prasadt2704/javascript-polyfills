# Array Polyfills

This folder contains custom polyfills for common `Array.prototype` methods.
Each polyfill is implemented with a custom method name prefixed by `my` (for example, `myMap`, `myFilter`, `myReduce`).

## Polyfills Included

| File | Native Method | Custom Method | What It Does | Unique Implementation Approach |
| --- | --- | --- | --- | --- |
| `every.js` | `Array.prototype.every` | `myEvery` | Returns `true` only if all visited items pass a predicate. | Short-circuits on first failure and uses `cbFn.call(thisArg, value, index, array)` with sparse-array checks via `i in this`. |
| `fill.js` | `Array.prototype.fill` | `myFill` | Fills a range with one value and returns the same array. | Converts negative indices manually, clamps start, computes end, then mutates in-place in one forward loop. |
| `filter.js` | `Array.prototype.filter` | `myFilter` | Returns a new array of elements that pass a predicate. | Uses `push` (not direct index assignment) so output is dense, while still skipping sparse holes in the source. |
| `find.js` | `Array.prototype.find` | `myFind` | Returns first matching element or `undefined`. | Uses immediate return when match is found, with explicit callback type validation and `thisArg` support. |
| `findIndex.js` | `Array.prototype.findIndex` | `myFindIndex` | Returns first matching index or `-1`. | Mirrors `find` logic but returns index; exits early on first match. |
| `findLast.js` | `Array.prototype.findLast` | `myFindLast` | Returns last matching element or `undefined`. | Iterates backward from `length - 1` to `0`, enabling first-hit-from-right behavior. |
| `findLastIndex.js` | `Array.prototype.findLastIndex` | `myFindLastIndex` | Returns last matching index or `-1`. | Backward traversal plus early return of index when condition passes. |
| `flat.js` | `Array.prototype.flat` | `myFlat` | Flattens nested arrays to a given depth. | Recursive design: calls `subArray.myFlat(depth - 1)` and merges via spread syntax (`...`). |
| `flatMap.js` | `Array.prototype.flatMap` | `myFlatMap` | Maps and flattens one level. | Performs map + one-level flatten in a single pass: if callback result is an array, spreads it; otherwise pushes value directly. |
| `forEach.js` | `Array.prototype.forEach` | `myForEach` | Executes callback for each present element. | Focuses on side effects only (no return value), skips holes, and binds callback context with `call`. |
| `includes.js` | `Array.prototype.includes` | `myIncludes` | Checks whether an array contains a value. | Implements SameValueZero-like `NaN` handling (`x !== x && y !== y`) and supports negative `fromIndex`. |
| `indexOf.js` | `Array.prototype.indexOf` | `myIndexOf` | Returns first strict-equality match index or `-1`. | Uses normalized start index logic (including negative `fromIndex`) plus hole checks. |
| `lastIndexOf.js` | `Array.prototype.lastIndexOf` | `mylastIndexOf` | Returns last strict-equality match index or `-1`. | Searches from right to left with a computed lower boundary index. |
| `map.js` | `Array.prototype.map` | `myMap` | Returns a new array with transformed values. | Preserves sparse positions by writing to `data[i]` only when source index exists (`i in this`). |
| `reduce.js` | `Array.prototype.reduce` | `myReduce`, `myAdvanceReduce` | Produces a single accumulated value. | Provides two versions: a basic interview-style reducer and an advanced one that handles sparse arrays and empty-array/no-initial-value errors. |
| `reduceRight.js` | `Array.prototype.reduceRight` | `myReduceRight` | Reduces values from right to left. | Mirrors reduce but starts from end and decrements index each iteration. |
| `some.js` | `Array.prototype.some` | `mySome` | Returns `true` if at least one item passes a predicate. | Short-circuits on first success and supports `thisArg` with hole checks. |

## Common Design Patterns Used Across These Polyfills

- Callback validation: most methods throw when callback is not a function.
- Sparse array handling: many methods use `i in this` to skip holes.
- Early termination: search/predicate methods return as soon as result is known.
- `thisArg` support: callbacks are invoked with `Function.prototype.call`.
- Index normalization: methods with `fromIndex` convert negative values relative to array length.

## Notes

- These are educational polyfills and may not perfectly match all edge cases in the ECMAScript specification.
- The method names use `my*` naming to avoid overriding native methods directly.
