let users = [
  {
    name: "Amit Kumar",
    usn: "1ds12cs008",
    college: "DSCE",
  },
  {
    name: "Shreyash Prashu",
    usn: "1ds12ec068",
    college: "DSCE",
  },
  {
    name: "Nikhil Kumar",
    usn: "1ds12cs008",
    college: "DSCE",
  },
];
const { v4: uuidv4 } = require("uuid");

const createUser = (req, res) => {
  const user = req.body;
  const userId = uuidv4();
  const newUser = { ...user, id: userId };
  users.push(newUser);
  res.send(`${user.name} is Posted`);
};

const getUsers = (req, res) => {
  res.send(users);
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
