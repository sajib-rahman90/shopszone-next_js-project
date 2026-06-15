const Newsletter = () => {
  return (
    <section className="py-16 max-w-7xl mx-auto px-5 text-center">
      <h2 className="text-3xl font-bold">Subscribe to Newsletter</h2>

      <p className="text-gray-600 mt-2">Get latest updates and offers</p>

      <div className="mt-6 flex flex-col md:flex-row justify-center gap-3">
        <input
          type="email"
          placeholder="Enter your email"
          className="border px-4 py-2 rounded w-full md:w-1/3"
        />

        <button className="bg-blue-600 text-white px-6 py-2 rounded">
          Subscribe
        </button>
      </div>
    </section>
  );
};

export default Newsletter;
