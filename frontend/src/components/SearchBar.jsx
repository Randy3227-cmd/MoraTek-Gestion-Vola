
// SearchBar.jsx
import React from 'react';
import { Search } from 'lucide-react';

const SearchBar = () => {
  return (
    <div className="bg-gray-800 rounded-lg p-4 mb-6">
      <div className="flex items-center gap-3">
        <input
          type="text"
          placeholder="Buscar uma transação"
          className="flex-1 bg-transparent text-white placeholder-gray-500 outline-none"
        />
        <button className="text-yellow-600 hover:text-yellow-500 transition-colors">
          <Search size={20} />
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
