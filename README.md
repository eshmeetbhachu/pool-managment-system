# Pool Management System

A full-stack Pool Management System built using the MERN stack. The project currently includes user authentication with secure password hashing and JWT-based authorization.

## Features

### Authentication

* User Registration
* User Login
* Password Hashing using bcrypt
* JWT Authentication
* Input Validation
* Password Visibility Toggle
* Protected Authentication Flow

### Frontend

* React.js
* Vite
* Responsive Login and Signup Forms
* Form Validation
* State Management using React Hooks

### Backend

* Node.js
* Express.js
* MongoDB Atlas
* Mongoose ODM
* JWT Token Generation
* REST API Architecture

## Tech Stack

### Frontend

* React.js
* Vite
* CSS
* React Icons

### Backend

* Node.js
* Express.js
* MongoDB Atlas
* Mongoose
* bcrypt
* jsonwebtoken
* dotenv
* cors

## Project Structure

```text
POOL MANAGEMENT SYSTEM
│
├── SwimSafe/        # React Frontend
│
└── backend/         # Node.js Backend
```

## API Endpoints

### Register User

```http
POST /api/auth/register
```

Request Body:

```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "phoneNumber": "9876543210",
  "password": "Password@123",
  "confirmPassword": "Password@123"
}
```

### Login User

```http
POST /api/auth/login
```

Request Body:

```json
{
  "email": "john@example.com",
  "password": "Password@123"
}
```

## Installation

### Clone Repository

```bash
git clone <repository-url>
```

### Backend Setup

```bash
cd backend
npm install
npm run dev
```

### Frontend Setup

```bash
cd SwimSafe
npm install
npm run dev
```

