const database = require('../database/database');

exports.listBeats = function(){
    return new Promise((resolve, reject) =>
        database.query(
            'SELECT u.nome, b.maior_tempo_inatividade, b.inatividade_total, b.horario_batida_inicio, b.horario_batida_fim FROM batidas b inner join usuarios u on u.id = b.id_usuario;',
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