const ceasarCipher = require('../ceasarCipher')

test('Cipher down by two', () => {
    expect(ceasarCipher('I love you Buddy', 3)).toBe('L oryh brx Exggb')
})