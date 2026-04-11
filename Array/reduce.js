// Polyfill for Array.prototype.reduce
// This method returns a single accumulated value from the array.


//basic interview version polyfill
Array.prototype.myReduce = function (cbFn, init) {
  if (typeof cbFn !== 'function') throw new TypeError("Callback is not a function");

  let acc;
  let startIndex;

  if (arguments.length >=2) {
    acc = init;
    startIndex = 1;
  } else {
    acc = this[0];
    startIndex = 0;
  }

  for(let i =startIndex; i<this.length; i++) {
    acc = cbFn(acc, this[i], i, this);
  }

  return acc
}

const data = [1,2,3,4,5];
let result = data.myReduce((acc, curr) => acc + curr);
console.log(result);


//Below Reduce polyfill handles errors and sparse array correctly

Array.prototype.myAdvanceReduce = function (cbFn, init) {
  if (typeof cbFn !== 'function') {
    throw new TypeError('Callback must be a function');
  }

  const hasInitialValue = arguments.length >= 2;
  let acc;
  let i = 0;

  // Handle empty array cases
  if (!hasInitialValue) {
    // Find first valid element (handle sparse arrays)
    while (i < this.length && !(i in this)) {
      i++;
    }

    if (i >= this.length) {
      throw new TypeError('Reduce of empty array with no initial value');
    }

    acc = this[i++];
  } else {
    acc = init;
  }

  // Main loop
  for (; i < this.length; i++) {
    if (i in this) {
      acc = cbFn(acc, this[i], i, this);
    }
  }

  return acc;
};

const spareArray = [ , 1, 2, 3, 4, , 5];

let res = spareArray.myAdvanceReduce((acc, curr) => acc+curr, 0);
console.log(res);