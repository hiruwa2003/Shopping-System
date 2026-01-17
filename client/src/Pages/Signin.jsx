import React, { useState } from "react";
import { assets } from "../assets/assets.js";
import {Link} from 'react-router-dom';

const Signin = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
   
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="min-h-screen flex">
      {/* LEFT IMAGE SECTION */}
      <div className="hidden md:flex w-1/2 bg-orange-500 items-center justify-center relative">
        <div className="text-white text-center px-10">
          <h1 className="text-4xl font-bold mb-4">
            GET ALL YOUR BUYING
          </h1>
          <h2 className="text-3xl font-semibold mb-4">
            Problems solved
          </h2>
          <h3 className="text-4xl font-bold">TODAY</h3>
        </div>

        <img
          src={assets.cover_1}
          alt="Shopping"
          className="absolute bottom-10 w-80"
        />
      </div>

      {/* RIGHT FORM SECTION */}
      <div className="w-full md:w-1/2 flex items-center justify-center bg-white">
        <div className="w-full max-w-md border rounded-xl p-8 shadow-sm">
          <h2 className="text-3xl font-bold text-orange-500 mb-6 text-center">
            Welcome Back
          </h2>

          <form onSubmit={handleSubmit} className="space-y-4">

            {/* Email */}
            <div>
              <label className="block text-sm font-medium">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full border px-3 py-2 mt-1 outline-none"
              />
            </div>

            {/* Password */}
            <div>
              <label className="block text-sm font-medium">Password</label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
                className="w-full border px-3 py-2 mt-1 outline-none"
              />
            </div>

           <div className="flex items-center justify-between text-sm">
  <label className="flex items-center gap-2 cursor-pointer">
    <input type="checkbox" className="accent-blue-600" />
    Remember Me
  </label>

  <span className="text-blue-600 cursor-pointer hover:underline">
   <Link to="/forgot-password">Forgot Password?</Link>
  </span>
</div>

            {/* Button */}
            <button
              type="submit"
              className="w-full bg-orange-500 text-white py-2 rounded-md text-lg font-semibold hover:bg-orange-600 transition cursor-pointer"
            >
              Login
            </button>
          </form>

          <p className="text-center text-sm mt-4">
            Don't have an account?{" "}
            <span className="text-blue-600 cursor-pointer hover:underline">
              <Link to="/signup">
              Sign up
              </Link>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signin;
