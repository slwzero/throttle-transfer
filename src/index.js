
function throttleTransfer(fn, time, firstCallWait) {
    var time = time || 600
    var wait = false
    var firstCallWait = firstCallWait || false
    var callNow = !firstCallWait && !wait
    return function () {
        var context = this
        var args = arguments
        if (!wait) {
            wait = true
            tm = setTimeout(function () {
                tm = null
                wait = false
                return fn.apply(context,args)
            }, time);
        }
        if (callNow) {
            callNow = false
            return fn.apply(context,args)
        }
    }
}

module.exports = throttleTransfer