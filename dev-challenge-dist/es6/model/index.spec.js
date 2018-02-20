const modelInstance = require('./index');

describe('Model data processing specs', () => {
    
    let mockCurrency = {
        'bestAsk': 2,
        'bestBid': 2,
        'lastChangeAsk': 0.0010919783131124738,
        'lastChangeBid':0.020460923170518175,
        'name': "test",
        'openAsk': 1.099151108852731,
        'openBid': 1.094648891147269
    };

    beforeEach( () => {

        model = new modelInstance();        

    });

    it('should set the currency', () => {

         spyOn(model, 'checkCurrencyExist');

         model.setCurrency(mockCurrency);
         // should check if checkCurrencyExist function is called
         expect(model.checkCurrencyExist).toHaveBeenCalledWith(mockCurrency.name);
         expect(Array.from(model.objMapCurrencies.values())).toContain(mockCurrency);
    });

    it('should get the currency', () => {

         model.setCurrency(mockCurrency);

         expect(model.getCurrencies()).toContain(mockCurrency);
    });

    it('Should check calculate mid result', () => {

        expect(model.calculateMid(mockCurrency)).toEqual(2);
 
    });

    it('Should check if currency exist in Map', () => {

         model.setCurrency(mockCurrency);
         expect(model.checkCurrencyExist(mockCurrency.name)).toBeTruthy();
 
    });

    afterEach( () => {
        model = null;
    });
        

});