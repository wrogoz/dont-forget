const express = require("express");
const Router = express.Router();
const Users = require("../models/user");
const bcrypt = require("bcryptjs");
const auth = require("../middlewares/auth");
const _ = require("lodash");
const addProduct = require("../utils/addProduct");
const removeProduct = require("../utils/removeProduct");
//read user
Router.get("/api/userPage", auth, async (req, res) => {
  try {
    const user = await Users.findById(req.user.id);
    res.send(_.pick(user, ["_id", "name", "surname", "shoppingList"]));
  } catch (error) {
    res.status(500).send(error.message);
  }
});

Router.patch("/api/userPage/addProduct", auth, async (req, res) => {
  try {
    const user = await addProduct(req.user.id, req.body.product);
    res.send(user);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

Router.patch("/api/userPage/removeProduct", auth, async (req, res) => {
  try {
    const user = await removeProduct(req.user.id, req.body.product);
    res.send(user);
  } catch (error) {
    res.status(500).send(error.message);
  }
});
module.exports = Router;
