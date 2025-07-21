const mysql = require('mysql2/promise');

const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '', // ← contraseña vacía por defecto en XAMPP
  database: 'formulario_db',
});

module.exports = pool;
