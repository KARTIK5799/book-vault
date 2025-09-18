import React, { useState, useEffect } from "react";
import { FaFilter } from "react-icons/fa";
import { FaChevronDown } from "react-icons/fa6";
import { FaEdit, FaTrash } from "react-icons/fa";

const BooksTable = () => {
  const [genre, setGenre] = useState("All Genres");
  const [status, setStatus] = useState("All Status");
  const [openDropdown, setOpenDropdown] = useState(null);
  const [books, setBooks] = useState([]);
  const [filteredBooks, setFilteredBooks] = useState([]);

  const [currentPage, setCurrentPage] = useState(1);
  const booksPerPage = 5;

  const genres = [
    "All Genres",
    "Fiction",
    "Non-Fiction",
    "Sci-Fi",
    "Fantasy",
    "Biography",
    "History",
  ];
  const statuses = ["All Status", "Available", "Borrowed", "Reserved"];

  const toggleDropdown = (menu) => {
    setOpenDropdown(openDropdown === menu ? null : menu);
  };


  useEffect(() => {
    const dummyBooks = [
      { id: 1, name: "The Great Gatsby", author: "F. Scott Fitzgerald", genre: "Fiction", published: 1925, status: "Available" },
      { id: 2, name: "To Kill a Mockingbird", author: "Harper Lee", genre: "Fiction", published: 1960, status: "Borrowed" },
      { id: 3, name: "A Brief History of Time", author: "Stephen Hawking", genre: "Non-Fiction", published: 1988, status: "Available" },
      { id: 4, name: "The Hobbit", author: "J.R.R. Tolkien", genre: "Fantasy", published: 1937, status: "Reserved" },
      { id: 5, name: "Dune", author: "Frank Herbert", genre: "Sci-Fi", published: 1965, status: "Available" },
      { id: 6, name: "Becoming", author: "Michelle Obama", genre: "Biography", published: 2018, status: "Available" },
      { id: 7, name: "1984", author: "George Orwell", genre: "Fiction", published: 1949, status: "Borrowed" },
      { id: 8, name: "Sapiens", author: "Yuval Noah Harari", genre: "Non-Fiction", published: 2011, status: "Available" },
      { id: 9, name: "Harry Potter", author: "J.K. Rowling", genre: "Fantasy", published: 1997, status: "Available" },
      { id: 10, name: "Foundation", author: "Isaac Asimov", genre: "Sci-Fi", published: 1951, status: "Reserved" },
      { id: 11, name: "The Catcher in the Rye", author: "J.D. Salinger", genre: "Fiction", published: 1951, status: "Available" },
      { id: 12, name: "Steve Jobs", author: "Walter Isaacson", genre: "Biography", published: 2011, status: "Borrowed" },
      { id: 13, name: "The Lord of the Rings", author: "J.R.R. Tolkien", genre: "Fantasy", published: 1954, status: "Available" },
      { id: 14, name: "Brave New World", author: "Aldous Huxley", genre: "Fiction", published: 1932, status: "Reserved" },
      { id: 15, name: "Cosmos", author: "Carl Sagan", genre: "Non-Fiction", published: 1980, status: "Available" },
      { id: 16, name: "The Martian", author: "Andy Weir", genre: "Sci-Fi", published: 2011, status: "Borrowed" },
      { id: 17, name: "Alexander Hamilton", author: "Ron Chernow", genre: "History", published: 2004, status: "Available" },
      { id: 18, name: "Pride and Prejudice", author: "Jane Austen", genre: "Fiction", published: 1813, status: "Available" },
      { id: 19, name: "Educated", author: "Tara Westover", genre: "Biography", published: 2018, status: "Reserved" },
      { id: 20, name: "The Silent Patient", author: "Alex Michaelides", genre: "Fiction", published: 2019, status: "Available" },
    ];

    setBooks(dummyBooks);
    setFilteredBooks(dummyBooks);
  }, []);

  
  useEffect(() => {
    let filtered = books;

    if (genre !== "All Genres") {
      filtered = filtered.filter((book) => book.genre === genre);
    }

    if (status !== "All Status") {
      filtered = filtered.filter((book) => book.status === status);
    }

    setFilteredBooks(filtered);
    setCurrentPage(1); 
  }, [genre, status, books]);


  const indexOfLastBook = currentPage * booksPerPage;
  const indexOfFirstBook = indexOfLastBook - booksPerPage;
  const currentBooks = filteredBooks.slice(indexOfFirstBook, indexOfLastBook);
  const totalPages = Math.ceil(filteredBooks.length / booksPerPage);

  return (
    <div className="flex flex-col gap-6 w-full">
      {/* Header */}
      <div className="add-book-section w-full flex flex-col md:flex-row justify-between items-center gap-3 p-4 bg-white shadow rounded-lg">
        <div className="book-lib text-center md:text-left">
          <h3 className="text-2xl font-bold">Book Library</h3>
          <p className="text-gray-600">Manage your book collection here</p>
        </div>

        <div className="add-book">
          <button className="px-4 py-2 bg-indigo-600 hover:bg-indigo-500 text-white rounded-md shadow transition">
            + Add New Book
          </button>
        </div>
      </div>

     
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
      </div>


      <div className="table bg-white shadow rounded-lg overflow-hidden w-full">
        <div className="hidden md:grid grid-cols-6 bg-gray-100 text-gray-800 font-semibold text-sm px-6 py-3">
          <div>Title</div>
          <div>Author</div>
          <div>Genre</div>
          <div>Published</div>
          <div>Status</div>
          <div className="text-center">Actions</div>
        </div>

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
                <button className="p-2 rounded-md bg-yellow-100 hover:bg-yellow-200 text-yellow-700 transition">
                  <FaEdit />
                </button>
                <button className="p-2 rounded-md bg-red-100 hover:bg-red-200 text-red-700 transition">
                  <FaTrash />
                </button>
              </div>
            </div>
          ))}

          {currentBooks.length === 0 && (
            <div className="px-6 py-4 text-gray-500">No books found.</div>
          )}
        </div>
      </div>


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
    </div>
  );
};

export default BooksTable;
