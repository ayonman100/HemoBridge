import { Link } from "react-router-dom";
import {
  ArrowLeft,
  Download,
  TrendingUp,
  Users,
  Hospital,
  Building2,
  MapPin,
  Activity,
  HeartPulse,
} from "lucide-react";

import "./Reports.css";

function Reports() {
  const bloodGroups = [
    { type: "O+", units: 386 },
    { type: "A+", units: 274 },
    { type: "B+", units: 198 },
    { type: "O-", units: 96 },
    { type: "A-", units: 72 },
    { type: "B-", units: 51 },
    { type: "AB+", units: 48 },
    { type: "AB-", units: 21 },
  ];

  const maxUnits = Math.max(
    ...bloodGroups.map((item) => item.units)
  );

  const donationData = [
    { month: "Mar", value: 210, height: 42 },
    { month: "Apr", value: 290, height: 58 },
    { month: "May", value: 240, height: 48 },
    { month: "Jun", value: 360, height: 72 },
    { month: "Jul", value: 320, height: 64 },
    { month: "Aug", value: 440, height: 88 },
  ];

  return (
    <div className="reports-page">

      {/* Header */}
      <section className="reports-header">

        <Link
          to="/admin/dashboard"
          className="reports-back-link"
        >
          <ArrowLeft size={16} />
          Back to Dashboard
        </Link>

        <div className="reports-header-row">

          <div>
            <h1 className="reports-title">
              Reports & Analytics
            </h1>

            <p className="reports-subtitle">
              Monitor HemoBridge activity and network performance.
            </p>
          </div>

          <button
            type="button"
            className="reports-export-btn"
          >
            <Download size={18} />
            Export Report
          </button>

        </div>

      </section>

      {/* Main Statistics */}
      <section className="reports-stat-grid">

        {/* Donations */}
        <div className="reports-stat-card">

          <div className="reports-stat-content">

            <div>
              <p className="reports-label">
                Total Donations
              </p>

              <p className="reports-value">
                3,842
              </p>

              <div className="reports-growth reports-growth-green">
                <TrendingUp size={15} />
                <span>14.8% this month</span>
              </div>
            </div>

            <div className="reports-stat-icon reports-icon-red">
              <HeartPulse size={22} />
            </div>

          </div>

        </div>

        {/* Requests */}
        <div className="reports-stat-card">

          <div className="reports-stat-content">

            <div>
              <p className="reports-label">
                Blood Requests
              </p>

              <p className="reports-value">
                248
              </p>

              <p className="reports-growth-text reports-growth-green">
                80.2% fulfilled
              </p>
            </div>

            <div className="reports-stat-icon reports-icon-blue">
              <Activity size={22} />
            </div>

          </div>

        </div>

        {/* Donors */}
        <div className="reports-stat-card">

          <div className="reports-stat-content">

            <div>
              <p className="reports-label">
                Registered Donors
              </p>

              <p className="reports-value">
                1,102
              </p>

              <div className="reports-growth reports-growth-green">
                <TrendingUp size={15} />
                <span>12% this month</span>
              </div>
            </div>

            <div className="reports-stat-icon reports-icon-green">
              <Users size={22} />
            </div>

          </div>

        </div>

        {/* Lives Helped */}
        <div className="reports-stat-card">

          <div className="reports-stat-content">

            <div>
              <p className="reports-label">
                Lives Potentially Helped
              </p>

              <p className="reports-value reports-value-red">
                11,526
              </p>

              <p className="reports-muted-text">
                Estimated impact
              </p>
            </div>

            <div className="reports-stat-icon reports-icon-red">
              <HeartPulse size={22} />
            </div>

          </div>

        </div>

      </section>

      {/* Charts */}
      <section className="reports-chart-grid">

        {/* Donation Activity */}
        <div className="reports-panel">

          <div className="reports-panel-header">

            <div>
              <h2 className="reports-section-title">
                Donation Activity
              </h2>

              <p className="reports-section-description">
                Donations completed over the past 6 months.
              </p>
            </div>

            <div className="reports-growth reports-growth-green">
              <TrendingUp size={16} />
              +14.8%
            </div>

          </div>

          <div className="reports-chart">

            {donationData.map((item) => (

              <div
                key={item.month}
                className="reports-bar-column"
              >

                <span className="reports-bar-value">
                  {item.value}
                </span>

                <div className="reports-bar-wrapper">

                  <div
                    className="reports-bar"
                    style={{
                      height: `${item.height}%`,
                    }}
                  />

                </div>

                <span className="reports-bar-label">
                  {item.month}
                </span>

              </div>

            ))}

          </div>

        </div>

        {/* Request Performance */}
        <div className="reports-panel">

          <div className="reports-panel-header-simple">

            <h2 className="reports-section-title">
              Request Performance
            </h2>

            <p className="reports-section-description">
              Current status of blood requests.
            </p>

          </div>

          <div className="reports-performance">

            {/* Fulfilled */}
            <div className="reports-performance-item">

              <div className="reports-performance-header">
                <span>Fulfilled</span>
                <strong className="performance-green">
                  80.2%
                </strong>
              </div>

              <div className="reports-progress">
                <div
                  className="reports-progress-fill progress-green"
                  style={{ width: "80.2%" }}
                />
              </div>

            </div>

            {/* Searching */}
            <div className="reports-performance-item">

              <div className="reports-performance-header">
                <span>Searching</span>
                <strong className="performance-yellow">
                  12.5%
                </strong>
              </div>

              <div className="reports-progress">
                <div
                  className="reports-progress-fill progress-yellow"
                  style={{ width: "12.5%" }}
                />
              </div>

            </div>

            {/* Pending */}
            <div className="reports-performance-item">

              <div className="reports-performance-header">
                <span>Pending</span>
                <strong className="performance-blue">
                  5.3%
                </strong>
              </div>

              <div className="reports-progress">
                <div
                  className="reports-progress-fill progress-blue"
                  style={{ width: "5.3%" }}
                />
              </div>

            </div>

            {/* Cancelled */}
            <div className="reports-performance-item">

              <div className="reports-performance-header">
                <span>Cancelled</span>
                <strong className="performance-gray">
                  2%
                </strong>
              </div>

              <div className="reports-progress">
                <div
                  className="reports-progress-fill progress-gray"
                  style={{ width: "2%" }}
                />
              </div>

            </div>

          </div>

        </div>

      </section>

      {/* Blood Group Distribution */}
      <section className="reports-panel">

        <div className="reports-panel-header-simple">

          <h2 className="reports-section-title">
            Blood Group Distribution
          </h2>

          <p className="reports-section-description">
            Registered donor availability by blood type.
          </p>

        </div>

        <div className="reports-blood-groups">

          {bloodGroups.map((blood) => {

            const percentage = Math.round(
              (blood.units / maxUnits) * 100
            );

            return (
              <div
                key={blood.type}
                className="reports-blood-item"
              >

                <div className="reports-blood-header">

                  <div className="reports-blood-info">

                    <span className="reports-blood-type">
                      {blood.type}
                    </span>

                    <span className="reports-blood-donors">
                      {blood.units} donors
                    </span>

                  </div>

                  <span className="reports-blood-units">
                    {blood.units} units
                  </span>

                </div>

                <div className="reports-blood-progress">
                  <div
                    className="reports-blood-progress-fill"
                    style={{
                      width: `${percentage}%`,
                    }}
                  />
                </div>

              </div>
            );
          })}

        </div>

      </section>

      {/* Network Summary */}
      <section className="reports-network-grid">

        {/* Hospitals */}
        <div className="reports-network-card">

          <div className="reports-network-icon reports-icon-blue">
            <Hospital size={24} />
          </div>

          <p className="reports-label">
            Verified Hospitals
          </p>

          <p className="reports-network-value">
            42
          </p>

        </div>

        {/* Blood Banks */}
        <div className="reports-network-card">

          <div className="reports-network-icon reports-icon-red">
            <Building2 size={24} />
          </div>

          <p className="reports-label">
            Verified Blood Banks
          </p>

          <p className="reports-network-value">
            18
          </p>

        </div>

        {/* Donation Centres */}
        <div className="reports-network-card">

          <div className="reports-network-icon reports-icon-green">
            <MapPin size={24} />
          </div>

          <p className="reports-label">
            Donation Centres
          </p>

          <p className="reports-network-value">
            67
          </p>

        </div>

      </section>

    </div>
  );
}

export default Reports;

