import React, { useState } from "react";
import { Link } from "react-router-dom";
import { assets } from "../assets/assets.js";

const VerifyEmail = () => {
  const [otp, setOtp] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // backend verify OTP API call
    console.log("OTP:", otp);
  };

  return (
     <>
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
        <h2 className="text-2xl font-bold text-center text-orange-500 mb-2">
          Verify Your Email
        </h2>

        <p className="text-sm text-center text-gray-500 mb-6">
          We have sent a verification code to your email address
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* OTP Input */}
          <div>
            <label className="block text-sm font-medium">
              Enter OTP Code
            </label>
            <input
              type="text"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              maxLength={6}
              required
              placeholder="123456"
              className="w-full text-center tracking-widest text-xl border px-3 py-2 mt-1 outline-none"
            />
          </div>

          {/* Verify Button */}
          <button
            type="submit"
            className="w-full bg-orange-500 text-white py-2 rounded-md text-lg font-semibold hover:bg-orange-600 transition"
          >
            Verify Email
          </button>
        </form>

        {/* Resend OTP */}
        <div className="text-center mt-4 text-sm">
          Didn’t receive the code?{" "}
          <span className="text-blue-600 cursor-pointer hover:underline">
            Resend OTP
          </span>
        </div>

        {/* Back to login */}
        <p className="text-center text-sm mt-4">
          Already verified?{" "}
          <Link to="/signin" className="text-blue-600 hover:underline">
            Login
          </Link>
        </p>
      </div>
    </div>
    </div>
    </>
  );
};

export default VerifyEmail;
