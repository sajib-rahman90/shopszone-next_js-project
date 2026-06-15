const WhyChooseUs = () => {
  return (
    <section className="py-16 max-w-7xl mx-auto px-5">
      <h2 className="text-3xl font-bold text-center mb-10">Why Choose Us</h2>

      <div className="grid md:grid-cols-3 gap-6 text-center">
        <div className="p-6 border rounded-lg">
          <h3 className="text-xl font-semibold">Fast Delivery</h3>
          <p className="text-gray-600 mt-2">
            We deliver products quickly and safely.
          </p>
        </div>

        <div className="p-6 border rounded-lg">
          <h3 className="text-xl font-semibold">Best Quality</h3>
          <p className="text-gray-600 mt-2">We ensure high quality products.</p>
        </div>

        <div className="p-6 border rounded-lg">
          <h3 className="text-xl font-semibold">24/7 Support</h3>
          <p className="text-gray-600 mt-2">We are always here to help you.</p>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
