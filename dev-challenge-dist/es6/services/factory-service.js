let socketService = require('./socket-service');

// Factory class to provide socket server instance
let objSocket;
module.exports = class {

    static socketfactory() {
        
        return objSocket ? objSocket : objSocket = new socketService();
    }

}