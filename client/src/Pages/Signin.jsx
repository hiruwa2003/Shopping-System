import React, { useState } from "react";
import { assets } from "../assets/assets.js";
import { Link } from "react-router-dom";

const Signin = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Add your form submission logic here
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-orange-50">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-orange-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-purple-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>

      <div className="min-h-screen flex items-center justify-center p-4">
        <div className="flex flex-col md:flex-row w-full max-w-6xl bg-white/80 backdrop-blur-lg rounded-3xl overflow-hidden shadow-2xl transform transition-all duration-500 hover:shadow-3xl">
          
          {/* LEFT SECTION - 3D Perspective Container */}
          <div className="md:w-1/2 bg-gradient-to-br from-blue-600 to-purple-600 p-8 md:p-12 relative overflow-hidden transform transition-transform duration-500 hover:scale-[1.02]">
            {/* Floating 3D Elements */}
            <div className="absolute -top-20 -left-20 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
            
            {/* Animated Rings */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <div className="w-96 h-96 border-4 border-white/20 rounded-full animate-pulse"></div>
              <div className="w-80 h-80 border-4 border-white/30 rounded-full animate-pulse animation-delay-1000"></div>
            </div>

            <div className="relative z-10 text-white text-center h-full flex flex-col justify-center items-center">
              <div className="mb-8 transform transition-transform duration-500 hover:scale-105">
                <h1 className="text-5xl font-bold mb-4 tracking-tight leading-tight">
                  WELCOME BACK TO
                </h1>
                <h2 className="text-4xl font-semibold mb-4 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
                  YOUR SHOPPING
                </h2>
                <h3 className="text-5xl font-bold animate-pulse">
                  EXPERIENCE
                </h3>
              </div>

              {/* 3D Image Container */}
              <div 
                className="relative transform transition-all duration-700 hover:scale-110 hover:rotate-3"
                style={{
                  perspective: "1000px",
                  transformStyle: "preserve-3d"
                }}
              >
                <div 
                  className="relative w-72 h-72"
                  style={{
                    transform: isHovered ? "rotateY(15deg) rotateX(10deg)" : "rotateY(0deg)",
                    transition: "transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)"
                  }}
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-2xl blur-md"></div>
                  <img
                    src={assets.cover}
                    alt="Shopping"
                    className="w-full h-full object-contain relative z-10 rounded-2xl shadow-2xl"
                    style={{
                      transform: "translateZ(40px)",
                      boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5)"
                    }}
                  />
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute bottom-4 left-4 animate-bounce">
                <div className="w-4 h-4 bg-white/30 rounded-full"></div>
              </div>
              <div className="absolute top-4 right-4 animate-bounce animation-delay-1000">
                <div className="w-3 h-3 bg-white/30 rounded-full"></div>
              </div>
            </div>
          </div>

          {/* RIGHT SECTION - 3D Form */}
          <div className="md:w-1/2 p-8 md:p-12 flex items-center justify-center">
            <div 
              className="w-full max-w-md transform transition-all duration-700"
              style={{
                perspective: "1200px",
                transformStyle: "preserve-3d"
              }}
            >
              <div 
                className="bg-white/90 backdrop-blur-sm p-8 rounded-3xl shadow-2xl border border-white/20"
                style={{
                  transform: "translateZ(20px)",
                  boxShadow: "0 20px 60px rgba(0, 0, 0, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.5)"
                }}
              >
                {/* Title with 3D Effect */}
                <div className="text-center mb-8">
                  <h2 className="text-3xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent mb-2">
                    Welcome Back!
                  </h2>
                  <p className="text-gray-600">Sign in to continue shopping</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="relative">
                    <input
                      type="email"
                      placeholder=" "
                      id="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="peer w-full px-4 py-3 bg-white/50 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all duration-300 hover:border-orange-400"
                      required
                    />
                    <label 
                      htmlFor="email"
                      className="absolute left-4 top-3 text-gray-500 transition-all duration-300 peer-focus:text-orange-600 peer-focus:-top-2 peer-focus:text-sm peer-[&:not(:placeholder-shown)]:-top-2 peer-[&:not(:placeholder-shown)]:text-sm bg-white px-1"
                    >
                      Email Address
                    </label>
                  </div>

                  <div className="relative">
                    <input
                      type="password"
                      placeholder=" "
                      id="password"
                      value={formData.password}
                      onChange={handleChange}
                      className="peer w-full px-4 py-3 bg-white/50 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all duration-300 hover:border-orange-400"
                      required
                    />
                    <label 
                      htmlFor="password"
                      className="absolute left-4 top-3 text-gray-500 transition-all duration-300 peer-focus:text-orange-600 peer-focus:-top-2 peer-focus:text-sm peer-[&:not(:placeholder-shown)]:-top-2 peer-[&:not(:placeholder-shown)]:text-sm bg-white px-1"
                    >
                      Password
                    </label>
                  </div>

                  {/* Remember Me & Forgot Password */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <input
                        id="remember-me"
                        type="checkbox"
                        className="h-4 w-4 text-orange-600 focus:ring-orange-500 border-gray-300 rounded"
                      />
                      <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-700">
                        Remember me
                      </label>
                    </div>
                    <Link
                      to="/forgot-password"
                      className="text-sm text-orange-600 hover:text-orange-500 font-medium transition-colors duration-300"
                    >
                      Forgot password?
                    </Link>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 bg-gradient-to-r from-orange-600 to-red-600 text-white font-semibold rounded-xl hover:from-orange-700 hover:to-red-700 transition-all duration-300 transform hover:-translate-y-1 active:translate-y-0 shadow-lg hover:shadow-2xl relative overflow-hidden group"
                  >
                    <span className="relative z-10">Sign In</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-orange-700 to-red-700 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                  </button>

                 
                
                 
                </form>

                <div className="mt-8 text-center">
                  <p className="text-gray-600">
                    Don't have an account?{" "}
                    <Link
                      to="/signup"
                      className="text-orange-600 font-semibold hover:text-orange-700 transition-colors duration-300 relative group"
                    >
                      Sign Up
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-orange-600 group-hover:w-full transition-all duration-300"></span>
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signin;