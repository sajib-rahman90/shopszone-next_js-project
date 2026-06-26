"use client";

import PrivateRoute from "@/utils/PrivateRoute";
import { useState } from "react";
import { useRouter } from "next/navigation";
import toast, { Toaster } from "react-hot-toast";

export default function AddItemPage() {
  const router = useRouter();

  const [formData, setFormData] = useState({
    title: "",
    shortDescription: "",
    fullDescription: "",
    price: "",
    category: "",
    image: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.title || !formData.price) {
      toast.error("Title and Price required");
      return;
    }

    const oldData = JSON.parse(localStorage.getItem("products")) || [];

    const newProduct = {
      id: Date.now(),
      ...formData,
    };

    localStorage.setItem("products", JSON.stringify([...oldData, newProduct]));

    toast.success("Product added successfully!");

    setFormData({
      title: "",
      shortDescription: "",
      fullDescription: "",
      price: "",
      category: "",
      image: "",
    });

    setTimeout(() => {
      router.push("/items");
    }, 1000);
  };

  return (
    <PrivateRoute>
      <div className="max-w-3xl mx-auto py-10 px-5">
        <Toaster />

        <h1 className="text-2xl font-bold mb-6">Add New Product</h1>

        <form
          onSubmit={handleSubmit}
          className="space-y-4 bg-white p-6 shadow-lg rounded-xl"
        >
          <input
            name="title"
            value={formData.title}
            onChange={handleChange}
            placeholder="Title"
            required
            className="w-full border p-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <input
            name="shortDescription"
            value={formData.shortDescription}
            onChange={handleChange}
            placeholder="Short Description"
            required
            className="w-full border p-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <textarea
            name="fullDescription"
            value={formData.fullDescription}
            onChange={handleChange}
            placeholder="Full Description"
            required
            rows={4}
            className="w-full border p-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <input
            type="number"
            name="price"
            value={formData.price}
            onChange={handleChange}
            placeholder="Price"
            required
            min="0"
            step="0.01"
            className="w-full border p-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <input
            name="category"
            value={formData.category}
            onChange={handleChange}
            placeholder="Category"
            required
            className="w-full border p-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <input
            type="url"
            name="image"
            value={formData.image}
            onChange={handleChange}
            placeholder="Image URL"
            required
            className="w-full border p-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <button className="bg-blue-600 hover:bg-blue-700 transition text-white px-6 py-3 rounded-lg w-full font-medium">
            Add Product
          </button>
        </form>
      </div>
    </PrivateRoute>
  );
}
