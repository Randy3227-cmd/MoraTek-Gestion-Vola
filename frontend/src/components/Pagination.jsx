import React from 'react';
import { ChevronRight } from 'lucide-react';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div className="flex items-center justify-center gap-2 mt-6">
      {pages.map(page => (
        <button
          key={page}
          className={`w-10 h-10 rounded ${
            currentPage === page
              ? 'bg-green-500 text-white'
              : 'bg-gray-700 text-gray-400 hover:bg-gray-600'
          } transition-colors`}
          onClick={() => onPageChange(page)}
        >
          {page}
        </button>
      ))}
      <button className="w-10 h-10 rounded bg-gray-700 text-gray-400 hover:bg-gray-600 transition-colors flex items-center justify-center">
        <ChevronRight size={20} />
      </button>
    </div>
  );
};

export default Pagination;
