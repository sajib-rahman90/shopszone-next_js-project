import products from "@/data/products";

const FeaturedProducts = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-5">
        <h2 className="text-3xl font-bold text-center mb-10">
          Featured Products
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {products.slice(0, 3).map((item) => (
            <div key={item.id} className="border rounded-lg p-4 bg-white">
              <img
                src={item.image}
                className="h-48 w-full object-cover rounded"
              />

              <h3 className="text-xl font-semibold mt-3">{item.title}</h3>

              <p className="text-gray-600 text-sm mt-2">
                {item.shortDescription}
              </p>

              <p className="mt-2 font-bold text-blue-600">${item.price}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
