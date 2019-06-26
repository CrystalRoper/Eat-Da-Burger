var connection = require("./connection.js");

function selectAll(callback) {
  connection.query(
    "Select * From `burgers` Order By Id",
    callback);
};

function selectOne(id, callback) {
  connection.query(
    "Select * From `burgers` Where Id=?",
    [id],
    callback);
}

function insertOne(burger, callback) {
  connection.query(
    "Insert Into `burgers` (burger_name, devoured) Values (?,?)",
    [burger.burger_name, burger.devoured],
    callback); 
};

function updateOne(burger, callback) {
  connection.query(
    "Update `burgers` set burger_name=?, devoured=? where Id=?",
    [burger.burger_name, burger.devoured, burger.id],
    callback); 
};

module.exports = {
  selectAll: selectAll,
  selectOne: selectOne,
  insertOne: insertOne,
  updateOne: updateOne
};