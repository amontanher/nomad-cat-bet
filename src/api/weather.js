const fetch = require("node-fetch");

exports.currentTemperatureByCity = function(city){
    let apiKey = '426bd9fe649f68acd349560177ada533'
    let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`

    return fetch(url).then(r => r.json());
}