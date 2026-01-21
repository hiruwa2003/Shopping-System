import React, { useState } from "react";
import Title from "../components/Title.jsx";
import { FaUpload } from "react-icons/fa";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { backendURL } from "../App.jsx";
import { toast } from "react-toastify";

const AdminAddClothing = () => {
  const navigate = useNavigate();
  const categories = {
    Men: ["Topwear", "Bottomwear", "Winterwear"],
    Women: ["Topwear", "Bottomwear", "Winterwear"],
    Kids: ["Topwear", "Bottomwear", "Winterwear"],
  };

  const [images, setImages] = useState({
    image1: null,
    image2: null,
    image3: null,
    image4: null,
  });
  const [category, setCategory] = useState("");
  const [subCategory, setSubCategory] = useState("");
  const [sizes, setSizes] = useState([]);
  const [bestseller, setBestseller] = useState(false);
  const [productName, setProductName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");

  const handleImageChange = (e) => {
    const { id, files } = e.target;
    setImages((prev) => ({ ...prev, [id]: files[0] }));
  };

  const handleSizeChange = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      setSizes((prev) => [...prev, value]);
    } else {
      setSizes((prev) => prev.filter((size) => size !== value));
    }
  };

  const handleSubmit = async () => {
    try {
      const formData = new FormData();
      formData.append("name", productName);
      formData.append("price", price);
      formData.append("description", description);
      formData.append("category", category);
      formData.append("subCategory", subCategory);
      formData.append("bestseller", bestseller);
      formData.append("size", JSON.stringify(sizes));

      // append images
      Object.keys(images).forEach((key) => {
        if (images[key]) formData.append(key, images[key]);
      });

      const response = await axios.post(
        backendURL + "/api/clothing-product/add",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      if (response.data.success) {
        toast.success("Product added successfully!");
        // reset form
        setImages({ image1: null, image2: null, image3: null, image4: null });
        setProductName("");
        setPrice("");
        setDescription("");
        setCategory("");
        setSubCategory("");
        setSizes([]);
        setBestseller(false);
        navigate("/admin/list-product");
      } else {
        toast.error(response.data.message || "Error adding product");
      }
    } catch (error) {
      console.error(error);
      toast.error("Server error: " + error.message);
    }
  };

  return (
    <div className="mx-auto w-full max-w-5xl p-6">
      <Title
        text1="Add"
        text2="Product"
        description="Create a new clothing product for the store catalog."
      />

      <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        {/* IMAGE UPLOAD */}
        <div className="mb-6">
          <p className="text-sm font-medium text-slate-600 mb-2">Upload 4 Images</p>
          <div className="flex gap-4">
            {["image1", "image2", "image3", "image4"].map((img) => (
              <label
                key={img}
                htmlFor={img}
                className="w-32 h-32 border-2 border-dashed rounded-lg flex items-center justify-center cursor-pointer hover:bg-slate-50"
              >
                {images[img] ? (
                  <img
                    src={URL.createObjectURL(images[img])}
                    className="w-full h-full object-cover rounded-lg"
                    alt="preview"
                  />
                ) : (
                  <FaUpload className="text-2xl text-slate-400" />
                )}
                <input
                  type="file"
                  id={img}
                  hidden
                  accept="image/*"
                  onChange={handleImageChange}
                />
              </label>
            ))}
          </div>
        </div>

        {/* PRODUCT FORM */}
        <form className="grid gap-4" onSubmit={(e) => e.preventDefault()}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Product Name"
              value={productName}
              onChange={(e) => setProductName(e.target.value)}
              className="input"
            />
            <input
              type="number"
              placeholder="Price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              className="input"
            />
          </div>

          <textarea
            rows="3"
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="input"
          ></textarea>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* CATEGORY */}
            <select
              className="input"
              value={category}
              onChange={(e) => {
                setCategory(e.target.value);
                setSubCategory("");
              }}
            >
              <option value="">Select Category</option>
              {Object.keys(categories).map((cat) => (
                <option key={cat} value={cat}>{cat}</option>
              ))}
            </select>

            {/* SUBCATEGORY */}
            <select
              className="input"
              value={subCategory}
              onChange={(e) => setSubCategory(e.target.value)}
              disabled={!category}
            >
              <option value="">Select Subcategory</option>
              {category &&
                categories[category].map((sub) => (
                  <option key={sub} value={sub}>{sub}</option>
                ))}
            </select>
          </div>

          {/* SIZE */}
          <div>
            <p className="text-sm font-medium text-slate-600 mb-2">Sizes</p>
            <div className="flex gap-4">
              {["S", "M", "L", "XL", "XXL"].map((size) => (
                <label key={size} className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    value={size}
                    onChange={handleSizeChange}
                    className="h-4 w-4 accent-orange-500"
                  />
                  <span>{size}</span>
                </label>
              ))}
            </div>
          </div>

          {/* BESTSELLER */}
          <div className="flex items-center gap-3 mt-2">
            <input
              type="checkbox"
              checked={bestseller}
              onChange={(e) => setBestseller(e.target.checked)}
              className="h-5 w-5 accent-orange-500"
            />
            <span className="text-sm font-medium text-slate-600">Bestseller</span>
          </div>

          <button
            type="button"
            onClick={handleSubmit}
            className="mt-4 w-full rounded-xl bg-orange-500 py-3 text-white font-semibold hover:bg-orange-600 transition"
          >
            Add Product
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdminAddClothing;
