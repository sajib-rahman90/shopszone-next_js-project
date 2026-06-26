"use client";

import Link from "next/link";
import { useAuth } from "@/providers/AuthProvider";
import { signOut } from "firebase/auth";
import { auth } from "@/firebase/firebase.config";
import { useState, useRef, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const { user } = useAuth();
  const [open, setOpen] = useState(false);
  const [menu, setMenu] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-5 py-4 flex justify-between items-center relative">
        <Link
          href="/"
          className="text-2xl font-bold text-blue-600 tracking-tight"
        >
          ShopsZone
        </Link>

        {/* Mobile Button */}
        <button
          className="md:hidden text-2xl text-gray-700 focus:outline-none"
          onClick={() => setMenu(!menu)}
        >
          {menu ? <FaTimes /> : <FaBars />}
        </button>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 items-center">
          <Link
            href="/"
            className="text-gray-600 hover:text-blue-600 font-medium transition"
          >
            Home
          </Link>
          <Link
            href="/items"
            className="text-gray-600 hover:text-blue-600 font-medium transition"
          >
            Items
          </Link>
          <Link
            href="/about"
            className="text-gray-600 hover:text-blue-600 font-medium transition"
          >
            About
          </Link>

          {!user ? (
            <Link
              href="/login"
              className="bg-blue-600 text-white px-6 py-2.5 rounded-lg font-medium hover:bg-blue-700 transition shadow-sm"
            >
              Login
            </Link>
          ) : (
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setOpen(!open)}
                className="bg-gray-100 text-gray-800 border border-gray-200 px-4 py-2.5 rounded-lg font-medium flex items-center gap-2 hover:bg-gray-200 transition"
              >
                {user.email.split("@")[0]}
                <span className="text-[10px]">▼</span>
              </button>

              {open && (
                <div className="absolute right-0 mt-3 bg-white border border-gray-100 shadow-xl rounded-xl w-52 overflow-hidden z-50">
                  <Link
                    href="/items/add"
                    className="block px-5 py-3 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition border-b border-gray-50"
                    onClick={() => setOpen(false)}
                  >
                    Add Product
                  </Link>
                  <Link
                    href="/items/manage"
                    className="block px-5 py-3 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition border-b border-gray-50"
                    onClick={() => setOpen(false)}
                  >
                    Manage Products
                  </Link>
                  <button
                    onClick={() => {
                      signOut(auth);
                      setOpen(false);
                    }}
                    className="w-full text-left px-5 py-3 text-sm text-red-600 hover:bg-red-50 transition"
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {menu && (
        <div className="md:hidden bg-white border-t border-gray-100 absolute w-full left-0 shadow-xl pb-6 px-5 z-40">
          <div className="flex flex-col gap-4 mt-5">
            <Link
              href="/"
              className="text-gray-700 font-medium text-lg"
              onClick={() => setMenu(false)}
            >
              Home
            </Link>
            <Link
              href="/items"
              className="text-gray-700 font-medium text-lg"
              onClick={() => setMenu(false)}
            >
              Items
            </Link>
            <Link
              href="/about"
              className="text-gray-700 font-medium text-lg"
              onClick={() => setMenu(false)}
            >
              About
            </Link>

            {!user ? (
              <Link
                href="/login"
                className="bg-blue-600 text-center text-white px-5 py-3 rounded-lg font-medium mt-4 shadow-sm"
                onClick={() => setMenu(false)}
              >
                Login
              </Link>
            ) : (
              <div className="flex flex-col gap-4 pt-4 mt-2 border-t border-gray-100">
                <p className="text-sm text-gray-500">
                  Signed in as <br />
                  <span className="font-semibold text-gray-800 text-base">
                    {user.email}
                  </span>
                </p>
                <Link
                  href="/items/add"
                  className="text-gray-700 font-medium"
                  onClick={() => setMenu(false)}
                >
                  Add Product
                </Link>
                <Link
                  href="/items/manage"
                  className="text-gray-700 font-medium"
                  onClick={() => setMenu(false)}
                >
                  Manage Products
                </Link>
                <button
                  onClick={() => {
                    signOut(auth);
                    setMenu(false);
                  }}
                  className="text-left text-red-600 font-medium mt-2 bg-red-50 p-3 rounded-lg"
                >
                  Logout
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
