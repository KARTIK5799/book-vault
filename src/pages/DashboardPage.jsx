import React, { useContext } from 'react';
import { FaBookOpen, FaCheckCircle, FaClipboardList, FaLayerGroup } from 'react-icons/fa';
import DashCard from '../components/DashCard';
import BooksTable from '../components/BooksTable';
import BooksContext from '../context/BooksContext'; 

const DashboardPage = () => {
  const { books } = useContext(BooksContext); 

  const totalBooks = books.length;
  const availableBooks = books.filter(book => book.status === "Available").length;
  const issuedBooks = books.filter(book => book.status === "Borrowed").length;
  const uniqueGenres = new Set(books.map(book => book.genre)).size;

  const cards = [
    { text: "Total Books", number: totalBooks, icon: FaBookOpen, color: "#3b82f6" }, 
    { text: "Available", number: availableBooks, icon: FaCheckCircle, color: "#10b981" },
    { text: "Issued", number: issuedBooks, icon: FaClipboardList, color: "#facc15" }, 
    { text: "Genres", number: uniqueGenres, icon: FaLayerGroup, color: "#9ca3af" }, 
  ];

  return (
    <div className="p-5">
      <div className="dashboard-cards-section w-full flex flex-col md:flex-row gap-5 mb-8">
        {cards.map((card, index) => (
          <DashCard
            key={index}
            text={card.text}
            number={card.number}
            icon={card.icon}
            color={card.color}
          />
        ))}
      </div>

      <div>
        <BooksTable />
      </div>
    </div>
  );
};

export default DashboardPage;
