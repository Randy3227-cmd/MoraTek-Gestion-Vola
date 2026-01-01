import { Outlet } from 'react-router-dom';
import Sidebar from './components/Sidebar';

const DashboardLayout = () => {
  return (
    <div className="flex min-h-screen bg-gray-900 text-white">
      <Sidebar />

      <main className="flex-1 p-6 overflow-x-hidden">
        <Outlet /> 
      </main>
    </div>
  );
};

export default DashboardLayout;
