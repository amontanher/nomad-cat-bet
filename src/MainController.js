const {currentTemperatureByCity} = require('./api/weather')

const Fish = require('../src/models/Fish');
const Bet = require('../src/models/Bet');
const fishValidator = require('../src/validation/FishValidator');
const betValidator = require('../src/validation/BetValidator');

module.exports = {
  async getAllFishes(req, res) {
    const { city } = req.query;

    if(fishValidator.requestIsValid(city)){
      const weather = await currentTemperatureByCity(city);

      if(weather.cod !== 200){
        return res.status(weather.cod).send(weather);
      }

      let result;
      if(weather.main.temp > 22){
          const fishes = await Fish.find();
          result = {fishes: fishes};
      }else{
          result = {fishes: []};
      }

      return res.status(200).send(result);
    }else{
      return res.status(400).send({message: "'City' parameter is required."});
    }
  },
  async createBet(req, res) {
    const { catName, fishId, ration } = req.body;

    if(betValidator.postRequestIsValid(catName, fishId, ration)){
      const fishExists = await fishValidator.checkIfFishExists(fishId);
      if(!fishExists){
        return res.status(404).send({message: "Fish not found."});
      }

      const catBets = await Bet.find({CatName: catName}).populate('Fish');

      const currentBetFish = catBets.find(c => {
        if(c.Fish._id.equals(fishId)){
          return c;
        }
      });

      if(currentBetFish){
        const filter = {_id: currentBetFish._id};
        const update = {Ration: currentBetFish.Ration + ration};
        await Bet.findOneAndUpdate(filter, update);
        return res.status(204).send();
      }else if(catBets.length >= 2){
        return res.status(409).send({message: "You can only bet on a maximum of two fishes."})
      }else{
        const bet = await Bet.create({
          CatName: catName,
          Fish: fishId,
          Ration: ration
        });

        return res.status(204).send();
      }
    }else{
      return res.status(400).send({message: "'CatName', 'FishId' and 'Ration' are required parameters."});
    }
  },
  async getAllBets(req, res){
    const { catName } = req.query;
    if(betValidator.getRequestIsValid(catName)){

      const catExists = await betValidator.checkIfCatExists(catName);
      if(!catExists){
        return res.status(404).send({message: "Cat not found."});
      }

      const catBets = await Bet.find({CatName: catName});
      result = {catBets: catBets};

      return res.status(200).send(result);
    }else{
      return res.status(400).send({message: "'CatName' parameter is required."});
    }
  }
};