import React, { createContext, useState, useEffect } from "react";


const BooksContext = createContext();


export const BooksProvider = ({ children }) => {
  const [books, setBooks] = useState([]);
  const [filteredBooks, setFilteredBooks] = useState([]);
  const [search, setSearch] = useState("");
  const [genre, setGenre] = useState("All Genres");
  const [status, setStatus] = useState("All Status");
  const [loading, setLoading] = useState(true);



  const dummyBooks = [
    { id: 1, name: "The Great Gatsby", author: "F. Scott Fitzgerald", genre: "Fiction", published: 1925, status: "Available" },
    { id: 2, name: "To Kill a Mockingbird", author: "Harper Lee", genre: "Fiction", published: 1960, status: "Borrowed" },
    { id: 3, name: "A Brief History of Time", author: "Stephen Hawking", genre: "Non-Fiction", published: 1988, status: "Available" },
    { id: 4, name: "The Hobbit", author: "J.R.R. Tolkien", genre: "Fantasy", published: 1937, status: "Reserved" },
    { id: 5, name: "Dune", author: "Frank Herbert", genre: "Sci-Fi", published: 1965, status: "Available" },
    { id: 6, name: "Becoming", author: "Michelle Obama", genre: "Biography", published: 2018, status: "Available" },
    { id: 7, name: "1984", author: "George Orwell", genre: "Fiction", published: 1949, status: "Borrowed" },
    { id: 8, name: "Sapiens", author: "Yuval Noah Harari", genre: "Non-Fiction", published: 2011, status: "Available" },
    { id: 9, name: "Harry Potter and the Philosopher's Stone", author: "J.K. Rowling", genre: "Fantasy", published: 1997, status: "Available" },
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



  useEffect(() => {
    setLoading(true)
    setBooks(dummyBooks);
    setFilteredBooks(dummyBooks);
    setLoading(false);
  }, []);


  useEffect(() => {
    let result = books;


    if (search.trim() !== "") {
      const lowerSearch = search.toLowerCase();
      result = result.filter((book) =>
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
        loading,
      }}
    >
      {children}
    </BooksContext.Provider>
  );
};

export default BooksContext;
