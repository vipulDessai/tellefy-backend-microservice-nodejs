const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    res.send({"foo": "dummy users get"});
});
router.post("/authenticate", (req, res) => {
    res.send({
        userName: "foo_bar",
        firstName: "foo",
        lastName: "bar",
        lastLogin: new Date(),
    });
});
router.post("/register", (req, res) => {
    res.send({
        userName: "foo_bar",
        firstName: "foo",
        lastName: "bar",
        lastLogin: new Date(),
    });
});
router.delete("/:index", (req, res) => {
    res.send({"foo": "dummy users delete"});
});

module.exports = router;