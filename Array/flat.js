//Polyfill for Array.prototype.flat
//Flatten nested arrays to specified depth

Array.prototype.myFlat = function (depth) {

  // Initialize an array to hold the flattened elements
  let flatten = [];

  for (let i = 0; i < this.length; i++) {
    if (Array.isArray(this[i]) && depth >= 0) {
      // Spread the result of recursively flattening the sub-array with reduced depth
      flatten.push(...this[i].myFlat(depth - 1));
    } else {
      flatten.push(this[i]);
    }
  }

  return flatten;
}

const arr = [1,[2,3],[[4],5]];
console.log(arr.myFlat());