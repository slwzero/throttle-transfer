var throttleTransfer = require('..')

describe('throttle test case', function () {
    var fn
    var throttle
    var firstCallWait = false
    beforeEach(function () {
        fn = jasmine.createSpy('fn')
        // throttle = throttleTransfer(fn, 600, firstCallWait)
        jasmine.clock().install()
    })
    afterEach(function () {
        jasmine.clock().uninstall()
    })

    it('test throttle with firstcall immediately excute', function () {
        firstCallWait = false
        throttle = throttleTransfer(fn, 600, firstCallWait)
        throttle()
        jasmine.clock().tick(600)
        expect(fn).toHaveBeenCalledTimes(2)
    })

    it('test throttle with firstcall excute after 600ms', function () {
        firstCallWait = true
        throttle = throttleTransfer(fn, 600, firstCallWait)
        throttle()
        jasmine.clock().tick(600)
        expect(fn).toHaveBeenCalledTimes(1)
    })

    it('test throttle multiple during 600ms with  immediately excute', function () {
        firstCallWait = false
        throttle = throttleTransfer(fn, 600, firstCallWait)
        throttle()
        throttle()
        jasmine.clock().tick(600)
        expect(fn).toHaveBeenCalledTimes(2)
    })

    it('test throttle multiple during 600ms with  immediately excute', function () {
        firstCallWait = true
        throttle = throttleTransfer(fn, 600, firstCallWait)
        throttle()
        throttle()
        jasmine.clock().tick(600)
        expect(fn).toHaveBeenCalledTimes(1)
    })
})