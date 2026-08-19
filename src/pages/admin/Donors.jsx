import { Link } from "react-router-dom";
import {
  Users,
  UserCheck,
  Droplet,
  MapPin,
  CalendarDays,
  ArrowLeft,
  Download,
  Eye,
} from "lucide-react";

import "./Donors.css";

function Donors() {
  const donors = [
    {
      name: "Ayo Adeyemi",
      email: "ayo@example.com",
      bloodType: "O+",
      location: "Lagos Mainland",
      donations: 6,
      status: "Active",
      lastDonation: "Jul 28, 2026",
    },
    {
      name: "Sarah Johnson",
      email: "sarah@example.com",
      bloodType: "A+",
      location: "Ikeja",
      donations: 4,
      status: "Active",
      lastDonation: "Jul 22, 2026",
    },
    {
      name: "Daniel Okafor",
      email: "daniel@example.com",
      bloodType: "B+",
      location: "Yaba",
      donations: 3,
      status: "Active",
      lastDonation: "Jul 18, 2026",
    },
    {
      name: "Mary Williams",
      email: "mary@example.com",
      bloodType: "O-",
      location: "Surulere",
      donations: 8,
      status: "Active",
      lastDonation: "Jul 12, 2026",
    },
    {
      name: "John Ibrahim",
      email: "john@example.com",
      bloodType: "AB+",
      location: "Lagos Island",
      donations: 2,
      status: "Inactive",
      lastDonation: "Jun 30, 2026",
    },
  ];

  return (
    <div className="donors-page">

      {/* ==================== HEADER ==================== */}
      <section className="donors-header">

        <Link
          to="/admin/dashboard"
          className="donors-back-link"
        >
          <ArrowLeft size={16} />
          <span>Back to Dashboard</span>
        </Link>

        <div className="donors-header-content">

          <div className="donors-title-area">
            <h1>Donors</h1>

            <p>
              Monitor registered blood donors across the HemoBridge network.
            </p>
          </div>

          <button
            type="button"
            className="donors-export-button"
          >
            <Download size={18} />
            <span>Export Donor List</span>
          </button>

        </div>
      </section>


      {/* ==================== STATISTICS ==================== */}
      <section className="donors-stats">

        {/* Total Donors */}
        <div className="donor-stat-card">

          <div className="donor-stat-content">
            <p className="donor-stat-label">
              Total Donors
            </p>

            <p className="donor-stat-value">
              1,102
            </p>

            <p className="donor-stat-positive">
              +12% this month
            </p>
          </div>

          <div className="donor-stat-icon donor-icon-red">
            <Users size={23} />
          </div>

        </div>


        {/* Active Donors */}
        <div className="donor-stat-card">

          <div className="donor-stat-content">
            <p className="donor-stat-label">
              Active Donors
            </p>

            <p className="donor-stat-value donor-value-green">
              934
            </p>

            <p className="donor-stat-subtitle">
              Currently available
            </p>
          </div>

          <div className="donor-stat-icon donor-icon-green">
            <UserCheck size={23} />
          </div>

        </div>


        {/* O+ Donors */}
        <div className="donor-stat-card">

          <div className="donor-stat-content">
            <p className="donor-stat-label">
              O+ Donors
            </p>

            <p className="donor-stat-value donor-value-red">
              386
            </p>

            <p className="donor-stat-subtitle">
              Largest donor group
            </p>
          </div>

          <div className="donor-stat-icon donor-icon-red">
            <Droplet size={23} />
          </div>

        </div>


        {/* Donations */}
        <div className="donor-stat-card">

          <div className="donor-stat-content">
            <p className="donor-stat-label">
              Donations
            </p>

            <p className="donor-stat-value donor-value-blue">
              3,842
            </p>

            <p className="donor-stat-subtitle">
              Completed donations
            </p>
          </div>

          <div className="donor-stat-icon donor-icon-blue">
            <Droplet size={23} />
          </div>

        </div>

      </section>


      {/* ==================== FILTERS ==================== */}
      <section className="donors-filters">

        <div className="donors-filter-left">

          <select defaultValue="all">
            <option value="all">
              All Blood Types
            </option>

            <option value="a+">A+</option>
            <option value="a-">A-</option>
            <option value="b+">B+</option>
            <option value="b-">B-</option>
            <option value="ab+">AB+</option>
            <option value="ab-">AB-</option>
            <option value="o+">O+</option>
            <option value="o-">O-</option>
          </select>


          <select defaultValue="all">
            <option value="all">
              All Statuses
            </option>

            <option value="active">
              Active
            </option>

            <option value="inactive">
              Inactive
            </option>
          </select>

        </div>


        <div className="donors-search">
          <input
            type="text"
            placeholder="Search donors..."
          />
        </div>

      </section>


      {/* ==================== DONOR TABLE ==================== */}
      <section className="donors-table-card">

        {/* Table Header */}
        <div className="donors-table-header">

          <div>
            <h2>
              Registered Donors
            </h2>

            <p>
              Donors currently registered on HemoBridge.
            </p>
          </div>

        </div>


        {/* ==================== DESKTOP TABLE ==================== */}
        <div className="donors-desktop-table">

          <table>

            <thead>
              <tr>
                <th>Donor</th>
                <th>Blood Type</th>
                <th>Location</th>
                <th>Donations</th>
                <th>Status</th>
                <th className="donor-action-header">
                  Action
                </th>
              </tr>
            </thead>


            <tbody>

              {donors.map((donor) => (
                <tr key={donor.email}>

                  {/* Donor */}
                  <td>

                    <div className="donor-user">

                      <div className="donor-avatar">
                        {donor.name.charAt(0)}
                      </div>

                      <div className="donor-user-info">

                        <p className="donor-name">
                          {donor.name}
                        </p>

                        <p className="donor-email">
                          {donor.email}
                        </p>

                      </div>

                    </div>

                  </td>


                  {/* Blood Type */}
                  <td>

                    <span className="blood-type-badge">
                      <Droplet size={13} />
                      {donor.bloodType}
                    </span>

                  </td>


                  {/* Location */}
                  <td>

                    <div className="donor-location">

                      <MapPin size={15} />

                      <span>
                        {donor.location}
                      </span>

                    </div>

                  </td>


                  {/* Donations */}
                  <td>

                    <div className="donor-donation-info">

                      <p>
                        {donor.donations}
                      </p>

                      <div className="last-donation">

                        <CalendarDays size={12} />

                        <span>
                          {donor.lastDonation}
                        </span>

                      </div>

                    </div>

                  </td>


                  {/* Status */}
                  <td>

                    <span
                      className={`donor-status ${
                        donor.status === "Active"
                          ? "status-active"
                          : "status-inactive"
                      }`}
                    >
                      {donor.status}
                    </span>

                  </td>


                  {/* Action */}
                  <td className="donor-action">

                    <button type="button">
                      <Eye size={16} />
                      <span>View</span>
                    </button>

                  </td>

                </tr>
              ))}

            </tbody>

          </table>

        </div>


        {/* ==================== MOBILE CARDS ==================== */}
        <div className="donors-mobile-list">

          {donors.map((donor) => (
            <div
              key={donor.email}
              className="donor-mobile-card"
            >

              {/* Mobile Header */}
              <div className="donor-mobile-header">

                <div className="donor-user">

                  <div className="donor-avatar">
                    {donor.name.charAt(0)}
                  </div>

                  <div className="donor-user-info">

                    <p className="donor-name">
                      {donor.name}
                    </p>

                    <p className="donor-email">
                      {donor.email}
                    </p>

                  </div>

                </div>


                <span
                  className={`donor-status ${
                    donor.status === "Active"
                      ? "status-active"
                      : "status-inactive"
                  }`}
                >
                  {donor.status}
                </span>

              </div>


              {/* Mobile Information */}
              <div className="donor-mobile-info">

                {/* Blood Type */}
                <div className="mobile-info-item">

                  <p>
                    Blood Type
                  </p>

                  <div className="mobile-blood-type">
                    <Droplet size={14} />

                    <span>
                      {donor.bloodType}
                    </span>
                  </div>

                </div>


                {/* Donations */}
                <div className="mobile-info-item">

                  <p>
                    Donations
                  </p>

                  <span className="mobile-info-value">
                    {donor.donations}
                  </span>

                </div>


                {/* Location */}
                <div className="mobile-info-item">

                  <p>
                    Location
                  </p>

                  <div className="mobile-location">

                    <MapPin size={14} />

                    <span>
                      {donor.location}
                    </span>

                  </div>

                </div>


                {/* Last Donation */}
                <div className="mobile-info-item">

                  <p>
                    Last Donation
                  </p>

                  <span className="mobile-info-value">
                    {donor.lastDonation}
                  </span>

                </div>

              </div>


              {/* Mobile Action */}
              <button
                type="button"
                className="mobile-view-button"
              >
                <Eye size={16} />
                <span>View Donor</span>
              </button>

            </div>
          ))}

        </div>

      </section>

    </div>
  );
}

export default Donors;