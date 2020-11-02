const {currentTemperatureByCity} = require('../../src/api/weather')

test('Should return bad request when city not found', () => {
    currentTemperatureByCity("Jundiaia").then(d =>{
        const expect = {"cod": "404", "message": "city not found"};
        expect(expect).toBe(d);
    });
})