import React, { useEffect, useMemo, useState } from "react";
import Title from "../components/Title.jsx";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AdminListProduct = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const fetchProducts = async () => {
    try {
      setLoading(true);
      setError("");
      const response = await axios.get("/api/clothing-product/list");
      if (response.data?.success) {
        setProducts(response.data.products || []);
      } else {
        setError(response.data?.message || "Failed to load products");
      }
    } catch (err) {
      setError(err.message || "Server error");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const filteredProducts = useMemo(() => {
    const term = query.trim().toLowerCase();
    if (!term) return products;
    return products.filter((product) => {
      const name = product.name?.toLowerCase() || "";
      const category = product.category?.toLowerCase() || "";
      const subCategory = product.subCategory?.toLowerCase() || "";
      return (
        name.includes(term) ||
        category.includes(term) ||
        subCategory.includes(term)
      );
    });
  }, [products, query]);

  return (
    <div className="mx-auto w-full max-w-5xl">
      <Title
        text1="Product"
        text2="List"
        description="Manage your catalog and update product details."
      />

      <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <input
            type="text"
            placeholder="Search products"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm outline-none focus:border-slate-400 sm:max-w-xs"
          />
          <button
            type="button"
            onClick={() => navigate("/admin/add-product")}
            className="rounded-xl bg-orange-500 px-4 py-2 text-sm font-semibold text-white transition hover:bg-orange-600"
          >
            Add New Product
          </button>
        </div>

        <div className="mt-6 overflow-hidden rounded-xl border border-slate-200">
          <div className="grid grid-cols-5 gap-4 bg-slate-50 px-4 py-3 text-xs font-semibold uppercase text-slate-500">
            <span>Product</span>
            <span>Category</span>
            <span>Subcategory</span>
            <span>Price</span>
            <span>Status</span>
          </div>

          {loading && (
            <div className="px-4 py-6 text-sm text-slate-500">Loading products...</div>
          )}

          {!loading && error && (
            <div className="px-4 py-6 text-sm text-rose-500">{error}</div>
          )}

          {!loading && !error && filteredProducts.length === 0 && (
            <div className="px-4 py-6 text-sm text-slate-500">No products found.</div>
          )}

          {!loading && !error && filteredProducts.map((product) => (
            <div
              key={product._id}
              className="grid grid-cols-5 gap-4 px-4 py-3 text-sm text-slate-700 border-t"
            >
              <div className="flex items-center gap-3">
                <img
                  src={product.image?.[0]}
                  alt={product.name}
                  className="h-10 w-10 rounded-lg object-cover"
                />
                <span className="font-medium">{product.name}</span>
              </div>
              <span>{product.category}</span>
              <span>{product.subCategory}</span>
              <span>LKR {Number(product.price).toFixed(2)}</span>
              <span className={product.bestseller ? "text-emerald-600" : "text-slate-400"}>
                {product.bestseller ? "Bestseller" : "Standard"}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdminListProduct;
