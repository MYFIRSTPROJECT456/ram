var mysql = require('mysql');

var pool = mysql.createPool({
  connectionLimit: 10,
  host: 'localhost',
  user: 'shricons_myuser',
  password: 'BukIsGard4',
  database: 'freeads',
  debug: false,
});

module.exports = pool;
