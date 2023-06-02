const express = require('express');
const mysql = require('mysql');

const app = express();
const port = 3000;

// MySQL connection configuration
const dbConfig = {
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'fidoapp',
};

// Create a MySQL pool
const pool = mysql.createPool(dbConfig);

// Define a route to fetch data from MySQL
app.get('/categories', (_req, res) => {
  pool.getConnection((err, connection) => {
    if (err) {
      console.error('Error connecting to MySQL:', err);
      res.status(500).json({ error: 'Error connecting to MySQL' });
    } else {
      connection.query('SELECT * FROM categories', (error, results) => {
        connection.release(); // Release the connection back to the pool
        if (error) {
          console.error('Error executing query:', error);
          res.status(500).json({ error: 'Error executing query' });
        } else {
          res.json(results);
        }
      });
    }
  });
});

app.get('/users', (_req, res) => {
  pool.getConnection((err, connection) => {
    if (err) {
      console.error('Error connecting to MySQL:', err);
      res.status(500).json({ error: 'Error connecting to MySQL' });
    } else {
      connection.query('SELECT * FROM users', (error, results) => {
        connection.release(); // Release the connection back to the pool
        if (error) {
          console.error('Error executing query:', error);
          res.status(500).json({ error: 'Error executing query' });
        } else {
          res.json(results);
        }
      });
    }
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
