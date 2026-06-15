import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 bg-white shadow">
      <div className="max-w-7xl mx-auto px-5 py-4 flex justify-between">
        <h2 className="text-2xl font-bold text-blue-600">ShopsZone</h2>

        <div className="flex gap-5">
          <Link href="/">Home</Link>
          <Link href="/items">Items</Link>
          <Link href="/about">About</Link>
          <Link href="/login">Login</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
