const database = require('../database/database');

exports.createConfig = function(config){
    return database.query(
    'INSERT INTO config(nome, qntdTempoCiclo, qntdCiclosInativo) VALUES (?, ?, ?)',
    [config.nome, config.qntdTempoCiclo, config.qntdCiclosInativo]
    );
};

exports.listConfig = function(){
    return new Promise((resolve, reject) =>
        database.query(
            'SELECT * FROM config;',
            (err, rows) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(rows);
                }
            }
        )
    ) 
};