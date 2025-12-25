
// TransactionList.jsx
import React from 'react';
import TransactionRow from './TransactionRow';
import Pagination from './Pagination';

const TransactionList = ({ transactions }) => {
  return (
    <div className="bg-gray-800 rounded-lg p-6">
      <div className="grid grid-cols-4 gap-4 pb-4 border-b border-gray-700 text-gray-400 text-sm font-semibold">
        <div>Descrição</div>
        <div>Valor</div>
        <div>Categoria</div>
        <div className="text-right">Data</div>
      </div>
      
      {transactions.map(transaction => (
        <TransactionRow key={transaction.id} {...transaction} />
      ))}

      <Pagination currentPage={1} totalPages={3} />
    </div>
  );
};

export default TransactionList;
