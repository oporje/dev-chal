const env = require('./index');

describe('Check API url exist', () => {

    it('API url should be present', () => {
        expect(env.API_URL).not.toBeNull(); 
    });

});