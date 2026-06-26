import { FaGithub, FaLinkedin, FaTwitter, FaFacebook } from "react-icons/fa";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 mt-20 border-t border-slate-800">
      <div className="max-w-7xl mx-auto py-16 px-5">
        <div className="grid md:grid-cols-3 gap-12 text-center md:text-left">
          {/* Brand Info */}
          <div>
            <h2 className="text-2xl font-bold text-white tracking-tight">
              ShopsZone
            </h2>
            <p className="mt-4 text-sm text-slate-400 max-w-sm mx-auto md:mx-0 leading-relaxed">
              Your one-stop destination for modern, high-quality products. We
              ensure a seamless and secure shopping experience.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-lg font-semibold text-white mb-5">
              Quick Links
            </h3>
            <div className="flex flex-col gap-3">
              <Link href="/" className="hover:text-blue-400 transition">
                Home
              </Link>
              <Link href="/items" className="hover:text-blue-400 transition">
                Products
              </Link>
              <Link href="/about" className="hover:text-blue-400 transition">
                About Us
              </Link>
              <Link href="/login" className="hover:text-blue-400 transition">
                Login
              </Link>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-lg font-semibold text-white mb-5">Follow Us</h3>
            <div className="flex gap-5">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-white transition transform hover:scale-110"
              >
                <FaGithub size={24} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-blue-500 transition transform hover:scale-110"
              >
                <FaLinkedin size={24} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-blue-400 transition transform hover:scale-110"
              >
                <FaTwitter size={24} />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-blue-600 transition transform hover:scale-110"
              >
                <FaFacebook size={24} />
              </a>
            </div>
            <p className="mt-6 text-sm text-slate-500 max-w-xs">
              Stay connected with us on social media for updates and offers.
            </p>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-16 pt-8 border-t border-slate-800 text-center text-sm text-slate-500 flex flex-col md:flex-row justify-between items-center">
          <p>© {new Date().getFullYear()} ShopsZone. All Rights Reserved.</p>
          <div className="mt-4 md:mt-0 space-x-4">
            <Link href="#" className="hover:text-white transition">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-white transition">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
