const express = require("express");
const router = express.Router();

router.get("/users", (req, res) => {
    res.send({"foo": "dummy users get"});
});

router.post("/users/authenticate", (req, res) => {
    res.send({"foo": "dummy users post"});
});

router.delete("/users/:index", (req, res) => {
    res.send({"foo": "dummy users delete"});
});

module.exports = router;