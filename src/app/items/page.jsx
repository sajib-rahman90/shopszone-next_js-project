"use client";

import { useMemo, useState, useEffect } from "react";
import products from "@/data/products";
import ProductCard from "@/components/items/ProductCard";

export default function ItemsPage() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [sortPrice, setSortPrice] = useState("default");
  const [allProducts, setAllProducts] = useState(products);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    try {
      const localProducts = JSON.parse(localStorage.getItem("products") || "[]");
      if (localProducts.length > 0) {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setAllProducts([...products, ...localProducts]);
      }
    } catch (e) {
      // Ignore parse error
    }
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setIsMounted(true);
  }, []);

  const categories = ["All", "Electronics", "Fashion", "Accessories"];

  const filteredProducts = useMemo(() => {
    let filtered = [...allProducts];

    filtered = filtered.filter((item) =>
      item.title?.toLowerCase().includes(search.toLowerCase()),
    );

    if (category !== "All") {
      filtered = filtered.filter((item) => item.category === category);
    }

    if (sortPrice === "low-high") {
      filtered.sort((a, b) => Number(a.price) - Number(b.price));
    }

    if (sortPrice === "high-low") {
      filtered.sort((a, b) => Number(b.price) - Number(a.price));
    }

    return filtered;
  }, [allProducts, search, category, sortPrice]);

  if (!isMounted) {
    return (
      <section className="bg-slate-50 min-h-screen py-10">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl font-bold">Explore Products</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {[1, 2, 3, 4, 5, 6].map((n) => (
              <div key={n} className="h-80 bg-gray-200 animate-pulse rounded-3xl"></div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-slate-50 min-h-screen py-10">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-4xl font-bold">Explore Products</h1>

        {/* Filters & Search */}
        <div className="mt-8 bg-white p-5 rounded-2xl shadow-sm border border-slate-100 flex flex-col md:flex-row gap-4">
          <input
            type="text"
            placeholder="Search products..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="flex-1 border border-slate-200 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="border border-slate-200 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
          >
            {categories.map((cat) => (
              <option key={cat} value={cat}>
                {cat === "All" ? "All Categories" : cat}
              </option>
            ))}
          </select>

          <select
            value={sortPrice}
            onChange={(e) => setSortPrice(e.target.value)}
            className="border border-slate-200 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
          >
            <option value="default">Default Sorting</option>
            <option value="low-high">Price: Low to High</option>
            <option value="high-low">Price: High to Low</option>
          </select>
        </div>

        <h2 className="mt-8 font-semibold text-slate-700">
          {filteredProducts.length} Products Found
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
          {filteredProducts.map((item) => (
            <ProductCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
