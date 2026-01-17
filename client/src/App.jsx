import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";

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

import Header from "./components/Header.jsx";
import UserHeader from "./components/UserHeader.jsx";
import AdminHeader from "./components/AdminHeader.jsx";

const App = () => {
  const location = useLocation();

  // 🔑 Simple header control (later JWT walin improve karanna puluwan)
  const role = localStorage.getItem("role");

  const renderHeader = () => {
    if (role === "admin") return <AdminHeader />;
    if (role === "user") return <UserHeader />;
    return <Header />;
  };

  return (
    <div>
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

        {/* User */}
        <Route path="/user-home" element={<UserHome />} />

        {/* Admin */}
        <Route path="/admin-home" element={<AdminHome />} />
      </Routes>
    </div>
  );
};

export default App;
