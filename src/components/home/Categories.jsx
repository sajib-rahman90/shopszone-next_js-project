import { FaMobileAlt, FaLaptop, FaTshirt } from "react-icons/fa";

const categories = [
  { name: "Electronics", icon: <FaLaptop size={30} /> },
  { name: "Fashion", icon: <FaTshirt size={30} /> },
  { name: "Mobile", icon: <FaMobileAlt size={30} /> },
];

const Categories = () => {
  return (
    <section className="py-16 max-w-7xl mx-auto px-5">
      <h2 className="text-3xl font-bold text-center mb-10">Categories</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {categories.map((cat, i) => (
          <div
            key={i}
            className="p-6 border rounded-lg text-center hover:shadow-lg transition"
          >
            <div className="flex justify-center mb-3 text-blue-600">
              {cat.icon}
            </div>
            <h3 className="text-xl font-semibold">{cat.name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Categories;
