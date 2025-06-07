# Practical 1 : API Design and Implementation Reflection

## 📚 Documentation

### Main Concepts Applied

#### 1. RESTful Architecture Principles
**Applied REST constraints:**
- Resource-based URLs (`/users`, `/posts`)
- Proper HTTP methods (GET, POST, PUT, DELETE)
- Stateless communication
- Uniform interface design

#### 2. HTTP Status Codes
Implemented standard status codes:
- 200 OK
- 201 Created
- 400 Bad Request
- 404 Not Found
- 500 Server Error

#### 3. Content Negotiation
Supported response formats:
- JSON (default)
- XML
- HTML

#### 4. Middleware Pattern
Key middleware components:
- Error handling
- Response formatting
- Request logging
- Security headers

#### 5. MVC Architecture
Project structure:
- Controllers (business logic)
- Routes (endpoint definitions)
- Models (mock data)
- Views (response formatting)

## 🎯 Reflection

### Key Learnings

1. **API Design Matters**
   - URL structure impacts usability
   - HTTP methods must match operations
   - Consistent responses are crucial

2. **Error Handling Essentials**
   - Centralized error management
   - Clear error messages
   - Proper status codes

3. **Content Flexibility**
   - Multiple response formats
   - Accept header processing
   - Format-specific rendering

4. **Documentation Value**
   - Comprehensive docs save time
   - Examples improve understanding
   - Interactive docs enhance UX

5. **Middleware Benefits**
   - Separation of concerns
   - Code reusability
   - Async error handling

### Challenges & Solutions

#### Challenge: URL Design
**Problem:** Nested vs flat routes  
**Solution:** Used query parameters for filtering (`/comments?post_id=1`)

#### Challenge: Multiple Formats
**Problem:** Duplicate route handlers  
**Solution:** Created format middleware:
```javascript
const formatResponse = (req, res, next) => {
  const accept = req.get('Accept');
  res.format = accept.includes('xml') ? 'xml' : 
              accept.includes('html') ? 'html' : 'json';
  next();
};