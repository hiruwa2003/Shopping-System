import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { assets } from "../assets/assets.js";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // backend -> send reset OTP
    console.log("Reset OTP sent to:", email);

    
    navigate("/reset-password", { state: { email } });
  };

  return (
     <div className="min-h-screen flex">
         <div className="hidden md:flex w-1/2 bg-orange-500 items-center justify-center relative">
                <div className="text-white text-center px-10">
                  <h1 className="text-4xl font-bold mb-4">GET ALL YOUR BUYING</h1>
                  <h2 className="text-3xl font-semibold mb-4">Problems solved</h2>
                  <h3 className="text-4xl font-bold">TODAY</h3>
                </div>
        
                <img
                  src={assets.cover_1}
                  alt="Shopping"
                  className="absolute bottom-10 w-80"
                />
              </div>
    <div className="w-full md:w-1/2 flex items-center justify-center bg-white">
      <div className="w-full max-w-md bg-white border rounded-xl p-8 shadow-sm">
        <h2 className="text-2xl font-bold text-center text-orange-500 mb-4">
          Forgot Password
        </h2>

        <p className="text-sm text-center text-gray-500 mb-6">
          Enter your registered email address. We’ll send you an OTP.
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full border px-3 py-2 mt-1 outline-none"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-orange-500 text-white py-2 rounded-md text-lg font-semibold hover:bg-orange-600 transition"
          >
            Send OTP
          </button>
        </form>

        <p className="text-center text-sm mt-4">
          Remember password?{" "}
          <Link to="/signin" className="text-blue-600 hover:underline">
            Login
          </Link>
        </p>
      </div>
    </div>
    </div>
  );
};

export default ForgotPassword;
