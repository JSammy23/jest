const analyzeArray = require('../analyzeArray');

test('Happy Path', () => {
    expect(analyzeArray([2,5,34,12,23])).toBe(Object {
        "average": 15.2,
        "length": 5,
        "max": 34,
        "min": 2,
    })
})