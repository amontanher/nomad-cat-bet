const {currentTemperatureByCity} = require('../../src/api/weather');

test('Should return bad request when city not found', async () => {
    const expect = {"cod": "404", "message": "city not found"};
    const result = await currentTemperatureByCity("Jundiaix");
    expect(result).toBe(expect);
});