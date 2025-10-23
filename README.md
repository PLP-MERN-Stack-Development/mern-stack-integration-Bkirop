# MERN Stack Blog Application

A full-stack blog application built with MongoDB, Express.js, React.js, and Node.js. Features include user authentication, CRUD operations for blog posts, categories, search functionality, and pagination.

## 🌟 Features

### Core Features
- ✅ **User Authentication** - Register, login, and JWT-based authentication
- ✅ **Blog Post Management** - Create, read, update, and delete posts
- ✅ **Categories** - Organize posts by categories
- ✅ **Search & Filter** - Full-text search and category filtering
- ✅ **Pagination** - Efficient handling of large datasets
- ✅ **Responsive Design** - Mobile-first, works on all devices
- ✅ **Protected Routes** - Secure routes requiring authentication
- ✅ **Rich Text Content** - Support for multi-paragraph posts
- ✅ **Post Statistics** - View counts and timestamps

### Advanced Features
- 🔒 **Authorization** - Users can only edit/delete their own posts
- 📊 **Real-time Validation** - Input validation on both client and server
- 🎨 **Modern UI** - Clean, professional interface with Tailwind CSS
- 📱 **Mobile Responsive** - Seamless experience across devices
- ⚡ **Optimistic Updates** - Fast UI feedback
- 🔍 **SEO Friendly** - Semantic HTML and proper meta tags

## 🛠️ Tech Stack

### Frontend
- **React 18** - UI library
- **React Router v6** - Client-side routing
- **Axios** - HTTP client
- **Tailwind CSS** - Utility-first CSS framework
- **Vite** - Build tool and dev server
- **Context API** - State management

### Backend
- **Node.js** - Runtime environment
- **Express.js** - Web application framework
- **MongoDB** - NoSQL database
- **Mongoose** - ODM for MongoDB
- **bcrypt.js** - Password hashing
- **express-validator** - Input validation

## 📋 Prerequisites

Before you begin, ensure you have the following installed:
- **Node.js** (v18 or higher)
- **npm** (v9 or higher)
- **MongoDB** (v6 or higher) - Local installation OR MongoDB Atlas account
- **Git** (for cloning the repository)

## 🚀 Quick Start

### 1. Clone the Repository

```bash
git clone https://github.com/PLP-MERN-Stack-Development/mern-stack-integration-Bkirop.git
cd mern-blog
```

### 2. Setup Backend (Server)

```bash
cd server

# Install dependencies
npm install

# Create .env file
cp .env.example .env

# Edit .env with your configuration
# Set MONGODB_URI and JWT_SECRET
nano .env
```

**Environment Variables (.env):**
```env
PORT=5000
MONGODB_URI=mongodb://localhost:27017/mern-blog
```

### 3. Setup Frontend (Client)

```bash
cd ../client

# Install dependencies
npm install

# Create .env file
cp .env.example .env
```

**Environment Variables (.env):**
```env
VITE_API_URL=http://localhost:5000/api
```

### 4. Start Development Servers

**Terminal 1 - Backend:**
```bash
cd server
npm run dev
```
Server will run on http://localhost:5000

**Terminal 2 - Frontend:**
```bash
cd client
npm run dev
```
Client will run on http://localhost:5173

### 5. Seed Database (Optional)

Add sample data to your database:

```bash
cd server
npm run seed
```

**Test Account:**
- Email: admin@example.com
- Password: password123

## 📁 Project Structure

```
mern-blog/
├── server/                    # Backend application
│   ├── src/
│   │   ├── config/           # Database configuration
│   │   ├── controllers/      # Route controllers
│   │   ├── middleware/       # Custom middleware
│   │   ├── models/           # Mongoose models
│   │   ├── routes/           # API routes
│   │   ├── validators/       # Input validation
│   │   ├── server.js         # Entry point
│   │   └── seed.js           # Database seeding
│   ├── uploads/              # File uploads
│   ├── .env                  # Environment variables
│   └── package.json
│
├── client/                    # Frontend application
│   ├── src/
│   │   ├── components/       # React components
│   │   │   ├── layout/      # Layout components
│   │   │   ├── posts/       # Post components
│   │   │   ├── auth/        # Authentication components
│   │   │   └── common/      # Shared components
│   │   ├── context/         # React Context
│   │   ├── hooks/           # Custom React hooks
│   │   ├── pages/           # Page components
│   │   ├── services/        # API services
│   │   ├── App.jsx          # Root component
│   │   └── main.jsx         # Entry point
│   ├── public/
│   ├── .env
│   └── package.json
│
└── README.md
```

## 🔌 API Endpoints

