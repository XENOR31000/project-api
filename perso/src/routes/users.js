import express from "express";
import bodyParser from "body-parser";
import UsersModel from "../models/Users";
import bcrypt from 'bcrypt';

const usersRoutes = express.Router();

var jsonParser = bodyParser.json();

usersRoutes.get("/users", (req, res) => {
  UsersModel.find()
    .then((data) => {
      res.json(data);
    })
    .catch((error) => {
      res.json(error);
    });
});

usersRoutes.get("/users/:idUser", (req, res) => {
  UsersModel.findById(req.params.idUser)
    .then((data) => {
      res.json(data);
    })
    .catch((error) => {
      res.json(error);
    });
});

usersRoutes.post("/users/login", jsonParser, async (req, res) => {
    const { username, password } = req.body
    const user = await UsersModel.findOne({ username: username })
    if(user) {
      bcrypt.compare(password, user.password, function(err, result) {
          if (result) {
            res.json({state: true, user: user})
          } else {
            res.json({state: false, user: user})
          }
      });
    }
})

usersRoutes.post("/users", jsonParser, (req, res) => {
  bcrypt.genSalt(5, (err, salt) => {
    bcrypt.hash(req.body.password, salt, function(err, hash) {
      const User = new UsersModel({
        email: req.body.email,
        phoneNumber: req.body.phoneNumber,
        username: req.body.username,
        password: hash,
      });
      User.save()
      .then((data) => {
        res.json(data);
      })
      .catch((error) => {
        res.json(error);
      });
    });
  })
});

usersRoutes.patch("/users/:idUser", jsonParser, (req, res) => {
  if(req.body.password) {
    bcrypt.genSalt(5, (err, salt) => {
      bcrypt.hash(req.body.password, salt, function(err, hash) {
        var newBody = {
          email: req.body.email,
          phoneNumber: req.body.phoneNumber,
          username: req.body.username,
          password: hash,
        }
        UsersModel.findByIdAndUpdate(req.params.idUser, newBody, { new: true })
          .then((data) => {
            res.json(data);
          })
          .catch((error) => {
            res.json(error);
          });
      });
    })
  } else {
    UsersModel.findByIdAndUpdate(req.params.idUser, req.body, { new: true })
      .then((data) => {
        res.json(data);
      })
      .catch((error) => {
        res.json(error);
      });
  }
});

usersRoutes.delete("/users/:idUser", (req, res) => {
  UsersModel.findByIdAndDelete(req.params.idUser)
    .then((data) => {
      res.json(data);
    })
    .catch((error) => {
      res.json(error);
    });
});

export default usersRoutes;
