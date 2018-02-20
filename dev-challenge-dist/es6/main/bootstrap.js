//bootstrap the app by calling the API and instantiate the model

let factoryService = require('../services/factory-service');
let initController = require('../controller/init');

module.exports = class {

    constructor() {
        this.bootstrapApp();
    }

    bootstrapApp() {
        new initController();
    }
}