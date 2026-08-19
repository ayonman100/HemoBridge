import { Link } from "react-router-dom";
import {
  ArrowLeft,
  Hospital,
  Building2,
  MapPin,
  CalendarDays,
  Eye,
  Check,
  X,
  Clock3,
  CheckCircle2,
  XCircle,
  Info,
} from "lucide-react";

import "./Verification.css";

function Verification() {
  const applications = [
    {
      name: "St. Nicholas Hospital",
      type: "Hospital",
      location: "Lagos Island",
      email: "admin@stnicholashospital.com",
      submitted: "Aug 10, 2026",
      status: "Pending",
    },
    {
      name: "LifeFlow Blood Bank",
      type: "Blood Bank",
      location: "Yaba, Lagos",
      email: "admin@lifeflow.ng",
      submitted: "Aug 10, 2026",
      status: "Pending",
    },
    {
      name: "Mercy Medical Centre",
      type: "Hospital",
      location: "Surulere, Lagos",
      email: "admin@mercymedical.ng",
      submitted: "Aug 9, 2026",
      status: "Pending",
    },
    {
      name: "Hope Blood Services",
      type: "Blood Bank",
      location: "Lagos Island",
      email: "admin@hopeblood.ng",
      submitted: "Aug 8, 2026",
      status: "Pending",
    },
  ];

  const getOrganisationIcon = (type) => {
    if (type === "Hospital") {
      return <Hospital size={22} />;
    }

    return <Building2 size={22} />;
  };

  return (
    <div className="verification-page">

      {/* Header */}
      <section className="verification-header">

        <Link
          to="/admin/dashboard"
          className="verification-back-link"
        >
          <ArrowLeft size={16} />
          Back to Dashboard
        </Link>

        <div className="verification-header-content">

          <h1>Verification</h1>

          <p>
            Review and verify hospitals and blood banks requesting
            access to HemoBridge.
          </p>

        </div>

      </section>


      {/* Statistics */}
      <section className="verification-stats">

        {/* Pending */}
        <div className="verification-stat-card">

          <div className="verification-stat-content">

            <p className="verification-stat-label">
              Pending Reviews
            </p>

            <p className="verification-stat-number pending">
              4
            </p>

            <p className="verification-stat-description">
              Require admin attention
            </p>

          </div>

          <div className="verification-stat-icon pending-icon">
            <Clock3 size={21} />
          </div>

        </div>


        {/* Verified */}
        <div className="verification-stat-card">

          <div className="verification-stat-content">

            <p className="verification-stat-label">
              Verified This Month
            </p>

            <p className="verification-stat-number verified">
              18
            </p>

            <p className="verification-stat-description">
              Successfully approved
            </p>

          </div>

          <div className="verification-stat-icon verified-icon">
            <CheckCircle2 size={21} />
          </div>

        </div>


        {/* Rejected */}
        <div className="verification-stat-card">

          <div className="verification-stat-content">

            <p className="verification-stat-label">
              Rejected
            </p>

            <p className="verification-stat-number rejected">
              3
            </p>

            <p className="verification-stat-description">
              Applications rejected
            </p>

          </div>

          <div className="verification-stat-icon rejected-icon">
            <XCircle size={21} />
          </div>

        </div>

      </section>


      {/* Verification Queue */}
      <section className="verification-queue">

        {/* Queue Header */}
        <div className="verification-queue-header">

          <div>

            <h2>
              Verification Queue
            </h2>

            <p>
              Applications waiting for review.
            </p>

          </div>

          <span className="verification-pending-badge">
            <Clock3 size={15} />
            4 Pending
          </span>

        </div>


        {/* Applications */}
        <div className="verification-applications">

          {applications.map((application) => (

            <div
              key={application.email}
              className="verification-application"
            >

              <div className="verification-application-content">

                {/* Organisation */}
                <div className="verification-organisation">

                  <div
                    className={`verification-organisation-icon ${
                      application.type === "Hospital"
                        ? "hospital-icon"
                        : "bloodbank-icon"
                    }`}
                  >
                    {getOrganisationIcon(application.type)}
                  </div>


                  <div className="verification-organisation-details">

                    <div className="verification-organisation-title">

                      <h3>
                        {application.name}
                      </h3>

                      <span className="verification-type-badge">
                        {application.type}
                      </span>

                    </div>


                    <p className="verification-email">
                      {application.email}
                    </p>


                    <div className="verification-meta">

                      <p>
                        <MapPin size={14} />
                        {application.location}
                      </p>

                      <p>
                        <CalendarDays size={14} />
                        Submitted {application.submitted}
                      </p>

                    </div>

                  </div>

                </div>


                {/* Actions */}
                <div className="verification-actions">

                  <button
                    type="button"
                    className="verification-review-button"
                  >
                    <Eye size={16} />
                    Review Details
                  </button>


                  <button
                    type="button"
                    className="verification-approve-button"
                  >
                    <Check size={16} />
                    Approve
                  </button>


                  <button
                    type="button"
                    className="verification-reject-button"
                  >
                    <X size={16} />
                    Reject
                  </button>

                </div>

              </div>

            </div>

          ))}

        </div>

      </section>


      {/* Information */}
      <section className="verification-information">

        <div className="verification-information-icon">
          <Info size={20} />
        </div>

        <div>

          <h3>
            Verification is important
          </h3>

          <p>
            Only verified hospitals and blood banks should be able to
            participate in the HemoBridge blood request network. The
            backend will eventually validate submitted documents and
            update these verification records automatically.
          </p>

        </div>

      </section>

    </div>
  );
}

export default Verification;