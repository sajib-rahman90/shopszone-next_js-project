"use client";

import { useState } from "react";
import products from "@/data/products";
import ProductCard from "@/components/items/ProductCard";

export default function ItemsPage() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  const categories = ["All", "Electronics", "Fashion", "Accessories"];

  const filteredProducts = products.filter((item) => {
    const matchSearch = item.title.toLowerCase().includes(search.toLowerCase());

    const matchCategory = category === "All" || item.category === category;

    return matchSearch && matchCategory;
  });

  return (
    <div className="max-w-7xl mx-auto px-5 py-10">
      <h1 className="text-3xl font-bold mb-6">All Items</h1>

      {/* Search + Filter */}
      <div className="flex flex-col md:flex-row gap-4 mb-8">
        <input
          type="text"
          placeholder="Search products..."
          className="border px-4 py-2 rounded w-full"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <select
          className="border px-4 py-2 rounded w-full md:w-1/3"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          {categories.map((cat, i) => (
            <option key={i} value={cat}>
              {cat}
            </option>
          ))}
        </select>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {filteredProducts.map((item) => (
          <ProductCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}
