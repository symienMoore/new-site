const axios = require('axios');
const Repo = require('../models/Repository');

exports.getGithubData = async (req, res) => {
    try {
       await axios.get('https://api.github.com/users/symienMoore/repos')
           .then(data => {
               console.log(data)
               console.log('repos udpated');
            })
    } catch (err) {
        console.log(err)
    }
}