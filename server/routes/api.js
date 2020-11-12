var express = require('express');
var router = express.Router();
var gitController = require('../controllers/api.controller');


router.get('/github', gitController.getGithubData);
module.exports = router;