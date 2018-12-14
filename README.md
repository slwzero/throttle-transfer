# throttle-transfer


[![Build Status](https://travis-ci.com/slwzero/throttle-transfer.svg?branch=master)](https://travis-ci.com/slwzero/throttle-transfer)

Wrap function into a throttle function.

# Install
```
$ npm install throttle-transfer --save
```

# Usage

**throttle:**
```js
const throttleTransfer = require('throttle-transfer')
const throttle = throttleTransfer(fn, 600, true) 
// true means excute fn after 600ms and then every 600ms
// false means excute fn immediately and then every 600ms; 

function fn(a) {
  console.log(a)
}

debounce('hi') 
debounce('hi') 
// log 'hi' once after 600ms.
```

**excute immediately, then throttle:**
```js
const throttleTransfer = require('throttle-transfer')
const throttle = throttleTransfer(fn, 600, false) 

function fn(a) {
  console.log(a)
}

throttle('hi') // log 'hi' immediately, no delay.
throttle('hi2') // log 'hi2' after 600ms.
```
**excute with throttle:**
```js
const throttleTransfer = require('throttle-transfer')
const throttle = throttleTransfer(fn, 600, true)


function fn(a) {
  console.log(a)
}

throttle('hi') 
throttle('hi2') // log 'hi2' after 600ms.
```

**bind this:**
```js
const throttleTransfer = require('throttle-transfer')
const throttle = throttleTransfer(function () {
  console.log(this === window)
}, 600, true)

window.onresize = throttle

// log 'true' when resizing the window

```

# API

# License
MIT 