const { Pool } = require('pg'); // Import the Pool class

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'student_records',
    password: '1234',
    port: '5432'
});

async function testConnection() {
    let client;

    try {
        client = await pool.connect();
        console.log('Connected to PostgreSQL database!');

        const result = await client.query('SELECT * FROM students');

        console.log('Students in database:');
        console.table(result.rows);

        console.log(`Total students: ${result.rowCount}`);
    } catch (err) {
        console.error('Database connection error:', err);
    } finally {
        if (client) client.release(); // Release the client back to the pool
        await pool.end(); // Close the pool (only if you don't need it anymore)
        console.log('Connection pool closed');
    }
}

// Call the function to test the connection
testConnection();