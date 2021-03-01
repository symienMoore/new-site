const express = require('express');
const router = express.Router();
const gitController = require('../controllers/api.controller');
const cron = require('node-cron');
const axios = require('axios');
const Repo = require('../models/Repository');

cron.schedule('0 9 * * 1', async function() {
    console.log('updating repositories...');
    // router.get('/github', gitController.getGithubData);
    try {
        await axios.get('https://api.github.com/users/symienMoore/repos')
            .then(function (response) {
                onSuccess(response)
                console.log('Update complete.')
              })
              .catch(function (error) {
                console.log(error);
              });
     } catch (err) {
         console.log(err)
     }
});
  
function onSuccess(response) {
  let array = response;
  let arrayLength = Object.keys(array).length 
    console.log(arrayLength)
   for(let i = 0; i <= arrayLength; i++) {
       let name = array.data[i].name;
       let desc = array.data[i].description;
       let url = array.data[i].html_url;
       const language = array.data[i].language;
      console.log( name + " " + desc + " " + url);

      assignDataValue(name, desc, url, language)

    }
}

function assignDataValue(name, desc, url, language) {

    let upData = new Repo()
       upData.name = name;
       upData.description = desc;
       upData.url = url;
       upData.language = language;
 
       upData.save();
 }
module.exports = router;