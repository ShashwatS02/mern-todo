# 📝 MERN Stack To-Do List Application

<p align="center">
  <img src="https://placehold.co/700x350/5c67f2/FFFFFF?text=MERN+To-Do+App&font=raleway" alt="Project Banner">
</p>

A **simple yet powerful To-Do List application** built with the **MERN stack** (MongoDB, Express.js, React.js, Node.js).  
It demonstrates the core fundamentals of building modern full-stack apps with authentication, CRUD operations, and persistent storage.  

---

## ✨ Features

- 📝 **Add Tasks** – Create tasks instantly with a clean UI.  
- ✅ **Mark Complete** – Toggle tasks between completed & pending.  
- 🗑️ **Delete Tasks** – Remove unwanted tasks in one click.  
- 🚀 **Full Stack** – REST API backend + interactive React frontend.  
- 💾 **Persistent Storage** – MongoDB ensures data isn’t lost.  

---

## 🛠️ Tech Stack

![MongoDB](https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white)
![Express.js](https://img.shields.io/badge/Express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)
![React](https://img.shields.io/badge/React-%2300C4CC.svg?style=for-the-badge&logo=react&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-%2343853D.svg?style=for-the-badge&logo=node.js&logoColor=white)

---

## 🚀 Getting Started

Follow these steps to run the app locally 👇  

### ✅ Prerequisites
Install before running:
- [Node.js](https://nodejs.org/)  
- [Git](https://git-scm.com/)  
- [MongoDB](https://www.mongodb.com/) (local or Atlas cluster)  

---

### 📦 Installation & Setup

#### 1. Clone the repository  
```bash
git clone https://github.com/ShashwatS02/mern-todo-app.git
cd mern-todo-app
```

#### 2. Backend Setup  
```bash
cd backend
npm install
```

Create a `.env` file inside `backend/` and add:  
```env
MONGO_URI=your_mongo_connection_string
```

Go back to root:  
```bash
cd ..
```

#### 3. Frontend Setup  
```bash
cd frontend
npm install
cd ..
```

#### 4. Run the app  
```bash
npm run dev
```

- Backend → `http://localhost:5000`  
- Frontend → `http://localhost:3000`  

---

## 📂 Project Structure
```
mern-todo-app/
├── backend/                # Express.js server & API
│   ├── models/
│   ├── routes/
│   ├── .env
│   └── server.js
│
├── frontend/               # React client
│   ├── public/
│   ├── src/
│   └── ...
│
├── .gitignore
└── README.md
```

---

## 🤝 Contributing
Contributions are welcome!  
1. Fork the repo  
2. Create a feature branch  
3. Commit changes  
4. Open a Pull Request 🚀  

---

## 👤 Author
**Shashwat Singh**  
🌐 GitHub: [@ShashwatS02](https://github.com/ShashwatS02)  

⭐ If you find this useful, please give it a star on GitHub!  
