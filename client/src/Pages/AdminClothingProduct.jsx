import React from "react";
import { NavLink } from "react-router-dom";
import { FaClipboardList, FaPlusCircle } from "react-icons/fa";

const AdminClothingProduct = () => {
  const baseClass =
    "flex items-center gap-3 rounded-lg border px-6 py-3 mt-4 mx-3 transition";
  const getClass = ({ isActive }) =>
    `${baseClass} ${
      isActive
        ? "border-orange-400 bg-orange-50 text-orange-700"
        : "border-gray-300 text-gray-700 hover:border-gray-400"
    }`;

  return (
    <div className="w-[18%] min-h-screen border-r-2 bg-white">
      <NavLink
        to="/admin/add-product"
        className={getClass}
      >
        <FaPlusCircle className="text-xl" />
        <p className="hidden md:block">Add Items</p>
      </NavLink>

       <NavLink
        to="/admin/list-product"
        className={getClass}
      >
        <FaClipboardList className="text-xl" />
        <p className="hidden md:block">List Items</p>
      </NavLink>

       <NavLink
        to="/admin/orders"
        className={getClass}
      >
        <FaClipboardList className="text-xl" />
        <p className="hidden md:block">Orders</p>
      </NavLink>
    </div>
  );
};

export default AdminClothingProduct;
