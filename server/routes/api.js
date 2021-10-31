const express = require("express");
const router = express.Router();

//@route   Get api/
//@desc    Test api
//@access  Public
router.get("/", async (req, res) => {
    res.send("node api running");
});

module.exports = router;
