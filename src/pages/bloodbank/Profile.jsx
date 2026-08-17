import { Link } from "react-router-dom";
import {
  ArrowLeft,
  BadgeCheck,
  Building2,
  Clock3,
  LockKeyhole,
  Mail,
  MapPin,
  Phone,
  ShieldCheck,
  UserRound,
} from "lucide-react";

import "./Profile.css";

function Profile() {
  return (
    <div className="bloodbank-profile">

      {/* Header */}
      <section className="profile-header">

        <Link to="/bloodbank/dashboard" className="profile-back-link">
          <ArrowLeft size={16} />
          Back to Dashboard
        </Link>

        <div className="profile-heading">
          <h1>Blood Bank Profile</h1>

          <p>
            Manage your blood bank information and contact details.
          </p>
        </div>

      </section>

      {/* Profile Overview */}
      <section className="profile-overview">

        <div className="profile-logo">
          <Building2 size={34} />
        </div>

        <div className="profile-overview-content">

          <div className="profile-title-row">

            <h2>
              HemoBridge Central Blood Bank
            </h2>

            <span className="profile-verified">
              <BadgeCheck size={15} />
              Verified
            </span>

          </div>

          <p className="profile-type">
            Registered Blood Bank
          </p>

          <p className="profile-id">
            Blood Bank ID: HB-BB-00124
          </p>

        </div>

        <button type="button" className="profile-edit-btn">
          Edit Profile
        </button>

      </section>

      {/* Information */}
      <section className="profile-info-grid">

        {/* Organisation Information */}
        <div className="profile-card">

          <div className="profile-card-header">
            <div className="profile-card-icon">
              <Building2 size={20} />
            </div>

            <div>
              <h2>Organisation Information</h2>

              <p>
                Basic information about the blood bank.
              </p>
            </div>
          </div>

          <div className="profile-details">

            <div className="profile-detail">
              <span>Blood Bank Name</span>
              <strong>
                HemoBridge Central Blood Bank
              </strong>
            </div>

            <div className="profile-detail">
              <span>Registration Number</span>
              <strong>
                BB-NG-2026-00124
              </strong>
            </div>

            <div className="profile-detail">
              <span>Blood Bank Type</span>
              <strong>
                Central Blood Bank
              </strong>
            </div>

            <div className="profile-detail">
              <span>Verification Status</span>

              <span className="detail-status verified">
                <BadgeCheck size={14} />
                Verified
              </span>
            </div>

          </div>

        </div>

        {/* Contact Information */}
        <div className="profile-card">

          <div className="profile-card-header">
            <div className="profile-card-icon">
              <Phone size={20} />
            </div>

            <div>
              <h2>Contact Information</h2>

              <p>
                How hospitals and donors can reach the blood bank.
              </p>
            </div>
          </div>

          <div className="profile-details">

            <div className="profile-detail">

              <span>
                <MapPin size={14} />
                Address
              </span>

              <strong>
                12 Blood Service Avenue, Lagos, Nigeria
              </strong>

            </div>

            <div className="profile-detail">

              <span>
                <Phone size={14} />
                Phone
              </span>

              <strong>
                +234 800 000 0000
              </strong>

            </div>

            <div className="profile-detail">

              <span>
                <Mail size={14} />
                Email
              </span>

              <strong>
                bloodbank@hemobridge.org
              </strong>

            </div>

            <div className="profile-detail">

              <span>
                <Clock3 size={14} />
                Operating Hours
              </span>

              <strong>
                Monday - Sunday, 24 Hours
              </strong>

            </div>

          </div>

        </div>

      </section>

      {/* Account Information */}
      <section className="profile-card profile-account-card">

        <div className="profile-card-header">

          <div className="profile-card-icon">
            <UserRound size={20} />
          </div>

          <div>
            <h2>Account Information</h2>

            <p>
              Information about this blood bank account.
            </p>
          </div>

        </div>

        <div className="account-info-grid">

          <div className="account-info-box">

            <span>Account Email</span>

            <strong>
              admin@hemobridge.org
            </strong>

          </div>

          <div className="account-info-box">

            <span>Account Role</span>

            <strong>
              Blood Bank Administrator
            </strong>

          </div>

          <div className="account-info-box">

            <span>Account Status</span>

            <strong className="account-active">
              Active
            </strong>

          </div>

        </div>

      </section>

      {/* Security */}
      <section className="profile-card profile-security">

        <div className="security-content">

          <div className="security-icon">
            <ShieldCheck size={22} />
          </div>

          <div>
            <h2>Security</h2>

            <p>
              Manage your account security settings.
            </p>
          </div>

        </div>

        <button type="button" className="change-password-btn">
          <LockKeyhole size={17} />
          Change Password
        </button>

      </section>

    </div>
  );
}

export default Profile;