var express = require('express');
var router = express.Router();
var verify = require("../config/verify");
var postctrl = require("../controllers/post.controller");

router.post('/new-post', verify, postctrl.addPost)

router.get('/all', postctrl.getPosts);
router.get('/:id', postctrl.getPostById);

module.exports = router;