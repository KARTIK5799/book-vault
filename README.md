# 📚 BookVault – Book Management Dashboard

**Live Demo**: [BookVault Dashboard](https://book-vault-ochre.vercel.app/)

A modern and responsive **React.js dashboard** for managing books in a digital library.
It provides an intuitive UI for tracking books, managing availability, applying filters, and generating reports.

---

## 🚀 Features

### 🔹 Dashboard

* Summary cards showing:

  * **Total Books**
  * **Available**
  * **Issued**
  * **Genres**
* Real-time data fetched from context (BooksContext).

### 🔹 Book Management

* Table view for books with:

  * **Pagination**
  * **Genre & Status Filters**
  * **Search (by title, author, genre, year)**
* Actions:

  * **Edit book details** ✏️
  * **Delete book** 🗑️
* **Add New Book** button (modal/CRUD ready).

### 🔹 Sidebar Navigation

* Collapsible **AppSideBar** with smooth transition.
* Menu items:

  * 🏠 Dashboard
  * 📖 Books
  * 📊 Reports
* User profile footer.

### 🔹 Reports Section

* Placeholder for future analytics & reports.

### 🔹 Extra UX

* **Skeleton Loading** for smoother data fetch experience.
* **Responsive Design** – works on desktop & mobile.
* Clean Tailwind CSS styling.

---

## 🛠️ Tech Stack

* **Frontend**

  * React.js (Vite)
  * React Router DOM
  * Context API
  * Tailwind CSS
  * React Icons

* **Mock Backend (Current)**

  * json-server (REST API simulation)

---

## 📂 Project Structure

```
📦 book-vault
├── 📂 src
│   ├── 📂 components
│   │   ├── AppSideBar.jsx
│   │   ├── BooksTable.jsx
│   │   ├── DashCard.jsx
│   │   └── SkeletonLoader.jsx
│   ├── 📂 context
│   │   ├── BooksContext.jsx
│   │   └── useBooks.js
│   ├── 📂 pages
│   │   ├── DashboardPage.jsx
│   │   ├── BooksPage.jsx
│   │   └── ReportsPage.jsx
│   ├── App.jsx
│   └── main.jsx
├── db.json (for json-server)
├── tailwind.config.js
├── package.json
└── README.md
```

---

## ⚡ Installation & Setup

1. **Clone Repo**

   ```bash
   git clone https://github.com/yourusername/book-vault.git
   cd book-vault
   ```

2. **Install Dependencies**

   ```bash
   npm install
   ```

3. **Run Mock Backend**

   ```bash
   npx json-server --watch db.json --port 5000
   ```

4. **Start Frontend**

   ```bash
   npm run dev
   ```

5. Open: [http://localhost:5173](http://localhost:5173)

---

## 🌐 Deployment

This project is deployed on **Vercel**:
👉 [BookVault Live](https://book-vault-ochre.vercel.app/dashboard)

---

## 🛠️ Backend Roadmap (Planned)

Currently, BookVault uses a **mock backend** (`json-server`).
I am planning to build a **separate production-ready backend** using:

* **Node.js + Express.js**

  * REST APIs for books, users, and reports
  * CRUD operations with proper validations
* **MongoDB (Mongoose ORM)**

  * Store book records, genres, user data, and borrow history
* **Authentication & Authorization**

  * JWT-based login system
  * Role-based access (Admin, User)
* **Advanced Features**

  * Book issue/return tracking
  * Reports generation (daily/weekly stats)
  * API rate limiting & error handling
* **Deployment**

  * Hosted on **Render / Railway / AWS / Vercel (Serverless)**

This will allow BookVault to move from a demo project → to a **full-stack application** 🚀.

---

## 🎯 Future Enhancements

* ✅ Authentication & User Roles
* ✅ Add/Edit/Delete books with API
* ✅ Report Charts using Recharts / Chart.js
* ✅ Dark Mode 🌙
* ✅ Export reports (CSV, PDF)

---
