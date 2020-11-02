const fetch = require("node-fetch");
const Parameter = require('../models/Parameter');
const WEATHER_PARAMETER_NAME = 'OPENWEATHER-TOKEN';

exports.currentTemperatureByCity = async function(city){
    const token = await Parameter.findOne({Name: WEATHER_PARAMETER_NAME});
    let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${token.Value}&units=metric`

    return fetch(url).then(r => r.json());
}