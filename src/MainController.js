const {currentTemperatureByCity} = require('./api/weather')

module.exports = {
  async getAllFishes(req, res) {
    const { city } = req.query;

    const weather = await currentTemperatureByCity(city);

    let result;
    if(weather.main.temp > 22){
        result = {
            body: JSON.stringify(
            {
                message: "peixes",
            }),
        };
    }else{
        result = {
            body: JSON.stringify(
            {
                message: "sem peixes",
            }),
        };
    }

    return res.status(200).send(result);
  },
  async createBet(req, res) {
    const { catName, fishId, totalRation } = req.body;
    return res.status(204).send();
  },
  async getAllBets(req, res){
      return res.status(200).send();
  }
};