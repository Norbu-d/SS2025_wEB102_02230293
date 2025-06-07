# Practical 3: File Upload 📁

A complete walkthrough for implementing a backend-powered file upload feature using Node.js with Express, integrated into a React or Next.js frontend.

## 🎯 Objective

Build a system that can:
- ✅ Accept and validate files from the frontend
- ✅ Save them securely on the server
- ✅ Handle multipart/form-data effectively
- ✅ Include comprehensive error handling
- ✅ Seamlessly integrate with a React/Next.js app

## 🚀 Implementation Overview

### Step 1: Setting Up the Express Server

Start a new Node.js project and install essential dependencies:

**Packages Used:**
- 📦 **express**: For creating the HTTP server
- 🌐 **cors**: Enables cross-origin requests
- 📤 **multer**: Processes file uploads
- 📝 **morgan**: Logs HTTP activity
- 🔐 **dotenv**: Manages environment variables

### Step 2: Initialize Server Basics

Create the core server file with Express, configure middleware for JSON and URL-encoded data, and ensure an `uploads` directory exists for storing files.

### Step 3: Configure Multer Middleware

Define how uploaded files should be stored, generate unique filenames, and restrict uploads to only specific file types like images and documents. Set size limits and apply filters to prevent unwanted uploads.

### Step 4: Add File Upload Endpoint

Create an API route to handle file uploads. It should:
- Accept multiple files (up to 5)
- Validate that files were actually received
- Respond with metadata for each file
- Return helpful errors for any issues

Include error-handling middleware for catching Multer-specific and general errors, such as file size or count violations.

### Step 5: Enable CORS

Allow the frontend to communicate with the server by configuring CORS:
- Define allowed origins (e.g., `http://localhost:3000`)
- Permit standard HTTP methods
- Enable credentials if needed

### Step 6: Connect the Frontend

Update your frontend component to:
- Use FormData to append selected files
- Submit the data using Axios
- Track upload progress via `onUploadProgress`
- Display success/failure feedback to users

## 🧪 Testing Checklist

Make sure the following are functioning correctly:
- ✅ Upload progress is visible
- ✅ File size limits are enforced
- ✅ Only allowed file types are accepted
- ✅ Uploading multiple files works
- ✅ Errors are shown when issues occur

## 🔑 Key Concepts Explained

### Multipart Form Data 📤
- FormData is used in the frontend to package files
- The backend parses it with Multer to extract file info

### Multer File Handling 💾
- Custom storage logic determines filename and location
- File filters block unsupported formats
- Limits prevent large or excessive uploads

### Error Handling ⚠️
- Frontend shows alerts based on server feedback
- Backend includes custom handlers for Multer and general errors

### CORS 🌐
- Enables cross-origin communication
- Secures the server by restricting allowed origins

### Upload Progress 📊
- Axios tracks file upload in real-time
- Users can see the percentage of completion

## 🛡️ Security Highlights

- ✅ Validation for file types and sizes
- ✅ Secure, unique filenames to prevent collisions
- ✅ Avoids directory traversal vulnerabilities
- ✅ CORS prevents unauthorized access

## 📁 Project Layout

