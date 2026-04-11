//Polyfill for Array.prototype.flatMap
//flatMap is map followed by flat(1).
//flatMap is a combo of map + flat(1)
//Map then flatten one level deep

Array.prototype.myFlatMap = function (cbFn, thisArgs) {
  if (typeof cbFn !== 'function') {
    throw new TypeError("Callback is not a function");
  }

  // Initialize an array to hold the flattened elements
  let flatten = [];

  for (let i = 0; i < this.length; i++) {
    if (!(i in this)) continue;

    const res = cbFn.call(thisArgs, this[i], i, this);

    if(Array.isArray(res)) {
      flatten.push(...res);
    } else {
      flatten.push(res);
    }
  }

  return flatten;
}

const arr = [1,[2,3],[[4],5]];
console.log(arr.myFlatMap((item) => { item * item}));