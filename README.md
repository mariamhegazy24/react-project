# 🚀 Tech Blog App

A modern **Tech Blog Application** built with **React**, **Tailwind CSS**, and **DaisyUI**.
The app allows users to browse posts, create new ones, edit, delete, and publish/unpublish posts.
Authentication and backend are powered by **json-server** and **json-server-auth** (already included in the project).

---

## 🎥 Demo Video

> Replace this link with your own demo video

📹 **Demo:**
<video width="600" controls>
  <source src="public/blog-app.mp4">
</video>


---

## ✨ Features

* View all blog posts
* Create new posts
* Edit existing posts
* **Delete posts**
* Publish / Unpublish
* User authentication (Login / Register)
* Mock backend using json-server & json-server-auth

---

## 🧰 Tech Stack

**Frontend:** React, TailwindCSS, DaisyUI
**Backend:** json-server, json-server-auth
**State Management:** React Hooks
**API:** fetch / axios

---

## 📦 Installation

### 1️⃣ Clone the project

```bash
git clone <repo-url>
cd my-app
```

### 2️⃣ Install frontend dependencies

```bash
npm install
```

### 3️⃣ Backend setup (Already included)

Just start the json-server:

```bash
npm run server
```

API runs on: `http://localhost:5000`

---

## ▶️ Running the App

Start frontend:

```bash
npm run dev
```

Start backend:

```bash
npm run server
```

---

## 🔐 Authentication

json-server-auth provides:

* `POST /register` → create new user
* `POST /login` → returns JWT token

Protected requests require:

```js
Authorization: Bearer <token>
```

---

## 🏷 Badges 


```
![React](https://img.shields.io/badge/React-18-blue)
![Tailwind](https://img.shields.io/badge/TailwindCSS-3-38BDF8)
![License](https://img.shields.io/badge/License-MIT-green)
```

---
