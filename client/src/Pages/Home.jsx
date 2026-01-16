import React, { useState, useEffect, useRef } from "react";
import Tilt from "react-parallax-tilt";
import { assets } from "../assets/assets.js";
import Footer from "../components/Footer.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
  faFire, 
  faArrowLeft, 
  faArrowRight, 
  faChevronDown,
  faCartShopping,
  faStar,
  faTruckFast,
  faHeadphones,
  faMobile,
  faShirt,
  faHome,
  faDumbbell,
  faSpa,
  faBook,
  faTag,
  faShoppingBag,
  faGem,
  faCrown,
  faBolt,
  faPercent,
  faGift,
  faHeart,
  faSearch,
  faUser,
  faShieldAlt
} from "@fortawesome/free-solid-svg-icons";

const Home = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [activeCategory, setActiveCategory] = useState(0);
  const [showCategories, setShowCategories] = useState(false);
  const categoriesRef = useRef(null);

  const categories = [
    {
      id: 1,
      name: "Electronics",
      description: "Latest gadgets & devices",
      icon: faMobile,
      bgColor: "from-blue-500 to-cyan-500",
      textColor: "text-blue-100",
      image: assets.category_electronics
    },
    {
      id: 2,
      name: "Fashion",
      description: "Trendy clothing & accessories",
      icon: faShirt,
      bgColor: "from-pink-500 to-purple-500",
      textColor: "text-pink-100",
      image: assets.category_fashion
    },
   
    {
      id: 4,
      name: "Sports",
      description: "Equipment & activewear",
      icon: faDumbbell,
      bgColor: "from-orange-500 to-red-500",
      textColor: "text-orange-100",
      image: assets.category_sports
    },
    {
      id: 5,
      name: "Beauty",
      description: "Cosmetics & skincare",
      icon: faSpa,
      bgColor: "from-purple-500 to-pink-500",
      textColor: "text-purple-100",
      image: assets.category_beauty
    },
    
  ];

  const features = [
    { icon: faTruckFast, label: "Free Delivery", description: "On orders over $50" },
    { icon: faShieldAlt, label: "Secure Payment", description: "100% secure & safe" },
    { icon: faHeadphones, label: "24/7 Support", description: "Dedicated support" },
    { icon: faTag, label: "Best Price", description: "Guaranteed low price" }
  ];

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const scrollCategories = (direction) => {
    if (categoriesRef.current) {
      const scrollAmount = 300;
      categoriesRef.current.scrollLeft += direction === 'next' ? scrollAmount : -scrollAmount;
    }
  };

  const scrollToCategories = () => {
    setShowCategories(true);
    setTimeout(() => {
      window.scrollTo({
        top: window.innerHeight,
        behavior: 'smooth'
      });
    }, 100);
  };

  return (
    <>
      {/* Hero Section */}
      <div className="w-full h-screen relative flex items-center justify-between px-4 md:px-10 overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.5)), url(${assets.cover})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundAttachment: "fixed",
          }}
        />
        
        {/* Animated background overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-black/10"></div>
        
        {/* Floating decorative elements */}
        <div className="absolute top-10 left-10 w-20 h-20 rounded-full bg-blue-500/10 blur-xl"></div>
        <div className="absolute bottom-20 right-20 w-32 h-32 rounded-full bg-purple-500/10 blur-xl"></div>

        {/* LEFT SIDE - Hero Text */}
        <div className={`w-full md:w-1/2 text-white z-10 transform transition-all duration-1000 ${
          isLoaded ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'
        }`}>
          <div className="max-w-xl">
            <div className="flex items-center gap-2 mb-4">
              <FontAwesomeIcon icon={faCrown} className="text-yellow-400 text-xl" />
              <span className="text-yellow-400 font-semibold">Premium Shopping Experience</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 leading-tight">
              <span className="block text-blue-400">Welcome to</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
                CeylonCart
              </span>
            </h1>
            
            <p className="text-lg md:text-xl mb-6 md:mb-8 text-gray-200 leading-relaxed">
              Discover amazing products and enjoy a premium shopping experience. 
              Quality products delivered right to your doorstep.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <button className="group relative bg-gradient-to-r from-orange-400 to-orange-500 text-white px-8 py-3 rounded-xl hover:from-orange-500 hover:to-orange-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center gap-2">
                <FontAwesomeIcon icon={faCartShopping} className="text-lg" />
                <span className="relative z-10">Shop Now</span>
                <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-orange-600 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
              
              <button 
                onClick={scrollToCategories}
                className="bg-transparent border-2 border-white/30 text-white px-8 py-3 rounded-xl hover:bg-white/10 transition-all duration-300 hover:border-white/50 flex items-center gap-2"
              >
                Explore Categories
                <FontAwesomeIcon icon={faChevronDown} className="animate-bounce" />
              </button>
            </div>

            {/* Features */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="p-2 bg-white/10 rounded-lg">
                    <FontAwesomeIcon icon={feature.icon} className="text-blue-400 text-lg" />
                  </div>
                  <div>
                    <div className="font-semibold text-white">{feature.label}</div>
                    <div className="text-sm text-gray-300">{feature.description}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Stats */}
            <div className="flex gap-6 md:gap-10 mt-10 md:mt-12">
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-blue-400 flex items-center gap-2 justify-center">
                  <FontAwesomeIcon icon={faShoppingBag} />
                  500+
                </div>
                <div className="text-sm text-gray-300">Products</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-purple-400 flex items-center gap-2 justify-center">
                  <FontAwesomeIcon icon={faGem} />
                  100+
                </div>
                <div className="text-sm text-gray-300">Brands</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-green-400 flex items-center gap-2 justify-center">
                  <FontAwesomeIcon icon={faHeadphones} />
                  24/7
                </div>
                <div className="text-sm text-gray-300">Support</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-yellow-400 flex items-center gap-2 justify-center">
                  <FontAwesomeIcon icon={faStar} />
                  4.9
                </div>
                <div className="text-sm text-gray-300">Rating</div>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE - 3D Foreground Image */}
        <div className={`hidden md:flex w-1/2 justify-end items-center transform transition-all duration-1000 delay-300 ${
          isLoaded ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'
        }`}>
          <div className="relative">
            <Tilt
              className="w-72 md:w-80 lg:w-96 h-72 md:h-80 lg:h-96"
              tiltMaxAngleX={25}
              tiltMaxAngleY={25}
              perspective={1000}
              scale={1.05}
              transitionSpeed={1000}
              gyroscope={true}
              glareEnable={true}
              glareMaxOpacity={0.2}
              glareColor="#ffffff"
              glarePosition="all"
              glareBorderRadius="12px"
            >
              <div className="relative w-full h-full">
                <img
                  src={assets.cover_1}
                  alt="Featured Product"
                  className="w-full h-full object-cover rounded-2xl shadow-2xl"
                  loading="eager"
                />
                {/* Glow effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/20 to-purple-500/20 mix-blend-overlay"></div>
                
                {/* Sale Badge on Image */}
                <div className="absolute top-4 right-4 bg-gradient-to-r from-red-500 to-pink-500 text-white px-3 py-1 rounded-full flex items-center gap-1 shadow-lg">
                  <FontAwesomeIcon icon={faPercent} className="text-xs" />
                  <span className="text-sm font-bold">SALE</span>
                </div>
              </div>
            </Tilt>
            
            {/* Floating badge */}
            <div className="absolute -bottom-4 -left-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-lg shadow-xl animate-pulse">
              <span className="text-sm font-semibold flex items-center gap-2">
                <FontAwesomeIcon icon={faFire} className="text-orange-400"/> Trending Now
              </span>
            </div>

            {/* Gift Offer */}
            <div className="absolute -top-4 -right-4 bg-gradient-to-r from-green-500 to-emerald-500 text-white px-4 py-2 rounded-lg shadow-xl">
              <span className="text-sm font-semibold flex items-center gap-2">
                <FontAwesomeIcon icon={faGift} />
                Free Gift
              </span>
            </div>
          </div>
        </div>

        {/* Scroll indicator for mobile */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 md:hidden">
          <div className="flex flex-col items-center">
            <span className="text-white/60 text-sm mb-2">Scroll to explore</span>
            <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-bounce"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Categories Section */}
      <div className={`w-full min-h-screen bg-gradient-to-b from-gray-900 to-black py-20 px-4 md:px-10 transition-opacity duration-1000 ${showCategories ? 'opacity-100' : 'opacity-0'}`}>
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-4">
              <FontAwesomeIcon icon={faBolt} className="text-yellow-400 text-2xl" />
              <h2 className="text-4xl md:text-5xl font-bold">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
                  Shop by Category
                </span>
              </h2>
            </div>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Explore our wide range of product categories with immersive 3D previews
            </p>
          </div>

          {/* Main 3D Category Display */}
          <div className="flex flex-col lg:flex-row gap-12 items-center mb-20">
            {/* 3D Category Image */}
            <div className="lg:w-1/2">
              <Tilt
                className="w-full max-w-2xl mx-auto h-[400px]"
                tiltMaxAngleX={25}
                tiltMaxAngleY={25}
                perspective={1000}
                scale={1.05}
                transitionSpeed={1000}
                gyroscope={true}
                glareEnable={true}
                glareMaxOpacity={0.3}
                glareColor="#ffffff"
                glarePosition="all"
                glareBorderRadius="20px"
              >
                <div className="relative w-full h-full rounded-3xl overflow-hidden">
                  <img
                    src={categories[activeCategory]?.image || assets.cover_1}
                    alt={categories[activeCategory]?.name}
                    className="w-full h-full object-cover"
                  />
                  <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${categories[activeCategory]?.bgColor}/20 to-transparent mix-blend-overlay`}></div>
                  
                  {/* Category Info Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-8">
                    <div className="flex items-center gap-4 mb-3">
                      <div className="p-3 bg-white/10 rounded-xl">
                        <FontAwesomeIcon 
                          icon={categories[activeCategory]?.icon || faShoppingBag} 
                          className="text-2xl text-white" 
                        />
                      </div>
                      <div>
                        <h3 className="text-3xl font-bold text-white">
                          {categories[activeCategory]?.name}
                        </h3>
                        <p className="text-gray-300 text-lg">
                          {categories[activeCategory]?.description}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 mt-4">
                      <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center gap-2">
                        <FontAwesomeIcon icon={faSearch} />
                        Browse Products
                      </button>
                      <button className="bg-transparent border border-white/30 text-white px-6 py-2 rounded-lg hover:bg-white/10 transition-all duration-300 flex items-center gap-2">
                        <FontAwesomeIcon icon={faHeart} />
                        Save
                      </button>
                    </div>
                  </div>

                  {/* Top Right Badge */}
                  <div className="absolute top-4 right-4 bg-black/70 backdrop-blur-sm text-white px-3 py-2 rounded-lg">
                    <div className="flex items-center gap-2">
                      <FontAwesomeIcon icon={faStar} className="text-yellow-400" />
                      <span className="font-bold">Top Rated</span>
                    </div>
                  </div>
                </div>
              </Tilt>
            </div>

            {/* Category List */}
            <div className="lg:w-1/2">
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {categories.map((category, index) => (
                  <div
                    key={category.id}
                    onClick={() => setActiveCategory(index)}
                    className={`cursor-pointer group relative overflow-hidden rounded-2xl p-6 transition-all duration-300 ${
                      activeCategory === index 
                      ? `bg-gradient-to-br ${category.bgColor} shadow-2xl scale-105` 
                      : 'bg-gray-800/50 hover:bg-gray-800'
                    }`}
                  >
                    <div className="relative z-10">
                      <div className="flex items-center gap-3 mb-3">
                        <div className={`p-2 rounded-lg ${activeCategory === index ? 'bg-white/20' : 'bg-gray-700/50'}`}>
                          <FontAwesomeIcon 
                            icon={category.icon} 
                            className={`text-xl ${activeCategory === index ? 'text-white' : 'text-gray-300'}`}
                          />
                        </div>
                        <h4 className={`font-bold ${activeCategory === index ? 'text-white' : 'text-gray-300'}`}>
                          {category.name}
                        </h4>
                      </div>
                      <p className={`text-sm ${activeCategory === index ? 'text-gray-200' : 'text-gray-400'}`}>
                        {category.description}
                      </p>
                    </div>
                    
                    {/* Hover effect */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${category.bgColor}/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                    
                    {/* Active indicator */}
                    {activeCategory === index && (
                      <div className="absolute top-4 right-4">
                        <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* View All Button */}
              <div className="mt-8 text-center">
                <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center gap-2 justify-center mx-auto">
                  <FontAwesomeIcon icon={faShoppingBag} />
                  View All Products in {categories[activeCategory]?.name}
                </button>
              </div>
            </div>
          </div>

          {/* Featured Categories Slider */}
          <div className="relative">
            <div className="flex justify-between items-center mb-8">
              <h3 className="text-2xl font-bold text-white flex items-center gap-2">
                <FontAwesomeIcon icon={faFire} className="text-orange-400" />
                Featured Categories
              </h3>
              <div className="flex gap-2">
                <button 
                  onClick={() => scrollCategories('prev')}
                  className="p-3 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors"
                >
                  <FontAwesomeIcon icon={faArrowLeft} className="text-white" />
                </button>
                <button 
                  onClick={() => scrollCategories('next')}
                  className="p-3 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors"
                >
                  <FontAwesomeIcon icon={faArrowRight} className="text-white" />
                </button>
              </div>
            </div>

            <div 
              ref={categoriesRef}
              className="flex gap-6 overflow-x-auto scrollbar-hide scroll-smooth pb-4"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {categories.map((category, index) => (
                <div key={category.id} className="flex-shrink-0 w-64">
                  <Tilt
                    className="h-48"
                    tiltMaxAngleX={15}
                    tiltMaxAngleY={15}
                    perspective={800}
                    scale={1.05}
                    transitionSpeed={500}
                  >
                    <div className="relative h-full rounded-xl overflow-hidden group">
                      <img
                        src={category.image}
                        alt={category.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className={`absolute inset-0 bg-gradient-to-t ${category.bgColor}/40 to-transparent`}></div>
                      <div className="absolute bottom-0 left-0 right-0 p-4">
                        <div className="flex items-center gap-2">
                          <FontAwesomeIcon 
                            icon={category.icon} 
                            className="text-white text-xl" 
                          />
                          <h4 className="text-white font-bold text-lg">{category.name}</h4>
                        </div>
                      </div>
                      <div className="absolute top-4 right-4">
                        <FontAwesomeIcon icon={faHeart} className="text-white/70 hover:text-red-400 cursor-pointer" />
                      </div>
                    </div>
                  </Tilt>
                </div>
              ))}
            </div>
          </div>

          {/* Additional Features */}
          <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-2xl border border-gray-700">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-blue-500/20 rounded-xl">
                  <FontAwesomeIcon icon={faUser} className="text-blue-400 text-2xl" />
                </div>
                <h4 className="text-xl font-bold text-white">Personalized Shopping</h4>
              </div>
              <p className="text-gray-400">Get personalized recommendations based on your preferences and browsing history.</p>
            </div>

            <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-2xl border border-gray-700">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-green-500/20 rounded-xl">
                  <FontAwesomeIcon icon={faShieldAlt} className="text-green-400 text-2xl" />
                </div>
                <h4 className="text-xl font-bold text-white">Secure Shopping</h4>
              </div>
              <p className="text-gray-400">Your security is our priority. Encrypted transactions and secure payment gateways.</p>
            </div>

            <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-2xl border border-gray-700">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-purple-500/20 rounded-xl">
                  <FontAwesomeIcon icon={faGift} className="text-purple-400 text-2xl" />
                </div>
                <h4 className="text-xl font-bold text-white">Loyalty Rewards</h4>
              </div>
              <p className="text-gray-400">Earn points on every purchase and redeem them for discounts and exclusive offers.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Add custom scrollbar hide */}
      <style jsx>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
      <Footer/>
    </>
  );
};

export default Home;