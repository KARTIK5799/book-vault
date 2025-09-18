import React, { useState, useEffect } from "react";
import { useBooks } from "../context/useBooks";

const AddEditModal = ({
  showAddModal,
  showEditModal,
  setShowAddModal,
  setShowEditModal,
  selectedBook,
}) => {
  const { addBook, editBook, genres, statuses } = useBooks();

  const [formData, setFormData] = useState({
    name: "",
    author: "",
    genre: genres[1] || "", 
    published: "",
    status: statuses[1] || "Available", 
  });

 
  useEffect(() => {
    if (showEditModal && selectedBook) setFormData({ ...selectedBook });
  }, [showEditModal, selectedBook]);

  const handleSubmit = () => {
    if (showAddModal) addBook(formData);
    if (showEditModal) editBook({ ...selectedBook, ...formData });
    setShowAddModal(false);
    setShowEditModal(false);
  };

  return (
    <div className="fixed inset-0 bg-black/40 flex justify-center items-center z-50">
      <div className="bg-white rounded-lg shadow-lg w-96 p-6">
        <h2 className="text-xl font-semibold mb-4">
          {showAddModal ? "Add New Book" : "Edit Book"}
        </h2>

        <div className="flex flex-col gap-3">
          <input
            type="text"
            placeholder="Book Name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="border px-3 py-2 rounded-md"
          />
          <input
            type="text"
            placeholder="Author"
            value={formData.author}
            onChange={(e) => setFormData({ ...formData, author: e.target.value })}
            className="border px-3 py-2 rounded-md"
          />

          
          <select
            value={formData.genre}
            onChange={(e) => setFormData({ ...formData, genre: e.target.value })}
            className="border px-3 py-2 rounded-md"
          >
            {genres.slice(1).map((g) => (
              <option key={g} value={g}>
                {g}
              </option>
            ))}
          </select>

          <input
            type="text"
            placeholder="Published Year"
            value={formData.published}
            onChange={(e) => setFormData({ ...formData, published: e.target.value })}
            className="border px-3 py-2 rounded-md"
          />

          {/* Status Dropdown */}
          <select
            value={formData.status}
            onChange={(e) => setFormData({ ...formData, status: e.target.value })}
            className="border px-3 py-2 rounded-md"
          >
            {statuses.slice(1).map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
        </div>

        <div className="flex justify-end gap-3 mt-4">
          <button
            onClick={() => {
              setShowAddModal(false);
              setShowEditModal(false);
            }}
            className="px-4 py-2 rounded-md bg-gray-200 hover:bg-gray-300"
          >
            Cancel
          </button>
          <button
            onClick={handleSubmit}
            className="px-4 py-2 rounded-md bg-indigo-600 text-white hover:bg-indigo-500"
          >
            {showAddModal ? "Add" : "Save"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddEditModal;
