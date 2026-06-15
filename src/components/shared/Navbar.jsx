"use client";

import Link from "next/link";
import { useAuth } from "@/providers/AuthProvider";
import { signOut } from "firebase/auth";
import { auth } from "@/firebase/firebase.config";
import { useState } from "react";

const Navbar = () => {
  const { user } = useAuth();
  const [open, setOpen] = useState(false);
  const [menu, setMenu] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white shadow">
      <div className="max-w-7xl mx-auto px-5 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-blue-600">
          RevenioShop
        </Link>

        {/* Mobile Button */}
        <button className="md:hidden" onClick={() => setMenu(!menu)}>
          ☰
        </button>

        {/* Menu */}
        <div
          className={`${menu ? "block" : "hidden"} md:flex gap-6 items-center`}
        >
          <Link href="/">Home</Link>
          <Link href="/items">Items</Link>
          <Link href="/about">About</Link>

          {!user ? (
            <>
              <Link href="/login">Login</Link>
            </>
          ) : (
            <div className="relative">
              <button
                onClick={() => setOpen(!open)}
                className="bg-blue-600 text-white px-3 py-1 rounded"
              >
                {user.email}
              </button>

              {open && (
                <div className="absolute right-0 mt-2 bg-white border shadow rounded w-48">
                  <Link
                    href="/items/add"
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    Add Product
                  </Link>
                  <Link
                    href="/items/manage"
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    Manage Products
                  </Link>
                  <button
                    onClick={() => signOut(auth)}
                    className="w-full text-left px-4 py-2 hover:bg-gray-100"
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
