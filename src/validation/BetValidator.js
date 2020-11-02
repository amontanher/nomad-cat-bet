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
    }
};