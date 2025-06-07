# Practical 1 : API Design and Implementation

A comprehensive RESTful API for a social media platform similar to Instagram, built with Node.js and Express.js.

## 🚀 Features

- **Complete CRUD Operations** for all resources (Users, Posts, Comments, Likes, Followers)
- **RESTful Design** following best practices
- **Content Negotiation** with different MIME types (JSON, XML, HTML)
- **Proper HTTP Status Codes** and error handling
- **API Documentation** with interactive HTML interface
- **Mock Data** for testing and development
- **Middleware** for error handling and response formatting

## 📋 API Resources

### 🧑‍💼 Users
- **GET** `/users` - List all users
- **GET** `/users/{id}` - Get specific user
- **POST** `/users` - Create new user
- **PUT** `/users/{id}` - Update user
- **DELETE** `/users/{id}` - Delete user

### 📝 Posts
- **GET** `/posts` - List all posts
- **GET** `/posts/{id}` - Get specific post
- **POST** `/posts` - Create new post
- **PUT** `/posts/{id}` - Update post
- **DELETE** `/posts/{id}` - Delete post

### 💬 Comments
- **GET** `/comments` - List all comments
- **GET** `/comments/{id}` - Get specific comment
- **POST** `/comments` - Create new comment
- **PUT** `/comments/{id}` - Update comment
- **DELETE** `/comments/{id}` - Delete comment

### ❤️ Likes
- **GET** `/likes` - List all likes
- **POST** `/likes` - Create new like
- **DELETE** `/likes/{id}` - Remove like

### 👥 Followers
- **GET** `/followers/{userId}` - Get user's followers
- **POST** `/followers` - Follow a user
- **DELETE** `/followers/{id}` - Unfollow a user

## 🛠️ Installation & Setup

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Step 1: Clone and Setup
```bash
# Create project directory
mkdir social-media-api
cd social-media-api

# Initialize Node.js project
npm init -y

# Install dependencies
npm install express morgan cors helmet

# Install development dependencies
npm install nodemon --save-dev
```

### Step 2: Project Structure
```
social-media-api/
├── controllers/
│   ├── userController.js
│   ├── postController.js
│   ├── commentController.js
│   ├── likeController.js
│   └── followerController.js
├── routes/
│   ├── users.js
│   ├── posts.js
│   ├── comments.js
│   ├── likes.js
│   └── followers.js
├── middleware/
│   ├── errorHandler.js
│   ├── async.js
│   └── formatResponse.js
├── utils/
│   ├── mockData.js
│   └── errorResponse.js
├── public/
│   └── docs.html
├── config/
├── server.js
├── .env
├── .gitignore
└── package.json
```

### Step 3: Environment Variables
Create a `.env` file:
```
PORT=3000
```

### Step 4: Start the Server
```bash
# Development mode
npm run dev

# Production mode
npm start
```

## 📊 API Endpoints Documentation

### Users Resource Complete Table

| URI/Endpoint | HTTP Method | Request Body | Response Body | Description |
|--------------|-------------|--------------|---------------|-------------|
| `/users` | GET | Headers: Authorization: Bearer {token}<br>Query: page=1, limit=10 | Status: 200 OK<br>Content: {"success": true, "count": 50, "page": 1, "total_pages": 5, "data": [{"id": 1, "username": "traveler", "full_name": "Karma", "profile_picture": "https://example.com/profiles/alex.jpg", "bio": "Travel photographer", "created_at": "2023-01-15"}, ...]} | Get list of users |
| `/users` | POST | Headers: Authorization: Bearer {token}, Content-Type: application/json<br>Body: {"username": "new_traveler", "email": "new@example.com", "password": "securepassword", "full_name": "New Traveler", "bio": "Adventure seeker"} | Status: 201 Created<br>Content: {"success": true, "data": {"id": 51, "username": "new_traveler", "full_name": "New Traveler", "created_at": "2023-03-20"}} | Create new user |
| `/users/{id}` | GET | Headers: Authorization: Bearer {token} | Status: 200 OK<br>Content: {"success": true, "data": {"id": 1, "username": "traveler", "full_name": "Karma", "email": "karma@example.com", "profile_picture": "https://example.com/profiles/alex.jpg", "bio": "Travel photographer", "followers_count": 1250, "following_count": 180, "posts_count": 95, "created_at": "2023-01-15"}} | Get specific user |
| `/users/{id}` | PUT | Headers: Authorization: Bearer {token}, Content-Type: application/json<br>Body: {"full_name": "Updated Name", "bio": "Updated bio", "profile_picture": "https://example.com/new-pic.jpg"} | Status: 200 OK<br>Content: {"success": true, "data": {"id": 1, "username": "traveler", "full_name": "Updated Name", "bio": "Updated bio", "updated_at": "2023-03-21"}} | Update user |
| `/users/{id}` | DELETE | Headers: Authorization: Bearer {token} | Status: 200 OK<br>Content: {"success": true, "message": "User deleted successfully"} | Delete user |

