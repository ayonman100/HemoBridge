import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";

import {
  Menu,
  X,
  Bell,
  ChevronDown,
  LayoutDashboard,
  AlertTriangle,
  MapPin,
  Droplet,
  User,
  Search,
  ClipboardList,
  History,
  Users,
  Hospital,
  CheckCircle,
  BellRing,
  BarChart3,
} from "lucide-react";

function Topbar({ sidebarOpen, setSidebarOpen }) {
  const location = useLocation();
  const dropdownRef = useRef(null);

  const [dropdownOpen, setDropdownOpen] = useState(false);

  const portalConfigs = {
    donor: {
      portal: "Donor Portal",
      name: "Donor",
      role: "Blood Donor",
      initial: "D",
      profileLink: "/donor/profile",

      links: [
        {
          label: "Dashboard",
          path: "/donor/dashboard",
          icon: LayoutDashboard,
        },
        {
          label: "Blood Requests",
          path: "/donor/requests",
          icon: AlertTriangle,
        },
        {
          label: "Nearby Centres",
          path: "/donor/nearby-centres",
          icon: MapPin,
        },
        {
          label: "Donation History",
          path: "/donor/donation-history",
          icon: Droplet,
        },
        {
          label: "Profile",
          path: "/donor/profile",
          icon: User,
        },
      ],
    },

    hospital: {
      portal: "Hospital Portal",
      name: "Hospital",
      role: "Healthcare Organization",
      initial: "H",
      profileLink: "/hospital/profile",

      links: [
        {
          label: "Dashboard",
          path: "/hospital/dashboard",
          icon: LayoutDashboard,
        },
        {
          label: "Request Blood",
          path: "/hospital/request-blood",
          icon: AlertTriangle,
        },
        {
          label: "Search Blood",
          path: "/hospital/search-blood",
          icon: Search,
        },
        {
          label: "Requests",
          path: "/hospital/requests",
          icon: ClipboardList,
        },
        {
          label: "Request History",
          path: "/hospital/request-history",
          icon: History,
        },
        {
          label: "Profile",
          path: "/hospital/profile",
          icon: User,
        },
      ],
    },

    bloodbank: {
      portal: "Blood Bank Portal",
      name: "Blood Bank",
      role: "Blood Bank",
      initial: "B",
      profileLink: "/bloodbank/profile",

      links: [
        {
          label: "Dashboard",
          path: "/bloodbank/dashboard",
          icon: LayoutDashboard,
        },
        {
          label: "Inventory",
          path: "/bloodbank/inventory",
          icon: Droplet,
        },
        {
          label: "Requests",
          path: "/bloodbank/requests",
          icon: ClipboardList,
        },
        {
          label: "Profile",
          path: "/bloodbank/profile",
          icon: User,
        },
      ],
    },

    admin: {
      portal: "Admin Portal",
      name: "Administrator",
      role: "System Administrator",
      initial: "A",
      profileLink: "/admin/dashboard",

      links: [
        {
          label: "Dashboard",
          path: "/admin/dashboard",
          icon: LayoutDashboard,
        },
        {
          label: "Users",
          path: "/admin/users",
          icon: Users,
        },
        {
          label: "Hospitals",
          path: "/admin/hospitals",
          icon: Hospital,
        },
        {
          label: "Blood Banks",
          path: "/admin/blood-banks",
          icon: Droplet,
        },
        {
          label: "Donors",
          path: "/admin/donors",
          icon: Users,
        },
        {
          label: "Requests",
          path: "/admin/requests",
          icon: ClipboardList,
        },
        {
          label: "Verification",
          path: "/admin/verification",
          icon: CheckCircle,
        },
        {
          label: "Updates",
          path: "/admin/updates",
          icon: BellRing,
        },
        {
          label: "Reports",
          path: "/admin/reports",
          icon: BarChart3,
        },
      ],
    },
  };

  const getCurrentPortal = () => {
    const pathname = location.pathname;

    if (pathname.startsWith("/donor/")) return "donor";
    if (pathname.startsWith("/hospital/")) return "hospital";
    if (pathname.startsWith("/bloodbank/")) return "bloodbank";
    if (pathname.startsWith("/admin/")) return "admin";

    return null;
  };

  const currentPortal = getCurrentPortal();

  const portalInfo = currentPortal
    ? portalConfigs[currentPortal]
    : null;

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target)
      ) {
        setDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    setDropdownOpen(false);
  }, [location.pathname]);

  if (!portalInfo) {
    return null;
  }

  return (
    <header className="dashboard-topbar">

      {/* Left Side */}
      <div className="topbar-left">

        <button
          type="button"
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="topbar-menu-button"
          aria-label="Toggle sidebar"
        >
          {sidebarOpen ? (
            <X size={21} />
          ) : (
            <Menu size={21} />
          )}
        </button>

        <div className="topbar-portal">
          <p>{portalInfo.portal}</p>
        </div>

      </div>

      {/* Right Side */}
      <div className="topbar-right">

        {/* Notifications */}
        <button
          type="button"
          className="topbar-icon-button"
          aria-label="Notifications"
        >
          <Bell size={20} />
          <span className="notification-dot"></span>
        </button>

        {/* Profile */}
        <div
          ref={dropdownRef}
          className="topbar-profile-wrapper"
        >
          <button
            type="button"
            onClick={() =>
              setDropdownOpen((previous) => !previous)
            }
            className="topbar-profile-button"
            aria-expanded={dropdownOpen}
            aria-haspopup="true"
          >
            <div className="topbar-avatar">
              {portalInfo.initial}
            </div>

            <div className="topbar-user-info">
              <p>{portalInfo.name}</p>
              <span>{portalInfo.role}</span>
            </div>

            <ChevronDown
              size={17}
              className={`topbar-chevron ${
                dropdownOpen ? "topbar-chevron-open" : ""
              }`}
            />
          </button>

          {/* Dropdown */}
          {dropdownOpen && (
            <div className="topbar-dropdown">

              <div className="topbar-dropdown-header">
                <p>Quick Navigation</p>
                <span>{portalInfo.portal}</span>
              </div>

              <div className="topbar-dropdown-links">
                {portalInfo.links.map((link) => {
                  const Icon = link.icon;

                  const isActive =
                    location.pathname === link.path;

                  return (
                    <Link
                      key={link.path}
                      to={link.path}
                      onClick={() => setDropdownOpen(false)}
                      className={`topbar-dropdown-link ${
                        isActive
                          ? "topbar-dropdown-link-active"
                          : ""
                      }`}
                    >
                      <Icon size={18} />

                      <span>{link.label}</span>
                    </Link>
                  );
                })}
              </div>

              <div className="topbar-dropdown-footer">
                <Link
                  to={portalInfo.profileLink}
                  onClick={() => setDropdownOpen(false)}
                  className="topbar-dropdown-link"
                >
                  <User size={18} />

                  <span>Account Profile</span>
                </Link>
              </div>

            </div>
          )}
        </div>

      </div>

    </header>
  );
}

export default Topbar;