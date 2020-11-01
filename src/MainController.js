const {currentTemperatureByCity} = require('./api/weather')

const Fish = require('../src/models/Fish');
const Bet = require('../src/models/Bet');

module.exports = {
  async getAllFishes(req, res) {
    const { city } = req.query;

    const weather = await currentTemperatureByCity(city);

    let result;
    if(weather.main.temp > 22){
        const fishes = await Fish.find();
        result = {fishes: JSON.stringify({ fishes })};
    }else{
        result = {fishes: JSON.stringify([])};
    }

    return res.status(200).send(result);
  },
  async createBet(req, res) {
    const { catName, fishId, ration } = req.body;

    const bet = await Bet.create({
        CatName: catName,
        Fish: fishId,
        Ration: ration
    });

    await bet.populate('fish').execPopulate();

    return res.status(204).send();
  },
  async getAllBets(req, res){
      return res.status(200).send();
  }
};