import React from "react";

const TableHeader = () => (
  <div className="hidden md:grid grid-cols-6 bg-gray-100 text-gray-800 font-semibold text-sm px-6 py-3 border-b border-gray-300">
    <div>Title</div>
    <div>Author</div>
    <div>Genre</div>
    <div>Published</div>
    <div>Status</div>
    <div className="text-center">Actions</div>
  </div>
);

export default TableHeader;
