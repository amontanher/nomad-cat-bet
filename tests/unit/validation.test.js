const fishValidator = require('../../src/validation/FishValidator');
const betValidator = require('../../src/validation/BetValidator');

test('Should return true when fish request is valid', () => {
    const result = fishValidator.requestIsValid("Jundiai");
    expect(true).toBe(result);
})

test('Should return false when fish request is invalid', () => {
    const result = fishValidator.requestIsValid();
    expect(false).toBe(result);
})

test('Should return true when bet post request is valid', () => {
    const result = betValidator.postRequestIsValid('Nemo', '5f9f49d06202ceeb92d38f6d', '200');
    expect(true).toBe(result);
})

test('Should return false when bet post request is invalid', () => {
    const result = betValidator.postRequestIsValid('Nemo', '', '200');
    expect(false).toBe(result);
})

test('Should return true when bet get request is valid', () => {
    const result = betValidator.getRequestIsValid('Nemo');
    expect(true).toBe(result);
})

test('Should return false when bet get request is invalid', () => {
    const result = betValidator.getRequestIsValid();
    expect(false).toBe(result);
})