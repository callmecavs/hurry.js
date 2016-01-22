// convert function arguments object to array
// slice prevents optimization: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/arguments

function toArray(args) {
  const max = args.length

  let array   = []
  let current = 0

  while(current < max) {
    array.push(args[current])
    current++
  }

  return array
}

// an optimized curry function
// calls the original function when all arguments have been recieved, caching them until then

export default function hurry(original) {
  // cache number of arguments passed to original function
  const target = original.length

  return function collector() {
    // cache current arguments (future arguments are added to this)
    const args = toArray(arguments)

    // check # of arguments
    return args.length >= target
      ? original.apply(null, args)                                          // if we have them all, call original
      : function() {                                                        // otherwise, add new arguments to current ones
          return collector.apply(null, args.concat(toArray(arguments)))
        }
  }
}
