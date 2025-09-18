import React from 'react';
import { FaBookOpen, FaCheckCircle, FaClipboardList, FaLayerGroup } from 'react-icons/fa';
import DashCard from '../components/DashCard';
import BooksTable from '../components/BooksTable';

const DashboardPage = () => {
  const cards = [
    { text: "Total Books", number: 12, icon: FaBookOpen, color: "#3b82f6" }, // blue
    { text: "Available", number: 8, icon: FaCheckCircle, color: "#10b981" }, // green
    { text: "Issued", number: 4, icon: FaClipboardList, color: "#facc15" }, // yellow
    { text: "Genres", number: 5, icon: FaLayerGroup, color: "#9ca3af" }, // gray
  ];

  return (
    <div className="p-5">
      {/* Dashboard Cards */}
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

      {/* Books Table */}
      <div>
        <BooksTable />
      </div>
    </div>
  );
};

export default DashboardPage;
