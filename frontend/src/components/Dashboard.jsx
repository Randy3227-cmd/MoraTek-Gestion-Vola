function Dashboard() {
    return (
      <section className="grid grid-cols-3 gap-4 my-6">
        <div className="bg-gray-800 p-4 rounded-xl shadow">
          <h2 className="text-gray-400">Entradas</h2>
          <p className="text-2xl font-bold text-green-400">R$ 17.400,00</p>
        </div>
        <div className="bg-gray-800 p-4 rounded-xl shadow">
          <h2 className="text-gray-400">Saídas</h2>
          <p className="text-2xl font-bold text-red-400">R$ 1.259,00</p>
        </div>
        <div className="bg-yellow-500 p-4 rounded-xl shadow text-black">
          <h2>Total</h2>
          <p className="text-2xl font-bold">R$ 16.141,00</p>
        </div>
      </section>
    );
  }
  
  export default Dashboard;
  