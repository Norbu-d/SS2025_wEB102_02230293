# Practical 1 : API Design and Implementation

A comprehensive RESTful API for a social media platform similar to Instagram, built with Node.js and Express.js.

## Features

- **CRUD Operations** for Users, Posts, Comments, Likes, and Followers
- **RESTful Design** following best practices
- **Content Negotiation** (JSON, XML, HTML)
- **Proper HTTP Status Codes** & error handling
- **Interactive API Documentation**
- **Mock Data** for testing
- **Middleware** for error handling & response formatting

## API Endpoints

### Users

| Endpoint       | Method | Description          |
|----------------|--------|----------------------|
| `/users`       | GET    | List all users       |
| `/users/{id}`  | GET    | Get specific user    |
| `/users`       | POST   | Create new user      |
| `/users/{id}`  | PUT    | Update user          |
| `/users/{id}`  | DELETE | Delete user          |

### Posts

| Endpoint       | Method | Description          |
|----------------|--------|----------------------|
| `/posts`       | GET    | List all posts       |
| `/posts/{id}`  | GET    | Get specific post    |
| `/posts`       | POST   | Create new post      |
| `/posts/{id}`  | PUT    | Update post          |
| `/posts/{id}`  | DELETE | Delete post          |

### Comments

| Endpoint          | Method | Description            |
|-------------------|--------|------------------------|
| `/comments`       | GET    | List all comments      |
| `/comments/{id}`  | GET    | Get specific comment   |
| `/comments`       | POST   | Create new comment     |
| `/comments/{id}`  | PUT    | Update comment         |
| `/comments/{id}`  | DELETE | Delete comment         |

### Likes

| Endpoint       | Method | Description          |
|----------------|--------|----------------------|
| `/likes`       | GET    | List all likes       |
| `/likes`       | POST   | Create new like      |
| `/likes/{id}`  | DELETE | Remove like          |

### Followers

| Endpoint            | Method | Description                |
|---------------------|--------|----------------------------|
| `/followers/{userId}` | GET    | Get user's followers       |
| `/followers`        | POST   | Follow a user              |
| `/followers/{id}`   | DELETE | Unfollow a user            |

## Installation

```bash
# Clone and setup
mkdir social-media-api
cd social-media-api

# Initialize project
npm init -y

# Install dependencies
npm install express morgan cors helmet

# Install dev dependencies
npm install nodemon --save-dev