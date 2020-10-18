var express = require('express');
var router = express.Router();
var controller = require("../controllers/user.controller");

router.post("/login", controller.userSignIn)



module.exports = router;
