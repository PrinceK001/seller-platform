// Requiring package dependencies
const express = require("express");
const path = require("path");
const app = express();
const middlewares = require("./server/middlewares");
const toobusy = require("./server/middlewares/toobusy");
const addSecurityMiddleware = require("./server/middlewares/security");
const v1Routes = require("./server/routes/v1");

// Trust the now proxy
app.set('trust proxy', true);

// Too busy middleware
app.use(toobusy);

// Security middleware
addSecurityMiddleware(app, { enableNonce: false, enableCSP: false });

// All other middlewares - Compression, CORS, Parsers
app.use(middlewares);

// To intialize DB connection process
// const mongoConnection = require("./db");

// Static files served 
app.use(express.static(path.join(__dirname, "./dist/ui")));

// API routes middleware
app.use("/server/v1", v1Routes);

// Ping-Pong
app.use("/ping", (req, res) => {
    res.status(200).send({ statusCode: 200, message: 'pong' });
});

// Always return index.html file since it is a SPA
app.use("**", express.static(path.join(__dirname, "./dist/ui")));

// Bootstraping app at specified port
let port = process.env.PORT || 8080;
const server = app.listen(port, (err) => {
    console.log("*************************************************************************************");
    if (err) {
        console.log(`[seller-platform][rootService][appInitialization] error : failed to bootstrap at port ${port}`);
        return;
    }
    console.log(`[seller-platform][rootService][appInitialization] success : bootstrapped at port ${port}`);
});