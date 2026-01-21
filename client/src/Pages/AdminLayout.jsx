// AdminLayout.jsx
import React from "react";
import AdminClothingProduct from "./AdminClothingProduct";
import { Outlet } from "react-router-dom";

const AdminLayout = () => {
  return (
    <div className="flex min-h-screen">
      {/* LEFT SIDEBAR */}
      <AdminClothingProduct />

      {/* RIGHT CONTENT */}
      <div className="flex-1 p-6 bg-gray-50">
        <Outlet />
      </div>
    </div>
  );
};

export default AdminLayout;
