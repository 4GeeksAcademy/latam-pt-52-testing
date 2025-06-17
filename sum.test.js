const sum = require('./sum');
// common js


describe("Function sum works as expected.", () => {


    test('adds 1 + 2 to equal 3', () => {
        expect(sum(1, 2)).toBe(3);
    });

    it('sum function add 0 + 0 doesnt equals undefined or NaN or null', () => {
        expect(sum(0, 0)).not.toBeNull();
        expect(sum(0, 0)).not.toBeUndefined();
        expect(sum(0, 0)).not.toBe(NaN);
    })

})
