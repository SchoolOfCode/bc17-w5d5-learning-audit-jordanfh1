const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { Pool } = require('pg');

const app = express();
const port = 3000;

// Database connection setup
const pool = new Pool({
  user: 'yourusername',
  host: 'localhost',
  database: 'yourdatabase',
  password: 'yourpassword',
  port: 5432,
});

// Middleware setup
app.use(bodyParser.json());
app.use(cors());

// API endpoint to fetch data
app.get('/api/data', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM your_table');
    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// API endpoint to insert data
app.post('/api/data', async (req, res) => {
  const { name, value } = req.body;
  try {
    const result = await pool.query('INSERT INTO your_table (name, value) VALUES ($1, $2) RETURNING *', [name, value]);
    res.json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
