# Task Manager — MERN Stack

A full-stack task management app: user registration/login with JWT auth, and per-user task CRUD (create, read, update, delete).

**Stack:** MongoDB, Express.js, React.js (Vite), Node.js

## Project Structure
```
task-manager-mern/
  backend/    Express API, MongoDB models, JWT auth
  frontend/   React app (Vite)
```

## 1. Run it locally

### Backend
```bash
cd backend
npm install
cp .env.example .env
# edit .env: add your MongoDB connection string and a JWT secret
npm run dev
```
Runs on http://localhost:5000

### Frontend
```bash
cd frontend
npm install
cp .env.example .env
npm run dev
```
Runs on http://localhost:5173

You'll need a MongoDB connection string. The easiest free option is MongoDB Atlas (atlas.mongodb.com) — create a free cluster, add a database user, allow access from anywhere (0.0.0.0/0) for testing, and copy the connection string into `backend/.env`.

## 2. Push this to your own GitHub

```bash
cd task-manager-mern
git init
git add .
git commit -m "Initial commit: MERN task manager"
git branch -M main
git remote add origin https://github.com/<your-username>/task-manager.git
git push -u origin main
```
(Create the empty repo on GitHub first, without a README, then run the commands above.)

**Important:** `.env` is already excluded by `.gitignore` — never commit real database credentials or JWT secrets.

## 3. Deploy it live (both free)

**Backend → Render.com**
1. New Web Service → connect your GitHub repo → set root directory to `backend`
2. Build command: `npm install` — Start command: `npm start`
3. Add environment variables `MONGO_URI` and `JWT_SECRET` in the Render dashboard

**Frontend → Vercel or Netlify**
1. Import your GitHub repo → set root directory to `frontend`
2. Build command: `npm run build` — Output directory: `dist`
3. Add environment variable `VITE_API_URL` pointing to your deployed backend URL, e.g. `https://your-app.onrender.com/api`

Once both are live, put the frontend URL as your resume's "Live Demo" link and the GitHub repo as the "GitHub" link.

## API Endpoints

| Method | Endpoint             | Description          | Auth required |
|--------|-----------------------|-----------------------|----------------|
| POST   | /api/auth/register    | Create an account     | No             |
| POST   | /api/auth/login       | Log in, get JWT       | No             |
| GET    | /api/tasks            | List your tasks       | Yes            |
| POST   | /api/tasks            | Create a task         | Yes            |
| PUT    | /api/tasks/:id        | Update a task         | Yes            |
| DELETE | /api/tasks/:id        | Delete a task         | Yes            |
