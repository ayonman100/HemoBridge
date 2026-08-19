import { Link } from "react-router-dom";
import {
  ArrowLeft,
  UserPlus,
  Search,
  ChevronDown,
  Users as UsersIcon,
  Droplets,
  Hospital,
  Building2,
  Eye,
} from "lucide-react";

import "./users.css";

function Users() {
  const users = [
    {
      name: "Ayo Adeyemi",
      email: "ayo@example.com",
      role: "Donor",
      status: "Active",
      joined: "Aug 11, 2026",
      bloodType: "O+",
    },
    {
      name: "Sarah Johnson",
      email: "sarah@example.com",
      role: "Donor",
      status: "Active",
      joined: "Aug 10, 2026",
      bloodType: "A+",
    },
    {
      name: "Mainland General Hospital",
      email: "admin@mainlandhospital.ng",
      role: "Hospital",
      status: "Verified",
      joined: "Aug 9, 2026",
      bloodType: "-",
    },
    {
      name: "Lagos Central Blood Bank",
      email: "admin@lagosbloodbank.ng",
      role: "Blood Bank",
      status: "Verified",
      joined: "Aug 8, 2026",
      bloodType: "-",
    },
    {
      name: "Daniel Okafor",
      email: "daniel@example.com",
      role: "Donor",
      status: "Suspended",
      joined: "Aug 7, 2026",
      bloodType: "B+",
    },
  ];

  const getRoleIcon = (role) => {
    if (role === "Donor") {
      return <Droplets size={18} />;
    }

    if (role === "Hospital") {
      return <Hospital size={18} />;
    }

    return <Building2 size={18} />;
  };

  const getRoleStyle = (role) => {
    if (role === "Donor") {
      return "role-donor";
    }

    if (role === "Hospital") {
      return "role-hospital";
    }

    return "role-bloodbank";
  };

  const getStatusStyle = (status) => {
    if (status === "Active") {
      return "status-active";
    }

    if (status === "Verified") {
      return "status-verified";
    }

    return "status-suspended";
  };

  return (
    <div className="users-page">

      {/* Header */}
      <section className="users-header">

        <Link
          to="/admin/dashboard"
          className="users-back-link"
        >
          <ArrowLeft size={16} />
          Back to Dashboard
        </Link>

        <div className="users-header-content">

          <div className="users-title-area">

            <h1>
              Users
            </h1>

            <p>
              Manage users and organisations registered on HemoBridge.
            </p>

          </div>

          <button
            type="button"
            className="users-add-button"
          >
            <UserPlus size={18} />
            Add User
          </button>

        </div>

      </section>


      {/* Statistics */}
      <section className="users-stats">

        {/* Total Users */}
        <div className="users-stat-card">

          <div className="users-stat-content">

            <p className="users-stat-label">
              Total Users
            </p>

            <p className="users-stat-value">
              1,248
            </p>

            <p className="users-stat-growth">
              +12% this month
            </p>

          </div>

          <div className="users-stat-icon users-stat-icon-gray">
            <UsersIcon size={21} />
          </div>

        </div>


        {/* Donors */}
        <div className="users-stat-card">

          <div className="users-stat-content">

            <p className="users-stat-label">
              Donors
            </p>

            <p className="users-stat-value users-stat-value-red">
              1,102
            </p>

            <p className="users-stat-description">
              Registered donors
            </p>

          </div>

          <div className="users-stat-icon users-stat-icon-red">
            <Droplets size={21} />
          </div>

        </div>


        {/* Hospitals */}
        <div className="users-stat-card">

          <div className="users-stat-content">

            <p className="users-stat-label">
              Hospitals
            </p>

            <p className="users-stat-value users-stat-value-blue">
              86
            </p>

            <p className="users-stat-description">
              Registered hospitals
            </p>

          </div>

          <div className="users-stat-icon users-stat-icon-blue">
            <Hospital size={21} />
          </div>

        </div>


        {/* Blood Banks */}
        <div className="users-stat-card">

          <div className="users-stat-content">

            <p className="users-stat-label">
              Blood Banks
            </p>

            <p className="users-stat-value users-stat-value-purple">
              24
            </p>

            <p className="users-stat-description">
              Registered blood banks
            </p>

          </div>

          <div className="users-stat-icon users-stat-icon-purple">
            <Building2 size={21} />
          </div>

        </div>

      </section>


      {/* Filters */}
      <section className="users-filters">

        <div className="users-filter-group">

          {/* Role Filter */}
          <div className="users-select-wrapper">

            <select
              defaultValue="all"
              className="users-select"
            >
              <option value="all">
                All Roles
              </option>

              <option value="donor">
                Donors
              </option>

              <option value="hospital">
                Hospitals
              </option>

              <option value="bloodbank">
                Blood Banks
              </option>
            </select>

            <ChevronDown
              size={16}
              className="users-select-icon"
            />

          </div>


          {/* Status Filter */}
          <div className="users-select-wrapper">

            <select
              defaultValue="all"
              className="users-select"
            >
              <option value="all">
                All Statuses
              </option>

              <option value="active">
                Active
              </option>

              <option value="verified">
                Verified
              </option>

              <option value="suspended">
                Suspended
              </option>
            </select>

            <ChevronDown
              size={16}
              className="users-select-icon"
            />

          </div>

        </div>


        {/* Search */}
        <div className="users-search">

          <Search
            size={18}
            className="users-search-icon"
          />

          <input
            type="text"
            placeholder="Search users..."
          />

        </div>

      </section>


      {/* User Table */}
      <section className="users-table-card">

        {/* Section Header */}
        <div className="users-table-header">

          <div>

            <h2>
              Registered Users
            </h2>

            <p>
              Users currently registered on the platform.
            </p>

          </div>

        </div>


        {/* Desktop Table */}
        <div className="users-table-wrapper">

          <table className="users-table">

            <thead>

              <tr>

                <th>
                  User
                </th>

                <th>
                  Role
                </th>

                <th>
                  Blood Type
                </th>

                <th>
                  Status
                </th>

                <th>
                  Joined
                </th>

                <th className="users-action-heading">
                  Action
                </th>

              </tr>

            </thead>


            <tbody>

              {users.map((user) => (

                <tr key={user.email}>

                  {/* User */}
                  <td>

                    <div className="users-user">

                      <div className="users-avatar">
                        {user.name.charAt(0)}
                      </div>

                      <div className="users-user-info">

                        <p className="users-user-name">
                          {user.name}
                        </p>

                        <p className="users-user-email">
                          {user.email}
                        </p>

                      </div>

                    </div>

                  </td>


                  {/* Role */}
                  <td>

                    <div className="users-role">

                      <span
                        className={`users-role-icon ${getRoleStyle(
                          user.role
                        )}`}
                      >
                        {getRoleIcon(user.role)}
                      </span>

                      <span className="users-role-name">
                        {user.role}
                      </span>

                    </div>

                  </td>


                  {/* Blood Type */}
                  <td>

                    {user.bloodType === "-" ? (

                      <span className="users-not-applicable">
                        -
                      </span>

                    ) : (

                      <span className="users-blood-type">
                        <Droplets size={13} />
                        {user.bloodType}
                      </span>

                    )}

                  </td>


                  {/* Status */}
                  <td>

                    <span
                      className={`users-status ${getStatusStyle(
                        user.status
                      )}`}
                    >
                      {user.status}
                    </span>

                  </td>


                  {/* Joined */}
                  <td>

                    <span className="users-joined">
                      {user.joined}
                    </span>

                  </td>


                  {/* Action */}
                  <td className="users-action-cell">

                    <button
                      type="button"
                      className="users-view-button"
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
        <div className="users-mobile-list">

          {users.map((user) => (

            <div
              key={user.email}
              className="users-mobile-card"
            >

              {/* User Header */}
              <div className="users-mobile-header">

                <div className="users-user">

                  <div className="users-avatar">
                    {user.name.charAt(0)}
                  </div>

                  <div className="users-user-info">

                    <p className="users-user-name">
                      {user.name}
                    </p>

                    <p className="users-user-email">
                      {user.email}
                    </p>

                  </div>

                </div>

                <span
                  className={`users-status ${getStatusStyle(
                    user.status
                  )}`}
                >
                  {user.status}
                </span>

              </div>


              {/* User Information */}
              <div className="users-mobile-info">

                <div>

                  <p className="users-mobile-label">
                    Role
                  </p>

                  <div className="users-mobile-role">

                    <span
                      className={`users-role-icon ${getRoleStyle(
                        user.role
                      )}`}
                    >
                      {getRoleIcon(user.role)}
                    </span>

                    <p>
                      {user.role}
                    </p>

                  </div>

                </div>


                <div>

                  <p className="users-mobile-label">
                    Blood Type
                  </p>

                  {user.bloodType === "-" ? (

                    <p className="users-mobile-value muted">
                      Not applicable
                    </p>

                  ) : (

                    <div className="users-mobile-blood">
                      <Droplets size={15} />
                      {user.bloodType}
                    </div>

                  )}

                </div>


                <div>

                  <p className="users-mobile-label">
                    Joined
                  </p>

                  <p className="users-mobile-value">
                    {user.joined}
                  </p>

                </div>

              </div>


              {/* Mobile Action */}
              <button
                type="button"
                className="users-mobile-view-button"
              >
                <Eye size={16} />
                View User
              </button>

            </div>

          ))}

        </div>

      </section>

    </div>
  );
}

export default Users;