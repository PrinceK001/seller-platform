const cors = require("cors");

const whitelist = ["http://localhost:8080", "http://localhost:4200", "'http://localhost:3000"];

const corsOriginOptions = {
    origin: (origin, callback) => {
        if (!origin || whitelist.indexOf(origin) !== -1) {
            callback(null, true)
        } else {
            callback(new Error("Not allowed by CORS"))
        }
    }
}
const corsOption = cors(corsOriginOptions);

module.exports = corsOption;