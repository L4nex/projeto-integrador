const configData = require("../data/configData");

exports.createConfig = function (config) {
    return configData.createConfig(config);
};

exports.listConfig = function () {
    return configData.listConfig();
};