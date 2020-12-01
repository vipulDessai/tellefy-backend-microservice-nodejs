// read the .env file
require('dotenv').config();

const express = require('express');
const bodyparser = require('body-parser');
const path = require('path');
const http = require('http');
const app = express();

// api file for interacting with MongoDB
const account = require('./server/routes/account');

// parsers
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: false }));

// set headers
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', `${process.env.FRONTEND_SSL_ENABLED == "true" ? 'https' : 'http'}://${process.env.FRONTEND_URL}`);
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.header('Access-Control-Allow-Credentials', true);
    next();
});

// account location
app.use('/account', account);

// set port
const port = process.env.PORT || 3000;
app.set('port', port);

const server = http.createServer(app);
server.listen(port, () => console.log(`Running on localhost:${port}`));