import { useState, useEffect } from 'react';
import Header from '../components/Header';
import SummaryCard from '../components/SummaryCard';
import SearchBar from '../components/SearchBar';
import TransactionList from '../components/TransactionList';

const DashboardHome = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [transactions, setTransactions] = useState([]);
  const [summary, setSummary] = useState({
    income: 0,
    expense: 0,
    total: 0
  });

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const mockData = [
      { id: 1, description: 'Développement de site', amount: ' 12.000,00', category: 'Vente', date: '13/04/2022', type: 'income', status: 2 },
      { id: 2, description: 'Hamburger', amount: '59,00', category: 'Alimentation', date: '10/04/2022', type: 'expense', status: 1 },
      { id: 3, description: "Loyer de l'appartement", amount: ' 1.200,00', category: 'Maison', date: '27/03/2022', type: 'expense', status: 3 },
      { id: 4, description: 'Ordinateur', amount: ' 5.400,00', category: 'Vente', date: '15/03/2022', type: 'income', status: 2 },
      { id: 5, description: 'Développement de site', amount: ' 8.000,00', category: 'Vente', date: '13/03/2022', type: 'income', status: 2 },
      { id: 6, description: 'Dîner', amount: ' 59,00', category: 'Alimentation', date: '10/03/2022', type: 'expense', status: 1 },
      { id: 7, description: "Loyer de l'appartement", amount: ' 1.200,00', category: 'Maison', date: '27/02/2022', type: 'expense', status: 3 },
      { id: 8, description: 'Salaire', amount: ' 5.400,00', category: 'Salaire', date: '15/02/2022', type: 'income', status: 2 },
      { id: 9, description: 'Déjeuner', amount: ' 59,00', category: 'Alimentation', date: '05/02/2022', type: 'expense', status: 1 },
      { id: 10, description: 'Source de revenus', amount: ' 150,00', category: 'Revenu', date: '02/02/2022', type: 'income', status: 2 },
    ];

    setTransactions(mockData);

    const income = mockData
      .filter(t => t.type === 'income')
      .reduce((sum, t) => sum + parseFloat(t.amount.replace('.', '').replace(',', '.')), 0);

    const expense = mockData
      .filter(t => t.type === 'expense')
      .reduce((sum, t) => sum + parseFloat(t.amount.replace('.', '').replace(',', '.')), 0);

    setSummary({
      income: income + ' Ar',
      expense: expense + ' Ar',
      total: (income - expense) + ' Ar'
    });
  };

  const filteredTransactions = transactions.filter(t =>
    t.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="max-w-7xl mx-auto">
      <Header />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <SummaryCard
            title="Entrées"
            amount={summary.income}
            type="income"
            icon={<div className="w-8 h-8 bg-green-500/20 rounded-full flex items-center justify-center">↑</div>}
          />
          <SummaryCard
            title="Sorties"
            amount={summary.expense}
            type="expense"
            icon={<div className="w-8 h-8 bg-red-500/20 rounded-full flex items-center justify-center">↓</div>}
          />
          <SummaryCard
            title="Total"
            amount={summary.total}
            type="total"
            icon={<div className="w-8 h-8 bg-yellow-900/30 rounded-full flex items-center justify-center">Ar</div>}
          />
        </div>

      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

      <TransactionList
        transactions={filteredTransactions}
        currentPage={currentPage}
        totalPages={1}
        onPageChange={setCurrentPage}
      />
    </div>
  );
};

export default DashboardHome;
