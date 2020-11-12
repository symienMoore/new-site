var express = require('express');
var router = express.Router();
var verify = require("../config/verify");
var controller = require("../controllers/user.controller");

router.post("/signup", controller.registerUser);
router.post("/login", controller.userSignIn);


router.get('/profile', verify, controller.getUserProfile);


module.exports = router;
