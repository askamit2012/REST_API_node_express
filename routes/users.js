const express = require("express");
// const { uuidv4 } = require("uuid");
const {
  createUser,
  getUsers,
  getUserById,
  deleteUser,
  updateUser,
} = require("../controllers/users");

const router = express.Router();

// All routes in  here start with /users

router.get("/", getUsers);

router.get("/:id", getUserById);

router.post("/", createUser);

router.delete("/:id", deleteUser);

router.patch("/:id", updateUser);

module.exports = router;
