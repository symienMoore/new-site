const  mongoose  = require('mongoose');

const RepositorySchema = new mongoose.Schema({
    name: String,
    description: String,
    url: String,
    language: String
})

const Repo = mongoose.model('Repository', RepositorySchema);
module.exports = Repo;