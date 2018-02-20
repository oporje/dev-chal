const model = require('./index');

// Factory class to provide model instance to process all the data
let objModel;
module.exports = class {

    static modelFactory() {
        
        return objModel ? objModel : objModel = new model();
    }

}