import React from 'react';
import { X } from 'lucide-react';

const TransactionCreate = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
      <div className="bg-gray-900 rounded-xl w-full max-w-md p-6 relative">
        
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-white text-lg font-semibold">
            Nouvelle transaction
          </h2>
          <button onClick={onClose}>
            <X className="text-gray-400 hover:text-white" />
          </button>
        </div>

        {/* Form */}
        <form className="space-y-4">
          <input
            type="text"
            placeholder="Description"
            className="w-full bg-gray-800 text-white px-4 py-3 rounded-lg outline-none focus:ring-2 focus:ring-[#D2B55B]"
          />

          <input
            type="number"
            placeholder="Montant en Ariary"
            className="w-full bg-gray-800 text-white px-4 py-3 rounded-lg outline-none focus:ring-2 focus:ring-[#D2B55B]"
          />

          <input
            type="text"
            placeholder="Categorie"
            className="w-full bg-gray-800 text-white px-4 py-3 rounded-lg outline-none focus:ring-2 focus:ring-[#D2B55B]"
          />

          <input type="datetime-local"
          className='w-full bg-gray-800 text-white px-4 py-3 rounded-lg outline-none focus:ring-2 focus:ring-[#D2B55B]'/>

          {/* Type */}
          <div className="grid grid-cols-2 gap-4">
            <label className="flex items-center justify-center gap-2 bg-gray-800 rounded-lg py-3 cursor-pointer border border-green-500 text-green-500">
              <input type="radio" name="type" className="hidden" />
              Entrée
            </label>

            <label className="flex items-center justify-center gap-2 bg-gray-800 rounded-lg py-3 cursor-pointer border border-red-500 text-red-500">
              <input type="radio" name="type" className="hidden" />
              Sortie
            </label>
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-[#D2B55B] hover:bg-yellow-600 text-gray-900 font-semibold py-3 rounded-lg transition"
          >
            Valider
          </button>
        </form>
      </div>
    </div>
  );
};

export default TransactionCreate;
