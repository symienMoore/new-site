const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },

    desc: {
        type: String,
        required: true
    },

    body: {
        type: String,
        required: true
    },

    category: {
        type: String,
        required: true
    },

    created_at: {
        type: Date,
        default: Date.now
    }
})

const Post = mongoose.model('Post', postSchema);
module.exports = Post;