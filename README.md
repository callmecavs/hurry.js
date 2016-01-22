# Hurry.js

[![Hurry.js on NPM](https://img.shields.io/npm/v/hurry.js.svg)](https://www.npmjs.com/package/hurry.js)

## Usage

Hurry was developed with a modern JavaScript workflow in mind. To use it, it's recommended you have a build system in place that can transpile ES6, and bundle modules. For a minimal boilerplate that does so, check out [outset](https://github.com/callmecavs/outset).

Follow these steps to get started:

* [Install](#install)
* [Call](#call)

### Install

Using NPM, install Hurry.js, and add it to your package.json dependencies.

```
$ npm install hurry.js --save
```

### Call

Import Hurry, then call it, passing it the function to curry.

```es6
// import Hurry
import hurry from 'hurry.js'

// create a new curried function
const curried = hurry(function() {

})
```

## License

MIT. © 2016 Michael Cavalea

[![Built With Love](http://forthebadge.com/images/badges/built-with-love.svg)](http://forthebadge.com)
