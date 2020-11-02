const fishValidator = require('../../src/validation/FishValidator');

test('Should return true when request is valid', () => {
    const result = fishValidator.requestIsValid("Jundiai");
    expect(true).toBe(result);
})

test('Should return false when request is invalid', () => {
    const result = fishValidator.requestIsValid();
    expect(false).toBe(result);
})