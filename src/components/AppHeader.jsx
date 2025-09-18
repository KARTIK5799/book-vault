import React from "react";
import { FaSearch,FaUser,FaBell } from "react-icons/fa";


const AppHeader = () => {
  return (
    <div className="h-16 border-b border-gray-200 w-full flex items-center p-4 bg-white">
      {/* Search Section */}
      <div className="search-section border p-2 border-gray-200 rounded-lg w-2/3 sm:w-1/3">
        <div className="search flex items-center gap-1">
          <FaSearch size={15} color="gray"/>
          <input
            type="text"
            className="outline-none border-none w-full"
            placeholder="Search..."
          />
        </div>
      </div>

      {/* Profile Section */}
      <div className="profile-section ml-4 flex items-center gap-5 sm:w-2/3 w-1/3 justify-end">
       <div className=" flex items-center justify-center cursor-pointer">
          <FaBell />
        </div>
        <div className="w-8 h-8 rounded-full bg-gray-200 flex cursor-pointer items-center justify-center">
          <FaUser />
        </div>
      </div>
    </div>
  );
};

export default AppHeader;
