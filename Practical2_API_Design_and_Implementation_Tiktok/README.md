# TikTok-like API Documentation

## Overview
A RESTful API for a TikTok-style application built with Node.js and Express.js that handles videos, users, and comments.

---

## API Endpoints

### Videos 🎥

| Endpoint | Method | Description |
|----------|--------|-------------|
| `/api/videos` | GET | Get all videos |
| `/api/videos` | POST | Upload new video |
| `/api/videos/:id` | GET | Get specific video |
| `/api/videos/:id` | PUT | Update video |
| `/api/videos/:id` | DELETE | Remove video |
| `/api/videos/:id/comments` | GET | Get video comments |
| `/api/videos/:id/likes` | GET | Get video likes |
| `/api/videos/:id/likes` | POST | Like video |
| `/api/videos/:id/likes` | DELETE | Unlike video |

### Users 👤

| Endpoint | Method | Description |
|----------|--------|-------------|
| `/api/users` | GET | Get all users |
| `/api/users` | POST | Create user |
| `/api/users/:id` | GET | Get user profile |
| `/api/users/:id` | PUT | Update profile |
| `/api/users/:id` | DELETE | Delete account |
| `/api/users/:id/videos` | GET | Get user's videos |
| `/api/users/:id/followers` | GET | Get followers |
| `/api/users/:id/followers` | POST | Follow user |
| `/api/users/:id/followers` | DELETE | Unfollow user |
| `/api/users/:id/following` | GET | Get following list |

### Comments 💬

| Endpoint | Method | Description |
|----------|--------|-------------|
| `/api/comments` | GET | Get all comments |
| `/api/comments` | POST | Create comment |
| `/api/comments/:id` | GET | Get comment |
| `/api/comments/:id` | PUT | Edit comment |
| `/api/comments/:id` | DELETE | Remove comment |
| `/api/comments/:id/likes` | GET | Get comment likes |
| `/api/comments/:id/likes` | POST | Like comment |
| `/api/comments/:id/likes` | DELETE | Unlike comment |

---

## Project Setup

### Installation
```bash
# Create project
mkdir tiktok-api && cd tiktok-api
npm init -y

# Install dependencies
npm install express cors morgan body-parser dotenv
npm install --save-dev nodemon