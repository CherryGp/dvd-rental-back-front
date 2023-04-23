import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { InventoryPage } from './pages/InventoryPage';
import { InventoryFormPage } from './pages/InventoryFormPage'
import {Navigation} from "./components/Navigation"
import { TopCustomersPage } from './pages/TopCustomersPage';
import { TopFilmsPage } from './pages/TopFilmsPage';
import {Toaster} from 'react-hot-toast';
import './App.css';

function App() {
  return (
    <BrowserRouter>
    <div className="container mx-auto">
      <Navigation />
      <Routes>
        <Route path="/" element={<Navigate to="/dvdrental/inventory/" />} />
        <Route path="/dvdrental/inventory/" element={<InventoryPage/>} />
        <Route path="/dvdrental/inventory/create" element={<InventoryFormPage/>} />
        <Route path="/dvdrental/inventory/:id" element={<InventoryFormPage/>} />       
        <Route path="/dvdrental/topcustomers/" element={<TopCustomersPage/>} />
        <Route path="/dvdrental/topfilms/" element={<TopFilmsPage />} />
      </Routes>
      <Toaster/>
    </div>
    </BrowserRouter>
  );
}

export default App;