## 🧪 Testing the API

### Using cURL Examples

#### Get All Users
```bash
curl -X GET http://localhost:3000/api/users \\
  -H "Accept: application/json"
```

#### Create New User
```bash
curl -X POST http://localhost:3000/api/users \\
  -H "Content-Type: application/json" \\
  -d '{
    "username": "newuser",
    "email": "newuser@example.com",
    "password": "password123",
    "full_name": "New User",
    "bio": "Hello World!"
  }'
```

#### Get User by ID
```bash
curl -X GET http://localhost:3000/api/users/1 \\
  -H "Accept: application/json"
```

### Content Negotiation Examples

#### JSON Response (default)
```bash
curl -X GET http://localhost:3000/api/users \\
  -H "Accept: application/json"
```

#### XML Response
```bash
curl -X GET http://localhost:3000/api/users \\
  -H "Accept: application/xml"
```

#### HTML Response
```bash
curl -X GET http://localhost:3000/api/users \\
  -H "Accept: text/html"
```

## 🔧 Key Features Implemented

### 1. RESTful Design Principles ✅
- Resource-based URLs
- HTTP methods for different operations
- Stateless communication
- Proper status codes

### 2. HTTP Status Codes ✅
- **200** - OK (successful GET, PUT)
- **201** - Created (successful POST)
- **400** - Bad Request (validation errors)
- **404** - Not Found (resource doesn't exist)
- **500** - Internal Server Error

### 3. Content Negotiation ✅
- JSON (application/json)
- XML (application/xml)
- HTML (text/html)

### 4. Error Handling ✅
- Centralized error handling middleware
- Consistent error response format
- Async error handling

### 5. Response Format ✅
```json
{
  "success": true,
  "count": 10,
  "page": 1,
  "total_pages": 5,
  "data": [...],
  "message": "Success message"
}
```

## 🚦 HTTP Methods & Operations

| Method | Operation | Idempotent | Safe |
|--------|-----------|------------|------|
| GET | Read | ✅ | ✅ |
| POST | Create | ❌ | ❌ |
| PUT | Update/Replace | ✅ | ❌ |
| DELETE | Delete | ✅ | ❌ |

## 🔒 Security Considerations

- Input validation
- Error message sanitization
- CORS configuration
- Helmet.js for security headers
- Environment variables for sensitive data

## 📝 Mock Data Structure

The API uses comprehensive mock data including:
- **Users**: 50 sample users with profiles
- **Posts**: 100+ posts with images and captions
- **Comments**: 200+ comments on posts
- **Likes**: User interactions with posts
- **Followers**: User relationship data

## 🎯 Best Practices Implemented

1. **Consistent Naming**: kebab-case for URLs, camelCase for JSON
2. **Versioning**: API versioned with `/api` prefix
3. **Pagination**: Implemented for list endpoints
4. **Filtering**: Query parameters for data filtering
5. **Documentation**: Comprehensive API docs
6. **Error Handling**: Consistent error responses
7. **Logging**: Request logging with Morgan
8. **CORS**: Cross-origin resource sharing enabled

## 🚀 Next Steps

- Add authentication and authorization
- Implement database integration
- Add input validation with Joi
- Implement rate limiting
- Add API testing with Jest
- Deploy to cloud platform


