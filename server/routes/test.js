const router = require("express").Router();
const _ = require("lodash");

const { responses } = require("../utils");

router.get("/", (req, res, next) => {
    res.send(responses(true, "01004", "Greeting", "Welcome to seller platform !"));
});

module.exports = router;