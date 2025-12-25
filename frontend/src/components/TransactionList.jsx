import React from 'react';
import TransactionRow from './TransactionRow';
import Pagination from './Pagination';

const TransactionList = ({ transactions, currentPage, totalPages, onPageChange }) => {
  return (
    <div className="bg-gray-800 rounded-lg p-6">
      <div className="grid grid-cols-4 gap-4 pb-4 border-b border-gray-700 text-gray-400 text-sm font-semibold">
        <div>Description</div>
        <div>Montant</div>
        <div>Catégorie</div>
        <div className="text-right">Date</div>
      </div>
      
      {transactions.map(transaction => (
        <TransactionRow key={transaction.id} {...transaction} />
      ))}

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={onPageChange}
      />
    </div>
  );
};

export default TransactionList;
