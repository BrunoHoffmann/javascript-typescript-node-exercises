function split(arr) {
  return arr.split('')
}

function reverse(arr) {
  return arr.reverse()
}

function join(arr) {
  return arr.join('')
}

function compose(...functions) {
  return function(str) {
    functions.reverse().forEach((func) => {
      str = func(str)
    })
    return str
  }
}

// arrow function
const compose2 = (...functions) => (str) => {
  functions.reverse().forEach((func) => str = func(str))
  return str
}

const composedFunction = compose(join, reverse, split);

console.log(composedFunction('hello'))