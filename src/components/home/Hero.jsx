const Hero = () => {
  return (
    <section className="bg-blue-50 py-20">
      <div className="max-w-7xl mx-auto px-5 flex flex-col md:flex-row items-center justify-between">
        <div className="md:w-1/2">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Find the Best Products for Your Lifestyle
          </h1>

          <p className="mt-4 text-gray-600">
            Explore high quality products with affordable prices and fast
            delivery.
          </p>

          <button className="mt-6 bg-blue-600 text-white px-6 py-3 rounded">
            Shop Now
          </button>
        </div>

        <div className="md:w-1/2 mt-10 md:mt-0">
          <img
            src="https://images.unsplash.com/photo-1523275335684-37898b6baf30"
            className="rounded-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
