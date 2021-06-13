const express = require("express");
const usersRoutes = require("./routes/users.js");

const app = express();

app.use(express.json());
app.use("/users", usersRoutes);

app.get("/", (req, res) => {
  res.send("Welcome User");
});

app.listen(process.env.PORT || 5000);
