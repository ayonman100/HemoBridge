import { useNavigate } from "react-router-dom";
import {
  Clock3,
  CheckCircle2,
  FileSearch,
  ClipboardCheck,
  ArrowLeft,
  Bell,
} from "lucide-react";

import "./PendingVerification.css";

function PendingVerification() {
  const navigate = useNavigate();

  return (
    <div className="pending-verification-page">

      <div className="pending-verification-card">

        {/* ================= HEADER ================= */}

        <div className="pending-verification-header">

          {/* Icon */}

          <div className="pending-verification-main-icon">
            <Clock3
              size={40}
              strokeWidth={1.8}
            />
          </div>

          <h1>
            Verification Pending
          </h1>

          <p>
            Your organization account has been submitted successfully and
            is currently waiting for verification.
          </p>

        </div>


        {/* ================= STATUS ================= */}

        <div className="pending-status-box">

          <div className="pending-status-content">

            {/* Status Indicator */}

            <div className="pending-status-icon">
              <Clock3 size={20} />
            </div>

            {/* Status Text */}

            <div>

              <p className="pending-status-title">
                Pending Verification
              </p>

              <p className="pending-status-description">
                Our team will review your organization information and
                submitted documents.
              </p>

            </div>

          </div>

        </div>


        {/* ================= WHAT HAPPENS NEXT ================= */}

        <div className="pending-next-section">

          <h2>
            What happens next?
          </h2>

          <div className="pending-steps">

            {/* Step 1 */}

            <div className="pending-step">

              <div className="pending-step-icon">
                <FileSearch size={17} />
              </div>

              <div className="pending-step-content">

                <p className="pending-step-title">
                  Document Review
                </p>

                <p className="pending-step-description">
                  Your registration details and submitted documents are
                  reviewed by our verification team.
                </p>

              </div>

            </div>


            {/* Step 2 */}

            <div className="pending-step">

              <div className="pending-step-icon">
                <ClipboardCheck size={17} />
              </div>

              <div className="pending-step-content">

                <p className="pending-step-title">
                  Organization Approval
                </p>

                <p className="pending-step-description">
                  Your organization is approved or contacted if additional
                  information is required.
                </p>

              </div>

            </div>


            {/* Step 3 */}

            <div className="pending-step">

              <div className="pending-step-icon">
                <CheckCircle2 size={17} />
              </div>

              <div className="pending-step-content">

                <p className="pending-step-title">
                  Access Your Dashboard
                </p>

                <p className="pending-step-description">
                  Once approved, you can access your HemoBridge dashboard
                  and begin using the platform.
                </p>

              </div>

            </div>

          </div>

        </div>


        {/* ================= NOTIFICATION NOTE ================= */}

        <div className="pending-notification-box">

          <div className="pending-notification-content">

            <div className="pending-notification-icon">
              <Bell size={18} />
            </div>

            <p>
              You will be notified when your account verification is
              complete.
            </p>

          </div>

        </div>


        {/* ================= LOGIN BUTTON ================= */}

        <button
          type="button"
          onClick={() => navigate("/login")}
          className="pending-login-button"
        >
          <ArrowLeft size={18} />

          Back to Login
        </button>

      </div>

    </div>
  );
}

export default PendingVerification;