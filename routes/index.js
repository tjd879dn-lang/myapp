const express = require('express');
const router = express.Router();
const mysql = require('mysql2/promise');

// 메시지 목록 표시
router.get('/', async (req, res) => {
  try {
    const conn = await mysql.createConnection({
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASS,
      database: process.env.DB_NAME
    });

    const [rows] = await conn.query('SELECT * FROM messages ORDER BY created_at DESC LIMIT 5');
    await conn.end();

    res.render('index', { messages: rows });
  } catch (err) {
    res.status(500).send('Database error: ' + err.message);
  }
});
router.get('/health', (req, res) => {
  res.status(200).send('OK');
});

module.exports = router;