# 🛒 MyShop - Full Stack MERN E-Commerce Application

A complete Full Stack E-Commerce web application built using the **MERN Stack** (MongoDB, Express.js, React, Node.js). The application allows users to browse products, register/login securely, manage their shopping cart, place orders, and enables administrators to manage products and view analytics.

---

## 🚀 Live Demo

### Frontend
https://myshop-frontend-03pj.onrender.com

### Backend API
https://myshop-backend-tc0g.onrender.com

---

## 📌 Features

### 👤 User Features

- User Registration
- Secure Login using JWT Authentication
- Browse Products
- Product Details Page
- Product Search
- Add to Cart
- Update Cart Quantity
- Remove Items from Cart
- Persistent Shopping Cart
- Place Orders
- Razorpay Payment Integration
- Responsive UI

---

### 🔑 Admin Features

- Admin Login
- Add New Products
- Update Products
- Delete Products
- Dashboard Analytics
- Order Management

---

## 🛠 Tech Stack

### Frontend

- React 19
- React Router
- Redux Toolkit
- JavaScript (ES6+)
- CSS
- Vite

### Backend

- Node.js
- Express.js
- MongoDB Atlas
- Mongoose
- JWT Authentication
- Cloudinary
- Razorpay

### Deployment

- Render (Frontend)
- Render (Backend)
- MongoDB Atlas

---

## 📂 Project Structure

```
MyShop-Ecom
│
├── frontend
│   ├── src
│   │   ├── components
│   │   ├── context
│   │   ├── pages
│   │   ├── redux
│   │   ├── styles
│   │   └── App.jsx
│   │
│   ├── public
│   └── package.json
│
├── backend
│   ├── config
│   ├── controller
│   ├── middleware
│   ├── models
│   ├── routes
│   ├── utils
│   ├── index.js
│   └── package.json
│
└── README.md
```

---

## 🔐 Authentication

- JWT Authentication
- Protected Routes
- Admin Authorization
- Secure Password Hashing using bcrypt

---

## 💳 Payment Gateway

Integrated with **Razorpay** for secure online payments.

---

## ☁️ Image Upload

Images are uploaded and managed using **Cloudinary**.

---

## ⚙️ Installation

### Clone Repository

```bash
git clone https://github.com/YOUR_GITHUB_USERNAME/YOUR_REPOSITORY_NAME.git
```

---

### Install Dependencies

#### Backend

```bash
cd backend
npm install
```

#### Frontend

```bash
cd frontend
npm install
```

---

### Environment Variables

Create a `.env` file inside the backend folder.

```env
PORT=5000

MONGO_URI=YOUR_MONGODB_URI

JWT_SECRET=YOUR_SECRET_KEY

CLOUDINARY_CLOUD_NAME=YOUR_CLOUD_NAME
CLOUDINARY_API_KEY=YOUR_API_KEY
CLOUDINARY_API_SECRET=YOUR_API_SECRET

RAZORPAY_KEY_ID=YOUR_KEY
RAZORPAY_KEY_SECRET=YOUR_SECRET

FRONTEND_URL=http://localhost:5173
```

---

### Start Backend

```bash
cd backend
npm run dev
```

---

### Start Frontend

```bash
cd frontend
npm run dev
```

---

## 🚀 Deployment

Frontend deployed on **Render Static Site**

Backend deployed on **Render Web Service**

Database hosted on **MongoDB Atlas**

---

## 📸 Screenshots

Added screenshots here.

Example:

- Home Page
- <img width="1862" height="846" alt="image" src="https://github.com/user-attachments/assets/4fd36a6d-1ebc-48d4-bae7-1d65b50e3426" />

- Login Page
- <img width="1867" height="657" alt="image" src="https://github.com/user-attachments/assets/3303ce1d-4d7b-404c-8a3e-9efb1b9da8c7" />

- Product Page
- <img width="1847" height="861" alt="image" src="https://github.com/user-attachments/assets/45330636-69ca-42ca-af5e-c4b57d2d71ea" />

- Cart
- <img width="1857" height="857" alt="image" src="https://github.com/user-attachments/assets/2e6caca9-d368-4e1e-b9f3-26e1247d25e8" />

- Checkout
<img width="1857" height="432" alt="image" src="https://github.com/user-attachments/assets/95901640-e344-4cc8-aa63-63221ee26d67" />
<img width="1237" height="717" alt="image" src="https://github.com/user-attachments/assets/26a9ea3c-9e0f-45c9-83ce-aeb9512885b1" />


- Admin Dashboard
<img width="1882" height="792" alt="image" src="https://github.com/user-attachments/assets/2d5e2286-fb6b-42ba-b8b3-eaec6768ecd3" />
<img width="1242" height="627" alt="image" src="https://github.com/user-attachments/assets/50e93aca-0305-4de4-a29f-296e17c73822" />


---

## 🎯 Future Enhancements

- Wishlist
- Product Reviews
- Coupon System
- Email Notifications
- Inventory Management
- Order Tracking
- User Profile Management
- AI Product Recommendation
- Dark Mode

---

## 📚 Learning Outcomes

Through this project I gained hands-on experience in:

- MERN Stack Development
- REST API Development
- JWT Authentication
- MongoDB Atlas
- Redux Toolkit
- Cloudinary Integration
- Razorpay Integration
- Git & GitHub
- Render Deployment
- Full Stack Application Development

---

## 👨‍💻 Author

**Sathiya**

GitHub:
https://github.com/Sathiya15l

---

## ⭐ Support

If you found this project useful, please consider giving it a ⭐ on GitHub.
