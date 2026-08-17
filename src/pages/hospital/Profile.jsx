import { Link } from "react-router-dom";
import "./Profile.css";

function Profile() {
  return (
    <div className="hospital-profile">

      {/* Header */}
      <section className="profile-page-header">
        <Link to="/hospital/dashboard" className="profile-back-link">
          ← Back to Dashboard
        </Link>

        <h1>Hospital Profile</h1>

        <p>
          Manage your hospital information and account details.
        </p>
      </section>

      {/* Hospital Overview */}
      <section className="hospital-overview profile-section">

        <div className="hospital-overview-content">

          <div className="hospital-icon">
            🏥
          </div>

          <div className="hospital-overview-info">

            <div className="hospital-title-row">
              <h2>
                Lagos University Teaching Hospital
              </h2>

              <span className="verified-badge">
                ✓ Verified Hospital
              </span>
            </div>

            <p className="hospital-location">
              Idi-Araba, Lagos State, Nigeria
            </p>

            <p className="hospital-id">
              Hospital ID: HEM-HOSP-001
            </p>

          </div>

          <button
            type="button"
            className="edit-profile-button"
          >
            Edit Profile
          </button>

        </div>

      </section>

      {/* Statistics */}
      <section className="profile-statistics">

        <div className="profile-stat-card">
          <p>Total Requests</p>
          <h3>12</h3>
        </div>

        <div className="profile-stat-card">
          <p>Fulfilled Requests</p>
          <h3 className="stat-success">8</h3>
        </div>

        <div className="profile-stat-card">
          <p>Account Status</p>
          <h3 className="stat-success">Active</h3>
        </div>

      </section>

      {/* Hospital Information */}
      <section className="profile-section information-section">

        <div className="section-heading">
          <h2>Hospital Information</h2>

          <p>
            Basic information about your hospital.
          </p>
        </div>

        <div className="information-grid">

          <div className="information-item">
            <p>Hospital Name</p>
            <strong>
              Lagos University Teaching Hospital
            </strong>
          </div>

          <div className="information-item">
            <p>Registration Number</p>
            <strong>
              LUTH-2026-001
            </strong>
          </div>

          <div className="information-item">
            <p>Hospital Type</p>
            <strong>
              Teaching Hospital
            </strong>
          </div>

          <div className="information-item">
            <p>Location</p>
            <strong>
              Idi-Araba, Lagos State
            </strong>
          </div>

        </div>

      </section>

      {/* Contact Information */}
      <section className="profile-section information-section">

        <div className="section-heading">
          <h2>Contact Information</h2>

          <p>
            Contact details associated with this hospital account.
          </p>
        </div>

        <div className="information-grid">

          <div className="information-item">
            <p>Email Address</p>
            <strong>
              bloodbank@luth.gov.ng
            </strong>
          </div>

          <div className="information-item">
            <p>Phone Number</p>
            <strong>
              +234 800 000 0000
            </strong>
          </div>

          <div className="information-item">
            <p>Emergency Contact</p>
            <strong>
              +234 800 000 0001
            </strong>
          </div>

          <div className="information-item">
            <p>Operating Hours</p>
            <strong>
              24 hours
            </strong>
          </div>

        </div>

      </section>

      {/* Verification */}
      <section className="verification-section">

        <div className="verification-icon">
          ✓
        </div>

        <div className="verification-content">

          <h2>
            Hospital Verification
          </h2>

          <p>
            Your hospital has been verified by the HemoBridge
            administration team. Verified hospitals can submit blood
            requests and connect with registered blood banks and donors.
          </p>

          <span>
            Verification status: Active
          </span>

        </div>

      </section>

    </div>
  );
}

export default Profile;