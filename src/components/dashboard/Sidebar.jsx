import { NavLink } from "react-router-dom";

function Sidebar() {
  const navItems = [
    {
      name: "Dashboard",
      path: "/donor/dashboard",
      icon: "🏠",
    },
    {
      name: "Requests",
      path: "/donor/requests",
      icon: "🚨",
    },
    {
      name: "Donation History",
      path: "/donor/donation-history",
      icon: "🩸",
    },
    {
      name: "Nearby Centres",
      path: "/donor/nearby-centres",
      icon: "📍",
    },
    {
      name: "Profile",
      path: "/donor/profile",
      icon: "👤",
    },
  ];

  return (
    <aside className="hidden md:flex w-64 bg-white border-r border-gray-200 min-h-screen flex-col">

      {/* Logo */}
      <div className="px-6 py-6 border-b border-gray-100">

        <h1 className="text-2xl font-bold text-red-600">
          HemoBridge
        </h1>

        <p className="text-xs text-gray-500 mt-1">
          Connecting Blood. Saving Lives.
        </p>

      </div>

      {/* Navigation */}
      <nav className="flex-1 px-4 py-6 space-y-2">

        {navItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              `flex items-center gap-3 px-4 py-3 rounded-lg transition ${
                isActive
                  ? "bg-red-50 text-red-600 font-semibold"
                  : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
              }`
            }
          >
            <span className="text-lg">
              {item.icon}
            </span>

            <span>
              {item.name}
            </span>
          </NavLink>
        ))}

      </nav>

      {/* Logout */}
      <div className="p-4 border-t border-gray-100">

        <button
          type="button"
          className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-gray-600 hover:bg-red-50 hover:text-red-600 transition"
        >
          <span>
            🚪
          </span>

          <span>
            Logout
          </span>
        </button>

      </div>

    </aside>
  );
}

export default Sidebar;