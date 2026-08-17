import { Link } from "react-router-dom";
import {
  ArrowLeft,
  Building2,
  CheckCircle,
  Clock3,
  MapPin,
  Search,
  ShieldCheck,
  XCircle,
} from "lucide-react";

import "./BloodBanks.css";

function BloodBanks() {
  const bloodBanks = [
    {
      name: "Lagos Central Blood Bank",
      email: "admin@lagosbloodbank.ng",
      location: "Ikeja, Lagos",
      status: "Verified",
      units: 1248,
      requests: 36,
      registered: "Aug 8, 2026",
    },
    {
      name: "National Blood Service Centre",
      email: "info@nbsc.gov.ng",
      location: "Surulere, Lagos",
      status: "Verified",
      units: 2164,
      requests: 58,
      registered: "Aug 4, 2026",
    },
    {
      name: "HemoCare Blood Centre",
      email: "admin@hemocare.ng",
      location: "Victoria Island, Lagos",
      status: "Verified",
      units: 876,
      requests: 24,
      registered: "Jul 30, 2026",
    },
    {
      name: "LifeFlow Blood Bank",
      email: "admin@lifeflow.ng",
      location: "Yaba, Lagos",
      status: "Pending",
      units: 0,
      requests: 0,
      registered: "Aug 10, 2026",
    },
    {
      name: "Hope Blood Services",
      email: "admin@hopeblood.ng",
      location: "Lagos Island",
      status: "Suspended",
      units: 142,
      requests: 9,
      registered: "Jul 25, 2026",
    },
  ];

  const getStatusIcon = (status) => {
    if (status === "Verified") {
      return <CheckCircle size={14} />;
    }

    if (status === "Pending") {
      return <Clock3 size={14} />;
    }

    return <XCircle size={14} />;
  };

  return (
    <div className="admin-bloodbanks">

      {/* Header */}
      <section className="bloodbanks-header">

        <Link
          to="/admin/dashboard"
          className="bloodbanks-back"
        >
          <ArrowLeft size={16} />
          Back to Dashboard
        </Link>

        <div className="bloodbanks-header-row">

          <div>
            <h1>Blood Banks</h1>

            <p>
              Monitor and manage blood banks connected to HemoBridge.
            </p>
          </div>

          <Link
            to="/admin/verification"
            className="bloodbanks-review-btn"
          >
            <ShieldCheck size={18} />
            Review Verification
          </Link>

        </div>

      </section>

      {/* Statistics */}
      <section className="bloodbanks-stats">

        <div className="bloodbank-stat-card">
          <div className="bloodbank-stat-icon total">
            <Building2 size={22} />
          </div>

          <p>Total Blood Banks</p>

          <h2>24</h2>

          <span>Registered facilities</span>
        </div>

        <div className="bloodbank-stat-card">
          <div className="bloodbank-stat-icon verified">
            <CheckCircle size={22} />
          </div>

          <p>Verified</p>

          <h2>21</h2>

          <span>Approved blood banks</span>
        </div>

        <div className="bloodbank-stat-card">
          <div className="bloodbank-stat-icon units">
            <Building2 size={22} />
          </div>

          <p>Blood Units</p>

          <h2>4,826</h2>

          <span>Units across the network</span>
        </div>

        <div className="bloodbank-stat-card">
          <div className="bloodbank-stat-icon pending">
            <Clock3 size={22} />
          </div>

          <p>Pending</p>

          <h2>2</h2>

          <span>Awaiting verification</span>
        </div>

      </section>

      {/* Filters */}
      <section className="bloodbanks-filters">

        <div className="bloodbanks-filter-group">

          <select defaultValue="all">
            <option value="all">All Statuses</option>
            <option value="verified">Verified</option>
            <option value="pending">Pending</option>
            <option value="suspended">Suspended</option>
          </select>

          <select defaultValue="all">
            <option value="all">All Locations</option>
            <option value="ikeja">Ikeja</option>
            <option value="surulere">Surulere</option>
            <option value="yaba">Yaba</option>
            <option value="island">Lagos Island</option>
          </select>

        </div>

        <div className="bloodbanks-search">
          <Search size={18} />

          <input
            type="text"
            placeholder="Search blood banks..."
          />
        </div>

      </section>

      {/* Blood Banks Table */}
      <section className="bloodbanks-table-card">

        <div className="bloodbanks-table-header">
          <div>
            <h2>Registered Blood Banks</h2>

            <p>
              Blood banks currently connected to the platform.
            </p>
          </div>

          <span>
            {bloodBanks.length} facilities
          </span>
        </div>

        {/* Desktop */}
        <div className="bloodbanks-desktop-table">

          <table>

            <thead>
              <tr>
                <th>Blood Bank</th>
                <th>Location</th>
                <th>Units</th>
                <th>Requests</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>

              {bloodBanks.map((bank) => (

                <tr key={bank.email}>

                  <td>
                    <div className="bloodbank-name-cell">

                      <div className="bloodbank-avatar">
                        <Building2 size={20} />
                      </div>

                      <div>
                        <strong>{bank.name}</strong>
                        <span>{bank.email}</span>
                      </div>

                    </div>
                  </td>

                  <td>
                    <div className="bloodbank-location">
                      <MapPin size={15} />
                      {bank.location}
                    </div>
                  </td>

                  <td>
                    <strong className="bloodbank-units">
                      {bank.units.toLocaleString()}
                    </strong>
                  </td>

                  <td>
                    <strong>{bank.requests}</strong>
                  </td>

                  <td>
                    <span
                      className={`bloodbank-status ${bank.status.toLowerCase()}`}
                    >
                      {getStatusIcon(bank.status)}
                      {bank.status}
                    </span>
                  </td>

                  <td>
                    <button className="bloodbank-view-btn">
                      View
                    </button>
                  </td>

                </tr>

              ))}

            </tbody>

          </table>

        </div>

        {/* Mobile */}
        <div className="bloodbanks-mobile">

          {bloodBanks.map((bank) => (

            <div
              key={bank.email}
              className="bloodbank-mobile-card"
            >

              <div className="bloodbank-mobile-top">

                <div className="bloodbank-avatar">
                  <Building2 size={20} />
                </div>

                <div className="bloodbank-mobile-title">

                  <div className="bloodbank-mobile-name-row">

                    <strong>{bank.name}</strong>

                    <span
                      className={`bloodbank-status ${bank.status.toLowerCase()}`}
                    >
                      {getStatusIcon(bank.status)}
                      {bank.status}
                    </span>

                  </div>

                  <span>{bank.email}</span>

                </div>

              </div>

              <div className="bloodbank-mobile-info">

                <div>
                  <span>Location</span>
                  <strong>{bank.location}</strong>
                </div>

                <div>
                  <span>Blood Units</span>
                  <strong className="bloodbank-units">
                    {bank.units.toLocaleString()}
                  </strong>
                </div>

                <div>
                  <span>Requests</span>
                  <strong>{bank.requests}</strong>
                </div>

                <div>
                  <span>Registered</span>
                  <strong>{bank.registered}</strong>
                </div>

              </div>

              <button className="bloodbank-mobile-view">
                View Blood Bank
              </button>

            </div>

          ))}

        </div>

      </section>

    </div>
  );
}

export default BloodBanks;