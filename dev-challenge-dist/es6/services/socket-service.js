// class which will connect to API and return the response on subscribe

module.exports = class {

    constructor() {}

    connect() {
        return new Promise((resolve, reject) => {
            
            const url = "ws://localhost:8011/stomp";

            this.client = Stomp.client(url)
            this.client.debug = function (msg) {
                if (global.DEBUG) {
                    console.info(msg)
                }
            }

            this.client.connect({}, resolve);
        });
    }

    subscribe(url, fun) {
        this.client.subscribe(url, fun);
    }
}