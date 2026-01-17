import React, { useState } from "react";
import { assets } from "../assets/assets.js";
import { Link } from "react-router-dom";

const SignUp = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};

    // First Name Validation
    if (!formData.firstName.trim()) {
      newErrors.firstName = "First Name is required";
    } else if (!/^[A-Za-z]{2,}$/.test(formData.firstName.trim())) {
      newErrors.firstName = "First Name must be at least 2 letters and only letters";
    }

    // Last Name Validation
    if (!formData.lastName.trim()) {
      newErrors.lastName = "Last Name is required";
    } else if (!/^[A-Za-z]{2,}$/.test(formData.lastName.trim())) {
      newErrors.lastName = "Last Name must be at least 2 letters and only letters";
    }

    // Email Validation
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = "Invalid email format";
    }

    // Password Validation
    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (
      !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{6,}$/.test(formData.password)
    ) {
      newErrors.password =
        "Password must be at least 6 characters, include 1 uppercase, 1 lowercase, and 1 number";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

    // Clear error as user types
    setErrors((prev) => ({ ...prev, [e.target.name]: "" }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validate()) return; // stop submission if validation fails

    try {
      const res = await fetch("/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok) {
        alert("Registration successful!");
        window.location.href = `/verify-email?email=${formData.email}`;
      } else {
        alert(data.message || "Registration failed!");
      }
    } catch (err) {
      console.error(err);
      alert("Something went wrong!");
    }
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

      {/* RIGHT FORM SECTION */}
      <div className="w-full md:w-1/2 flex items-center justify-center bg-white">
        <div className="w-full max-w-md border rounded-xl p-8 shadow-sm">
          <h2 className="text-3xl font-bold text-orange-500 mb-6 text-center">
            Create New Account
          </h2>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium">First Name</label>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                required
                className="w-full border px-3 py-2 mt-1 outline-none"
              />
              {errors.firstName && (
                <p className="text-red-500 text-sm mt-1">{errors.firstName}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium">Last Name</label>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                required
                className="w-full border px-3 py-2 mt-1 outline-none"
              />
              {errors.lastName && (
                <p className="text-red-500 text-sm mt-1">{errors.lastName}</p>
              )}
            </div>

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
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">{errors.email}</p>
              )}
            </div>

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
              {errors.password && (
                <p className="text-red-500 text-sm mt-1">{errors.password}</p>
              )}
            </div>

            <button
              type="submit"
              className="w-full bg-orange-500 text-white py-2 rounded-md text-lg font-semibold hover:bg-orange-600 transition"
            >
              Register
            </button>
          </form>

          <p className="text-center text-sm mt-4">
            Already Registered?{" "}
            <Link to="/signin" className="text-blue-600 hover:underline">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
