import React from "react";
import { assets } from "../assets/assets";
import LatestCollection from "../components/LatestCollection";
import BestSeller from "../components/BestSeller";
import NewsletterBox from "../components/NewsletterBox";
import Footer from "../components/Footer";

const ClothingHome = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* HERO SECTION */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center md:items-stretch border border-gray-200 rounded-xl overflow-hidden shadow-md mt-6 md:mt-12">
        {/* RIGHT SIDE - IMAGE */}
        <div className="w-full md:w-1/2 h-64 sm:h-80 md:h-auto">
          <img
            src={assets.hero_img}
            alt="Clothing Hero"
            className="w-full h-full object-cover"
          />
        </div>

        {/* LEFT SIDE - TEXT */}
        <div className="w-full md:w-1/2 flex flex-col justify-center items-start p-6 sm:p-10 md:p-16 bg-gradient-to-b from-white via-gray-50 to-gray-100">
          <div className="flex items-center gap-3 mb-3 sm:mb-4">
            <span className="block w-8 sm:w-10 h-[2px] bg-gray-800"></span>
            <span className="text-gray-700 font-medium text-xs sm:text-sm uppercase tracking-wide">
              Our Bestsellers
            </span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-4 sm:mb-6">
            Clothing Collection
          </h1>

          <p className="text-gray-600 text-sm sm:text-base mb-4 sm:mb-6">
            Explore the latest trends in our clothing line. Quality, comfort,
            and style all in one.
          </p>

          <a
            href="/collection"
            className="inline-flex items-center gap-2 text-white bg-orange-500 hover:bg-orange-600 px-5 py-2 sm:px-6 sm:py-3 rounded-md font-semibold transition-all duration-300 shadow-md"
          >
            Shop Now
            <span className="block w-6 sm:w-8 h-[1px] bg-white"></span>
          </a>
        </div>
      </div>
      <LatestCollection />
      <BestSeller/>
      <NewsletterBox />
      <Footer/>
    </div>
  );
};

export default ClothingHome;
