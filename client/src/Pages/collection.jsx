import React, { useContext, useState, useEffect } from "react";
import { ShopContext } from "../context/ShopContext.jsx";
import { assets } from "../assets/assets.js";
import Title from "../components/Title.jsx";
import ProductItem from "../components/ProductItem.jsx";
import Footer from "../components/Footer.jsx";

const Collection = () => {
  const { products } = useContext(ShopContext);

  const [showFilter, setShowFilter] = useState(false);
  const [filterProducts, setFilterProducts] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [subSelectedCategories, setSubSelectedCategories] = useState([]);
  const [selectedSort, setSelectedSort] = useState("relevant");
  const [searchQuery, setSearchQuery] = useState("");

  const toggleCategory = (e) => {
    const value = e.target.value;
    if (selectedCategories.includes(value)) {
      setSelectedCategories((prev) => prev.filter((item) => item !== value));
    } else {
      setSelectedCategories((prev) => [...prev, value]);
    }
  };

  const toggleSubCategory = (e) => {
    const value = e.target.value;
    if (subSelectedCategories.includes(value)) {
      setSubSelectedCategories((prev) => prev.filter((item) => item !== value));
    } else {
      setSubSelectedCategories((prev) => [...prev, value]);
    }
  };

  const applyFilters = () => {
    let updatedProducts = products.slice();
    if (selectedCategories.length > 0) {
      updatedProducts = updatedProducts.filter((item) =>
        selectedCategories.includes(item.category),
      );
    }
    if (subSelectedCategories.length > 0) {
      updatedProducts = updatedProducts.filter((item) =>
        subSelectedCategories.includes(item.subCategory),
      );
    }
    const normalizedQuery = searchQuery.trim().toLowerCase();
    if (normalizedQuery) {
      updatedProducts = updatedProducts.filter((item) => {
        const nameMatch = item.name?.toLowerCase().includes(normalizedQuery);
        const descriptionMatch = item.description
          ?.toLowerCase()
          .includes(normalizedQuery);
        const categoryMatch = item.category
          ?.toLowerCase()
          .includes(normalizedQuery);
        const subCategoryMatch = item.subCategory
          ?.toLowerCase()
          .includes(normalizedQuery);
        return (
          nameMatch || descriptionMatch || categoryMatch || subCategoryMatch
        );
      });
    }
    setFilterProducts(updatedProducts);
  };

  const sortProduct = () => {
    let sortedProducts = filterProducts.slice();
    switch (selectedSort) {
      case "low-high":
        setFilterProducts(sortedProducts.sort((a, b) => a.price - b.price));
        break;
      case "high-low":
        setFilterProducts(sortedProducts.sort((a, b) => b.price - a.price));
        break;
      default:
        applyFilters();
        break;
    }
  };

  useEffect(() => {
    applyFilters();
  }, [selectedCategories, subSelectedCategories, searchQuery, products]);

  useEffect(() => {
    sortProduct();
  }, [selectedSort]);

  return (
    <>
      {/* MAIN PAGE */}
      <div className="flex flex-col sm:flex-row gap-6 pt-10 border-t max-w-7xl mx-auto px-6">
        {/* LEFT SIDE – FILTER */}
        <div className="min-w-[220px]">
          <p
            onClick={() => setShowFilter(!showFilter)}
            className="my-2 text-xl flex items-center cursor-pointer gap-2 font-semibold"
          >
           FILTERS
            <img
              className={`h-3 sm:hidden transition-transform ${
                showFilter ? "rotate-90" : ""
              }`}
              src={assets.dropdown_icon}
              alt=""
            />
          </p>

          {/* Categories */}
          <div
            className={`border border-gray-300 rounded px-4 py-3 mt-4 ${
              showFilter ? "block" : "hidden"
            } sm:block`}
          >
            <p className="mb-3 text-sm font-medium">Categories</p>
            <div className="flex flex-col gap-2 text-sm text-gray-700">
              {["Men", "Women", "Kids"].map((cat) => (
                <label key={cat} className="flex gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    value={cat}
                    onChange={toggleCategory}
                  />
                  {cat}
                </label>
              ))}
            </div>
          </div>

          {/* Type */}
          <div
            className={`border border-gray-300 rounded px-4 py-3 mt-5 ${
              showFilter ? "block" : "hidden"
            } sm:block`}
          >
            <p className="mb-3 text-sm font-medium">Type</p>
            <div className="flex flex-col gap-2 text-sm text-gray-700">
              {["Topwear", "Bottomwear", "Winterwear"].map((type) => (
                <label key={type} className="flex gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    value={type}
                    onChange={toggleSubCategory}
                  />
                  {type}
                </label>
              ))}
            </div>
          </div>
        </div>

        {/* RIGHT SIDE – PRODUCTS */}
        <div className="flex-1">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6">
            <Title
              text1="All"
              text2="Collection"
              description="Check out our newest arrivals! Stylish and comfortable clothing perfect for any occasion."
            />
            <select
              onChange={(e) => setSelectedSort(e.target.value)}
              className="border border-gray-300 rounded px-3 py-2 text-sm mt-3 sm:mt-0"
            >
              <option value="relevant">Sort by: Relevant</option>
              <option value="low-high">Sort by: Low to High</option>
              <option value="high-low">Sort by: High to Low</option>
            </select>
          </div>

          <div className="mb-6">
            <div className="flex items-center gap-3 border border-gray-300 rounded-lg px-4 py-2 bg-white">
              <img src={assets.search_icon} alt="Search" className="w-4 h-4" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search products"
                className="w-full text-sm outline-none"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery("")}
                  className="text-xs text-gray-500 hover:text-gray-700"
                >
                  Clear
                </button>
              )}
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
            {filterProducts.map((item, index) => (
              <ProductItem
                key={item._id || index}
                id={item._id}
                name={item.name}
                image={item.image}
                price={item.price}
              />
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Collection;
