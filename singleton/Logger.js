class Logger {
    static instance;

    constructor() {
        if (Logger.instance) {
            return Logger.instance;
        }
        Logger.instance = this;
    }

    log(message) {
        console.log(`[LOG]: ${message}`);
    }
}

export default Logger;
