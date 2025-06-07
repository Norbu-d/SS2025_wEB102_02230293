## NOTE: The actual practical work implementation is done in Practical2_API_Design_and_Implementation_Tiktok folder. This folder is just for README.md and Reflection.md.

# Practical 5: Implementing Cloud Storage with Supabase ☁️

### Overview 🎯

This practical demonstrates migrating a TikTok web application from local file storage to cloud storage using Supabase Storage. This upgrade enhances scalability, reliability, and provides better access control for user-uploaded content.

### What is Cloud Storage? 🌐

#### The Limitations of Local Storage ⚠️

Local file storage has several limitations:

- **Disk Space**: Limited server storage capacity 💾
- **Scaling**: Files on one server aren't available to others 📈
- **Reliability**: Risk of data loss during crashes or redeployments 💥
- **CDN Benefits**: No global content delivery optimization 🌍
- **Backup**: Lack of automatic backup systems 🔄


#### Benefits of Cloud Storage ✅

Cloud storage provides:

- **Scalability**: Virtually unlimited storage capacity 📊
- **Reliability**: Built-in redundancy and backup systems 🛡️
- **Performance**: Global CDN distribution for faster access 🚀
- **Security**: Advanced permissions and access control 🔐
- **Cost-effectiveness**: Pay-per-use model 💰


### How Cloud Storage Works 🔄

1. **Frontend Upload**: User selects file through browser 📱
2. **Direct Upload**: File uploads directly to cloud storage 📤
3. **Metadata Storage**: Server stores file metadata in database 🗃️
4. **Access Control**: Cloud provider handles permissions 🔒
5. **Serving Content**: Files served directly from CDN 🌐


### Introduction to Supabase Storage 🚀

#### What is Supabase? 🤔

Supabase is an open-source Firebase alternative providing:

- Database (PostgreSQL) 🗄️
- Authentication 🔐
- Storage 📁
- Real-time subscriptions ⚡
- Edge Functions 🔧


#### Supabase Storage Features 📋

- File storage with customizable access controls 🎛️
- Automatic CDN content delivery 🌍
- Fine-grained security rules 📜
- Easy integration with existing projects 🔗


### Setup Instructions 🛠️

#### Step 1: Create Supabase Account and Project 📝

1. Visit supabase.com and create account 🌐
2. Click "New Project" and name it (e.g., "tiktok") 📛
3. Choose strong database password 🔑
4. Select closest region 🗺️
5. Click "Create new project" ⏳


#### Step 2: Create Storage Buckets 🪣

1. Navigate to "Storage" in dashboard 📊
2. Create "videos" bucket (Public access) 🎥
3. Create "thumbnails" bucket (Public access) 🖼️


#### Step 3: Set Up Storage Policies 📋

Configure access policies for both buckets:

- **Upload Policy**: Authenticated users can upload 📤
- **View Policy**: Public can view content 👁️


### Implementation Guide 💻

#### Part 1: Backend Implementation 🔧

##### Install Dependencies 📦

```shellscript
cd server
npm install @supabase/supabase-js
```

##### Environment Variables 🔐

```plaintext
SUPABASE_URL=https://your-project-id.supabase.co
SUPABASE_SERVICE_KEY=your-service-key
SUPABASE_PUBLIC_KEY=your-public-key
SUPABASE_STORAGE_URL=https://your-project-id.supabase.co/storage/v1
```

##### Key Files Created 📁

- `src/lib/supabase.js` - Supabase client configuration
- `src/services/storageService.js` - Storage operations
- Updated `videoController.js` - Cloud storage integration
- Updated Prisma schema - Storage path fields


#### Part 2: Frontend Implementation 🎨

##### Install Dependencies 📦

```shellscript
cd tiktok_frontend
npm install @supabase/supabase-js
```

##### Environment Variables 🔐

```plaintext
NEXT_PUBLIC_SUPABASE_URL=https://your-project-id.supabase.co
NEXT_PUBLIC_SUPABASE_PUBLIC_KEY=your-public-key
```

##### Key Files Updated 📝

- `src/lib/supabase.js` - Frontend Supabase client
- `src/services/uploadService.js` - Direct upload service
- `src/app/upload/page.jsx` - Upload page component
- `src/components/ui/VideoCard.jsx` - Video display component


### Testing and Deployment 🧪

#### Migration Process 🔄

1. Run migration script for existing videos 📋
2. Test video uploads and playback 🎬
3. Verify thumbnail generation 🖼️
4. Clean up local storage files 🧹


#### Verification Steps ✅

- Confirm videos play from Supabase URLs 🎥
- Test upload functionality 📤
- Verify access permissions 🔐
- Check CDN performance 🚀


### Resources 📚

- [Supabase Storage Documentation](https://supabase.com/docs/guides/storage) 📖
- [Supabase JavaScript Client](https://github.com/supabase/supabase-js) 💻
- File Upload Best Practices 📋
- Content Delivery Networks Explained 🌐
- Video Hosting Considerations 🎬

