//Pipe polyfill
//Combine functions left-to-right

function myPipe(...fns) {
  return function(value) {
    return fns.reduce((acc, fn) => fn(acc), value)
  }
}

const add = x => x + 1;
const double = x => x * 2;

const p = pipe(double, add);

p(2); // 6