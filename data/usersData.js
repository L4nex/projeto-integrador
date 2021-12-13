const database = require('../database/database');
const { v4: uuidv4 } = require('uuid');

exports.createUser = function(user){
    return database.query(
    'INSERT INTO usuarios(nome, token, id_config_usuario) VALUES (?, ?, ?)',
    [user.nome, uuidv4(), 1]
    );
};

exports.updateUser = function(user, id){
    return database.query(
        'UPDATE usuarios SET nome= ? WHERE id= ?;',
        [user.nome, id]
    );
};

exports.deleteUser = function(id){
    return database.query(
        'delete FROM usuarios WHERE id= ?;',
        [id]
    );  
};

exports.showUsers = function(id){
    return database.query(
        'SELECT * FROM usuarios where id = ?;',
        [id]
    );
};

exports.showUser = function(id){
    return new Promise((resolve, reject) =>
        database.query(
            'SELECT * FROM usuarios where id = ?;',
            [id],
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

exports.listUsers = function(){
    return new Promise((resolve, reject) =>
        database.query(
            'SELECT * FROM usuarios;',
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