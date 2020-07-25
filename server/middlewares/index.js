const { Router } = require('express');
const compression = require('compression');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const corsOption = require('./corsOption');

const middlewares = Router();

// Compression 
middlewares.use(compression());

// Body Parser
middlewares.use(bodyParser.urlencoded({ extended: false }));
middlewares.use(bodyParser.json());

// CORS
middlewares.use(corsOption);
middlewares.options('*', corsOption);

// Cookie Parser
middlewares.use(cookieParser());

module.exports = middlewares;