
// business logic

const fetchInstance = require('../services/factory-service');
const viewRef = require('../view/index');
const modelInstance = require('../model/factory-model');

module.exports = class {
    constructor() {
        this.fetchCurrencies();
       
    }

    fetchCurrencies() {
        fetchInstance.socketfactory().connect().then((res) => {
            console.log(res);
            this.Oninit();
        })
        .catch( (err) => {
            //handle the error
            console.log(err);
        });
    }

    Oninit() {
        const API_TOPIC = '/fx/prices';

        fetchInstance.socketfactory().subscribe(API_TOPIC, response => {

            let currency = JSON.parse(response.body);
            
            let model = modelInstance.modelFactory();
            // set currency in the Map data structure
            model.setCurrency(currency);
            // get and sort the currencies
            let currencies = model.sortCurrencies(model.getCurrencies());
            // create view portion
            this.createFragment(currencies);
        });
    }

    createFragment(sortedCurrencies) {
        new viewRef(sortedCurrencies);
    }
}