# 🎓 School ERP - Student Fees Management System

A professional full stack School ERP Fees Management System built using:

- HTML
- CSS
- JavaScript
- Node.js
- Express.js
- MongoDB
- Mongoose

---

# 👨‍💻 Author

## Atif Ejaz

---

# 🚀 Features

## 👨‍💼 Admin Features

- Admin Login
- Create Student Accounts
- Generate Student IDs & Passwords
- Add Fees Class Wise
- Add Fine
- Add Fee Description
- View All Students
- View Paid / Unpaid Fees
- Dashboard Analytics
- Payment Tracking

---

## 👨‍🎓 Student Features

- Student Login
- View Due Fees
- View Fine
- View Payment Status
- Pay Fees
- Download Fee Receipt

---

# 📁 Project Structure

```txt
school-fees-erp/
│
├── backend/
│   ├── server.js
│   ├── package.json
│   ├── .env
│   │
│   ├── config/
│   │   └── db.js
│   │
│   ├── models/
│   │   └── Student.js
│   │
│   └── routes/
│       └── studentRoutes.js
│
├── frontend/
│   ├── index.html
│   ├── dashboard.html
│   ├── style.css
│   └── app.js
│
└── README.md
```

---

# ⚙️ COMPLETE PROJECT SETUP

## 1️⃣ Install Node.js

Download and install Node.js:

https://nodejs.org

After installation check:

```bash
node -v
npm -v
```

---

## 2️⃣ Install MongoDB

Download MongoDB Community Server:

https://www.mongodb.com/try/download/community

Install normally.

---

## 3️⃣ Install MongoDB Compass

Download:

https://www.mongodb.com/products/compass

Open Compass.

Connect using:

```txt
mongodb://127.0.0.1:27017
```

---

## 4️⃣ Install VS Code

Download:

https://code.visualstudio.com

Install VS Code extension:

- Live Server

---

# 🚀 QUICK START

## 1️⃣ Clone Project

```bash
git clone YOUR_GITHUB_REPO_LINK
```

OR download ZIP file.

---

## 2️⃣ Open Project

Open project folder in VS Code.

---

## 3️⃣ Open Terminal

Go inside backend folder:

```bash
cd backend
```

---

## 4️⃣ Install Dependencies

Copy and paste:

```bash
npm install
```

If dependencies missing then run:

```bash
npm install express mongoose cors dotenv nodemon
```

---

## 5️⃣ Create .env File

Inside backend create `.env`

Paste:

```env
MONGO_URI=mongodb://127.0.0.1:27017/schoolERP
PORT=5000
```

---

## 6️⃣ Start Backend Server

Copy and paste:

```bash
npm start
```

You should see:

```txt
MongoDB Connected
Server Running
```

---

## 7️⃣ Start Frontend

Open frontend folder.

Right click:

```txt
index.html
```

Click:

```txt
Open With Live Server
```

---

# 🔐 Default Admin Login

```txt
Username: admin
Password: admin123
```

---

# 📌 Backend APIs

## Create Student

```http
POST /create-student
```

## Get Students

```http
GET /students
```

## Student Login

```http
POST /student-login
```

## Add Fees

```http
POST /add-fees
```

---

# 💾 Database

Database Name:

```txt
schoolERP
```

Collection:

```txt
students
```

---

# 🎨 Frontend Features

- Professional Dashboard
- Sidebar Navigation
- Responsive Design
- Student Table
- Fee Forms
- Payment Tracking
- Dashboard Cards

---

# 🚀 Future Features

You can later add:

- Razorpay Payment Gateway
- PDF Receipt Download
- JWT Authentication
- Teacher Panel
- Parent Panel
- Attendance System
- Results Management

---

# 🛠️ Tech Stack

| Technology | Usage |
|---|---|
| HTML | Frontend |
| CSS | Styling |
| JavaScript | Frontend Logic |
| Node.js | Backend Runtime |
| Express.js | Backend Framework |
| MongoDB | Database |
| Mongoose | ODM |

---

# ⭐ Developed By

## Atif Ejaz
