import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";

// Pages
import Home from "./Pages/Home.jsx";
import Product from "./Pages/Product.jsx";
import Contact from "./Pages/Contact.jsx";
import About from "./Pages/About.jsx";
import Signup from "./Pages/SignUp.jsx";
import Signin from "./Pages/Signin.jsx";
import VerifyEmail from "./Pages/EmailVerify.jsx";
import ForgotPassword from "./Pages/ForgotPassword.jsx";
import ResetPassword from "./Pages/ResetPassword.jsx";
import UserHome from "./Pages/UserHome.jsx";
import AdminHome from "./Pages/AdminHome.jsx";
import AdminUsers from "./Pages/AdminUsers.jsx";
import Cart from "./Pages/cart.jsx";
import Collection from "./Pages/collection.jsx";
import PlaceOrder from "./Pages/PlaceOrder.jsx";
import Orders from "./Pages/Orders.jsx";

// Components / Headers
import Header from "./components/Header.jsx";
import UserHeader from "./components/UserHeader.jsx";
import AdminHeader from "./components/AdminHeader.jsx";

// ✅ Optional: simple admin route protection
const AdminRoute = ({ children }) => {
  const role = localStorage.getItem("role");
  return role === "admin" ? children : <Signin />;
};

const UserRoute = ({ children }) => {
  const role = localStorage.getItem("role");
  return role === "user" ? children : <Signin />;
};

const App = () => {
  const location = useLocation();
  const role = localStorage.getItem("role");

  // 🔑 Header control
  const renderHeader = () => {
    if (role === "admin") return <AdminHeader />;
    if (role === "user") return <UserHeader />;
    return <Header />;
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {renderHeader()}

      <Routes>
        {/* Public */}
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<Product />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />

        {/* Auth */}
        <Route path="/verify-email" element={<VerifyEmail />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password" element={<ResetPassword />} />

        {/* User Protected */}
        <Route path="/user-home"element={ <UserRoute> <UserHome /> </UserRoute>} />
         <Route path="/cart"element={ <UserRoute> <Cart /> </UserRoute>} />
          <Route path="/collection"element={ <UserRoute> <Collection /> </UserRoute>} />
            <Route path="/placeorder"element={ <UserRoute> <PlaceOrder /> </UserRoute>} />
             <Route path="/order"element={ <UserRoute> <Orders /> </UserRoute>} />
            

        {/* Admin Protected */}
        <Route
          path="/admin-home"
          element={
            <AdminRoute>
              <AdminHome />
            </AdminRoute>
          }
        />
        <Route
          path="/admin/users"
          element={
            <AdminRoute>
              <AdminUsers />
            </AdminRoute>
          }
        />

        {/* Fallback */}
        <Route path="*" element={<div className="p-6 text-xl">Page Not Found</div>} />
      </Routes>
    </div>
  );
};

export default App;
