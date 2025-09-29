MERN Stack To-Do List Application
<p align="center">
<img src="https://www.google.com/search?q=https://placehold.co/700x350/5c67f2/FFFFFF%3Ftext%3DMERN%2BTo-Do%2BApp%26font%3Draleway" alt="Project Banner">
</p>

A clean, simple, and full-stack To-Do List application built with the MERN stack (MongoDB, Express.js, React.js, and Node.js). This project demonstrates the fundamentals of building a modern web application, including creating a RESTful API, managing state on the frontend, and connecting to a database.

✨ Features
📝 Add Tasks: Quickly add new tasks to your list.

✅ Mark as Complete: Toggle tasks between complete and incomplete with a single click.

🗑️ Delete Tasks: Easily remove tasks you no longer need.

🚀 Full Stack: Built with a RESTful API backend and a dynamic React frontend.

💾 Persistent Storage: Your tasks are saved in a MongoDB database.

🛠️ Tech Stack
🚀 Getting Started
Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

Prerequisites
You need to have the following software installed on your machine:

Node.js (which includes npm)

Git

MongoDB or a MongoDB Atlas account (for the database connection string).

Installation & Setup
Clone the repository to your local machine:

git clone [https://github.com/your-username/mern-todo-app.git](https://github.com/your-username/mern-todo-app.git)
cd mern-todo-app

(Replace your-username with your actual GitHub username)

Set up the Backend:

Navigate into the backend directory.

cd backend

Install the necessary npm packages.

npm install

Create a .env file in the backend directory. This file will hold your secret database connection string.

touch .env

Add your MongoDB connection URI to the .env file.

MONGO_URI=mongodb+srv://<username>:<password>@cluster0.xxxxx.mongodb.net/<dbname>?retryWrites=true&w=majority

Navigate back to the root directory.

cd ..

Set up the Frontend:

Navigate into the frontend directory.

cd frontend

Install the necessary npm packages.

npm install

Navigate back to the root directory.

cd ..

Running the Application
Now that the setup is complete, you can run both the frontend and backend servers with a single command from the root directory.

npm run dev

Your backend server will start on http://localhost:5000 and your React frontend will open in your browser at http://localhost:3000.

📂 Project Structure
The project is organized into two main folders:

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
├── .gitignore              # Files to be ignored by Git
└── README.md

👤 Author
Shashwat Singh

GitHub: @ShashwatS02

Feel free to reach out if you have any questions or suggestions!
