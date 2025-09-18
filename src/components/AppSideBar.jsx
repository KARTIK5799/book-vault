import React, { useState } from "react";
import { IoMenu } from "react-icons/io5";
import { FaRegChartBar, FaHome, FaBookOpen } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const AppSideBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleSidebar = () => setIsOpen(!isOpen);

  const menuItems = [
    { name: "Dashboard", icon: <FaHome size={20} />, path: "/" },
    { name: "Books", icon: <FaBookOpen size={20} />, path: "/books" },
  ];

  return (
    <div
      className={`
        app-side-bar flex flex-col h-screen bg-white border-r border-gray-200 transition-all duration-300
        ${isOpen ? "w-64" : "w-16"}        
        sm:${isOpen ? "w-64" : "w-20"}          
        ${isOpen ? "absolute z-50 sm:relative" : "relative"} 
      `}
    >
      {/* Header */}
      <div
        className={`side-bar-header flex items-center p-5 border-b border-gray-200 ${
          isOpen ? "justify-between" : "justify-center"
        }`}
      >
        {isOpen && (
          <div className="flex items-center gap-2">
            <div className="p-2 rounded-full bg-black flex items-center justify-center">
              <FaBookOpen color="white" />
            </div>
            <p className="font-semibold text-gray-800">BookVault</p>
          </div>
        )}

        <button
          type="button"
          aria-label="Toggle sidebar"
          className="cursor-pointer hover:text-gray-600"
          onClick={handleSidebar}
        >
          <IoMenu size={20} />
        </button>
      </div>

      {/* Menu */}
      <div className="flex-1 overflow-auto">
        <ul className="mt-4 space-y-1">
          {menuItems.map((item) => (
            <li key={item.name}>
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  `flex items-center gap-3 px-5 py-3 text-gray-700 hover:bg-gray-100 rounded-xl transition
                  ${isOpen ? "" : "justify-center"} ${isActive ? "bg-gray-200 font-semibold" : ""}`
                }
              >
                {item.icon}
                {isOpen && <span className="text-sm font-medium">{item.name}</span>}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>

      {/* Footer / Profile */}
      <div
        className={`side-bar-footer flex items-center p-5 border-t border-gray-200 gap-3 ${
          isOpen ? "" : "justify-center"
        }`}
      >
        <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center">
          U
        </div>

        {isOpen && (
          <div className="leading-tight">
            <p className="text-sm font-medium text-gray-800">User Name</p>
            <p className="text-xs text-gray-500">user@email.com</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default AppSideBar;
