import React from "react";
import AppSideBar from "./components/AppSideBar";
import AppHeader from "./components/AppHeader";
import DashboardPage from "./pages/DashboardPage";
import BooksPage from "./pages/BooksPage";
import ReportsPage from "./pages/ReportsPage";
import { Routes,Route,Navigate } from "react-router-dom";

const Layout = () => {
  return (
    <div className="flex h-screen">
      <AppSideBar />

      <div className="flex-1 flex flex-col overflow-hidden">
        <div className="flex-shrink-0">
          <AppHeader />
        </div>

        <div className="flex-1 overflow-auto p-4 bg-gray-50">
            <Routes>
          <Route path="/" element={<Navigate to="/dashboard" />} />
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/books" element={<BooksPage />} />
           <Route path="/reports" element={<ReportsPage />} />
         
          <Route path="*" element={<div>404 Not Found</div>} />
        </Routes>
        </div>
      </div>
    </div>
  );
};

export default Layout;
