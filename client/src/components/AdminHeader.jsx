import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaWhatsapp,
  FaUserCircle,
  FaSignOutAlt,
  FaArrowLeft,
} from "react-icons/fa";

const AdminHeader = () => {
  const [showMenu, setShowMenu] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("role");
    navigate("/signin");
  };

  // Close menu when clicking outside
  React.useEffect(() => {
    const handleClickOutside = () => {
      if (showMenu) setShowMenu(false);
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, [showMenu]);

  return (
    <>
      {/* TOP INFO BAR */}
      <div className="w-full bg-slate-950 text-gray-300 text-sm">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-9">
            {/* LEFT - EMAIL & PHONE */}
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2">
                <FaEnvelope className="text-orange-400" />
                <span>hirushadilshan890@gmail.com</span>
              </div>

              <div className="flex items-center gap-2">
                <FaPhoneAlt className="text-orange-400" />
                <span>(+94) 77 695 7704</span>
              </div>
            </div>

            {/* RIGHT - SOCIAL ICONS */}
            <div className="flex items-center gap-4">
              <a href="#" className="hover:text-blue-600 transition">
                <FaFacebookF />
              </a>
              <a href="#" className="hover:text-pink-500 transition">
                <FaInstagram />
              </a>
              <a href="#" className="hover:text-sky-400 transition">
                <FaTwitter />
              </a>
              <a href="#" className="hover:text-green-500 transition">
                <FaWhatsapp />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* MAIN ADMIN NAVBAR */}
      <nav className="w-full bg-slate-900 shadow-md">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-16">
            {/* LOGO */}
            <div className="flex items-center gap-2">
              <img
                src="/logo.png"
                alt="Logo"
                className="w-10 h-10 rounded-full object-fill"
              />
              <span className="text-2xl font-bold text-white">
                Ceylon<span className="text-3xl text-orange-400">Cart</span>
                <span className="ml-2 text-sm text-gray-400">Admin</span>
              </span>
            </div>

            {/* RIGHT SIDE - PROFILE + LOGOUT */}
            <div className="flex items-center gap-6">
              {/* ADMIN DASHBOARD BUTTON */}
              <div className="relative">
                <button
                  onClick={() => {
                    setShowMenu(false); 
                    navigate("/admin-home"); 
                  }}
                  className="flex items-center gap-2 text-white hover:text-orange-400 transition"
                >
                  <FaArrowLeft size={28} />
                  <span className="hidden md:block">Admin Dashboard</span>
                </button>
              </div>

              {/* ADMIN MENU DROPDOWN */}
              <div className="relative">
                <button
                  onClick={() => setShowMenu(!showMenu)}
                  className="flex items-center gap-2 text-white hover:text-orange-400 transition"
                >
                  <FaUserCircle size={28} />
                  <span className="hidden md:block">Admin</span>
                </button>
              </div>

              {/* LOGOUT BUTTON */}
              <button
                onClick={handleLogout}
                className="flex items-center gap-2 bg-orange-500 hover:bg-orange-600 
                           text-white px-4 py-2 rounded-lg transition"
              >
                <FaSignOutAlt />
                <span>Logout</span>
              </button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default AdminHeader;
