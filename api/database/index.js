require('dotenv').config();
const { Pool } = require('pg');

const pool = new Pool({
  user: 'postgres',
  password: process.env.PASSWORD,
  host: 'localhost',
  database: process.env.DATABASE,
  port: process.env.PORTDATABASE,
});

// Exemplo de consulta ao banco de dados
pool.query('SELECT NOW()', (err, res) => {
  if (err) {
    console.error('Erro ao executar a consulta', err);
  } else {
    console.log('Resultado da consulta:', res.rows[0]);
  }
  pool.end();
});