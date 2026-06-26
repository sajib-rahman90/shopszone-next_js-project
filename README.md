# 🚀 Next.js Firebase Assessment Project

# GitHub Repository link: https://github.com/sajib-rahman90/shopszone-next_js-project

# Live demo: https://shopszone-next-js-project.vercel.app/

## 📌 Project Overview

This project is a modern, fully responsive web application built with **Next.js (App Router)** and **Firebase Authentication**. It demonstrates public and protected routing, user authentication, dynamic routing, responsive UI design, and item management features.

The application follows the assessment requirements by implementing a clean user experience, reusable components, protected pages, responsive layouts, and consistent design across all devices.

---

# ✨ Key Features

### 🔐 Authentication

- Firebase Email & Password Authentication
- User Registration
- User Login
- Google Sign-In (Optional)
- Persistent Authentication State
- Protected Routes
- Automatic Redirect After Login

---

### 🏠 Landing Page

The landing page contains seven major sections:

- Sticky Responsive Navbar
- Hero Section
- Featured Section
- Popular Items Section
- Why Choose Us Section
- Testimonials Section
- Footer

Navbar Features:

- Logo
- Home
- Items
- About
- Login
- Register

After successful login:

- User Information Dropdown
- Add Item
- Manage Items
- Logout

---

### 📦 Items Page

- Responsive Grid Layout
- Minimum 6 Items
- Search Functionality
- Filter by Category
- Filter by Price / Rating / Date
- Uniform Cards
- Hover Effects
- View Details Button

---

### 📄 Item Details Page

Dynamic Route using Next.js App Router

Displays:

- Item Image
- Title
- Full Description
- Specifications
- Category
- Price
- Date
- Related Items
- Back Button

---

### ℹ️ About Page

Contains:

- Project Introduction
- Description
- Optional Image
- Purpose of the Application

---

### ➕ Protected Add Item Page

Only authenticated users can access this page.

Features:

- Add New Item Form
- Title
- Short Description
- Full Description
- Price
- Date
- Category / Priority
- Image URL
- Submit Button
- Success Toast Notification

---

### 🛠 Manage Items Page

Only authenticated users can access this page.

Features:

- Responsive Table/Grid
- View Item
- Delete Item
- Clean UI
- Responsive Design

---

### 🎨 UI & UX

- Fully Responsive
- Mobile Friendly
- Tablet Friendly
- Desktop Optimized
- Modern Design
- Consistent Typography
- Uniform Card Layout
- Hover Animations
- Focus States
- Smooth Transitions
- Clean Spacing
- Accessible Components

---

# 🛠 Tech Stack

## Frontend

- Next.js (App Router)
- React.js
- JavaScript (ES6+)

## Styling

- Tailwind CSS
- Framer Motion (Optional)

## Authentication

- Firebase Authentication

## State Management

- React Context API

## Deployment

- Vercel

---

# 📁 Project Structure

```
app/
│
├── page.js                 // Home Page
├── about/
│   └── page.js
│
├── items/
│   ├── page.js
│   ├── add/
│   │   └── page.js
│   ├── manage/
│   │   └── page.js
│   └── [id]/
│       └── page.js
│
├── login/
│   └── page.js
│
├── register/
│   └── page.js
│
├── layout.js
│
components/
context/
firebase/
public/
```

---

# ⚙️ Installation & Setup

## 1. Clone the Repository

```bash
git clone https://github.com/your-username/your-repository.git
```

---

## 2. Navigate to the Project Folder

```bash
cd your-repository
```

---

## 3. Install Dependencies

```bash
npm install
```

or

```bash
yarn install
```

---

## 4. Create Environment Variables

Create a `.env.local` file in the project root.

```env
NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key

NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_auth_domain

NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id

NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_storage_bucket

NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_sender_id

NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id
```

---

## 5. Start the Development Server

```bash
npm run dev
```

or

```bash
yarn dev
```

Visit:

```
http://localhost:3000
```

---

# 🔒 Authentication Flow

1. Register using Email & Password.
2. Login using registered credentials.
3. User authentication state is stored using Context API.
4. Protected pages require authentication.
5. Unauthenticated users are redirected to the Login page.
6. After login, users are redirected to the Home page.

---

# 📱 Responsive Design

The application is optimized for:

- Mobile Devices
- Tablets
- Laptops
- Desktop Screens

---

# 🚀 Deployment

This project is ready for deployment on **Vercel**.

Build Command

```bash
npm run build
```

Start Command

```bash
npm start
```

---

# 📌 Future Improvements

- Firebase Firestore Database
- CRUD Operations
- Edit Item Feature
- Pagination
- Wishlist
- Dark Mode
- User Profile
- Image Upload
- Loading Skeletons
- Better Search & Advanced Filters

---

# 👨‍💻 Author

Developed as part of a **Next.js + Firebase Assessment Project**, showcasing modern frontend development practices, authentication, responsive UI design, and protected routing.
