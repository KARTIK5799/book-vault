import React, { useState } from "react";
import { FaFilter } from "react-icons/fa";
import { FaChevronDown } from "react-icons/fa6";

const BooksTable = () => {
  const [genre, setGenre] = useState("All Genres");
  const [status, setStatus] = useState("All Status");
  const [openDropdown, setOpenDropdown] = useState(null);

  const genres = ["All Genres", "Fiction", "Non-Fiction", "Sci-Fi", "Fantasy", "Biography"];
  const statuses = ["All Status", "Available", "Borrowed", "Reserved"];

  const toggleDropdown = (menu) => {
    setOpenDropdown(openDropdown === menu ? null : menu);
  };

  return (
    <div className="flex flex-col gap-5">
 
      <div className="add-book-section w-full md:h-[5rem] flex flex-col md:flex-row justify-between items-center gap-3 p-4 ">
        <div className="book-lib text-center md:text-left">
          <h3 className="text-2xl font-bold">Book Library</h3>
          <p className="text-gray-600">Manage your book collection here</p>
        </div>

        <div className="add-book">
          <button className="px-4 py-2 bg-blue-700 hover:bg-blue-600 text-white rounded-md shadow transition">
            + Add New Book
          </button>
        </div>
      </div>


      <div className="table-filter w-full flex flex-wrap gap-5 border rounded-2xl border-gray-300 items-center px-6 py-4 bg-white shadow">
        <div className="flex gap-2 items-center text-gray-700 font-medium">
          <FaFilter /> Filter
        </div>

    
        <div className="relative">
          <button
            onClick={() => toggleDropdown("genre")}
            className="bg-gray-100 flex justify-between items-center px-4 py-2 rounded-xl border border-gray-300 min-w-[180px] hover:bg-gray-200"
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
                  className="px-4 py-2 hover:bg-blue-100 cursor-pointer"
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
            className="bg-gray-100 flex justify-between items-center px-4 py-2 rounded-xl border border-gray-300 min-w-[180px] hover:bg-gray-200"
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
                  className="px-4 py-2 hover:bg-blue-100 cursor-pointer"
                >
                  {s}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>


      <div className="table bg-white shadow rounded-lg p-4 text-gray-600">
        table
      </div>


      <div className="pagination flex justify-center py-4 text-gray-600">
        pagination
      </div>
    </div>
  );
};

export default BooksTable;
