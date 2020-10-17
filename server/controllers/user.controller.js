var User = require('../models/User');

exports.userSignIn = async function(req, res) {
    if(req.body.email && req.body.password){
        await User.authenticate(req.body.email, req.body.password, (err, user) => {
          if(err || !user){
            res.status(400).send({message: 'no user!'});
          } else if (user) {
            const token = jwt.sign({_id: user._id}, process.env.SECRET_TOKEN);
            res.header('authtoken', token).send({token});
          }
      });
    } else {
      console.log("email and password are required")
      res.status(400).send({error: "email and password are required!"});
    }
}