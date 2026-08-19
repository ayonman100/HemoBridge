import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logo from "../../assets/logos/hemobridge logo.jpeg";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="w-full bg-white border-b border-gray-200 relative z-50">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ================= DESKTOP / TOP BAR ================= */}

        <div className="min-h-[76px] flex items-center justify-between gap-6">

          {/* Logo */}
          <Link
            to="/home"
            onClick={closeMenu}
            className="flex items-center shrink-0"
          >
            <img
              src={logo}
              alt="HemoBridge"
              className="h-12 sm:h-14 w-auto object-contain"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-600">

            <Link
              to="/hospitals"
              className="hover:text-red-600 transition"
            >
              Hospitals
            </Link>

            <Link
              to="/about"
              className="hover:text-red-600 transition"
            >
              About
            </Link>

          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-3 shrink-0">

            <Link
              to="/login"
             className="inline-flex items-center justify-center px-5 py-2.5 rounded-lg bg-red-600 text-white font-medium hover:bg-red-700 transition"
            >
              Log in
            </Link>

            <Link
              to="/select-role"
              className="inline-flex items-center justify-center px-5 py-2.5 rounded-lg bg-red-600 text-white font-medium hover:bg-red-700 transition"
            >
              Get Started
            </Link>

          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden w-11 h-11 rounded-lg border border-gray-200 flex items-center justify-center text-gray-700 hover:text-red-600 hover:border-red-300 transition"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
          >
            {menuOpen ? (
              <X size={24} />
            ) : (
              <Menu size={24} />
            )}
          </button>

        </div>

        {/* ================= MOBILE MENU ================= */}

        {menuOpen && (
          <div className="md:hidden border-t border-gray-100 py-5">

            <div className="flex flex-col gap-2">

              {/* Hospitals */}
              <Link
                to="/hospitals"
                onClick={closeMenu}
                className="w-full px-4 py-3 rounded-lg text-gray-700 font-medium hover:bg-gray-50 hover:text-red-600 transition"
              >
                Hospitals
              </Link>

              {/* About */}
              <Link
                to="/about"
                onClick={closeMenu}
                className="w-full px-4 py-3 rounded-lg text-gray-700 font-medium hover:bg-gray-50 hover:text-red-600 transition"
              >
                About
              </Link>

              {/* Login */}
              <Link
                to="/login"
                onClick={closeMenu}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 text-gray-700 font-medium text-center hover:border-red-500 hover:text-red-600 transition"
              >
                Log in
              </Link>

              {/* Get Started */}
              <Link
                to="/select-role"
                onClick={closeMenu}
                className="w-full px-4 py-3 rounded-lg border border-red-600 text-red-600 font-medium text-center hover:bg-red-50 transition"
              >
                Get Started
              </Link>

            </div>

          </div>
        )}

      </div>

    </nav>
  );
}

export default Navbar;