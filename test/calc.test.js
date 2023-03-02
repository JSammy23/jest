const calc = require('../calc');

test('Adds a + b', () => {
    expect(calc.sum(2, 2)).toBe(4);
})

test('Subtract a - b', () => {
    expect(calc.subtract(6, 2)).toBe(4);
})

test('Divides a / b', () => {
    expect(calc.divide(6, 2)).toBe(3);
})

test('Multiplies a * b', () => {
    expect(calc.multiply(2, 2)).toBe(4);
})