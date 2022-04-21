import add from "./sum";

describe('sum.js', function () {
    test('add two numbers', () => {
        expect(add(1, 2)).toBe(3);
    })
})