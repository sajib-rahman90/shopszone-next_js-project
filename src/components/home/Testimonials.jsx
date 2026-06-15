const Testimonials = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-5 text-center">
        <h2 className="text-3xl font-bold mb-10">What Customers Say</h2>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="p-6 border rounded-lg bg-white">
            <p>Amazing service and fast delivery. Highly recommended!</p>
            <h4 className="mt-3 font-semibold">- Rahim</h4>
          </div>

          <div className="p-6 border rounded-lg bg-white">
            <p>Quality products at affordable prices.</p>
            <h4 className="mt-3 font-semibold">- Karim</h4>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
