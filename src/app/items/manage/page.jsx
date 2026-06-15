"use client";

import { useState } from "react";
import products from "@/data/products";
import PrivateRoute from "@/utils/PrivateRoute";
import toast, { Toaster } from "react-hot-toast";

export default function ManageItemsPage() {
  const [allProducts, setAllProducts] = useState(() => {
    const localProducts = JSON.parse(
      localStorage.getItem("products") || "[]"
    );

    return [...products, ...localProducts];
  });

  // DELETE FUNCTION
  const handleDelete = (id) => {
    const updatedProducts = allProducts.filter(
      (item) => item.id !== id
    );

    setAllProducts(updatedProducts);

    // update localStorage (only custom products)
    const localOnly = updatedProducts.filter(
      (item) => item.id > 1000000000
    );

    localStorage.setItem(
      "products",
      JSON.stringify(localOnly)
    );

    toast.success("Product deleted successfully");
  };

  return (
    <PrivateRoute>
      <div className="max-w-6xl mx-auto px-5 py-10">

        <Toaster />

        <h1 className="text-3xl font-bold mb-6">
          Manage Products
        </h1>

        {allProducts.length === 0 ? (
          <p className="text-gray-500 text-center">
            No products available
          </p>
        ) : (
          <div className="grid md:grid-cols-2 gap-6">
            {allProducts.map((item) => (
              <div
                key={item.id}
                className="border rounded-lg p-4 bg-white shadow hover:shadow-md transition"
              >

                {/* Image */}
                <img
                  src={item.image}
                  className="h-40 w-full object-cover rounded"
                />

                {/* Info */}
                <h3 className="text-xl font-semibold mt-3">
                  {item.title}
                </h3>

                <p className="text-gray-600 text-sm">
                  {item.shortDescription}
                </p>

                <p className="text-blue-600 font-bold mt-2">
                  ${item.price}
                </p>

                {/* Actions */}
                <div className="flex gap-3 mt-4">

                  <button
                    onClick={() => handleDelete(item.id)}
                    className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                  >
                    Delete
                  </button>

                  <button
                    className="bg-gray-200 px-4 py-2 rounded"
                  >
                    View
                  </button>

                </div>

              </div>
            ))}
          </div>
        )}

      </div>
    </PrivateRoute>
  );
}