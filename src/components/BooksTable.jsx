import React, { useState } from "react";
import { useBooks } from "../context/useBooks";
import TableHeader from "./TableHeader";
import TableBody from "./TableBody";
import TablePagination from "./TablePagination";
import AddEditModal from "./AddEditModal";
import DeleteModal from "./DeleteModal";
import Filters from "./Filters";

const BooksTable = () => {
  const { filteredBooks, genres, statuses, addBook, editBook, deleteBook } = useBooks();

  const [currentPage, setCurrentPage] = useState(1);
  const [openDropdown, setOpenDropdown] = useState(null);

  const [showAddModal, setShowAddModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  const [selectedBook, setSelectedBook] = useState(null);

  const booksPerPage = 10;
  const indexOfLastBook = currentPage * booksPerPage;
  const indexOfFirstBook = indexOfLastBook - booksPerPage;
  const currentBooks = filteredBooks.slice(indexOfFirstBook, indexOfLastBook);
  const totalPages = Math.ceil(filteredBooks.length / booksPerPage);

  return (
    <div className="flex flex-col gap-6 w-full">
   
      <Filters
        genres={genres}
        statuses={statuses}
        openDropdown={openDropdown}
        setOpenDropdown={setOpenDropdown}
        setShowAddModal={setShowAddModal}
      />

   
      <div className="table bg-white shadow rounded-lg overflow-hidden w-full border border-gray-300">
        <TableHeader />
        <TableBody
          currentBooks={currentBooks}
          setShowEditModal={setShowEditModal}
          setShowDeleteModal={setShowDeleteModal}
          setSelectedBook={setSelectedBook}
        />
      </div>

   
      <TablePagination
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        totalPages={totalPages}
      />

    
      {(showAddModal || showEditModal) && (
        <AddEditModal
          showAddModal={showAddModal}
          showEditModal={showEditModal}
          setShowAddModal={setShowAddModal}
          setShowEditModal={setShowEditModal}
          selectedBook={selectedBook}
          setSelectedBook={setSelectedBook}
          addBook={addBook}
          editBook={editBook}
        />
      )}

      {/* Delete Modal */}
      {showDeleteModal && (
        <DeleteModal
          selectedBook={selectedBook}
          setShowDeleteModal={setShowDeleteModal}
          deleteBook={deleteBook}
        />
      )}
    </div>
  );
};

export default BooksTable;
