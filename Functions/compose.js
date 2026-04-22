//Compose polyfill
//Combine functions right-to-left

function myCompose(...fns) {
  return function(value) {
    return fns.reduceRight((acc, fn) => fn(acc), value)
  }
}

const add = x => x + 1;
const double = x => x * 2;

const c = compose(double, add);

c(2); // 6