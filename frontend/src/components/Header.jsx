function Header() {
    return (
      <header className="flex justify-between items-center p-4 bg-gray-800">
        <h1 className="text-teal-400 text-xl font-bold"><img
          src="https://via.placeholder.com/40"
          alt=""
          className="w-10 h-10 rounded-full"
        />Mora miTantam-bola</h1>
        <button className="bg-yellow-500 text-black px-4 py-2 rounded-lg">
          Nouvelle transaction
        </button>
        <img
          src="https://via.placeholder.com/40"
          alt="profile"
          className="w-10 h-10 rounded-full"
        />
      </header>
    );
  }
  
  export default Header;
  