import React from 'react';
const TransactionRow = ({ description, amount, category, date, type }) => {
  const amountColor = type === 'income' ? 'text-green-500' : 'text-red-500';
  
  return (
    <div className="grid grid-cols-4 gap-4 py-4 border-b border-gray-700 hover:bg-gray-800 transition-colors">
      <div className="text-white">{description}</div>
      <div className={`font-semibold ${amountColor}`}>{amount}</div>
      <div className="text-gray-400">{category}</div>
      <div className="text-gray-400 text-right">{date}</div>
    </div>
  );
};

export default TransactionRow;
