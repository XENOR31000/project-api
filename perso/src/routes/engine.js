import express from "express";
import bodyParser from "body-parser";
import Engine from "../models/Engine";
import bcrypt from 'bcrypt';

const engineRoutes = express.Router();

var jsonParser = bodyParser.json();
engineRoutes.get("/engines", (req, res) => {
  Engine.find()
    .then((data) => {
      res.json(data);
    })
    .catch((error) => {
      res.json(error);
    });
});

engineRoutes.get("/engines/:idEngine", (req, res) => {
  Engine.findById(req.params.idModel)
    .then((data) => {
      res.json(data);
    })
    .catch((error) => {
      res.json(error);
    });
});

// modelRoutes.post("/models/ajout", jsonParser, async (req, res) => {
//     const { username, password } = req.body
//     const user = await Models.findOne({ username: username })
//     if(user) {
//       bcrypt.compare(password, user.password, function(err, result) {
//           if (result) {
//             res.json({state: true, user: user})
//           } else {
//             res.json({state: false, user: user})
//           }
//       });
//     }
// })

// modelRoutes.post("/models", jsonParser, (req, res) => {
//   bcrypt.genSalt(5, (err, salt) => {
//     bcrypt.hash(req.body.password, salt, function(err, hash) {
//       const User = new UsersModel({
//         email: req.body.email,
//         phoneNumber: req.body.phoneNumber,
//         username: req.body.username,
//         password: hash,
//       });
//       User.save()
//       .then((data) => {
//         res.json(data);
//       })
//       .catch((error) => {
//         res.json(error);
//       });
//     });
//   })
// });

// modelRoutes.patch("/models/:idModel", jsonParser, (req, res) => {
//   if(req.body.password) {
//     bcrypt.genSalt(5, (err, salt) => {
//       bcrypt.hash(req.body.password, salt, function(err, hash) {
//         var newBody = {
//           email: req.body.email,
//           phoneNumber: req.body.phoneNumber,
//           username: req.body.username,
//           password: hash,
//         }
//         UsersModel.findByIdAndUpdate(req.params.idUser, newBody, { new: true })
//           .then((data) => {
//             res.json(data);
//           })
//           .catch((error) => {
//             res.json(error);
//           });
//       });
//     })
//   } else {
//     UsersModel.findByIdAndUpdate(req.params.idUser, req.body, { new: true })
//       .then((data) => {
//         res.json(data);
//       })
//       .catch((error) => {
//         res.json(error);
//       });
//   }
// });

// usersRoutes.delete("/users/:idUser", (req, res) => {
//   UsersModel.findByIdAndDelete(req.params.idUser)
//     .then((data) => {
//       res.json(data);
//     })
//     .catch((error) => {
//       res.json(error);
//     });
// });

export default engineRoutes;
