import React from 'react';
// eslint-disable-next-line no-unused-vars
const DashCard = ({ number, text, icon: Icon, color }) => {
  return (
    <div className="w-full h-auto flex justify-between items-center border border-gray-200 rounded-2xl shadow-sm px-8 py-8">
      {/* Text Section */}
      <div className="flex flex-col justify-center items-start">
        <p className="text-gray-500 text-sm">{text}</p>
        <p className="text-3xl font-bold">{number}</p>
      </div>

      {/* Icon Section */}
      <div>
        <div
          className={`p-4 rounded-3xl`}
          style={{ backgroundColor: color, color: "white" }}
        >
          <Icon size={25} />
        </div>
      </div>
    </div>
  );
};

export default DashCard;
