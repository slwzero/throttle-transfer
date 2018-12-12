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
const throttle = throttleTransfer(fn, 500, false) 
// false means  excute fn immediately and then every 500ms;  true means excute fn after 500ms and then every 500ms
function fn(a) {
  console.log(a)
}

throttle('hi') // log 'hi' immediately, no delay.
throttle('hi2') // log 'hi2' after 500ms.
```
**excute with throttle:**
```js
const throttleTransfer = require('throttle-transfer')
const throttle = throttleTransfer(fn, 500, true)


function fn(a) {
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

```

# API

# License
MIT 