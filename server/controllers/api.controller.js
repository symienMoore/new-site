const axios = require('axios');
const Repo = require('../models/Repository');

exports.getGithubData = async (req, res) => {
    Repo.find().then((repos) => {
        res.status(200).send(repos);
   })
}