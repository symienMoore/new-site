const mongoose = require('mongoose');
const user = require('./User');

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
    }, 

    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user"
    }
})

const Post = mongoose.model('Post', postSchema);
module.exports = Post;