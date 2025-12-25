
import React from 'react';
import Header from './components/Header';
import SummaryCard from './components/SummaryCard';
import SearchBar from './components/SearchBar';
import TransactionList from './components/TransactionList';

const App = () => {
  // Données mockées pour l'affichage
  const summary = {
    income: 'R$ 17.400,00',
    expense: 'R$ 1.259,00',
    total: 'R$ 16.141,00'
  };

  const transactions = [
    { id: 1, description: 'Desenvolvimento de site', amount: 'R$ 12.000,00', category: 'Venda', date: '13/04/2022', type: 'income' },
    { id: 2, description: 'Hambúrguer', amount: 'R$ 59,00', category: 'Alimentação', date: '10/04/2022', type: 'expense' },
    { id: 3, description: 'Aluguel do apartamento', amount: 'R$ 1.200,00', category: 'Casa', date: '27/03/2022', type: 'expense' },
    { id: 4, description: 'Computador', amount: 'R$ 5.400,00', category: 'Venda', date: '15/03/2022', type: 'income' },
    { id: 5, description: 'Desenvolvimento de site', amount: 'R$ 8.000,00', category: 'Venda', date: '13/03/2022', type: 'income' },
    { id: 6, description: 'Janta', amount: 'R$ 59,00', category: 'Alimentação', date: '10/03/2022', type: 'expense' },
    { id: 7, description: 'Aluguel do apartamento', amount: 'R$ 1.200,00', category: 'Casa', date: '27/02/2022', type: 'expense' },
    { id: 8, description: 'Salário', amount: 'R$ 5.400,00', category: 'Salário', date: '15/02/2022', type: 'income' },
    { id: 9, description: 'Almoço', amount: 'R$ 59,00', category: 'Alimentação', date: '05/02/2022', type: 'expense' },
    { id: 10, description: 'Fonte de renda', amount: 'R$ 150,00', category: 'Renda', date: '02/02/2022', type: 'income' },
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <div className="max-w-7xl mx-auto">
        <Header />

        {/* Cartes de résumé */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <SummaryCard
            title="Entradas"
            amount={summary.income}
            type="income"
            icon={<div className="w-8 h-8 bg-green-500 bg-opacity-20 rounded-full flex items-center justify-center">↑</div>}
          />
          <SummaryCard
            title="Saídas"
            amount={summary.expense}
            type="expense"
            icon={<div className="w-8 h-8 bg-red-500 bg-opacity-20 rounded-full flex items-center justify-center">↓</div>}
          />
          <SummaryCard
            title="Total"
            amount={summary.total}
            type="total"
            icon={<div className="w-8 h-8 bg-yellow-900 bg-opacity-30 rounded-full flex items-center justify-center">$</div>}
          />
        </div>

        <SearchBar />
        <TransactionList transactions={transactions} />
      </div>
    </div>
  );
};

export default App;