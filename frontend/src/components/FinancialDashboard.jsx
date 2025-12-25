
// Composant principal
const FinancialDashboard = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [transactions, setTransactions] = useState([]);
  const [summary, setSummary] = useState({
    income: 0,
    expense: 0,
    total: 0
  });

  // Simulation de données - À remplacer par votre appel API
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    // Remplacez ceci par votre appel API réel
    // const response = await fetch('YOUR_API_ENDPOINT');
    // const data = await response.json();
    
    // Données de démonstration
    const mockData = [
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

    setTransactions(mockData);

    // Calcul du résumé
    const income = mockData
      .filter(t => t.type === 'income')
      .reduce((sum, t) => sum + parseFloat(t.amount.replace('R$ ', '').replace('.', '').replace(',', '.')), 0);
    
    const expense = mockData
      .filter(t => t.type === 'expense')
      .reduce((sum, t) => sum + parseFloat(t.amount.replace('R$ ', '').replace('.', '').replace(',', '.')), 0);

    setSummary({
      income: income.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }),
      expense: expense.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }),
      total: (income - expense).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
    });
  };

  const filteredTransactions = transactions.filter(t =>
    t.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      {/* En-tête */}
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-teal-500 rounded-full flex items-center justify-center">
              <span className="text-white font-bold">M</span>
            </div>
            <div>
              <h1 className="text-xl font-bold">MoraTek</h1>
              <p className="text-gray-400 text-sm">Mora miTantam-bola</p>
            </div>
          </div>
          <button className="bg-yellow-600 hover:bg-yellow-700 text-gray-900 px-4 py-2 rounded-lg font-semibold transition-colors flex items-center gap-2">
            <Plus size={20} />
            Nova transação
          </button>
        </div>

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

        {/* Barre de recherche */}
        <div className="bg-gray-800 rounded-lg p-4 mb-6">
          <div className="flex items-center gap-3">
            <input
              type="text"
              placeholder="Buscar uma transação"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="flex-1 bg-transparent text-white placeholder-gray-500 outline-none"
            />
            <button className="text-yellow-600 hover:text-yellow-500 transition-colors">
              <Search size={20} />
            </button>
          </div>
        </div>

        {/* Liste des transactions */}
        <div className="bg-gray-800 rounded-lg p-6">
          <div className="grid grid-cols-4 gap-4 pb-4 border-b border-gray-700 text-gray-400 text-sm font-semibold">
            <div>Descrição</div>
            <div>Valor</div>
            <div>Categoria</div>
            <div className="text-right">Data</div>
          </div>
          
          {filteredTransactions.map(transaction => (
            <TransactionRow key={transaction.id} {...transaction} />
          ))}

          <Pagination
            currentPage={currentPage}
            totalPages={3}
            onPageChange={setCurrentPage}
          />
        </div>
      </div>
    </div>
  );
};

export default FinancialDashboard;