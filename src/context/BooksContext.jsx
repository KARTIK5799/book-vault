import React, { createContext, useState, useEffect } from "react";

const BooksContext = createContext();

export const BooksProvider = ({ children }) => {
  const [books, setBooks] = useState([]);
  const [filteredBooks, setFilteredBooks] = useState([]);
  const [search, setSearch] = useState("");
  const [genre, setGenre] = useState("All Genres");
  const [status, setStatus] = useState("All Status");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

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

  // Fetch books from JSON server
  useEffect(() => {
    const fetchBooks = async () => {
      setLoading(true);
      try {
        const response = await fetch("http://localhost:5000/books");
        if (!response.ok) {
          throw new Error("Failed to fetch books");
        }
        const data = await response.json();
        setBooks(data);
        setFilteredBooks(data);
      } catch (err) {
        console.error(err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchBooks();
  }, []);

  // Filter books
  useEffect(() => {
    let result = books;

    if (search.trim() !== "") {
      const lowerSearch = search.toLowerCase();
      result = result.filter(
        (book) =>
          book.name.toLowerCase().includes(lowerSearch) ||
          book.author.toLowerCase().includes(lowerSearch) ||
          book.genre.toLowerCase().includes(lowerSearch)
      );
    }

    if (genre !== "All Genres") {
      result = result.filter((book) => book.genre === genre);
    }

    if (status !== "All Status") {
      result = result.filter((book) => book.status === status);
    }

    setFilteredBooks(result);
  }, [search, genre, status, books]);

  // CRUD functions
  const addBook = async (newBook) => {
    try {
      const response = await fetch("http://localhost:5000/books", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newBook),
      });
      const data = await response.json();
      setBooks([...books, data]);
    } catch (err) {
      console.error("Failed to add book:", err);
    }
  };

  const editBook = async (updatedBook) => {
    try {
      const response = await fetch(`http://localhost:5000/books/${updatedBook.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updatedBook),
      });
      const data = await response.json();
      setBooks(books.map((book) => (book.id === data.id ? data : book)));
    } catch (err) {
      console.error("Failed to update book:", err);
    }
  };

  const deleteBook = async (id) => {
    try {
      await fetch(`http://localhost:5000/books/${id}`, {
        method: "DELETE",
      });
      setBooks(books.filter((book) => book.id !== id));
    } catch (err) {
      console.error("Failed to delete book:", err);
    }
  };

  return (
    <BooksContext.Provider
      value={{
        books,
        filteredBooks,
        search,
        setSearch,
        genre,
        setGenre,
        status,
        setStatus,
        genres,
        statuses,
        loading,
        error,
        addBook,
        editBook,
        deleteBook,
      }}
    >
      {children}
    </BooksContext.Provider>
  );
};

export default BooksContext;
