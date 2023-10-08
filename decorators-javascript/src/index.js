function split(arr) {
  return arr.split('')
}

function reverse(arr) {
  return arr.reverse()
}

function join(arr) {
  return arr.join('')
}

const compose = (...functions) => (str) => functions.reduceRight((acc, currFunc) => currFunc(acc), str)

const composedFunction = compose(join, reverse, split)

console.log(composedFunction('hello'))