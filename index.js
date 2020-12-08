// read the .env file
require('dotenv').config();

const express = require('express');
const bodyparser = require('body-parser');
const http = require('http');
const app = express();

// initialize routes
const routes = require('./server/routes');

// parsers for POST, PUT
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: false }));

// set headers for CORS
app.use((req, res, next) => {
    // split the string on comma and trim the edges
    // ex
    // FRONTEND_URL=https://www.domain1.com, https://domain2.com
    // outputs
    // ["https://www.domain1.com", "https://www.domain1.com"]
    const allowedOrigins = process.env.FRONTEND_URL.split(',').map(url => url.trim());

    if(allowedOrigins.indexOf(req.headers.origin) > -1) {
        res.header('Access-Control-Allow-Origin', `${req.headers.origin}`);
        res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
        res.header('Access-Control-Allow-Credentials', true);
    }
    
    next();
});

// setup the route prefixes
app.use('/', routes.rootRouter);
app.use('/account', routes.account);

// set port
const port = process.env.PORT || process.env.TEST_LOCAL_SERVER_PORT || 3000;
app.set('port', port);

const server = http.createServer(app);
server.listen(port, () => console.log(`Running on localhost:${port}`));

module.exports = server;