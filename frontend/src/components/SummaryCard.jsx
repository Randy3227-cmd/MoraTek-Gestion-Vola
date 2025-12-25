import React from 'react';

const SummaryCard = ({ title, amount, type, icon }) => {
  const getColorClasses = () => {
    switch(type) {
      case 'income':
        return 'bg-gray-800 border-green-500';
      case 'expense':
        return 'bg-gray-800 border-red-500';
      case 'total':
        return 'bg-yellow-600';
      default:
        return 'bg-gray-800';
    }
  };

  const getIconColor = () => {
    switch(type) {
      case 'income': return 'text-green-500';
      case 'expense': return 'text-red-500';
      case 'total': return 'text-yellow-900';
      default: return 'text-gray-400';
    }
  };

  return (
    <div className={`${getColorClasses()} rounded-lg p-6 border-l-4`}>
      <div className="flex items-center justify-between mb-2">
        <span className="text-gray-400 text-sm">{title}</span>
        <div className={`${getIconColor()}`}>{icon}</div>
      </div>
      <div className={`text-2xl font-bold ${type === 'total' ? 'text-gray-900' : 'text-white'}`}>
        {amount}
      </div>
    </div>
  );
};

export default SummaryCard;
