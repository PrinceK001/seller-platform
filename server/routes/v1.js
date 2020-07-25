const router = require("express").Router();

const test = require("./test");

router.use("/test", test);

router.use("**", (req, res) => {
    res.status(404).send("Invalid API Request");
});

module.exports = router;