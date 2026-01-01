import React from 'react';

const TransactionRow = ({ description, amount, category, date, status, type }) => {
  const amountColor =
    type === 'income' ? 'text-green-500' : 'text-red-500';

  // Couleur du statut selon 1, 2, 3
  const statusColor = () => {
    switch (status) {
      case 1:
        return 'bg-yellow-400'; // En attente
      case 2:
        return 'bg-green-500';  // Validé
      case 3:
        return 'bg-red-500';    // Rejeté
      default:
        return 'bg-gray-500';
    }
  };

  return (
    <div className="grid grid-cols-5 gap-5 py-4 border-b border-gray-700 hover:bg-gray-800 transition-colors items-center">
      <div className="text-white">{description}</div>

      <div className={`font-semibold ${amountColor}`}>
        {amount}
      </div>

      <div className="text-gray-400">{category}</div>

      <div className="text-gray-400 text-right">{date}</div>

      <div className="flex justify-center">
        <span
          className={`w-3 h-3 rounded-full ${statusColor()}`}
          title={`Statut: ${status}`}
        ></span>
      </div>
    </div>
  );
};

export default TransactionRow;
