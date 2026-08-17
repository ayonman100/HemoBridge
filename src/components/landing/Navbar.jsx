import { Link } from "react-router-dom";
import logo from "../../assets/logos/hemobridge logo.jpeg";

function Navbar() {
  return (
    <nav className="w-full bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">

        {/* Logo */}
        <Link to="/home" className="flex items-center">
          <img
            src={logo}
            alt="HemoBridge"
            className="h-14 w-auto object-contain"
          />
        </Link>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center gap-8 text-gray-600">

          

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

        {/* Emergency Request */}
        <Link
          to="/select-role"
          className="bg-red-600 text-white px-5 py-2.5 rounded-lg hover:bg-red-700 transition"
        >
          Get Started
        </Link>

        <Link
          to="/login"
          className="bg-red-600 text-white px-5 py-2.5 rounded-lg hover:bg-red-700 transition"
        >
          Log in
        </Link>

      </div>
    </nav>
  );
}

export default Navbar;