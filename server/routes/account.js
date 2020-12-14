const express = require('express');
const accountRouter = express.Router();

const services = require('../_services');

accountRouter.get('/', async (req, res) => {
    const accountData = await services.db.getRequest({ userName: req.query.userName });
    res.send(accountData);
});
accountRouter.post('/authenticate', async (req, res) => {
    const accountData = await services.db.getRequest({ userName: req.body.userName });
    if(accountData.err) {
        res.status(accountData.err.status).send(accountData.err);
    }
    else {
        res.send(accountData.response);
    }
});
accountRouter.post('/register', async (req, res) => {
    const accountData = await services.db.postRequest(req.body);
    if(accountData.err) {
        res.status(accountData.err.status).send(accountData.err);
    }
    else {
        res.send(accountData.response);
    }
});
accountRouter.delete('/:index', (req, res) => {
    res.send({'foo': 'dummy users delete'});
});

module.exports = accountRouter;