import React from 'react';
import { Plus } from 'lucide-react';

const Header = () => {
  return (
    <div className="flex items-center justify-between mb-8">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 bg-teal-500 rounded-full flex items-center justify-center">
          <span className="text-white font-bold">M</span>
        </div>
        <div>
          <h1 className="text-xl font-bold">MoraTek</h1>
          <p className="text-gray-400 text-sm">Gestion de mon argent</p>
        </div>
      </div>
      <button className="bg-yellow-600 hover:bg-yellow-700 text-gray-900 px-4 py-2 rounded-lg font-semibold transition-colors flex items-center gap-2">
        <Plus size={20} />
        Nouvelle transaction
      </button>
    </div>
  );
};

export default Header;
