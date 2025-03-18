const dotenv = require('dotenv');
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const helmet = require('helmet');
const path = require('path');

// Load environment variables
dotenv.config();

const app = express();

// Middleware
app.use(express.json()); // Parse JSON request bodies
app.use(morgan('dev')); // Log HTTP requests
app.use(helmet()); // Set security-related HTTP headers
app.use(cors()); // Enable CORS
app.use(require('./middleware/formatResponse')); // Custom response formatting middleware

// Serve static files
app.use(express.static('public'));

// API Documentation route
app.get('/api-docs', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'docs.html'));
});

// Routes
app.use('/users', require('./routes/users')); // User-related routes
app.use('/posts', require('./routes/posts')); // Post-related routes
app.use('/posts/:id/comments', require('./routes/comments')); // Comment-related routes (nested under posts)
app.use('/posts/:id/likes', require('./routes/likes')); // Like-related routes (nested under posts)
app.use('/users/:id/followers', require('./routes/followers')); 
// Basic route
app.get('/', (req, res) => {
    res.json({ message: 'Welcome to Social Media API' });
});

// Error handler middleware
app.use(require('./middleware/errorHandler'));

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running in development mode on port ${PORT}`);
});

// Handle unhandled promise rejections
process.on('unhandledRejection', (err, promise) => {
    console.log(`Error: ${err.message}`);
    // Close server & exit process
    process.exit(1);
});