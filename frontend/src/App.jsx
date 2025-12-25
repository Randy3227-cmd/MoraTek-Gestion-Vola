import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import SummaryCard from './components/SummaryCard';
import SearchBar from './components/SearchBar';
import TransactionList from './components/TransactionList';
import TransactionRow from './components/TransactionRow';
import Pagination from './components/Pagination';
import { Plus, Search } from 'lucide-react';

const TableauDeBordFinancier = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [transactions, setTransactions] = useState([]);
  const [summary, setSummary] = useState({
    income: 0,
    expense: 0,
    total: 0
  });

  // Simulation de données
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const mockData = [
      { id: 1, description: 'Développement de site', amount: 'R$ 12.000,00', category: 'Vente', date: '13/04/2022', type: 'income' },
      { id: 2, description: 'Hamburger', amount: 'R$ 59,00', category: 'Alimentation', date: '10/04/2022', type: 'expense' },
      { id: 3, description: "Loyer de l'appartement", amount: 'R$ 1.200,00', category: 'Maison', date: '27/03/2022', type: 'expense' },
      { id: 4, description: 'Ordinateur', amount: 'R$ 5.400,00', category: 'Vente', date: '15/03/2022', type: 'income' },
      { id: 5, description: 'Développement de site', amount: 'R$ 8.000,00', category: 'Vente', date: '13/03/2022', type: 'income' },
      { id: 6, description: 'Dîner', amount: 'R$ 59,00', category: 'Alimentation', date: '10/03/2022', type: 'expense' },
      { id: 7, description: "Loyer de l'appartement", amount: 'R$ 1.200,00', category: 'Maison', date: '27/02/2022', type: 'expense' },
      { id: 8, description: 'Salaire', amount: 'R$ 5.400,00', category: 'Salaire', date: '15/02/2022', type: 'income' },
      { id: 9, description: 'Déjeuner', amount: 'R$ 59,00', category: 'Alimentation', date: '05/02/2022', type: 'expense' },
      { id: 10, description: 'Source de revenus', amount: 'R$ 150,00', category: 'Revenu', date: '02/02/2022', type: 'income' },
    ];

    setTransactions(mockData);

    // Calcul du résumé
    const income = mockData
      .filter(t => t.type === 'income')
      .reduce((sum, t) => sum + parseFloat(t.amount.replace('R$ ', '').replace('.', '').replace(',', '.')), 0);
    
    const expense = mockData
      .filter(t => t.type === 'expense')
      .reduce((sum, t) => sum + parseFloat(t.amount.replace('R$ ', '').replace('.', '').replace(',', '.')), 0);

    setSummary({
      income: income.toLocaleString('fr-FR', { style: 'currency', currency: 'BRL' }),
      expense: expense.toLocaleString('fr-FR', { style: 'currency', currency: 'BRL' }),
      total: (income - expense).toLocaleString('fr-FR', { style: 'currency', currency: 'BRL' })
    });
  };

  const filteredTransactions = transactions.filter(t =>
    t.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <div className="max-w-7xl mx-auto">
        <Header />

        {/* Cartes de résumé */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <SummaryCard
            title="Entrées"
            amount={summary.income}
            type="income"
            icon={<div className="w-8 h-8 bg-green-500 bg-opacity-20 rounded-full flex items-center justify-center">↑</div>}
          />
          <SummaryCard
            title="Sorties"
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

        {/* Barre de recherche */}
        <SearchBar
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
        />

        {/* Liste des transactions */}
        <TransactionList
          transactions={filteredTransactions}
          currentPage={currentPage}
          totalPages={3}
          onPageChange={setCurrentPage}
        />
      </div>
    </div>
  );
};

export default TableauDeBordFinancier;
