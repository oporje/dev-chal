const socket = require('./socket-service');

describe('Socket service specs', () => {
    let mockPromiseData = {
        'body': "",
        'command': "CONNECTED",
        'headers' : {
            'identifier': "BlackCatMQ",
            'session': "id362706954108034100000"
        }
    };

    beforeAll( () => {
        //singleton socket service object for all test
        socketService = new socket();
    });

    
    it('socket service instance should present', () => {
        expect(socketService).not.toBeNull();
    });

    it('connect method should return promise with data', function(done) {
        //async promise test
        socketService.connect()
        .then((resp) => {
          expect(resp).toEqual(mockPromiseData);
          done();
        });    
    });

});