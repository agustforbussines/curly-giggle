const express = require("express");
const router = express.Router();
const loginController = require("../controller/loginController.js");

router.post("/", loginController);

module.exports = router;
