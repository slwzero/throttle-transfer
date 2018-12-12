var throttleTransfer = require('..')

describe('First call immediately', function () {
    var fn
    var throttle
    beforeEach(function () {
        fn = jasmine.createSpy('fn')
        throttle = throttleTransfer(fn, 600, false)
        jasmine.clock().install()
    })

    afterEach(function () {
        jasmine.clock().uninstall()
    })

    it('first call', function () {
        throttle()
        jasmine.clock().tick(300)
        expect(fn).toHaveBeenCalledTimes(1)
        throttle()
        jasmine.clock().tick(600)
        expect(fn).toHaveBeenCalledTimes(2)
    })

    it('multiple call', function () {
        throttle()
        throttle()
        throttle()
        throttle()
        expect(fn).toHaveBeenCalledTimes(1)
        throttle()
        throttle()
        jasmine.clock().tick(600)
        expect(fn).toHaveBeenCalledTimes(2)

        throttle()
        throttle()
        jasmine.clock().tick(600)
        expect(fn).toHaveBeenCalledTimes(3)
    })

})

describe('First call wait', function () {
    var fn
    var throttle
    beforeEach(function () {
        fn = jasmine.createSpy('fn')
        throttle = throttleTransfer(fn, 600, true)
        jasmine.clock().install()
    })

    afterEach(function () {
        jasmine.clock().uninstall()
    })

    it('one call', function () {
        throttle()
        jasmine.clock().tick(600)
        expect(fn).toHaveBeenCalledTimes(1)
    })

    it('multiple call', function () {
        throttle()
        throttle()
        expect(fn).toHaveBeenCalledTimes(0)
        jasmine.clock().tick(300)
        expect(fn).toHaveBeenCalledTimes(0)
        throttle()
        jasmine.clock().tick(600)
        expect(fn).toHaveBeenCalledTimes(1)
        throttle()
        jasmine.clock().tick(600)
        expect(fn).toHaveBeenCalledTimes(2)
    })
})

describe(' Bind this and proxy arguments', function () {
    var fn
    beforeEach(function () {
        jasmine.clock().install()
        fn = jasmine.createSpy('fn')
    })

    afterEach(function () {
        jasmine.clock().uninstall()
    }) 

    it('this', function () {
        var fakeContext = {}
        var throttle = throttleTransfer(function () {
            return this
        }, 600, false)
        var result = throttle.call(fakeContext) === fakeContext
        expect(result).toBe(true)
    })


    it('arguments', function () {
        var throttle = throttleTransfer(fn, 600, true)
        var a = {}
        throttle(1)
        jasmine.clock().tick(600)
        expect(fn).toHaveBeenCalledWith(1)
        throttle(1,'2')
        jasmine.clock().tick(600)
        expect(fn).toHaveBeenCalledWith(1, '2')
        throttle(1,'2', a)
        jasmine.clock().tick(600)
        expect(fn).toHaveBeenCalledWith(1, '2', a)
    })

    
})