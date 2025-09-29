# 📝 MERN Stack To-Do List Application

<p align="center">
  <img src="https://placehold.co/700x350/5c67f2/FFFFFF?text=MERN+To-Do+App&font=raleway" alt="Project Banner">
</p>

A clean, simple, and full-stack **To-Do List application** built with the **MERN stack** (MongoDB, Express.js, React.js, and Node.js).  
This project demonstrates the fundamentals of building a modern web application, including:

- Creating a RESTful API
- Managing state on the frontend
- Connecting to a database for persistence

---

## ✨ Features

- 📝 **Add Tasks** – Quickly add new tasks to your list.  
- ✅ **Mark as Complete** – Toggle tasks between complete and incomplete with a single click.  
- 🗑️ **Delete Tasks** – Easily remove tasks you no longer need.  
- 🚀 **Full Stack** – RESTful API backend + dynamic React frontend.  
- 💾 **Persistent Storage** – Tasks are stored in a MongoDB database.  

---

## 🛠️ Tech Stack

![MongoDB](https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white)
![Express.js](https://img.shields.io/badge/Express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)
![React](https://img.shields.io/badge/React-%2300C4CC.svg?style=for-the-badge&logo=react&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-%2343853D.svg?style=for-the-badge&logo=node.js&logoColor=white)

---

## 🚀 Getting Started

Follow these steps to run the project locally.

### ✅ Prerequisites
Make sure you have installed:

- [Node.js](https://nodejs.org/) (includes npm)  
- [Git](https://git-scm.com/)  
- [MongoDB](https://www.mongodb.com/) or a **MongoDB Atlas account**  

---

### 📦 Installation & Setup

Clone the repository:


git clone https://github.com/your-username/mern-todo-app.git
cd mern-todo-app
(Replace your-username with your actual GitHub username)

🔹 Backend Setup
cd backend
npm install


Create a .env file inside the backend/ directory and add your MongoDB connection string:

MONGO_URI=mongodb+srv://<username>:<password>@cluster0.xxxxx.mongodb.net/<dbname>?retryWrites=true&w=majority


Go back to the root folder:

cd ..

🔹 Frontend Setup
cd frontend
npm install
cd ..

▶️ Running the Application

From the root directory, run:

npm run dev


Backend → http://localhost:5000

Frontend → http://localhost:3000

📂 Project Structure
mern-todo-app/
├── backend/                # Express.js server & API
│   ├── models/
│   ├── routes/
│   ├── .env                # (You create this)
│   └── server.js
│
├── frontend/               # React client
│   ├── public/
│   ├── src/
│   └── ...
│
├── .gitignore              # Files ignored by Git
└── README.md

🤝 Contributing

Contributions, issues, and feature requests are welcome!
Feel free to fork this project and submit a Pull Request.

👤 Author

Shashwat Singh
🌐 GitHub: @ShashwatS02

⭐ If you like this project, consider giving it a star on GitHub!
