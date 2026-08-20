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

          {/* ================= LOGO ================= */}

          <Link
            to="/home"
            onClick={closeMenu}
            className="flex items-center shrink-0"
          >
            <img
              src={logo}
              alt="HemoBridge"
              className="h-11 sm:h-12 md:h-14 w-auto object-contain"
            />
          </Link>


          {/* ================= DESKTOP NAVIGATION ================= */}

          <div className="hidden md:flex items-center gap-7 lg:gap-9 text-sm font-medium text-gray-600">

            <Link
              to="/hospitals"
              className="hover:text-red-600 transition-colors duration-200"
            >
              Hospitals
            </Link>

            <Link
              to="/about"
              className="hover:text-red-600 transition-colors duration-200"
            >
              About
            </Link>

          </div>


          {/* ================= DESKTOP ACTIONS ================= */}

          <div className="hidden md:flex items-center gap-3 shrink-0">

            {/* Login */}
            <Link
              to="/login"
              className="
                inline-flex
                items-center
                justify-center
                min-w-[100px]
                px-6
                py-3
                rounded-xl
                border-2
                border-red-600
                bg-white
                text-red-600
                font-semibold
                text-sm
                whitespace-nowrap
                hover:bg-red-50
                transition-all
                duration-200
              "
            >
              Log in
            </Link>


            {/* Get Started */}
            <Link
              to="/select-role"
              className="
                inline-flex
                items-center
                justify-center
                min-w-[130px]
                px-6
                py-3
                rounded-xl
                bg-red-600
                text-white
                font-semibold
                text-sm
                whitespace-nowrap
                shadow-sm
                hover:bg-red-700
                hover:shadow-md
                transition-all
                duration-200
              "
            >
              Get Started
            </Link>

          </div>


          {/* ================= MOBILE MENU BUTTON ================= */}

          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            className="
              md:hidden
              w-11
              h-11
              rounded-xl
              border
              border-gray-200
              flex
              items-center
              justify-center
              text-gray-700
              hover:text-red-600
              hover:border-red-300
              hover:bg-red-50
              transition-all
              duration-200
            "
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
                className="
                  w-full
                  px-4
                  py-3
                  rounded-xl
                  text-gray-700
                  font-medium
                  hover:bg-gray-50
                  hover:text-red-600
                  transition-colors
                  duration-200
                "
              >
                Hospitals
              </Link>


              {/* About */}

              <Link
                to="/about"
                onClick={closeMenu}
                className="
                  w-full
                  px-4
                  py-3
                  rounded-xl
                  text-gray-700
                  font-medium
                  hover:bg-gray-50
                  hover:text-red-600
                  transition-colors
                  duration-200
                "
              >
                About
              </Link>


              {/* Login */}

              <Link
                to="/login"
                onClick={closeMenu}
                className="
                  w-full
                  min-h-[48px]
                  px-5
                  py-3
                  rounded-xl
                  border-2
                  border-gray-200
                  bg-white
                  text-gray-700
                  font-semibold
                  text-center
                  flex
                  items-center
                  justify-center
                  hover:border-red-500
                  hover:text-red-600
                  hover:bg-red-50
                  transition-all
                  duration-200
                "
              >
                Log in
              </Link>


              {/* Get Started */}

              <Link
                to="/select-role"
                onClick={closeMenu}
                className="
                  w-full
                  min-h-[48px]
                  px-5
                  py-3
                  rounded-xl
                  bg-red-600
                  text-white
                  font-semibold
                  text-center
                  flex
                  items-center
                  justify-center
                  hover:bg-red-700
                  transition-all
                  duration-200
                "
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