import React from "react";

const TablePagination = ({ currentPage, setCurrentPage, totalPages }) => (
  <div className="pagination flex justify-center gap-3 py-4 text-gray-600 items-center">
    <button
      onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
      disabled={currentPage === 1}
      className={`px-3 py-1 rounded-md ${
        currentPage === 1
          ? "bg-gray-200 text-gray-400 cursor-not-allowed"
          : "bg-indigo-600 text-white hover:bg-indigo-500"
      }`}
    >
      Prev
    </button>

    <span>
      Page {currentPage} of {totalPages}
    </span>

    <button
      onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
      disabled={currentPage === totalPages}
      className={`px-3 py-1 rounded-md ${
        currentPage === totalPages
          ? "bg-gray-200 text-gray-400 cursor-not-allowed"
          : "bg-indigo-600 text-white hover:bg-indigo-500"
      }`}
    >
      Next
    </button>
  </div>
);

export default TablePagination;
