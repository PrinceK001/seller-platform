const router = require("express").Router();

const test = require("./test");

router.use("/test", test);

router.use("**", (req, res) => {
    res.status(404).send("Invalid v1 API Request");
});

module.exports = router;