### Authentication
| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|---------------|
| POST | `/api/auth/register` | Register new user | No |
| POST | `/api/auth/login` | Login user | No |
| GET | `/api/auth/me` | Get current user | Yes |

### Posts
| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|---------------|
| GET | `/api/posts` | Get all posts (paginated) | No |
| GET | `/api/posts/:id` | Get single post | No |
| POST | `/api/posts` | Create new post | Yes |
| PUT | `/api/posts/:id` | Update post | Yes (Owner) |
| DELETE | `/api/posts/:id` | Delete post | Yes (Owner) |

### Categories
| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|---------------|
| GET | `/api/categories` | Get all categories | No |
| POST | `/api/categories` | Create category | Yes (Admin) |

## 🎯 Usage Guide

### Register a New User
1. Navigate to http://localhost:5173
2. Click "Register" in the navigation bar
3. Fill in username, email, and password
4. Click "Register" button
5. You'll be automatically logged in and redirected to the home page

### Create a Blog Post
1. Log in to your account
2. Click "Create Post" in the navigation bar
3. Fill in the post details:
   - Title (required)
   - Content (required)
   - Excerpt (optional)
   - Category (required)
   - Tags (optional, comma-separated)
   - Status (draft or published)
4. Click "Create Post"
5. Your post will appear on the home page

### Search and Filter Posts
1. Use the search bar on the home page to search posts by title or content
2. Use the category dropdown to filter posts by category
3. Navigate through pages using pagination controls

### Edit or Delete Your Posts
1. Click on a post to view its details
2. If you're the author, you'll see "Edit" and "Delete" buttons
3. Click "Edit" to modify the post
4. Click "Delete" to remove the post (requires confirmation)

## 🧪 Testing

### Test API Endpoints

**Register User:**
```bash
curl -X POST http://localhost:5000/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{
    "username": "testuser",
    "email": "test@example.com",
    "password": "password123"
  }'
```

**Login:**
```bash
curl -X POST http://localhost:5000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{
    "email": "test@example.com",
    "password": "password123"
  }'
```

**Get All Posts:**
```bash
curl http://localhost:5000/api/posts
```

**Create Post (requires authentication):**
```bash
curl -X POST http://localhost:5000/api/posts \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer YOUR_JWT_TOKEN" \
  -d '{
    "title": "My First Post",
    "content": "This is my first blog post!",
    "category": "CATEGORY_ID",
    "status": "published"
  }'
```

## 🚀 Deployment

### Backend Deployment (Render)

1. Push your code to GitHub
2. Go to [Render](https://render.com)
3. Create a new Web Service
4. Connect your GitHub repository
5. Configure:
   - **Build Command:** `cd server && npm install`
   - **Start Command:** `cd server && npm start`
   - **Environment Variables:** Add all from `.env`

### Frontend Deployment (Netlify)

1. Update `.env.production`:
```env
VITE_API_URL=https://your-backend-url.onrender.com/api
```

2. Build the project:
```bash
cd client
npm run build
```

3. Deploy to Netlify:
   - Option 1: Drag and drop the `dist` folder
   - Option 2: Connect GitHub repository
   - Build command: `cd client && npm run build`
   - Publish directory: `client/dist`

### Environment Variables for Production

**Backend (.env):**
```env
PORT=5000
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/mern-blog
JWT_SECRET=your-production-secret-key-min-32-chars
NODE_ENV=production
```

**Frontend (.env.production):**
```env
VITE_API_URL=https://your-backend-url.onrender.com/api
```

## 🔒 Security Features

- **Password Hashing** - bcrypt with salt rounds
- **JWT Authentication** - Secure token-based auth
- **Input Validation** - Server-side validation with express-validator
- **Protected Routes** - Authorization checks on sensitive endpoints
- **CORS Configuration** - Restricted cross-origin requests
- **Environment Variables** - Sensitive data stored securely
- **Error Handling** - Custom error handling middleware

## 🐛 Troubleshooting

### MongoDB Connection Issues

**Error: MongoNetworkError**
```bash
# Check if MongoDB is running
sudo systemctl status mongod  # Linux
brew services list             # Mac

# Start MongoDB
sudo systemctl start mongod    # Linux
brew services start mongodb-community  # Mac
```

**Solution:** Use MongoDB Atlas if local MongoDB fails

### Port Already in Use

**Error: EADDRINUSE**
```bash
# Find process using port 5000
lsof -i :5000  # Mac/Linux
netstat -ano | findstr :5000  # Windows

# Kill the process or change PORT in .env
```

### CORS Errors

**Error: Access-Control-Allow-Origin**
- Verify proxy configuration in `vite.config.js`
- Check CORS settings in `server.js`
- Ensure API URL is correct in client `.env`
