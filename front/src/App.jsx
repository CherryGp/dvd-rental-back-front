import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { InventoryPage } from './pages/InventoryPage';
import { InventoryFormPage } from './pages/InventoryFormPage'
import {Navigation} from "./components/Navigation"

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path="/" element={<Navigate to="/dvdrental/inventory/" />} />
        <Route path="/dvdrental/inventory/" element={<InventoryPage/>} />
        <Route path="/dvdrental/inventory-create/" element={<InventoryFormPage/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;



// <Route path="dvdrental/inventory-create" element={<InventoryFormPage />} />
// <Route path="dvdrental/Top-customers" element={<TopCustomersPage />} />
// <Route path="dvdrental/Top-films" element={<TopFilmsPage />} />

// import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
// import { InventoryPage } from './pages/InventoryPage';
// import { InventoryFormPage } from './pages/InventoryFormPage';
// import { TopCustomersPage } from './pages/TopCustomersPage';
// import { TopFilmsPage } from './pages/TopFilmsPage';

// import { Navigation } from "./components/Navigation";

// function App() {
//   return (
//     <BrowserRouter>
//       <Navigation />
//       <Routes>
//         <Route path="/" element={<Navigate to="/inventory" />} />
//         <Route path="/inventory" element={<InventoryPage />} />
//         <Route path="/inventory-create" element={<InventoryFormPage />} />
//         <Route path="/Top-customers" element={<TopCustomersPage />} />
//         <Route path="/Top-films" element={<TopFilmsPage />} />
//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;