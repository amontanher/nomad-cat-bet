const Bet = require('../../src/models/Bet');

module.exports = {
    postRequestIsValid(catName, fishId, ration){
        if(!catName || ! fishId || !ration){
            return false;
        }else{
            return true;
        }
    },
    getRequestIsValid(catName){
        if(!catName){
            return false;
        }else{
            return true;
        }
    },
    async checkIfCatExists(catName){
        const registeredCat = await Bet.findOne({CatName: catName});
        console.log(registeredCat);
        if(registeredCat){
            return true;
        }else{
            return false;
        }
    }
};