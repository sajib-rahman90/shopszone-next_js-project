"use client";

import { useState, useEffect } from "react";
import products from "@/data/products";
import PrivateRoute from "@/utils/PrivateRoute";
import toast, { Toaster } from "react-hot-toast";
import Link from "next/link";
import Image from "next/image";

export default function ManageItemsPage() {
  const [allProducts, setAllProducts] = useState(products);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    try {
      const local = JSON.parse(localStorage.getItem("products") || "[]");
      if (local.length > 0) {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setAllProducts([...products, ...local]);
      }
    } catch (e) {}
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setIsMounted(true);
  }, []);

  // DELETE FUNCTION
  const handleDelete = (id) => {
    const updatedLocal = allProducts.filter((item) => item.id !== id);
    setAllProducts(updatedLocal);
    const localOnly = updatedLocal.filter((item) => item.id > 1000000000);
    localStorage.setItem("products", JSON.stringify(localOnly));
    toast.success("Product deleted successfully");
  };

  if (!isMounted) {
    return (
      <PrivateRoute>
        <div className="max-w-6xl mx-auto px-5 py-10">
          <h1 className="text-3xl font-bold mb-6">Manage Products</h1>
          <div className="grid md:grid-cols-2 gap-6">
            {[1, 2, 3, 4].map((n) => (
              <div key={n} className="h-64 bg-gray-200 animate-pulse rounded-lg"></div>
            ))}
          </div>
        </div>
      </PrivateRoute>
    );
  }

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
                <div className="relative h-40 w-full mb-3 rounded overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover"
                  />
                </div>

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

                  <Link
                    href={`/items/${item.id}`}
                    className="bg-gray-200 px-4 py-2 rounded hover:bg-gray-300"
                  >
                    View
                  </Link>

                </div>

              </div>
            ))}
          </div>
        )}

      </div>
    </PrivateRoute>
  );
}