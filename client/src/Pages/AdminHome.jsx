import React from "react";
import {
  Users,
  ShoppingCart,
  DollarSign,
  Package,
} from "lucide-react";

const AdminHome = () => {
  return (
    <div className="flex min-h-screen bg-gray-100">
      
      {/* Sidebar */}
      <aside className="w-64 bg-blue-900 text-white">
        <div className="p-6 text-2xl font-bold border-b border-blue-700">
          Admin Panel
        </div>

        <nav className="p-4 space-y-3">
          <a href="#" className="block px-4 py-2 rounded hover:bg-blue-700">
            Dashboard
          </a>
          <a href="/admin/users" className="block px-4 py-2 rounded hover:bg-blue-700">
            Users
          </a>
          <a href="/admin/clothing-product" className="block px-4 py-2 rounded hover:bg-blue-700">
            Products
          </a>
          <a href="#" className="block px-4 py-2 rounded hover:bg-blue-700">
            Orders
          </a>
          <a href="#" className="block px-4 py-2 rounded hover:bg-blue-700">
            Settings
          </a>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6">
        
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold text-gray-800">
            Admin Dashboard
          </h1>
          <div className="text-gray-600">Welcome, Admin</div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          
          <div className="bg-white p-5 rounded-xl shadow flex items-center gap-4">
            <Users className="text-blue-600" size={32} />
            <div>
              <p className="text-gray-500 text-sm">Total Users</p>
              <h2 className="text-2xl font-bold"></h2>
            </div>
          </div>

          <div className="bg-white p-5 rounded-xl shadow flex items-center gap-4">
            <Package className="text-green-600" size={32} />
            <div>
              <p className="text-gray-500 text-sm">Products</p>
              <h2 className="text-2xl font-bold"></h2>
            </div>
          </div>

          <div className="bg-white p-5 rounded-xl shadow flex items-center gap-4">
            <ShoppingCart className="text-purple-600" size={32} />
            <div>
              <p className="text-gray-500 text-sm">Orders</p>
              <h2 className="text-2xl font-bold"></h2>
            </div>
          </div>

          <div className="bg-white p-5 rounded-xl shadow flex items-center gap-4">
            <DollarSign className="text-orange-600" size={32} />
            <div>
              <p className="text-gray-500 text-sm">Revenue</p>
              <h2 className="text-2xl font-bold"></h2>
            </div>
          </div>

        </div>

        {/* Recent Section */}
        <div className="mt-8 bg-white p-6 rounded-xl shadow">
          <h2 className="text-xl font-semibold mb-4">
            Recent Activity
          </h2>
          <ul className="space-y-3 text-gray-600">
            <li> New user registered</li>
            <li>Order  placed</li>
            <li> Product updated</li>
            <li> Payment received</li>
          </ul>
        </div>

      </main>
    </div>
  );
};

export default AdminHome;
