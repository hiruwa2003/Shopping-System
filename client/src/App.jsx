import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home.jsx";
import Product from "./Pages/Product.jsx";
import Contact from "./Pages/Contact.jsx";
import About from "./Pages/About.jsx";
import Signup from "./Pages/SignUp.jsx";
import Signin from "./Pages/Signin.jsx";
import VerifyEmail from "./Pages/EmailVerify.jsx";
import ForgotPassword from "./Pages/ForgotPassword.jsx";
import ResetPassword from "./Pages/ResetPassword.jsx";
import Header from "./components/Header.jsx";


const App = () => {
  return (
    <div>
       <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<Product />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/verify-email" element={<VerifyEmail />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password" element={<ResetPassword />} />
      </Routes>
    </div>
  );
};

export default App;
