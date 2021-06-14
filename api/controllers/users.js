let users = [];
const { v4: uuidv4 } = require("uuid");
var path = require("path");
const User = require("../models/users");
const mongoose = require("mongoose");

const createUser = (req, res) => {
  if (!req.file) {
    var imagepath = path.basename(req.body.productImage);
  } else {
    imagepath = req.file.location;
  }
  // console.log(req.body);
  const { name, age, sex, city, email } = req.body;
  // const userId = uuidv4();

  const user = new User({
    // ...user,
    _id: new mongoose.Types.ObjectId(),
    name,
    age,
    sex,
    city,
    email,
    avatar: imagepath,
  });
  // users.push(newUser);
  user
    .save()
    .then((result) => {
      res.status(201).json({
        message: `${name} is saved to DB`,
        createUser: user,
      });
    })
    .catch((err) => res.status(500).json({ error: err }));
  // res.send(`${user.name} is Posted`);
};

const getUsers = (req, res) => {
  User.find()
    .exec()
    .then((result) => {
      res.status(200).json({ Total_Users: result.length, result });
    })
    .catch((err) => res.status(500).json({ error: err }));
  // res.send(users);
};

const getUserById = (req, res) => {
  const id = req.params.id;
  const user = users.find((user) => user.id === id);
  res.send(user);
};

const deleteUser = (req, res) => {
  users = users.filter((user) => user.id != req.params.id);
  res.send(`${req.param.id} was deleted`);
};

const updateUser = (req, res) => {
  const { id } = req.params;
  const { name, email, age } = req.body;

  const user = users.find((user) => user.id == id);

  if (name) user.name = name;

  if (email) user.email = email;

  if (age) user.age = age;

  res.send(`User with ${id} has been updated`);
};

module.exports = { createUser, getUsers, getUserById, deleteUser, updateUser };
