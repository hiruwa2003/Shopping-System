import React, { useState, useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { assets } from "../assets/assets.js";

const EmailVerify = () => {
  const [otp, setOtp] = useState("");
  const [email, setEmail] = useState("");
  const [otpSent, setOtpSent] = useState(false); // Track if OTP has been sent
  const [searchParams] = useSearchParams();

  // Auto-send OTP when the page loads
  useEffect(() => {
    const emailParam = searchParams.get("email");
    if (emailParam) {
      setEmail(emailParam);

      if (!otpSent) {
        sendOtp(emailParam);
      }
    }
  }, [searchParams, otpSent]);

  // Function to send OTP
  const sendOtp = async (email) => {
    try {
      const res = await fetch("/api/auth/send-verify-otp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const data = await res.json();
      if (res.ok) {
        console.log("OTP sent to:", email);
        setOtpSent(true); // Mark OTP as sent
      } else {
        alert(data.message || "Failed to send OTP");
      }
    } catch (err) {
      console.error(err);
      alert("Error sending OTP");
    }
  };

  // Function to verify OTP
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("/api/auth/verify-account", { // OTP verification endpoint
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, otp }),
      });
      const data = await res.json();

      if (res.ok) {
        alert("Email verified successfully!");
        window.location.href = "/signin";
      } else {
        alert(data.message || "Invalid OTP");
      }
    } catch (err) {
      console.error(err);
      alert("Something went wrong!");
    }
  };

  return (
    <div className="min-h-screen flex">
      {/* LEFT IMAGE */}
      <div className="hidden md:flex w-1/2 bg-orange-500 items-center justify-center relative">
        <div className="text-white text-center px-10">
          <h1 className="text-4xl font-bold mb-4">GET ALL YOUR BUYING</h1>
          <h2 className="text-3xl font-semibold mb-4">Problems solved</h2>
          <h3 className="text-4xl font-bold">TODAY</h3>
        </div>
        <img src={assets.cover_1} alt="Shopping" className="absolute bottom-10 w-80" />
      </div>

      {/* RIGHT FORM */}
      <div className="w-full md:w-1/2 flex items-center justify-center bg-white">
        <div className="w-full max-w-md bg-white border rounded-xl p-8 shadow-sm">
          <h2 className="text-2xl font-bold text-center text-orange-500 mb-2">
            Verify Your Email
          </h2>

          <p className="text-sm text-center text-gray-500 mb-6">
            We have sent a verification code to <strong>{email}</strong>
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium">Enter OTP Code</label>
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

            <button
              type="submit"
              className="w-full bg-orange-500 text-white py-2 rounded-md text-lg font-semibold hover:bg-orange-600 transition"
            >
              Verify Email
            </button>
          </form>

          <div className="text-center mt-4 text-sm">
            Didn't receive the code?{" "}
            <span
              className="text-blue-600 cursor-pointer hover:underline"
              onClick={() => sendOtp(email)}
            >
              Resend OTP
            </span>
          </div>

          <p className="text-center text-sm mt-4">
            Already verified?{" "}
            <Link to="/signin" className="text-blue-600 hover:underline">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default EmailVerify;
