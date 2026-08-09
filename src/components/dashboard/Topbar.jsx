import { Link } from "react-router-dom";

function Topbar() {
  return (
    <header className="bg-white border-b border-gray-200">

      <div className="px-6 py-4 flex items-center justify-between">

        {/* Mobile Logo */}
        <div className="md:hidden">
          <h1 className="text-xl font-bold text-red-600">
            HemoBridge
          </h1>
        </div>

        {/* Search */}
        <div className="hidden md:block">
          <input
            type="text"
            placeholder="Search..."
            className="w-72 border border-gray-200 rounded-lg px-4 py-2.5 outline-none focus:ring-2 focus:ring-red-500"
          />
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-5">

          {/* Notifications */}
          <button
            type="button"
            className="relative text-gray-600 hover:text-red-600"
          >
            🔔

            <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-red-600 rounded-full"></span>
          </button>

          {/* Profile */}
          <Link
            to="/donor/profile"
            className="flex items-center gap-3"
          >

            <div className="w-9 h-9 rounded-full bg-red-100 flex items-center justify-center text-red-600 font-semibold">
              D
            </div>

            <div className="hidden sm:block">

              <p className="text-sm font-semibold text-gray-900">
                Donor
              </p>

              <p className="text-xs text-gray-500">
                Blood Donor
              </p>

            </div>

          </Link>

        </div>

      </div>

    </header>
  );
}

export default Topbar;