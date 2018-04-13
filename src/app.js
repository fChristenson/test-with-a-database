const express = require("express");
const app = express();
const UserService = require("./libs/user");

app.get("/users", async (req, res, next) => {
  try {
    const users = await UserService.listUsers();
    res.json(users);
  } catch (e) {
    next(e);
  }
});

app.post("/users", async (req, res, next) => {
  const name = req.query.name;
  const birthday = req.query.birthday;

  try {
    const users = await UserService.createUser(name, birthday);
    res.json(users);
  } catch (e) {
    next(e);
  }
});

app.use((req, res, next) => {
  res.status(404).json({ error: "not found" });
});

app.use((err, req, res, next) => {
  res.status(500).json({ error: err.message });
});

module.exports = app;
