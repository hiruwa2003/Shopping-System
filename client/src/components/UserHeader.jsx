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
    localStorage.clear();
    navigate("/signin", { replace: true });
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
            <div className="hidden md:flex gap-6">
              <div className="flex items-center gap-2">
                <FaEnvelope className="text-orange-400" />
                <span>hirushadilshan890@gmail.com</span>
              </div>
              <div className="flex items-center gap-2">
                <FaPhoneAlt className="text-orange-400" />
                <span>(+94) 77 695 7704</span>
              </div>
            </div>

            <div className="flex gap-4">
              <FaFacebookF />
              <FaInstagram />
              <FaTwitter />
              <FaWhatsapp />
            </div>
          </div>
        </div>
      </div>

      {/* NAVBAR */}
      <nav className="bg-slate-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-center h-16">
            {/* LOGO */}
            <Link to="/user-home" className="flex items-center gap-2">
              <img src="/logo.png" alt="logo" className="w-10 h-10 rounded-full" />
              <span className="text-xl font-bold text-white">
                Ceylon<span className="text-orange-400">Cart</span>
              </span>
            </Link>

            {/* DESKTOP MENU */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className="text-white hover:text-orange-400"
                >
                  {link.name}
                </Link>
              ))}

              {/* PRODUCT */}
              <div className="relative">
                <button
                  onClick={() => setOpenProduct(!openProduct)}
                  className="flex items-center gap-1 text-white"
                >
                  Product <FaChevronDown size={12} />
                </button>

                {openProduct && (
                  <div className="absolute bg-white mt-3 rounded shadow w-44">
                    <Link className="block px-4 py-2 hover:bg-gray-100" to="/clothing-home">
                      Clothing
                    </Link>
                    <Link className="block px-4 py-2 hover:bg-gray-100" to="/product/category">
                      Categories
                    </Link>
                    <Link className="block px-4 py-2 hover:bg-gray-100" to="/product/offers">
                      Offers
                    </Link>
                  </div>
                )}
              </div>
            </div>

            {/* RIGHT */}
            <div className="flex items-center gap-4 relative">
             

              {/* PROFILE */}
              <div className="relative">
                <button
                  onClick={() => setOpenProfile(!openProfile)}
                  className="text-white flex items-center gap-1"
                >
                  <FaUserCircle size={26} />
                  <FaChevronDown size={12} />
                </button>

                {openProfile && (
                  <div className="absolute right-0 mt-3 bg-white rounded shadow w-40">
                    <Link className="block px-4 py-2 hover:bg-gray-100" to="/user/profile">
                      My Profile
                    </Link>
                    <Link className="block px-4 py-2 hover:bg-gray-100" to="/user/orders">
                      My Orders
                    </Link>
                    <button
                      onClick={handleLogout}
                      className="w-full px-4 py-2 text-left text-red-600 hover:bg-gray-100"
                    >
                      <FaSignOutAlt className="inline mr-2" />
                      Logout
                    </button>
                  </div>
                )}
              </div>

              {/* MOBILE */}
              <button onClick={() => setOpenMenu(!openMenu)} className="md:hidden text-white">
                {openMenu ? <FaTimes /> : <FaBars />}
              </button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default UserHeader;
