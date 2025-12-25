import TransactionRow from "./TransactionRow";

function TransactionsTable() {
  return (
    <section className="bg-gray-800 rounded-xl p-4 shadow">
      <div className="flex justify-between mb-4">
        <input
          type="text"
          placeholder="Rechercher une transaction"
          className="bg-gray-700 p-2 rounded w-1/2"
        />
        <button className="bg-teal-500 px-4 py-2 rounded">Buscar</button>
      </div>

      <table className="w-full text-left">
        <thead>
          <tr className="text-gray-400 border-b border-gray-700">
            <th>Description</th>
            <th>Valeur</th>
            <th>Catégorie</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {/* Exemple statique */}
          <TransactionRow
            description="Développement de site"
            amount="+ R$ 12.000,00"
            amountColor="text-green-400"
            category="Venda"
            date="13/04/2022"
          />
          <TransactionRow
            description="Hamburger"
            amount="- R$ 59,00"
            amountColor="text-red-400"
            category="Alimentation"
            date="10/04/2022"
          />
        </tbody>
      </table>
      
    </section>
  );
}

export default TransactionsTable;
