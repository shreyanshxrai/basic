const express = require("express");
const app = express();
const signinrouter = require("./signin")
const signuprouter = require("./signup")

const router = express.Router();

router.use("/signup" , signuprouter);

router.use("/signin" , signinrouter);

module.exports = router;