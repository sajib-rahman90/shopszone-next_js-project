"use client";

import { useEffect, useState } from "react";
import products from "@/data/products";
import Link from "next/link";
import { useParams } from "next/navigation";
import Image from "next/image";

export default function ItemDetailsPage() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [related, setRelated] = useState([]);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    let allProducts = [...products];
    try {
      const localProducts = JSON.parse(localStorage.getItem("products") || "[]");
      if (localProducts.length > 0) {
        allProducts = [...products, ...localProducts];
      }
    } catch (e) {}
    
    const foundProduct = allProducts.find((item) => item.id === Number(id));
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setProduct(foundProduct || null);

    if (foundProduct) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setRelated(allProducts.filter(
        (item) => item.category === foundProduct.category && item.id !== foundProduct.id
      ));
    }
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setIsMounted(true);
  }, [id]);

  if (!isMounted) {
    return (
      <div className="max-w-6xl mx-auto px-5 py-10">
        <div className="animate-pulse flex flex-col md:flex-row gap-10">
          <div className="w-full md:w-1/2 h-96 bg-gray-200 rounded-xl"></div>
          <div className="w-full md:w-1/2 space-y-4">
            <div className="h-8 bg-gray-200 rounded w-3/4"></div>
            <div className="h-4 bg-gray-200 rounded w-full"></div>
            <div className="h-4 bg-gray-200 rounded w-5/6"></div>
          </div>
        </div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="max-w-4xl mx-auto py-20 text-center">
        <h1 className="text-2xl font-bold">Product not found</h1>
        <Link href="/items" className="text-blue-600 mt-4 inline-block">
          Back to Items
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-5 py-10">
      {/* Back Button */}
      <Link href="/items" className="text-blue-600 font-medium hover:underline">
        ← Back to Items
      </Link>

      {/* Main Section */}
      <div className="grid md:grid-cols-2 gap-10 mt-6">
        {/* Image */}
        <div className="rounded-xl overflow-hidden shadow-lg relative h-[400px]">
          <Image
            src={product.image}
            alt={product.title}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
          />
        </div>

        {/* Details */}
        <div>
          <h1 className="text-3xl font-bold">{product.title}</h1>

          <p className="text-gray-600 mt-3">{product.fullDescription}</p>

          <p className="text-blue-600 font-bold text-2xl mt-4">
            ${product.price}
          </p>

          <div className="mt-3">
            <span className="bg-gray-200 px-3 py-1 rounded">
              {product.category}
            </span>
          </div>

          {/* Specifications */}
          <div className="mt-6">
            <h3 className="text-xl font-semibold mb-2">Specifications</h3>

            <ul className="list-disc ml-5 text-gray-600">
              {product.specifications?.map((spec, i) => (
                <li key={i}>{spec}</li>
              ))}
            </ul>
          </div>

          <button className="mt-6 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition">
            Buy Now
          </button>
        </div>
      </div>

      {/* Related Products */}
      <div className="mt-16">
        <h2 className="text-2xl font-bold mb-6">Related Products</h2>

        <div className="grid md:grid-cols-3 gap-6">
          {related.slice(0, 3).map((item) => (
            <Link
              key={item.id}
              href={`/items/${item.id}`}
              className="border rounded-lg p-4 hover:shadow-lg transition block"
            >
              <div className="relative h-40 w-full mb-3">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover rounded"
                />
              </div>
              <h3 className="mt-3 font-semibold">{item.title}</h3>
              <p className="text-blue-600 font-bold">${item.price}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
