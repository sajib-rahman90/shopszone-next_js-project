import Link from "next/link";

const ProductCard = ({ item }) => {
  return (
    <div className="border rounded-lg p-4 hover:shadow-lg transition bg-white">
      <img
        src={item.image}
        alt={item.title}
        className="h-48 w-full object-cover rounded"
      />

      <h3 className="text-xl font-semibold mt-3">{item.title}</h3>

      <p className="text-gray-600 text-sm mt-2">{item.shortDescription}</p>

      <p className="mt-2 font-bold text-blue-600">${item.price}</p>

      <Link
        href={`/items/${item.id}`}
        className="inline-block mt-4 bg-blue-600 text-white px-4 py-2 rounded"
      >
        View Details
      </Link>
    </div>
  );
};

export default ProductCard;
