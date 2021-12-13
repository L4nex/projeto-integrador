const database = require('../database/database');

exports.createConfig = function(config){
    return database.query(
    'INSERT INTO config(nome, qntdTempoCiclo, qntdCiclosInativo) VALUES (?, ?, ?)',
    [config.nome, config.qntdTempoCiclo, config.qntdCiclosInativo]
    );
};

exports.listConfig = function(){
    return database.query(
        'SELECT * FROM config;'
    );
};