import { BrowserRouter, Routes, Route } from 'react-router-dom';
import DashboardLayout from './DashboardLayout';
import DashboardHome from './pages/DashboardHome';
import Transactions from './pages/Transactions';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DashboardLayout />}>
          <Route index element={<DashboardHome />} />
          <Route path="/transactions" element={<Transactions />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
