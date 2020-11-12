const axios = require('axios');


exports.getGithubData = async (req, res) => {
    try {
       await axios.get('https://api.github.com/users/symienMoore/repos')
            .then(data => {
                res.send(data.data)
            })
    } catch (err) {
        console.log(err)
    }
}