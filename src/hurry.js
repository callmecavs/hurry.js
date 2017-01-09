// convert function arguments object to array
// slice prevents optimization: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/arguments

const toArray = args => {
  const max = args.length

  let array = []
  let current = 0

  while (current < max) {
    array.push(args[current])
    current++
  }

  return array
}

// an optimized curry function
// calls the original function when all arguments have been recieved, collecting them until then

const hurry = original => {
  // cache number of arguments passed to original function
  const target = original.length

  return function collector () {
    // collect current arguments (future arguments are added to this)
    const args = toArray(arguments)

    // check number of arguments
    return args.length >= target
      ? original.apply(null, args)                                      // if we have them all, call original function
      : function () {                                                   // otherwise, add new arguments to current ones
        return collector.apply(null, args.concat(toArray(arguments)))
      }
  }
}

export default hurry
