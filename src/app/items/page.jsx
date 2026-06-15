"use client";

import { useMemo, useState } from "react";
import products from "@/data/products";
import ProductCard from "@/components/items/ProductCard";

export default function ItemsPage() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [sortPrice, setSortPrice] = useState("default");
  const [allProducts, setAllProducts] = useState(() => {
    const localProducts = JSON.parse(localStorage.getItem("products") || "[]");
    return [...products, ...localProducts];
  });

  const categories = ["All", "Electronics", "Fashion", "Accessories"];

  const filteredProducts = useMemo(() => {
    let filtered = [...allProducts];

    // Search
    filtered = filtered.filter((item) =>
      item.title?.toLowerCase().includes(search.toLowerCase()),
    );

    // Category Filter
    if (category !== "All") {
      filtered = filtered.filter((item) => item.category === category);
    }

    // Price Sorting
    if (sortPrice === "low-high") {
      filtered.sort((a, b) => Number(a.price) - Number(b.price));
    }

    if (sortPrice === "high-low") {
      filtered.sort((a, b) => Number(b.price) - Number(a.price));
    }

    return filtered;
  }, [allProducts, search, category, sortPrice]);

  return (
    <section className="bg-slate-50 min-h-screen py-10">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="mb-10">
          <h1 className="text-4xl font-bold text-slate-900">
            Explore Products
          </h1>

          <p className="text-slate-600 mt-2">
            Discover quality products with smart filtering and sorting options.
          </p>
        </div>

        {/* Filter Section */}
        <div className="bg-white rounded-xl p-5 mb-8 shadow-sm">
          <div className="mb-4">
            <h2 className="text-lg font-semibold text-slate-800">
              Filter Products
            </h2>
            <p className="text-sm text-slate-500">
              Search, filter and sort items
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Search */}
            <input
              type="text"
              placeholder="Search products..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full border border-blue-500 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            {/* Category */}
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full border border-blue-500 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              {categories.map((cat) => (
                <option key={cat} value={cat}>
                  {cat}
                </option>
              ))}
            </select>

            {/* Sort */}
            <select
              value={sortPrice}
              onChange={(e) => setSortPrice(e.target.value)}
              className="w-full border border-blue-500 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="default">Sort by price</option>
              <option value="low-high">Low → High</option>
              <option value="high-low">High → Low</option>
            </select>
          </div>
        </div>

        {/* Result Count */}
        <div className="mb-6 flex justify-between items-center">
          <h2 className="font-semibold text-lg">
            {filteredProducts.length} Products Found
          </h2>
        </div>

        {/* Products */}
        {filteredProducts.length === 0 ? (
          <div className="bg-white rounded-2xl p-12 text-center shadow-sm">
            <h3 className="text-2xl font-semibold text-slate-700">
              No Products Found
            </h3>

            <p className="text-slate-500 mt-3">
              Try changing your search keyword or filters.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((item) => (
              <ProductCard key={item.id} item={item} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
