# 📝 Notes App

A simple and efficient note-taking application built with the **MERN stack** (MongoDB, Express, React, Node.js). This app allows users to create, read, update, and delete notes seamlessly.

---

# 🚀 Live Demo

Experience the application live at: 
🔗 [https://notes-app-vid0.onrender.com/](https://notes-app-vid0.onrender.com/)

---

# 🛠️ Features

- **Create Notes**: Add new notes with titles and content.
- **Read Notes**: View a list of all your notes.
- **Update Notes**: Edit existing notes to keep them up-to-date.
- **Delete Notes**: Remove notes you no longer need.

---

# 🧱 Tech Stack

- **Frontend**: React.js
- **Backend**: Node.js with Express.js
- **Database**: MongoDB
- **Styling**: CSS

---

# 📁 Project Structure

```bash
notes-app/
│
├── backend/
│ ├── src/
│ │ ├── controllers/
│ │ ├── models/ 
│ │ ├── routes/
│ │ └── server.js 
│ └── package.json 
│
├── frontend/
│ ├── public/
│ ├── src/
│ │ ├── components/ 
│ │ ├── pages/ 
│ │ ├── App.js 
│ │ └── index.js 
│ └── package.json 
│
└── package.json
```

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
   ```

2. **Set up environment variables**:

Create a .env file in the backend/ directory. Add your MongoDB connection string to it:

```bash
MONGO_URI=your_mongodb_connection_string
```

3. **Install dependencies**:

For the backend:

```BASH

cd backend
npm install
```
For the frontend:

```bash

cd frontend
npm install
```
4. **Run the application**:

Start the backend server:

```bash

cd backend
npm start
```
In a new terminal, start the frontend development server:

```bash

cd frontend
npm start
```
The application should now be running at http://localhost:5001.
