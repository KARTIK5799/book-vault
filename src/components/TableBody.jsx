import React from "react";
import { FaEdit, FaTrash } from "react-icons/fa";

const TableBody = ({ currentBooks, setShowEditModal, setShowDeleteModal, setSelectedBook }) => {
  const handleEdit = (book) => {
    setSelectedBook(book);
    setShowEditModal(true);
  };

  const handleDelete = (book) => {
    setSelectedBook(book);
    setShowDeleteModal(true);
  };

  return (
    <div className="divide-y divide-gray-200">
      {currentBooks.map((book) => (
        <div
          key={book.id}
          className="flex flex-col md:grid md:grid-cols-6 items-start md:items-center px-6 py-4 hover:bg-gray-50"
        >
          <div className="font-medium text-gray-900">{book.name}</div>
          <div className="hidden md:block">{book.author}</div>
          <div className="hidden md:block">{book.genre}</div>
          <div className="hidden md:block">{book.published}</div>
          <div className="mt-2 md:mt-0">
            <span
              className={`px-3 py-1 text-xs font-medium rounded-full ${
                book.status === "Available"
                  ? "text-green-800 bg-green-100"
                  : book.status === "Borrowed"
                  ? "text-red-800 bg-red-100"
                  : "text-yellow-800 bg-yellow-100"
              }`}
            >
              {book.status}
            </span>
          </div>
          <div className="flex gap-3 mt-3 md:mt-0 justify-start md:justify-center">
            <button
              onClick={() => handleEdit(book)}
              className="p-2  ">
              <FaEdit />
            </button>
            <button
              onClick={() => handleDelete(book)}
              className="p-2 "
            >
              <FaTrash />
            </button>
          </div>
        </div>
      ))}
      {currentBooks.length === 0 && <div className="px-6 py-4 text-gray-500">No books found.</div>}
    </div>
  );
};

export default TableBody;
