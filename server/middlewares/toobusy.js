const toobusy = require('toobusy-js');

// Middleware which blocks requests when the Node server is too busy
// Now automatically retries the request at another instance of the server if it's too busy
module.exports = (req, res, next) => {
    if (toobusy()) {
        res.statusCode = 503;
        res.end('It looks like very busy right now, please try again in a minute.');
    } else {
        next();
    }
};