import React from "react";
import { Link } from "react-router-dom";
import { FaPhoneAlt, FaEnvelope, FaFacebookF, FaInstagram, FaTwitter, FaWhatsapp } from "react-icons/fa";

const Header = () => {
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

      {/* MAIN NAVBAR */}
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
              </span>
            </div>

            {/* NAV LINKS */}
            <div className="hidden md:flex gap-8">
              {["Home", "Product", "About", "Contact"].map((item) => (
                <Link
                  key={item}
                  to={`/${item === "Home" ? "" : item.toLowerCase()}`}
                  className="relative text-white font-medium
                             after:content-[''] after:absolute after:left-0
                             after:-bottom-1 after:h-[2px] after:w-0
                             after:bg-orange-600 after:transition-all
                             after:duration-300 hover:after:w-full"
                >
                  {item}
                </Link>
              ))}
            </div>

            {/* JOIN BUTTON */}
            <Link
              to="/signup"
              className="bg-orange-400 text-white px-5 py-2 rounded-lg
                         hover:bg-orange-500 transition"
            >
              Join
            </Link>

          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
