const express = require("express");
const rootRouter = express.Router();

const account = require('./account');
const db = require('../_services').db;

if(process.env.TEST_LOCAL_SERVER == "true") {
    rootRouter.get("/test-server-up", (req, res, next) => {
        // if while running the test on CI the server is up successfully
        // this route will be invoked by the test suite 
        // and the test will determine the server is up and running
        res.send('server is up');
    });
    rootRouter.get("/test-db-connection", (req, res, next) => {
        // if while running the test on CI the server is up successfully
        // this route will be invoked by the test suite 
        // and the test will determine whether the DB connection on the server is up and running
        const dbStatus = db.getDbStatus();
        if(dbStatus == null) {
            res.send({ok: 1});
        }
        else {
            res.send(dbStatus);
        }
    });
}

module.exports = {
    rootRouter,
    account,
}