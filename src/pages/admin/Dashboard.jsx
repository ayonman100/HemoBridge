import { Link } from "react-router-dom";
import {
  Users,
  Hospital,
  Building2,
  Droplet,
  CheckCircle,
  AlertTriangle,
  Bell,
  UserPlus,
  ArrowRight,
} from "lucide-react";

import "./Dashboard.css";

function Dashboard() {
  const stats = [
    {
      title: "Total Users",
      value: "1,248",
      subtitle: "Registered on HemoBridge",
      icon: Users,
    },
    {
      title: "Hospitals",
      value: "86",
      subtitle: "Registered healthcare facilities",
      icon: Hospital,
    },
    {
      title: "Blood Banks",
      value: "24",
      subtitle: "Verified blood banks",
      icon: Building2,
    },
    {
      title: "Active Requests",
      value: "37",
      subtitle: "Blood requests in progress",
      icon: Droplet,
    },
  ];

  return (
    <div className="admin-dashboard">

      {/* ================= HEADER ================= */}

      <section className="admin-dashboard-header">

        <div className="admin-dashboard-header-content">

          <p className="admin-dashboard-welcome">
            Welcome back
          </p>

          <h1 className="admin-dashboard-title">
            Admin Dashboard
          </h1>

          <p className="admin-dashboard-description">
            Monitor and manage the HemoBridge platform.
          </p>

        </div>

        <Link
          to="/admin/updates"
          className="admin-publish-button"
        >
          Publish Update
        </Link>

      </section>


      {/* ================= STATISTICS ================= */}

      <section className="admin-stats-grid">

        {stats.map((stat) => {
          const Icon = stat.icon;

          return (
            <div
              key={stat.title}
              className="admin-stat-card"
            >

              <div className="admin-stat-content">

                <p className="admin-stat-title">
                  {stat.title}
                </p>

                <p className="admin-stat-value">
                  {stat.value}
                </p>

                <p className="admin-stat-subtitle">
                  {stat.subtitle}
                </p>

              </div>

              <div className="admin-stat-icon">
                <Icon
                  size={23}
                  strokeWidth={2}
                />
              </div>

            </div>
          );
        })}

      </section>


      {/* ================= MAIN GRID ================= */}

      <section className="admin-main-grid">


        {/* ================= PLATFORM OVERVIEW ================= */}

        <div className="admin-panel admin-overview-panel">

          <div className="admin-panel-header">

            <div>
              <h2 className="admin-panel-title">
                Platform Overview
              </h2>

              <p className="admin-panel-description">
                Current state of the HemoBridge network.
              </p>
            </div>

            <span className="admin-system-status">
              <span className="admin-status-dot" />
              System Operational
            </span>

          </div>


          <div className="admin-overview-grid">

            <div className="admin-overview-card">

              <p className="admin-overview-label">
                Verified Donors
              </p>

              <p className="admin-overview-value">
                1,102
              </p>

              <p className="admin-overview-positive">
                +8.4% this month
              </p>

            </div>


            <div className="admin-overview-card">

              <p className="admin-overview-label">
                Blood Units Available
              </p>

              <p className="admin-overview-value">
                4,826
              </p>

              <p className="admin-overview-positive">
                +4.2% this month
              </p>

            </div>


            <div className="admin-overview-card">

              <p className="admin-overview-label">
                Requests Fulfilled
              </p>

              <p className="admin-overview-value">
                2,438
              </p>

              <p className="admin-overview-positive">
                +12.7% this month
              </p>

            </div>

          </div>

        </div>


        {/* ================= QUICK ACTIONS ================= */}

        <div className="admin-panel admin-quick-panel">

          <div className="admin-panel-header-simple">

            <h2 className="admin-panel-title">
              Quick Actions
            </h2>

            <p className="admin-panel-description">
              Common administrative tasks.
            </p>

          </div>


          <div className="admin-quick-actions">

            <Link
              to="/admin/users"
              className="admin-action-card admin-action-primary"
            >

              <div className="admin-action-icon admin-action-icon-red">
                <Users size={20} />
              </div>

              <div className="admin-action-content">

                <p className="admin-action-title">
                  Manage Users
                </p>

                <p className="admin-action-description">
                  View registered users
                </p>

              </div>

              <ArrowRight
                size={17}
                className="admin-action-arrow"
              />

            </Link>


            <Link
              to="/admin/verification"
              className="admin-action-card"
            >

              <div className="admin-action-icon admin-action-icon-green">
                <CheckCircle size={20} />
              </div>

              <div className="admin-action-content">

                <p className="admin-action-title">
                  Verification
                </p>

                <p className="admin-action-description">
                  Review pending accounts
                </p>

              </div>

              <ArrowRight
                size={17}
                className="admin-action-arrow"
              />

            </Link>


            <Link
              to="/admin/requests"
              className="admin-action-card"
            >

              <div className="admin-action-icon admin-action-icon-red">
                <Droplet size={20} />
              </div>

              <div className="admin-action-content">

                <p className="admin-action-title">
                  Blood Requests
                </p>

                <p className="admin-action-description">
                  Monitor system requests
                </p>

              </div>

              <ArrowRight
                size={17}
                className="admin-action-arrow"
              />

            </Link>

          </div>

        </div>

      </section>


      {/* ================= ALERTS ================= */}

      <section className="admin-alerts-grid">


        {/* Pending Verification */}

        <div className="admin-panel admin-alert-panel">

          <div className="admin-panel-header">

            <div>

              <h2 className="admin-panel-title">
                Pending Verification
              </h2>

              <p className="admin-panel-description">
                Accounts waiting for review.
              </p>

            </div>

            <Link
              to="/admin/verification"
              className="admin-view-link"
            >
              View all
            </Link>

          </div>


          <div className="admin-list">

            <div className="admin-list-item">

              <div className="admin-list-icon admin-list-icon-blue">
                <Hospital size={19} />
              </div>

              <div className="admin-list-content">

                <p className="admin-list-title">
                  Mainland General Hospital
                </p>

                <p className="admin-list-description">
                  Hospital registration
                </p>

              </div>

              <span className="admin-pending-badge">
                Pending
              </span>

            </div>


            <div className="admin-list-item">

              <div className="admin-list-icon admin-list-icon-red">
                <Building2 size={19} />
              </div>

              <div className="admin-list-content">

                <p className="admin-list-title">
                  Lagos Central Blood Bank
                </p>

                <p className="admin-list-description">
                  Blood bank registration
                </p>

              </div>

              <span className="admin-pending-badge">
                Pending
              </span>

            </div>

          </div>

        </div>


        {/* System Alerts */}

        <div className="admin-panel admin-alert-panel">

          <div className="admin-panel-header-simple">

            <h2 className="admin-panel-title">
              System Alerts
            </h2>

            <p className="admin-panel-description">
              Things that may require attention.
            </p>

          </div>


          <div className="admin-system-alerts">

            <div className="admin-system-alert">

              <div className="admin-list-icon admin-list-icon-red">
                <AlertTriangle size={19} />
              </div>

              <div>

                <p className="admin-list-title">
                  3 blood groups have critical stock
                </p>

                <p className="admin-list-description">
                  Check blood bank inventory levels.
                </p>

              </div>

            </div>


            <div className="admin-system-alert">

              <div className="admin-list-icon admin-list-icon-yellow">
                <Bell size={19} />
              </div>

              <div>

                <p className="admin-list-title">
                  14 requests require attention
                </p>

                <p className="admin-list-description">
                  Some requests have been waiting for a response.
                </p>

              </div>

            </div>


            <div className="admin-system-alert">

              <div className="admin-list-icon admin-list-icon-green">
                <CheckCircle size={19} />
              </div>

              <div>

                <p className="admin-list-title">
                  System health is normal
                </p>

                <p className="admin-list-description">
                  All major services are currently operational.
                </p>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* ================= RECENT ACTIVITY ================= */}

      <section className="admin-panel admin-recent-panel">

        <div className="admin-panel-header">

          <div>

            <h2 className="admin-panel-title">
              Recent System Activity
            </h2>

            <p className="admin-panel-description">
              Latest activity across the platform.
            </p>

          </div>

          <Link
            to="/admin/reports"
            className="admin-view-link"
          >
            View reports
          </Link>

        </div>


        <div className="admin-list">

          <div className="admin-list-item">

            <div className="admin-list-icon admin-list-icon-green">
              <CheckCircle size={19} />
            </div>

            <div className="admin-list-content">

              <p className="admin-list-title">
                New hospital verified
              </p>

              <p className="admin-list-description">
                Mainland General Hospital was approved.
              </p>

            </div>

            <span className="admin-activity-time">
              15 min ago
            </span>

          </div>


          <div className="admin-list-item">

            <div className="admin-list-icon admin-list-icon-red">
              <Droplet size={19} />
            </div>

            <div className="admin-list-content">

              <p className="admin-list-title">
                Blood request fulfilled
              </p>

              <p className="admin-list-description">
                Request HB-REQ-004 was completed.
              </p>

            </div>

            <span className="admin-activity-time">
              42 min ago
            </span>

          </div>


          <div className="admin-list-item">

            <div className="admin-list-icon admin-list-icon-blue">
              <UserPlus size={19} />
            </div>

            <div className="admin-list-content">

              <p className="admin-list-title">
                12 new donors registered
              </p>

              <p className="admin-list-description">
                New donor accounts were created today.
              </p>

            </div>

            <span className="admin-activity-time">
              1 hr ago
            </span>

          </div>

        </div>

      </section>

    </div>
  );
}

export default Dashboard;

