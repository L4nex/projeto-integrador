const usersData = require("../data/usersData");

exports.createUser = function (user) {
  return usersData.createUser(user);
};

exports.updateUser = function (user, id) {
  return usersData.updateUser(user, id);
};

exports.deleteUser = function (id) {
  return usersData.deleteUser(id);
};

exports.showUser = function (id) {
  return usersData.showUser(id);
};
exports.listUsers = function () {
  return usersData.listUsers();
};
