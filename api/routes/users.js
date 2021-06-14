const express = require("express");
const router = express.Router();
const upload = require("../services/ImageUpload");

const {
  createUser,
  getUsers,
  getUserById,
  deleteUser,
  updateUser,
} = require("../controllers/users");

// All routes in  here start with /users

router.get("/", getUsers);

router.get("/:id", getUserById);

router.post("/", upload.single("avatar"), createUser);

router.delete("/:id", deleteUser);

router.patch("/:id", updateUser);

module.exports = router;
