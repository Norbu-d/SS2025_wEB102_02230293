const express = require('express');
const { Pool } = require('pg');
const cors = require('cors');

// Initialize Express app
const app = express();
const port = 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// Enable CORS
app.use(cors());

// PostgreSQL connection pool
const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'student_records',
    password: '1234',
    port: 5432,
});

// Test database connection
pool.connect()
    .then(client => {
        console.log('Connected to PostgreSQL database');
        client.release();
    })
    .catch(err => {
        console.error('PostgreSQL connection error:', err);
    });

// Root endpoint
app.get('/', (req, res) => {
    res.send('Student Records API is running (PostgreSQL)');
});

// GET all students
app.get('/api/students', async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM students');
        res.status(200).json({
            message: 'Students retrieved successfully',
            data: result.rows,
        });
    } catch (error) {
        console.error('Error fetching students:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

// GET a student by ID
app.get('/api/students/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const result = await pool.query('SELECT * FROM students WHERE id = $1', [id]);
        if (result.rows.length === 0) {
            return res.status(404).json({ error: 'Student not found' });
        }
        res.status(200).json({
            message: 'Student retrieved successfully',
            data: result.rows[0],
        });
    } catch (error) {
        console.error('Error fetching student:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

// POST a new student
app.post('/api/students', async (req, res) => {
    const { name, email, course, enrollment_date } = req.body;
    if (!name || !email || !course || !enrollment_date) {
        return res.status(400).json({ error: 'All fields are required' });
    }
    try {
        const result = await pool.query(
            'INSERT INTO students (name, email, course, enrollment_date) VALUES ($1, $2, $3, $4) RETURNING *',
            [name, email, course, enrollment_date]
        );
        res.status(201).json({
            message: 'Student created successfully',
            data: result.rows[0],
        });
    } catch (error) {
        console.error('Error creating student:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

// PUT (update) a student by ID
app.put('/api/students/:id', async (req, res) => {
    const { id } = req.params;
    const { name, email, course, enrollment_date } = req.body;
    if (!name || !email || !course || !enrollment_date) {
        return res.status(400).json({ error: 'All fields are required' });
    }
    try {
        const result = await pool.query(
            'UPDATE students SET name = $1, email = $2, course = $3, enrollment_date = $4 WHERE id = $5 RETURNING *',
            [name, email, course, enrollment_date, id]
        );
        if (result.rows.length === 0) {
            return res.status(404).json({ error: 'Student not found' });
        }
        res.status(200).json({
            message: 'Student updated successfully',
            data: result.rows[0],
        });
    } catch (error) {
        console.error('Error updating student:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

// DELETE a student by ID
app.delete('/api/students/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const result = await pool.query('DELETE FROM students WHERE id = $1 RETURNING *', [id]);
        if (result.rows.length === 0) {
            return res.status(404).json({ error: 'Student not found' });
        }
        res.status(200).json({
            message: 'Student deleted successfully',
            data: result.rows[0],
        });
    } catch (error) {
        console.error('Error deleting student:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});