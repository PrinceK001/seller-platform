// Requiring package dependencies
const express = require("express");
const path = require("path");
const app = express();
const middlewares = require("./server/middlewares");
const toobusy = require("./server/middlewares/toobusy");
const addSecurityMiddleware = require("./server/middlewares/security");
const router = require("./server/routes");

// Trust the now proxy
app.set('trust proxy', true);

// Too busy middleware
app.use(toobusy);

// Security middleware
addSecurityMiddleware(app, { enableNonce: false, enableCSP: false });

// All other middlewares
app.use(middlewares);

// To intialize DB connection process
const mongoConnection = require("./db");

// Static files served 
app.use(express.static(path.join(__dirname, "./dist/ui")));

// API routes middleware
app.use("/api", router);

// Always return index.html file since it is a SPA
app.use("**", express.static(path.join(__dirname, "./dist/ui")));

// Bootstraping app at specified port
let port = process.env.PORT || 8080;
const server = app.listen(port, (err) => {
    console.log("****************************************************************************");
    if (err) {
        console.log(`[rootService][appInitialization] success : bootstrapped at port ${port}`);
        return;
    }
    console.log(`[rootService][appInitialization] error : failed to bootstrap at port ${port}`);
});