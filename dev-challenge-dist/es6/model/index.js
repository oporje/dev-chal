// Data processing at this layer

module.exports = class {

    constructor() {
         this.objMapCurrencies = new Map();
    }

    // Accepts currency Object and set it to Map
    setCurrency(currency) {
        let tempCurrency = this.checkCurrencyExist(currency.name);
        if(typeof tempCurrency === "undefined") {
            tempCurrency = currency;
            if(typeof tempCurrency.sparkLineData === 'undefined') {
                tempCurrency.sparkLineData = [];
            }
        } 

        tempCurrency.sparkLineData.push(this.calculateMid(currency));

        this.objMapCurrencies.set(tempCurrency.name, tempCurrency);

    }

    // check if currency already exist in Map
    checkCurrencyExist(name) {
        return this.objMapCurrencies.get(name);
    }

    // Get all the currencies as an Array
    getCurrencies() {
        return Array.from(this.objMapCurrencies.values());
    }

    // sort the currencies ascending to last change bid
    sortCurrencies(currencies) {
        currencies.sort(function(a, b) {
            return parseFloat(a.lastChangeBid) - parseFloat(b.lastChangeBid);
        });
      
        return currencies;
    }

    // calculate SparkLineData
    calculateMid(currency) {
        return ((currency.bestBid + currency.bestAsk) / 2);
    }

}