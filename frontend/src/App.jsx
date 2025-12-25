import Header from "./components/Header";
import Dashboard from "./components/Dashboard";
import TransactionsTable from "./components/TransactionTable";
import Pagination  from "./components/Pagination";

function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Header />
      <main className="p-6">
        <Dashboard />
        <TransactionsTable />
      </main>
      <Pagination />
    </div>
  );
}

export default App;
