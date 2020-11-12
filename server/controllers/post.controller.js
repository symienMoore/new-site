var Post = require('../models/Post');
var User = require('../models/User');

exports.addPost = async (req, res) => {
    try {
        await User.find({ _id: req.user.id }).then((user) => {
            const post = Post.create({
                title: req.body.title,
                desc: req.body.desc,
                body: req.body.body,
                category: req.body.category,
                user: req.user.id
            })
        })    
        res.send({mes: "post created!", status: 200})
    } catch (error) {
        res.send(error)
    }
}

exports.getPosts = (req, res) => {
    try {
        Post.find().then((posts) => {
            res.status(200).json(posts)
        })
    } catch (err) {
        res.status(500).json(err)
    }
}

exports.getPostById = async (req, res) => {
    try {
        Post.findOne({ _id: req.params.id }).then((post) => {
          res.status(201).json(post)
        })
    } catch (error) {
        res.status(400).json(err)
    }
}