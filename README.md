# 📝 Notes App

A simple and efficient note-taking application built with the MERN stack (MongoDB, Express, React, Node.js). This app allows users to create, read, update, and delete notes seamlessly.

## 🚀 Live Demo

Experience the application live at:  
🔗 [https://notes-app-vid0.onrender.com/](https://notes-app-vid0.onrender.com/)

## 🛠️ Features

- **Create Notes**: Add new notes with titles and content.
- **Read Notes**: View a list of all your notes.
- **Update Notes**: Edit existing notes to keep them up-to-date.
- **Delete Notes**: Remove notes you no longer need.

## 🧱 Tech Stack

- **Frontend**: React.js
- **Backend**: Node.js with Express.js
- **Database**: MongoDB
- **Styling**: CSS

## 📁 Project Structure

notes-app/
│
├── backend/ # Server-side code
│ ├── src/
│ │ ├── controllers/ # CRUD operations
│ │ ├── models/ # Mongoose models
│ │ ├── routes/ # API routes
│ │ └── server.js # Entry point
│ └── package.json # Backend dependencies and scripts
│
├── frontend/ # Client-side code
│ ├── public/
│ ├── src/
│ │ ├── components/ # Reusable UI components
│ │ ├── pages/ # Application pages
│ │ ├── App.js # Main React component
│ │ └── index.js # Entry point
│ └── package.json # Frontend dependencies and scripts
│
└── package.json # Root package manager

markdown
Copy code

## 🧪 Installation & Setup

### Prerequisites

Ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v16 or higher)
- [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) account for cloud database

### Steps

1. **Clone the repository**:

   ```bash
   git clone https://github.com/yourusername/notes-app.git
   cd notes-app
Set up environment variables:

Create a .env file in the backend/ directory.

Add your MongoDB connection string:

ini
Copy code
MONGO_URI=your_mongodb_connection_string
Install dependencies:

For the backend:

bash
Copy code
cd backend
npm install
For the frontend:

bash
Copy code
cd frontend
npm install
Run the application:

Start the backend server:

bash
Copy code
cd backend
npm start
In a new terminal, start the frontend development server:

bash
Copy code
cd frontend
npm start
The application should now be running at http://localhost:5001.