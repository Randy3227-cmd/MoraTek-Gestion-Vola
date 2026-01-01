import React, { useState } from 'react';
import { Plus } from 'lucide-react';
import TransactionCreate from './TransactionCreate';

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-3">
          <div>
            <img
              src="/MoraTek.logo.png"
              alt="Logo MoraTek"
              className="h-10"
            />
            <p className="text-gray-400 text-sm">
              Gestion financière
            </p>
          </div>
        </div>

        <button
          onClick={() => setOpen(true)}
          className="bg-[#D2B55B] hover:bg-yellow-700 text-gray-900 px-4 py-2 rounded-lg font-semibold transition-colors flex items-center gap-2"
        >
          <Plus size={20} />
          Nouvelle transaction
        </button>
      </div>

      <TransactionCreate
        isOpen={open}
        onClose={() => setOpen(false)}
      />
    </>
  );
};

export default Header;
