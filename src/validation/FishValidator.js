const Fish = require('../../src/models/Fish');
const mongoose = require('mongoose');
const ObjectId = require('mongoose').Types.ObjectId

module.exports = {
    requestIsValid(model){
        if(model){
            return true;
        }else{
            return false;
        }
    },
    async checkIfFishExists(id){
        const registeredFish = await Fish.findById(id.toString());
        if(registeredFish){
            return true;
        }else{
            return false;
        }
    }
  };