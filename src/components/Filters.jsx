import React from "react";
import { FaFilter } from "react-icons/fa";
import { FaChevronDown } from "react-icons/fa6";
import { useBooks } from "../context/useBooks";

const Filters = ({ openDropdown, setOpenDropdown, setShowAddModal }) => {
  const { genres, statuses, genre, setGenre, status, setStatus } = useBooks();

  const toggleDropdown = (menu) => setOpenDropdown(openDropdown === menu ? null : menu);

  return (
    <div className="table-filter w-full flex flex-wrap gap-5 border rounded-lg border-gray-200 items-center px-6 py-4 bg-white shadow">
      <div className="flex gap-2 items-center text-gray-700 font-medium">
        <FaFilter /> Filter
      </div>

    
      <div className="relative">
        <button
          onClick={() => toggleDropdown("genre")}
          className="bg-gray-100 flex justify-between items-center px-4 py-2 rounded-md border border-gray-300 min-w-[180px] hover:bg-gray-200"
        >
          {genre}
          <FaChevronDown className="ml-2 text-gray-600" />
        </button>
        {openDropdown === "genre" && (
          <ul className="absolute mt-2 w-full bg-white border border-gray-300 rounded-lg shadow-md z-10">
            {genres.map((g) => (
              <li
                key={g}
                onClick={() => {
                  setGenre(g);
                  setOpenDropdown(null);
                }}
                className="px-4 py-2 hover:bg-indigo-100 cursor-pointer"
              >
                {g}
              </li>
            ))}
          </ul>
        )}
      </div>

  
      <div className="relative">
        <button
          onClick={() => toggleDropdown("status")}
          className="bg-gray-100 flex justify-between items-center px-4 py-2 rounded-md border border-gray-300 min-w-[180px] hover:bg-gray-200"
        >
          {status}
          <FaChevronDown className="ml-2 text-gray-600" />
        </button>
        {openDropdown === "status" && (
          <ul className="absolute mt-2 w-full bg-white border border-gray-300 rounded-lg shadow-md z-10">
            {statuses.map((s) => (
              <li
                key={s}
                onClick={() => {
                  setStatus(s); 
                  setOpenDropdown(null);
                }}
                className="px-4 py-2 hover:bg-indigo-100 cursor-pointer"
              >
                {s}
              </li>
            ))}
          </ul>
        )}
      </div>

    
      <div className="add-book ml-auto">
        <button
          onClick={() => setShowAddModal(true)}
          className="px-4 py-2 bg-indigo-600 hover:bg-indigo-500 text-white rounded-md shadow transition"
        >
          + Add New Book
        </button>
      </div>
    </div>
  );
};

export default Filters;
