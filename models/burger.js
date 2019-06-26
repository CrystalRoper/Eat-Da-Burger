var orm = require("../config/orm.js");

function selectAll() {
  return new Promise(function (resolve, reject) {
    orm.selectAll(function (error, result) {
      if (error) return reject(error);
      return resolve(result);
    });
  });
}

function selectOne(burgerId) {
  return new Promise(function (resolve, reject) {
    orm.selectOne(burgerId, function (error, result) {
      if (error) reject(error);
      return resolve(result[0]);
    });
  });
}

function eat(burgerId) {
  return new Promise(function (resolve, reject) {
    selectOne(burgerId).then(function (burgerToEat) {
      burgerToEat.devoured = true;

      orm.updateOne(burgerToEat, function (error, result) {
        if (error) return reject(error);
        return resolve(result.affectedRows);
      });
    });
  });
}

function add(newBurger) {
  return new Promise(function (resolve, reject) {
    orm.insertOne(newBurger, function (error, result) {
      if (error) return reject(error);
      return resolve(result);
    });
  });
}

module.exports = {
  selectAll: selectAll,
  selectOne: selectOne,
  eat: eat,
  add: add
};