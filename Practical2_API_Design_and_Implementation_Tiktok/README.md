# Practical 2 : API Design and Implementation (Tiktok)

A RESTful API implementation for a TikTok-like application built with Express.js and Node.js.

## 🚀 Overview

This project implements a backend REST API that provides endpoints for managing videos, users, and comments in a TikTok-style social media application. The API follows RESTful design principles and includes features like video management, user interactions, and comment systems.

## 📋 API Design

### Resources
- **Videos** 🎥 - Video content management
- **Users** 👤 - User profiles and authentication
- **Comments** 💬 - Comment system for videos

### Endpoint Structure

| Endpoint | GET | POST | PUT | DELETE |
|----------|-----|------|-----|--------|
| `/api/videos` | Get all videos | Create new video | - | - |
| `/api/videos/:id` | Get video by ID | - | Update video | Delete video |
| `/api/videos/:id/comments` | Get video comments | - | - | - |
| `/api/videos/:id/likes` | Get video likes | Like video | - | Unlike video |
| `/api/users` | Get all users | Create user | - | - |
| `/api/users/:id` | Get user by ID | - | Update user | Delete user |
| `/api/users/:id/videos` | Get user videos | - | - | - |
| `/api/users/:id/followers` | Get followers | Follow user | - | Unfollow user |
| `/api/users/:id/following` | Get following users | - | - | - |
| `/api/comments` | Get all comments | Create comment | - | - |
| `/api/comments/:id` | Get comment by ID | - | Update comment | Delete comment |
| `/api/comments/:id/likes` | Get comment likes | Like comment | - | Unlike comment |

## 🛠️ Installation & Setup

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Step 1: Initialize Project
```bash
mkdir -p server
cd server
npm init -y
```

### Step 2: Install Dependencies
```bash
npm install express cors morgan body-parser dotenv
npm install --save-dev nodemon
```

### Step 3: Create Project Structure
```bash
mkdir -p src/controllers src/routes src/models src/middleware src/utils
touch src/app.js src/server.js .env
```

### Step 4: Environment Configuration
Create `.env` file:
```env
PORT=3000
NODE_ENV=development
```

### Step 5: Update package.json Scripts
```json
{
  "scripts": {
    "start": "node src/server.js",
    "dev": "nodemon src/server.js",
    "test": "echo \"Error: no test specified\" && exit 1"
  }
}
```

## 🏗️ Project Structure

```
server/
├── src/
│   ├── controllers/
│   │   ├── videoController.js
│   │   ├── userController.js
│   │   └── commentController.js
│   ├── routes/
│   │   ├── videos.js
│   │   ├── users.js
│   │   └── comments.js
│   ├── models/
│   │   └── index.js
│   ├── middleware/
│   ├── utils/
│   ├── app.js
│   └── server.js
├── .env
└── package.json
```

## 🔧 Implementation Details

### Express Application Setup (src/app.js)
```javascript
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const bodyParser = require('body-parser');

const app = express();

// Middleware
app.use(cors());
app.use(morgan('combined'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Routes
app.use('/api/videos', require('./routes/videos'));
app.use('/api/users', require('./routes/users'));
app.use('/api/comments', require('./routes/comments'));

module.exports = app;
```

### Server Entry Point (src/server.js)
```javascript
require('dotenv').config();
const app = require('./app');

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`🚀 Server running on port \${PORT}`);
});
```

### Data Models (In-Memory)
The application uses in-memory data structures for demonstration purposes:
- **Videos**: Array of video objects with metadata
- **Users**: Array of user profiles
- **Comments**: Array of comment objects linked to videos

## 🧪 Testing the API

### Using cURL Commands

**Get all users:**
```bash
curl -X GET http://localhost:3000/api/users
```

**Get all videos:**
```bash
curl -X GET http://localhost:3000/api/videos
```

**Get user by ID:**
```bash
curl -X GET http://localhost:3000/api/users/1
```

**Get video by ID:**
```bash
curl -X GET http://localhost:3000/api/videos/1
```

**Get user's videos:**
```bash
curl -X GET http://localhost:3000/api/users/1/videos
```

**Get video comments:**
```bash
curl -X GET http://localhost:3000/api/videos/1/comments
```

### Using Postman
1. Import the API endpoints into Postman
2. Set the base URL to `http://localhost:3000`
3. Test each endpoint with appropriate HTTP methods
4. Verify response formats and status codes

## 🚀 Running the Application

### Development Mode
```bash
npm run dev
```

### Production Mode
```bash
npm start
```

## 📝 Features Implemented

✅ **Video Management**
- Create, read, update, delete videos
- Get video comments and likes
- Video metadata handling

✅ **User Management**
- User profile CRUD operations
- User videos retrieval
- Follow/unfollow functionality

✅ **Comment System**
- Comment CRUD operations
- Comment likes system
- Video-comment relationships

✅ **RESTful Design**
- Proper HTTP methods usage
- Consistent URL patterns
- JSON response format

## 🔮 Future Enhancements

- Database integration (MongoDB/PostgreSQL)
- Authentication and authorization
- File upload for videos
- Real-time features with WebSockets
- Rate limiting and security middleware
- Input validation and sanitization
- Comprehensive error handling
- Unit and integration tests

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request



