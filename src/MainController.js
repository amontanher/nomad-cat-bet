const {currentTemperatureByCity} = require('./api/weather')

const Fish = require('../src/models/Fish');
const Bet = require('../src/models/Bet');

module.exports = {
  async getAllFishes(req, res) {
    const { city } = req.query;

    const weather = await currentTemperatureByCity(city);

    let result;
    if(weather.main.temp < 22){
        const fishes = await Fish.find();
        result = {fishes: fishes};
    }else{
        result = {fishes: []};
    }

    return res.status(200).send(result);
  },
  async createBet(req, res) {
    const { catName, fishId, ration } = req.body;

    const catBets = await Bet.find({CatName: catName});
    // await bet.populate('fish').execPopulate();
    if(catBets.length >= 2){
      return res.status(409).send({message: "You can only bet on a maximum of two fishes."})
    }else{

    }

    const bet = await Bet.create({
        CatName: catName,
        Fish: fishId,
        Ration: ration
    });

    return res.status(204).send();
  },
  async getAllBets(req, res){
    const { catName } = req.query;

    const catBets = await Bet.find({CatName: catName});
    result = {catBets: catBets};

    return res.status(200).send(result);
  }
};