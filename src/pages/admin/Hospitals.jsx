import { Link } from "react-router-dom";
import {
  ArrowLeft,
  Hospital,
  CheckCircle,
  Clock,
  Ban,
  Search,
  Eye,
} from "lucide-react";

import "./Hospitals.css";

function Hospitals() {
  const hospitals = [
    {
      name: "Mainland General Hospital",
      email: "admin@mainlandhospital.ng",
      location: "Lagos Mainland",
      status: "Verified",
      requests: 42,
      registered: "Aug 9, 2026",
    },
    {
      name: "Lagos University Teaching Hospital",
      email: "admin@luth.gov.ng",
      location: "Idi-Araba, Lagos",
      status: "Verified",
      requests: 67,
      registered: "Aug 7, 2026",
    },
    {
      name: "Reddington Hospital",
      email: "admin@reddington.ng",
      location: "Victoria Island",
      status: "Verified",
      requests: 31,
      registered: "Aug 5, 2026",
    },
    {
      name: "St. Nicholas Hospital",
      email: "admin@stnicholashospital.com",
      location: "Lagos Island",
      status: "Pending",
      requests: 0,
      registered: "Aug 10, 2026",
    },
    {
      name: "Mercy Medical Centre",
      email: "admin@mercymedical.ng",
      location: "Surulere, Lagos",
      status: "Suspended",
      requests: 12,
      registered: "Jul 28, 2026",
    },
  ];

  return (
    <div className="hospitals-page">

      {/* Header */}
      <section className="hospitals-header">

        <Link
          to="/admin/dashboard"
          className="back-link"
        >
          <ArrowLeft size={16} />
          <span>Back to Dashboard</span>
        </Link>

        <div className="header-content">

          <div>
            <h1>Hospitals</h1>

            <p>
              Manage hospitals connected to the HemoBridge network.
            </p>
          </div>

          <Link
            to="/admin/verification"
            className="verification-button"
          >
            Review Verification
          </Link>

        </div>

      </section>

      {/* Statistics */}
      <section className="hospital-stats">

        <div className="stat-card">

          <div className="stat-card-content">

            <div>
              <p>Total Hospitals</p>

              <h2>86</h2>

              <span>Registered facilities</span>
            </div>

            <div className="stat-icon stat-icon-blue">
              <Hospital size={22} />
            </div>

          </div>

        </div>

        <div className="stat-card">

          <div className="stat-card-content">

            <div>
              <p>Verified</p>

              <h2 className="stat-green">
                78
              </h2>

              <span>Approved hospitals</span>
            </div>

            <div className="stat-icon stat-icon-green">
              <CheckCircle size={22} />
            </div>

          </div>

        </div>

        <div className="stat-card">

          <div className="stat-card-content">

            <div>
              <p>Pending</p>

              <h2 className="stat-yellow">
                6
              </h2>

              <span>Awaiting verification</span>
            </div>

            <div className="stat-icon stat-icon-yellow">
              <Clock size={22} />
            </div>

          </div>

        </div>

        <div className="stat-card">

          <div className="stat-card-content">

            <div>
              <p>Suspended</p>

              <h2 className="stat-red">
                2
              </h2>

              <span>Restricted accounts</span>
            </div>

            <div className="stat-icon stat-icon-red">
              <Ban size={22} />
            </div>

          </div>

        </div>

      </section>

      {/* Filters */}
      <section className="hospital-filters">

        <div className="filter-left">

          <select defaultValue="all">
            <option value="all">
              All Hospitals
            </option>

            <option value="verified">
              Verified
            </option>

            <option value="pending">
              Pending
            </option>

            <option value="suspended">
              Suspended
            </option>
          </select>

          <select defaultValue="all">
            <option value="all">
              All Locations
            </option>

            <option value="mainland">
              Lagos Mainland
            </option>

            <option value="island">
              Lagos Island
            </option>

            <option value="vi">
              Victoria Island
            </option>
          </select>

        </div>

        <div className="search-box">

          <Search size={18} />

          <input
            type="text"
            placeholder="Search hospitals..."
          />

        </div>

      </section>

      {/* Hospitals */}
      <section className="hospital-table-container">

        <div className="table-header">

          <h2>
            Registered Hospitals
          </h2>

          <p>
            Hospitals currently connected to HemoBridge.
          </p>

        </div>

        {/* Desktop */}
        <div className="desktop-table">

          <table>

            <thead>

              <tr>

                <th>
                  Hospital
                </th>

                <th>
                  Location
                </th>

                <th>
                  Requests
                </th>

                <th>
                  Status
                </th>

                <th>
                  Registered
                </th>

                <th className="action-heading">
                  Action
                </th>

              </tr>

            </thead>

            <tbody>

              {hospitals.map((hospital) => (

                <tr
                  key={hospital.email}
                >

                  <td>

                    <div className="hospital-info">

                      <div className="hospital-icon">
                        <Hospital size={21} />
                      </div>

                      <div>

                        <p className="hospital-name">
                          {hospital.name}
                        </p>

                        <p className="hospital-email">
                          {hospital.email}
                        </p>

                      </div>

                    </div>

                  </td>

                  <td className="location">
                    {hospital.location}
                  </td>

                  <td>

                    <span className="requests">
                      {hospital.requests}
                    </span>

                  </td>

                  <td>

                    <span
                      className={`status-badge ${hospital.status.toLowerCase()}`}
                    >
                      {hospital.status}
                    </span>

                  </td>

                  <td className="registered">
                    {hospital.registered}
                  </td>

                  <td className="action">

                    <button
                      type="button"
                      className="view-button"
                    >
                      <Eye size={16} />
                      View
                    </button>

                  </td>

                </tr>

              ))}

            </tbody>

          </table>

        </div>

        {/* Mobile */}
        <div className="mobile-hospitals">

          {hospitals.map((hospital) => (

            <div
              className="mobile-hospital-card"
              key={hospital.email}
            >

              <div className="mobile-hospital-top">

                <div className="hospital-info">

                  <div className="hospital-icon">
                    <Hospital size={21} />
                  </div>

                  <div>

                    <p className="hospital-name">
                      {hospital.name}
                    </p>

                    <p className="hospital-email">
                      {hospital.email}
                    </p>

                  </div>

                </div>

                <span
                  className={`status-badge ${hospital.status.toLowerCase()}`}
                >
                  {hospital.status}
                </span>

              </div>

              <div className="mobile-details">

                <div>
                  <span>Location</span>

                  <p>
                    {hospital.location}
                  </p>
                </div>

                <div>
                  <span>Requests</span>

                  <p>
                    {hospital.requests}
                  </p>
                </div>

                <div>
                  <span>Registered</span>

                  <p>
                    {hospital.registered}
                  </p>
                </div>

              </div>

              <button
                type="button"
                className="mobile-view-button"
              >
                <Eye size={16} />
                View Hospital
              </button>

            </div>

          ))}

        </div>

      </section>

    </div>
  );
}

export default Hospitals;