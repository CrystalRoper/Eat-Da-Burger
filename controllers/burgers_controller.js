var express = require("express");
var router = express.Router();
var burger = require("../models/burger.js");

module.exports = function (app) {
  app.get("/", function (req, res) {
    burger.selectAll().then(function (burgers) {
      res.render('index', {
        burgers: burgers
      });
    });
  });

  app.post("/api/add", function (req, res) {
    var newBurger = {
      burger_name: req.body.burger_name,
      devoured: false
    };

    burger.add(newBurger).then(function (newBurgerId) {
      res.json(newBurgerId);
    });
  });

  app.post("/api/eat", function (req, res) {
    var burgerId = parseInt(req.body.id);

    burger.eat(burgerId).then(function (burgerUpdateCount) {
      res.json(burgerUpdateCount);
    });
  });

  return router;
};