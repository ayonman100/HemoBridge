import { Link, useLocation } from "react-router-dom";
import {
  LayoutDashboard,
  AlertTriangle,
  Droplet,
  MapPin,
  User,
  Search,
  ClipboardList,
  History,
  Users,
  Hospital,
  CheckCircle,
  Bell,
  BarChart3,
} from "lucide-react";

function Sidebar({ sidebarOpen, setSidebarOpen }) {
  const location = useLocation();

  const portalConfigs = {
    donor: {
      name: "Donor Portal",
      homePath: "/donor/dashboard",
      menuItems: [
        {
          name: "Dashboard",
          path: "/donor/dashboard",
          icon: LayoutDashboard,
        },
        {
          name: "Blood Requests",
          path: "/donor/requests",
          icon: AlertTriangle,
        },
        {
          name: "Donation History",
          path: "/donor/donation-history",
          icon: Droplet,
        },
        {
          name: "Nearby Centres",
          path: "/donor/nearby-centres",
          icon: MapPin,
        },
        {
          name: "Profile",
          path: "/donor/profile",
          icon: User,
        },
      ],
    },

    hospital: {
      name: "Hospital Portal",
      homePath: "/hospital/dashboard",
      menuItems: [
        {
          name: "Dashboard",
          path: "/hospital/dashboard",
          icon: LayoutDashboard,
        },
        {
          name: "Request Blood",
          path: "/hospital/request-blood",
          icon: AlertTriangle,
        },
        {
          name: "Search Blood",
          path: "/hospital/search-blood",
          icon: Search,
        },
        {
          name: "Requests",
          path: "/hospital/requests",
          icon: ClipboardList,
        },
        {
          name: "Request History",
          path: "/hospital/request-history",
          icon: History,
        },
        {
          name: "Profile",
          path: "/hospital/profile",
          icon: User,
        },
      ],
    },

    bloodbank: {
      name: "Blood Bank Portal",
      homePath: "/bloodbank/dashboard",
      menuItems: [
        {
          name: "Dashboard",
          path: "/bloodbank/dashboard",
          icon: LayoutDashboard,
        },
        {
          name: "Inventory",
          path: "/bloodbank/inventory",
          icon: Droplet,
        },
        {
          name: "Requests",
          path: "/bloodbank/requests",
          icon: ClipboardList,
        },
        {
          name: "Profile",
          path: "/bloodbank/profile",
          icon: User,
        },
      ],
    },

    admin: {
      name: "Admin Portal",
      homePath: "/admin/dashboard",
      menuItems: [
        {
          name: "Dashboard",
          path: "/admin/dashboard",
          icon: LayoutDashboard,
        },
        {
          name: "Users",
          path: "/admin/users",
          icon: Users,
        },
        {
          name: "Hospitals",
          path: "/admin/hospitals",
          icon: Hospital,
        },
        {
          name: "Blood Banks",
          path: "/admin/blood-banks",
          icon: Droplet,
        },
        {
          name: "Donors",
          path: "/admin/donors",
          icon: Users,
        },
        {
          name: "Requests",
          path: "/admin/requests",
          icon: ClipboardList,
        },
        {
          name: "Verification",
          path: "/admin/verification",
          icon: CheckCircle,
        },
        {
          name: "Updates",
          path: "/admin/updates",
          icon: Bell,
        },
        {
          name: "Reports",
          path: "/admin/reports",
          icon: BarChart3,
        },
      ],
    },
  };

  const getCurrentPortal = () => {
    const pathname = location.pathname;

    if (pathname.startsWith("/donor/")) {
      return "donor";
    }

    if (pathname.startsWith("/hospital/")) {
      return "hospital";
    }

    if (pathname.startsWith("/bloodbank/")) {
      return "bloodbank";
    }

    if (pathname.startsWith("/admin/")) {
      return "admin";
    }

    return null;
  };

  const currentPortal = getCurrentPortal();

  const portalInfo = currentPortal
    ? portalConfigs[currentPortal]
    : null;

  if (!portalInfo) {
    return null;
  }

  return (
    <>
      {sidebarOpen && (
        <div
          className="sidebar-overlay"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      <aside
        className={`dashboard-sidebar ${
          sidebarOpen ? "sidebar-open" : ""
        }`}
      >
        {/* Header */}
        <div className="sidebar-header">
          <Link
            to={portalInfo.homePath}
            onClick={() => setSidebarOpen(false)}
            className="sidebar-logo"
          >
            HemoBridge
          </Link>

          <button
            type="button"
            onClick={() => setSidebarOpen(false)}
            className="sidebar-close"
            aria-label="Close sidebar"
          >
            ✕
          </button>
        </div>

        {/* Portal */}
        <div className="sidebar-portal">
          <span>{portalInfo.name}</span>
        </div>

        {/* Navigation */}
        <nav className="sidebar-navigation">
          <p className="sidebar-menu-title">Menu</p>

          <div className="sidebar-menu">
            {portalInfo.menuItems.map((item) => {
              const active = location.pathname === item.path;
              const Icon = item.icon;

              return (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setSidebarOpen(false)}
                  className={`sidebar-link ${
                    active ? "sidebar-link-active" : ""
                  }`}
                >
                  <span className="sidebar-icon">
                    <Icon size={20} strokeWidth={2} />
                  </span>

                  <span>{item.name}</span>
                </Link>
              );
            })}
          </div>
        </nav>
      </aside>
    </>
  );
}

export default Sidebar;