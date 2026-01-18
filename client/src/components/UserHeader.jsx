import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaWhatsapp,
  FaUserCircle,
  FaSignOutAlt,
  FaBars,
  FaTimes,
  FaChevronDown,
} from "react-icons/fa";

const UserHeader = () => {
  const [openProfile, setOpenProfile] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);
  const [openProduct, setOpenProduct] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("role");
    navigate("/signin");
  };

  const navLinks = [
    { name: "Home", path: "/user-home" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <>
      {/* TOP INFO BAR */}
      <div className="w-full bg-slate-950 text-gray-300 text-sm">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-9">
            <div className="hidden md:flex items-center gap-6">
              <div className="flex items-center gap-2">
                <FaEnvelope className="text-orange-400" />
                <span>hirushadilshan890@gmail.com</span>
              </div>
              <div className="flex items-center gap-2">
                <FaPhoneAlt className="text-orange-400" />
                <span>(+94) 77 695 7704</span>
              </div>
            </div>

            <div className="flex items-center gap-4 mx-auto md:mx-0">
              <FaFacebookF />
              <FaInstagram />
              <FaTwitter />
              <FaWhatsapp />
            </div>
          </div>
        </div>
      </div>

      {/* NAVBAR */}
      <nav className="w-full bg-slate-900 shadow-md">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-16">
            {/* LOGO */}
            <div className="flex items-center gap-2">
              <img
                src="/logo.png"
                alt="Logo"
                className="w-10 h-10 rounded-full"
              />
              <span className="text-2xl font-bold text-white">
                Ceylon<span className="text-orange-400">Cart</span>
              </span>
            </div>

            {/* DESKTOP MENU */}
            <div className="hidden md:flex gap-8 items-center">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className="relative text-white font-medium
                  after:content-[''] after:absolute after:left-0 after:-bottom-1
                  after:h-[2px] after:w-0 after:bg-orange-500
                  after:transition-all hover:after:w-full"
                >
                  {link.name}
                </Link>
              ))}

              {/* PRODUCT DROPDOWN */}
              <div className="relative">
                <button
                  onClick={() => setOpenProduct(!openProduct)}
                  className="flex items-center gap-1 text-white font-medium hover:text-orange-400"
                >
                  Product
                  <FaChevronDown
                    size={14}
                    className={`transition-transform ${
                      openProduct ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {openProduct && (
                  <div className="absolute top-full left-0 mt-3 w-48 bg-white rounded-lg shadow-lg overflow-hidden z-50">
                    <Link
                      to="/clothing-home"
                      className="block px-4 py-2 hover:bg-gray-100"
                    >
                      Clothing
                    </Link>
                    <Link
                      to="/product/category"
                      className="block px-4 py-2 hover:bg-gray-100"
                    >
                      Categories
                    </Link>
                    <Link
                      to="/product/offers"
                      className="block px-4 py-2 hover:bg-gray-100"
                    >
                      Offers
                    </Link>
                  </div>
                )}
              </div>
            </div>

            {/* RIGHT SIDE */}
            <div className="flex items-center gap-4">
              {/* PROFILE */}
              <div className="relative">
                <button
                  onClick={() => setOpenProfile(!openProfile)}
                  className="flex items-center gap-1 text-white hover:text-orange-400"
                >
                  <FaUserCircle size={28} />
                  <FaChevronDown
                    size={14}
                    className={`transition-transform duration-200 ${
                      openProfile ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {openProfile && (
                  <div className="absolute right-0 mt-3 w-44 bg-white rounded-lg shadow-lg overflow-hidden">
                    <Link
                      to="/user/profile"
                      className="block px-4 py-2 hover:bg-gray-100"
                    >
                      My Profile
                    </Link>

                    <Link
                      to="/user/orders"
                      className="block px-4 py-2 hover:bg-gray-100"
                    >
                      My Orders
                    </Link>

                    <button
                      onClick={handleLogout}
                      className="w-full text-left px-4 py-2 text-red-600 hover:bg-gray-100 flex items-center gap-2 border-t"
                    >
                      <FaSignOutAlt /> Logout
                    </button>
                  </div>
                )}
              </div>

              {/* MOBILE MENU ICON */}
              <button
                onClick={() => setOpenMenu(!openMenu)}
                className="md:hidden text-white"
              >
                {openMenu ? <FaTimes size={22} /> : <FaBars size={22} />}
              </button>
            </div>
          </div>
        </div>

        {/* MOBILE MENU */}
        {openMenu && (
          <div className="md:hidden bg-slate-800 px-6 py-4 space-y-4">
            <Link
              to="/user-home"
              onClick={() => setOpenMenu(false)}
              className="block text-white"
            >
              Home
            </Link>

            {/* MOBILE PRODUCT */}
            <div>
              <button
                onClick={() => setOpenProduct(!openProduct)}
                className="flex items-center justify-between w-full text-white"
              >
                Product
                <FaChevronDown
                  className={`transition-transform ${
                    openProduct ? "rotate-180" : ""
                  }`}
                />
              </button>

              {openProduct && (
                <div className="ml-4 mt-2 space-y-2">
                  <Link
                    to="/product/all"
                    className="block text-gray-300"
                    onClick={() => setOpenMenu(false)}
                  >
                    All Products
                  </Link>
                  <Link
                    to="/product/category"
                    className="block text-gray-300"
                    onClick={() => setOpenMenu(false)}
                  >
                    Categories
                  </Link>
                  <Link
                    to="/product/offers"
                    className="block text-gray-300"
                    onClick={() => setOpenMenu(false)}
                  >
                    Offers
                  </Link>
                </div>
              )}
            </div>

            <Link
              to="/about"
              onClick={() => setOpenMenu(false)}
              className="block text-white"
            >
              About
            </Link>
            <Link
              to="/contact"
              onClick={() => setOpenMenu(false)}
              className="block text-white"
            >
              Contact
            </Link>
          </div>
        )}
      </nav>
    </>
  );
};

export default UserHeader;
