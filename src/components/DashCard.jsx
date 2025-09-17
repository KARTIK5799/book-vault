import React from 'react';

const DashCard = ({ number, text }) => {
  return (
    <div className="w-full h-auto flex justify-center items-center border border-gray-200 rounded-lg shadow-sm p-4">
      <div className='flex'>
        <p className="text-gray-500 text-sm">{text}</p>
      <p className="text-xl font-bold">{number}</p>
      </div>
      <div>
            <div>{}</div>
      </div>
    </div>
  );
};

export default DashCard;
