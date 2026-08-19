
import { Link } from "react-router-dom";
import {
  CheckCircle,
  ArrowRight,
  CreditCard,
} from "lucide-react";

import "./SubscriptionSuccess.css";

function SubscriptionSuccess() {
  return (
    <div className="subscription-success-page">

      <div className="subscription-success-card">

        {/* Success Icon */}

        <div className="success-icon">
          <CheckCircle
            size={44}
            strokeWidth={1.8}
          />
        </div>


        {/* Header */}

        <h1>
          Subscription Successful
        </h1>

        <p className="success-description">
          Your HemoBridge Basic Plan subscription has been successfully
          activated.
        </p>


        {/* Plan Details */}

        <div className="success-plan-details">

          <div className="success-detail-row">

            <span>
              Plan
            </span>

            <strong>
              Basic Plan
            </strong>

          </div>


          <div className="success-detail-row">

            <span>
              Billing
            </span>

            <strong>
              Monthly
            </strong>

          </div>


          <div className="success-detail-row">

            <span className="success-amount-label">
              <CreditCard size={15} />
              Amount
            </span>

            <strong>
              ₦10,000
            </strong>

          </div>

        </div>


        {/* Notice */}

        <div className="success-notice">

          <div className="success-notice-content">

            <CheckCircle size={18} />

            <p>
              Your organization can now access the features included in the
              Basic Plan.
            </p>

          </div>

        </div>


        {/* Dashboard */}

        <Link
          to="/hospital/dashboard"
          className="success-dashboard-button"
        >
          Go to Dashboard

          <ArrowRight size={18} />
        </Link>


        {/* Subscription */}

        <Link
          to="/subscription"
          className="success-subscription-link"
        >
          View Subscription
        </Link>

      </div>

    </div>
  );
}

export default SubscriptionSuccess;

