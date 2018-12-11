# throttle-transfer

  [!Build Status](https://github.com/slwzero/throttle-transfer)

Wrap function into a throttle function.

# Install
```
$ npm install throttle-transfer --save
```

# Usage

**throttle:**

**excute immediately, then throttle:**
```js
const throttleTransfer = require('throttle-transfer')
const throttle = throttleTransfer(input, 500, false)

function input(a) {
  console.log(a)
}

throttle('hi') // log 'hi' immediately, no delay.
throttle('hi2') // log 'hi2' after 500ms.
```
**first excute with throttle:**
```js
const throttleTransfer = require('throttle-transfer')
const throttle = throttleTransfer(input, 500, true)

function input(a) {
  console.log(a)
}

throttle('hi') 
throttle('hi2') // log 'hi2' after 500ms.
```

**bind this:**
```js
const throttleTransfer = require('throttle-transfer')
const throttle = throttleTransfer(function () {
  console.log(this === window)
}, 500, true)


window.onresize = throttle

// log 'true' when resizing the window


# API

# License
MIT 