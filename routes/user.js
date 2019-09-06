const express = require("express");
const bcript = require("bcrypt");

const jwt = require("jsonwebtoken");
const router = express.Router();

const User = require("../models/user");

router.post("/signup", (req, res, next) => {
  bcript.hash(req.body.password, 10).then(hash => {
    const user = new User({
      email: req.body.email,
      password: hash
    });
    user
      .save()
      .then(result => {
        res.send(201).json({
          message: "user created",
          result: result
        });
      })

      .catch(err => {
        res.status(500).json({
          error: err
        });
      });
  });

  router.post("/login", (req, res, next) => {
    let fetchedUser;
    User.findOne({ email: req.body.email })
      .then(user => {
        console.log(user);
        if (!User) {
          return res.status(401).json({
            message: "auth fail"
          });
        }
        fetchedUser = user;
        return bcript.compare(req.body.password, User.password);
      })
      .then(result => {
        if (!result) {
          return res.status(401).json({
            message: "auth fail"
          });
        }

        const token = jwt.sign(
          { email: fetchedUser.email, userId: fetchedUser._id },
          "secret_this_should_longer",
          { expiresIn: "1h" }
        );

        res.status(200).json({
          token: token,
          expiresIn: "3600"
        });
      })
      .catch(err => {
        return res.status(401).json({
          message: "auth fail"
        });
      });
  });

  module.exports = router;
});
