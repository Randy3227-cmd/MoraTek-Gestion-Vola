import { Link, useLocation } from 'react-router-dom';
import {
  LayoutDashboard,
  Repeat,
  Wallet,
  ArrowUpCircle,
  ArrowDownCircle,
  CreditCard,
  BarChart3,
  User,
  Settings,
  LogOut
} from 'lucide-react';

const SidebarItem = ({ to, icon, label }) => {
  const location = useLocation();
  const active = location.pathname === to;

  return (
    <Link
      to={to}
      className={`flex items-center gap-3 px-4 py-2 rounded-lg transition
        ${active
          ? 'bg-green-600 text-white'
          : 'text-gray-300 hover:bg-gray-800'}
      `}
    >
      {icon}
      <span>{label}</span>
    </Link>
  );
};

const Sidebar = () => {
  return (
    <aside className="w-64 bg-gray-950 p-6 flex flex-col">
    <div className="flex flex-col items-center mb-10">
        <img
          src="/profile.jpg"   // mets ta photo ici
          alt="Profil"
          className="w-20 h-20 rounded-full border-2 border-green-500 object-cover mb-3"
        />
        <h2 className="text-lg font-semibold">Robinson Randy</h2>
        <p className="text-sm text-gray-400">Gestion financière</p>
      </div>

      <nav className="space-y-2">
        <SidebarItem to="/" icon={<LayoutDashboard size={18} />} label="Dashboard" />
        <SidebarItem to="/portefeuille" icon={<Wallet size={18} />} label="Portefeuille" />
        <SidebarItem to="/revenus" icon={<ArrowUpCircle size={18} />} label="Revenus" />
        <SidebarItem to="/depenses" icon={<ArrowDownCircle size={18} />} label="Dépenses" />
        <SidebarItem to="/transactions" icon={<Repeat size={18} />} label="Transactions" />
        <SidebarItem icon={<CreditCard size={18} />} label="Cartes & Comptes" />
        <SidebarItem icon={<BarChart3 size={18} />} label="Rapports" />
      <div className="border-t border-gray-800 pt-4 space-y-2">
        <SidebarItem icon={<User size={18} />} label="Profil" />
        <SidebarItem icon={<Settings size={18} />} label="Paramètres" />
        <SidebarItem
          icon={<LogOut size={18} />}
          label="Déconnexion"
          danger
        />
      </div>
      </nav>
    </aside>
  );
};

export default Sidebar;