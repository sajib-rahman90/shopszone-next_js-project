"use client";

import products from "@/data/products";
import Link from "next/link";
import { useParams } from "next/navigation";

export default function ItemDetailsPage() {
  const { id } = useParams();

  const product = products.find((item) => item.id === Number(id));

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

  const related = products.filter(
    (item) => item.category === product.category && item.id !== product.id,
  );

  return (
    <div className="max-w-6xl mx-auto px-5 py-10">
      {/* Back Button */}
      <Link href="/items" className="text-blue-600 font-medium">
        ← Back to Items
      </Link>

      {/* Main Section */}
      <div className="grid md:grid-cols-2 gap-10 mt-6">
        {/* Image */}
        <div className="rounded-xl overflow-hidden shadow-lg">
          <img
            src={product.image}
            alt={product.title}
            className="w-full h-[400px] object-cover"
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
              {product.specifications.map((spec, i) => (
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
          {related.map((item) => (
            <Link
              key={item.id}
              href={`/items/${item.id}`}
              className="border rounded-lg p-4 hover:shadow-lg transition block"
            >
              <img
                src={item.image}
                className="h-40 w-full object-cover rounded"
              />
              <h3 className="mt-3 font-semibold">{item.title}</h3>
              <p className="text-blue-600 font-bold">${item.price}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
