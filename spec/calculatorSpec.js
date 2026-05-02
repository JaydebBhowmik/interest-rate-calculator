const { calculate } = require('../script.js'); 

describe("Interest Calculator", function() {
    it("should correctly calculate simple interest", function() {
        expect(calculate(1000, 5, 1)).toBe(50);
    });

    it("should return a number", function() {
        expect(typeof calculate(1000, 5, 1)).toBe('number');
    });
});
