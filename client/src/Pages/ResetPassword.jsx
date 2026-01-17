import React, { useState } from "react";
import { useLocation, Link } from "react-router-dom";
import { assets } from "../assets/assets.js";

const ResetPassword = () => {
  const location = useLocation();
  const email = location.state?.email;

  const [formData, setFormData] = useState({
    otp: "",
    newPassword: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.newPassword !== formData.confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    // backend -> verify resetOtp + update password
    console.log("Reset Data:", {
      email,
      ...formData,
    });
  };

  return (
     <div className="min-h-screen flex">
         {/* LEFT IMAGE SECTION */}
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
          Reset Password
        </h2>

        <p className="text-sm text-center text-gray-500 mb-6">
          Enter the OTP sent to <span className="font-medium">{email}</span>
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* OTP */}
          <div>
            <label className="block text-sm font-medium">OTP Code</label>
            <input
              type="text"
              name="otp"
              value={formData.otp}
              onChange={handleChange}
              maxLength={6}
              required
              className="w-full text-center tracking-widest text-xl border px-3 py-2 mt-1 outline-none"
            />
          </div>

          {/* New Password */}
          <div>
            <label className="block text-sm font-medium">New Password</label>
            <input
              type="password"
              name="newPassword"
              value={formData.newPassword}
              onChange={handleChange}
              required
              className="w-full border px-3 py-2 mt-1 outline-none"
            />
          </div>

          {/* Confirm Password */}
          <div>
            <label className="block text-sm font-medium">
              Confirm Password
            </label>
            <input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
              className="w-full border px-3 py-2 mt-1 outline-none"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-orange-500 text-white py-2 rounded-md text-lg font-semibold hover:bg-orange-600 transition"
          >
            Reset Password
          </button>
        </form>

        <p className="text-center text-sm mt-4">
          Back to{" "}
          <Link to="/signin" className="text-blue-600 hover:underline">
            Login
          </Link>
        </p>
      </div>
    </div>
    </div>
  );
};

export default ResetPassword;
