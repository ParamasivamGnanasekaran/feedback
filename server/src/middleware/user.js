// middleware/users.js

const jwt = require("jsonwebtoken");

module.exports = {
  validateRegister: (req, res, next) => {
    // username min length 3
    if (!req.body.username || req.body.username.length < 3) {
        console.log(req.body.username)
      return res.status(400).send({
        msg: 'Please enter a username with min. 3 chars'
      });
    }

    // password min 6 chars
    if (!req.body.password || req.body.password.length < 6) {
      return res.status(400).send({
        msg: 'Please enter a password with min. 6 chars'
      });
    }

    // password (repeat) does not match
    if (
      !req.body.confirmPassword ||
      req.body.password != req.body.confirmPassword
    ) {
      return res.status(400).send({
        msg: 'Both passwords must match'
      });
    }

    next();
  }
};