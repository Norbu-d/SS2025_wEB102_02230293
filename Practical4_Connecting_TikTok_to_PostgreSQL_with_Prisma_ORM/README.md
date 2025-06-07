# 📱 Practical 4: Connecting TikTok Clone to PostgreSQL with Prisma ORM

> ✅ All implementation is completed inside the folder: `Practical2_API_Design_and_Implementation_Tiktok`

---

## 🎯 Objectives
- Connect TikTok backend to a PostgreSQL database
- Use Prisma ORM for data modeling and querying
- Implement authentication with JWT and bcrypt
- Replace in-memory data with persistent storage
- Refactor API controllers to use Prisma

---

## ✅ Tech Stack
- Node.js
- Express.js
- PostgreSQL
- Prisma ORM
- bcrypt, JWT
- Postman (for API testing)

---

## ⚙️ Setup Instructions

### 1. Clone the Repository
```bash
git clone <your-repo-url>
cd Practical2_API_Design_and_Implementation_Tiktok
```

### 2. Install Dependencies
```bash
npm install
```

### 3. PostgreSQL Setup
```sql
-- Access PostgreSQL CLI
sudo -u postgres psql

-- Create DB and User
CREATE DATABASE tiktok_db;
CREATE USER tiktok_user WITH ENCRYPTED PASSWORD 'your_password';
GRANT ALL PRIVILEGES ON DATABASE tiktok_db TO tiktok_user;
\q
```

### 4. Configure Environment Variables
Update `.env`:
```env
PORT=5000
NODE_ENV=development
DATABASE_URL="postgresql://tiktok_user:your_password@localhost:5432/tiktok_db?schema=public"
JWT_SECRET=yourverylongandsecurerandomsecret
JWT_EXPIRE=30d
```

### 5. Prisma Setup
```bash
npx prisma migrate dev --name init
```

---

## 🌱 Seed the Database
```bash
npm run seed
```

Populates:
- 👤 10 Users
- 🎥 50 Videos
- 💬 200 Comments
- ❤️ 300 Video Likes
- 👍 150 Comment Likes
- 🤝 40 Follow Relationships

---

## 🚀 Run the Server
```bash
npm run dev
```

---

## 🧪 How to Test (Postman)

1. **Register** – `POST /api/auth/register`
2. **Login** – `POST /api/auth/login`
3. **Get Profile** – `GET /api/users/me` (requires JWT)
4. **Create Video** – `POST /api/videos` (JWT protected)
5. **Post Comment** – `POST /api/comments/:videoId` (JWT protected)
6. **Like Video/Comment** – `POST /api/likes` (JWT protected)
7. **Follow User** – `POST /api/follow/:userId` (JWT protected)

✅ All endpoints are functional and use Prisma with PostgreSQL.

---

## 🧠 Key Concepts Used
- **Prisma ORM** for simplified DB access
- **PostgreSQL** for persistent storage
- **JWT Auth** for securing routes
- **bcrypt** for password hashing
- **REST API** with modular controllers and middleware

---

## 📚 References
- [Prisma Docs](https://www.prisma.io/docs/)
- [PostgreSQL Docs](https://www.postgresql.org/docs/)
- [JWT Guide](https://jwt.io/)
- [Postman Testing Guide](https://docs.google.com/document/d/1OlnYRUqXZYWUl5AksoGOQYFqaT71KYJ6wiDU03y40Fk/edit?usp=sharing)

---

## ✨ Status
> ✅ Project Completed Successfully. All features implemented and tested.