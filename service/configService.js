const usersData = require("../data/configData");

exports.createConfig = function (config) {
    return configData.createConfig(config);
};

exports.listConfig = function (config) {
    return configData.listConfig(config);
};