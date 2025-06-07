# Practical 3: File Upload 📁

A comprehensive guide to implementing a server-side file upload system using Node.js and Express with React/Next.js frontend integration.

## 🎯 Objective

Implement a server-side file upload system that can:
- ✅ Receive and validate files from frontend
- ✅ Store files securely on the server
- ✅ Handle multipart form data
- ✅ Implement proper error handling
- ✅ Connect with React/Next.js frontend

## 🚀 Implementation Flow

### Step 1: Setup Express Server Environment

Create a new Node.js project:

```bash
mkdir file-upload-server
cd file-upload-server
npm init -y
npm install express cors multer morgan dotenv
```

**Package Purposes:**
- 📦 **express**: Web server framework
- 🌐 **cors**: Cross-Origin Resource Sharing middleware
- 📤 **multer**: Multipart/form-data handling (file uploads)
- 📝 **morgan**: HTTP request logger
- 🔐 **dotenv**: Environment variable management

### Step 2: Basic Server Structure

Create `server.js`:

```javascript
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const multer = require('multer');
const path = require('path');
const fs = require('fs');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 8000;

// Middleware
app.use(morgan('combined'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Create uploads directory if it doesn't exist
const uploadsDir = path.join(__dirname, 'uploads');
if (!fs.existsSync(uploadsDir)) {
    fs.mkdirSync(uploadsDir, { recursive: true });
}

app.listen(PORT, () => {
    console.log(`🚀 Server running on port \${PORT}`);
});
```

### Step 3: Configure Multer for File Handling

Add Multer configuration:

```javascript
// Multer configuration
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/');
    },
    filename: (req, file, cb) => {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
        cb(null, file.fieldname + '-' + uniqueSuffix + path.extname(file.originalname));
    }
});

const fileFilter = (req, file, cb) => {
    // Allow specific file types
    const allowedTypes = /jpeg|jpg|png|gif|pdf|doc|docx/;
    const extname = allowedTypes.test(path.extname(file.originalname).toLowerCase());
    const mimetype = allowedTypes.test(file.mimetype);

    if (mimetype && extname) {
        return cb(null, true);
    } else {
        cb(new Error('Invalid file type. Only JPEG, PNG, GIF, PDF, DOC, DOCX files are allowed.'));
    }
};

const upload = multer({
    storage: storage,
    limits: {
        fileSize: 10 * 1024 * 1024, // 10MB limit
    },
    fileFilter: fileFilter
});
```

### Step 4: Create Upload API Endpoint

Add upload route:

```javascript
// Upload endpoint
app.post('/api/upload', upload.array('files', 5), (req, res) => {
    try {
        if (!req.files || req.files.length === 0) {
            return res.status(400).json({
                success: false,
                message: 'No files uploaded'
            });
        }

        const fileInfo = req.files.map(file => ({
            originalName: file.originalname,
            filename: file.filename,
            size: file.size,
            mimetype: file.mimetype,
            path: file.path
        }));

        res.json({
            success: true,
            message: 'Files uploaded successfully',
            files: fileInfo
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Server error during upload',
            error: error.message
        });
    }
});

// Error handling middleware for Multer
app.use((error, req, res, next) => {
    if (error instanceof multer.MulterError) {
        if (error.code === 'LIMIT_FILE_SIZE') {
            return res.status(400).json({
                success: false,
                message: 'File too large. Maximum size is 10MB.'
            });
        }
        if (error.code === 'LIMIT_FILE_COUNT') {
            return res.status(400).json({
                success: false,
                message: 'Too many files. Maximum is 5 files.'
            });
        }
    }
    
    res.status(400).json({
        success: false,
        message: error.message
    });
});
```

### Step 5: Configure CORS

Update CORS configuration:

```javascript
// CORS configuration
app.use(cors({
    origin: process.env.FRONTEND_URL || 'http://localhost:3000',
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization']
}));
```

Create `.env` file:

```env
PORT=8000
FRONTEND_URL=http://localhost:3000
```

### Step 6: Frontend Integration

Update your React/Next.js component:

```javascript
// Updated onSubmit function
const onSubmit = async (data) => {
    if (files.length === 0) {
        alert('Please select files to upload');
        return;
    }

    const formData = new FormData();
    files.forEach((file) => {
        formData.append('files', file);
    });

    try {
        setUploading(true);
        const response = await axios.post('http://localhost:8000/api/upload', formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
            onUploadProgress: (progressEvent) => {
                const percentCompleted = Math.round(
                    (progressEvent.loaded * 100) / progressEvent.total
                );
                setUploadProgress(percentCompleted);
            },
        });

        if (response.data.success) {
            alert('Files uploaded successfully!');
            setFiles([]);
            setUploadProgress(0);
        }
    } catch (error) {
        console.error('Upload error:', error);
        alert(error.response?.data?.message || 'Upload failed');
    } finally {
        setUploading(false);
    }
};
```

## 🧪 Testing Your Implementation

1. **Start Backend**: `node server.js`
2. **Start Frontend**: `npm run dev`
3. **Test Features**:
   - ✅ File upload with progress tracking
   - ✅ File type validation
   - ✅ File size validation
   - ✅ Error handling
   - ✅ Multiple file upload

## 🔑 Key Concepts

### 1. Multipart Form Data 📤
- **Frontend**: Uses FormData to package files and form fields
- **Backend**: Multer parses multipart data and extracts files

### 2. File Storage with Multer 💾
- **Storage Configuration**: Defines where and how files are saved
- **File Filtering**: Validates file types before processing
- **Size Limits**: Controls maximum file size and count

### 3. Error Handling ⚠️
- **Frontend**: Catches and displays backend errors
- **Backend**: Custom middleware handles Multer and server errors

### 4. CORS Configuration 🌐
- **Purpose**: Allows frontend to communicate with backend
- **Security**: Controls which origins can access the server

### 5. Progress Tracking 📊
- **Implementation**: Uses Axios onUploadProgress callback
- **User Experience**: Shows real-time upload progress

## 🛡️ Security Considerations

- ✅ File type validation
- ✅ File size limits
- ✅ Secure file naming
- ✅ Directory traversal prevention
- ✅ CORS configuration

## 📁 Project Structure

```
file-upload-server/
├── server.js          # Main server file
├── .env               # Environment variables
├── package.json       # Dependencies
└── uploads/           # File storage directory
```

## 🚀 Deployment Tips

1. **Environment Variables**: Use proper environment configuration
2. **File Storage**: Consider cloud storage for production
3. **Security**: Implement authentication and authorization
4. **Monitoring**: Add logging and error tracking
5. **Performance**: Implement file compression and optimization

---

**Happy Coding!** 🎉 Your file upload server is now ready to handle files securely and efficiently.
