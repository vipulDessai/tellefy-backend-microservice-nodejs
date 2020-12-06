const express = require("express");
const router = express.Router();

const services = require("../_services")

router.get("/", async (req, res) => {
    const accountData = await services.account.getRequest({ userName: req.query.userName })
    res.send(accountData);
});
router.post("/authenticate", async (req, res) => {
    const accountData = await services.account.postRequest(req.body);
    res.send(accountData);
});
router.post("/register", async (req, res) => {
    const accountData = await services.account.postRequest(req.body);
    res.send(accountData);
});
router.delete("/:index", (req, res) => {
    res.send({"foo": "dummy users delete"});
});

module.exports = router;