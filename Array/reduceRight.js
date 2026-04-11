// Polyfill for Array.prototype.reduceRight
// This method returns a single accumulated value from the array.

Array.prototype.myReduceRight = function (cbFn, init) {
  if (typeof cbFn !== 'function') throw new TypeError("Callback is not a function");

  let acc;
  let startIndex;

  if (arguments.length >=2) {
    acc = init;
    startIndex = this.length - 1;
  } else {
    acc = this[this.length - 1];
    startIndex = this.length - 2;
  }

  for(let i=startIndex; i>=0; i--) {
    acc = cbFn(acc, this[i], i, this);
  }

  return acc
}

const data = [1,2,3,4,5];
let result = data.myReduceRight((acc, curr) => acc + curr);
console.log(result);
