# 🧑‍💼 Job Portal App — MERN Stack

## 🚀 Live Demo

👉 [Click here to view the live site](https://daily-job-portal.netlify.app)

A full-featured job portal web application built with the **MERN stack** (MongoDB, Express.js, React.js, Node.js). This platform enables job seekers and employers to connect, apply for opportunities, and manage applications with ease.

## 🚀 Features

- 🔐 **User Authentication** — Role-based authentication using **JWT** and **bcrypt** for job seekers and employers.
- 📋 **Job Listings** — Browse, search, and filter jobs pulled from MongoDB.
- 📂 **Application Management** — Job seekers can apply/manage applications; employers can view/manage job postings.
- 🌐 **Responsive Design** — Mobile-first layout built with **React** and **Bootstrap**.
- ☁️ **Image Uploads** — Employers can upload logos/images via **Cloudinary**.

## 🛠️ Tech Stack

**Frontend:**  
- React.js  
- React Router DOM  
- Bootstrap  

**Backend:**  
- Node.js  
- Express.js  
- MongoDB (with Mongoose)  

**Authentication:**  
- JWT  
- Bcrypt  

**Cloud Services:**  
- Cloudinary (for image uploads)  
- MongoDB Atlas (for database)  

**Deployment:**  
- Vercel (Frontend)  
- Render (Backend)  
- MongoDB Atlas (Database)

## 🧑‍💻 Getting Started

To run the project locally, follow these steps:

### ✅ Prerequisites

- Node.js v20 or above  
- MongoDB Atlas account (or local MongoDB)  
- Cloudinary account (for image hosting)

### 📦 Installation & Setup

1. **Clone the Repository**

```bash
git clone https://github.com/NAGARAJ8888/job-portal-app.git
cd job-portal-app


### backend setup
cd backend
npm install


### Create a .env file in the server folder:
PORT=5000
MONGO_URI=your_mongo_connection_string
JWT_SECRET=your_jwt_secret
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret


### Start the backend:
npm start

### Frontend Setup
cd frontend
npm install
npm run dev

