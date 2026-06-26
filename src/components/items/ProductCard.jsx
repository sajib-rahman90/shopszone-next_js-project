import Link from "next/link";
import Image from "next/image";

const ProductCard = ({ item }) => {
  return (
    <div className="group bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
      {/* Product Image */}
      <div className="relative overflow-hidden h-60 w-full">
        <Image
          src={item.image}
          alt={item.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover group-hover:scale-110 transition-transform duration-500"
        />

        {/* Badge */}
        <span className="absolute top-4 left-4 bg-blue-600 text-white text-xs font-medium px-3 py-1 rounded-full">
          New Arrival
        </span>
      </div>

      {/* Content */}
      <div className="p-5">
        {/* Category */}
        <p className="text-sm text-slate-500 mb-2">
          {item.category || "Product"}
        </p>

        {/* Title */}
        <h3 className="text-lg font-bold text-slate-900 line-clamp-1">
          {item.title}
        </h3>

        {/* Description */}
        <p className="text-slate-600 text-sm mt-3 line-clamp-2">
          {item.shortDescription}
        </p>

        {/* Price */}
        <div className="mt-4 flex items-center justify-between">
          <div>
            <p className="text-2xl font-bold text-blue-600">${item.price}</p>
          </div>
        </div>

        {/* Button */}
        <Link
          href={`/items/${item.id}`}
          className="mt-5 w-full inline-flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl font-medium transition duration-300"
        >
          View Details
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;
