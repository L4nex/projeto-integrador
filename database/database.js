const mysql = require('mysql');

  const con = mysql.createConnection({
    host: "projeto-integrador.ci3ylwgfbzp4.us-east-1.rds.amazonaws.com",
    user: "root",
    password: "Projeto!#2021",
    database: 'projeto_integrador'
});

con.connect((err) => {
  if (err) {
      console.log('Erro connecting to database...', err)
      return
  }
  console.log('Connection established!')
})

module.exports = con;