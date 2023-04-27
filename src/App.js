import { Route, Routes } from "react-router";
// import Director from "./Pages/Director/Director";
import Home from "./Pages/Director/Home/Home";
import Receipts from "./Pages/Director/Receipts/Receipts";
import Expenses from "./Pages/Director/Expenses/Expenses";
import Employees from "./Pages/Director/Employees/Employees";
import Shops from "./Pages/Director/Shops/Shops";
import Warehouse from "./Pages/Director/Warehouses/Warehouse";
import Products from "./Pages/Director/Products/Products";
import Orders from "./Pages/Director/Orders/Orders";
import CashRegister from "./Pages/Director/CashRegister/CashRegister";
import Clients from "./Pages/Director/Clients/Clients";
import Sidebar from "./Components/Sidebar/Sidebar";
import Navbar from "./Components/Navbar/Navbar";

function App() {
  return (
    <div className="flex items-start bg-sidebar w-screen">
      {/* <Director /> */}
      <Sidebar />
      <div className="flex flex-col w-full px-10">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/receipts" element={<Receipts />} />
          <Route path="/expenses" element={<Expenses />} />
          <Route path="/employees" element={<Employees />} />
          <Route path="/shops" element={<Shops />} />
          <Route path="/warehouse" element={<Warehouse />} />
          <Route path="/products" element={<Products />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/cashregister" element={<CashRegister />} />
          <Route path="/clients" element={<Clients />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
