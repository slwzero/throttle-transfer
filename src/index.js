
function throttleTransfer(fn, time, firstCallWait) {
    var time = time || 1400
    var wait = false
    var firstCallWait = firstCallWait || false
    var callNow = !firstCallWait && !wait
    return function () {
        var context = this
        var args = arguments
        if (!wait) {
            wait = true
            tm = setTimeout(function () {
                fn.apply(context,args)
                tm = null
                wait = false
            }, time);
        }
        if (callNow) {
            fn.apply(context,args)
            callNow = false
        }
    }
}

module.exports = throttleTransfer