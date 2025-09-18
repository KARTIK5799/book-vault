import React from "react";

const DeleteModal = ({ selectedBook, setShowDeleteModal, deleteBook }) => (
  <div className="fixed inset-0 bg-black/40 flex justify-center items-center z-50">
    <div className="bg-white rounded-lg shadow-lg w-96 p-6 text-center">
      <h2 className="text-xl font-semibold mb-4">Delete Book</h2>
      <p className="mb-4">Are you sure you want to delete "{selectedBook.name}"?</p>
      <div className="flex justify-center gap-3">
        <button
          onClick={() => setShowDeleteModal(false)}
          className="px-4 py-2 rounded-md bg-gray-200 hover:bg-gray-300"
        >
          Cancel
        </button>
        <button
          onClick={() => {
            deleteBook(selectedBook.id);
            setShowDeleteModal(false);
          }}
          className="px-4 py-2 rounded-md bg-red-600 text-white hover:bg-red-500"
        >
          Delete
        </button>
      </div>
    </div>
  </div>
);

export default DeleteModal;
