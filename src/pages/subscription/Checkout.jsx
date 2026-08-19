import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  CreditCard,
  ShieldCheck,
  CheckCircle2,
  LockKeyhole,
  Loader2,
} from "lucide-react";

import "./Checkout.css";

function Checkout() {
  const navigate = useNavigate();

  const [isProcessing, setIsProcessing] = useState(false);

  const handlePayment = async (e) => {
    e.preventDefault();

    setIsProcessing(true);

    // Temporary frontend simulation
    await new Promise((resolve) => setTimeout(resolve, 1500));

    console.log("Payment initiated");

    setIsProcessing(false);

    // Temporary navigation
    navigate("/subscription/success");
  };

  return (
    <div className="checkout-page">

      <div className="checkout-container">

        {/* Back */}

        <Link
          to="/subscription"
          className="checkout-back-link"
        >
          <ArrowLeft size={17} />
          Back to Subscription
        </Link>


        {/* Header */}

        <div className="checkout-header">

          <div className="checkout-breadcrumb">
            <span>HemoBridge Subscription</span>
            <span>/</span>
            <span className="checkout-breadcrumb-current">
              Checkout
            </span>
          </div>

          <h1>
            Complete Your Subscription
          </h1>

          <p>
            Continue with the Basic Plan to keep using HemoBridge's
            organization features.
          </p>

        </div>


        {/* Main Content */}

        <div className="checkout-grid">


          {/* =========================================
              PAYMENT FORM
          ========================================= */}

          <div className="checkout-payment-column">

            <div className="checkout-card">

              {/* Payment Header */}

              <div className="checkout-section-header">

                <div className="checkout-section-icon">
                  <CreditCard size={22} />
                </div>

                <div>
                  <h2>
                    Payment Information
                  </h2>

                  <p>
                    Enter your organization details to continue.
                  </p>
                </div>

              </div>


              {/* Form */}

              <form
                onSubmit={handlePayment}
                className="checkout-form"
              >

                {/* Organization Email */}

                <div className="checkout-form-group">

                  <label htmlFor="email">
                    Organization Email
                  </label>

                  <input
                    id="email"
                    type="email"
                    placeholder="Enter organization email"
                    required
                  />

                  <p className="checkout-helper-text">
                    Use the email associated with your HemoBridge
                    organization account.
                  </p>

                </div>


                {/* Payment Method */}

                <div className="checkout-form-group">

                  <label>
                    Payment Method
                  </label>

                  <div className="payment-method">

                    <div className="payment-method-icon">
                      <CreditCard size={22} />
                    </div>

                    <div className="payment-method-content">

                      <div className="payment-method-title">

                        <p>
                          Card / Bank Payment
                        </p>

                        <CheckCircle2
                          size={20}
                          className="payment-selected-icon"
                        />

                      </div>

                      <p className="payment-method-description">
                        Secure online payment
                      </p>

                    </div>

                  </div>

                </div>


                {/* Security Notice */}

                <div className="checkout-security-notice">

                  <ShieldCheck
                    size={21}
                    className="security-icon"
                  />

                  <div>

                    <p className="security-title">
                      Secure payment
                    </p>

                    <p className="security-description">
                      You will be redirected to our secure payment
                      provider to complete your payment. Your payment
                      information is handled securely by the payment
                      provider.
                    </p>

                  </div>

                </div>


                {/* Submit */}

                <button
                  type="submit"
                  disabled={isProcessing}
                  className={`checkout-submit-button ${
                    isProcessing
                      ? "checkout-submit-loading"
                      : ""
                  }`}
                >

                  {isProcessing ? (
                    <>
                      <Loader2
                        size={20}
                        className="checkout-spinner"
                      />

                      Processing...
                    </>
                  ) : (
                    <>
                      Continue to Payment
                      <CreditCard size={18} />
                    </>
                  )}

                </button>


                {/* Security Footer */}

                <div className="checkout-security-footer">

                  <LockKeyhole size={14} />

                  <span>
                    Secure checkout powered by HemoBridge payment provider
                  </span>

                </div>

              </form>

            </div>

          </div>


          {/* =========================================
              ORDER SUMMARY
          ========================================= */}

          <div className="checkout-summary-column">

            <div className="checkout-summary-card">

              {/* Summary Header */}

              <div className="summary-header">

                <h2>
                  Order Summary
                </h2>

                <div className="summary-header-icon">
                  <CreditCard size={18} />
                </div>

              </div>


              {/* Plan */}

              <div className="summary-plan">

                <div>

                  <p className="summary-plan-name">
                    Basic Plan
                  </p>

                  <p className="summary-plan-description">
                    HemoBridge Organization Plan
                  </p>

                </div>

                <p className="summary-plan-price">
                  ₦10,000
                </p>

              </div>


              {/* Billing */}

              <div className="summary-billing">

                <span>
                  Billing
                </span>

                <span>
                  Monthly
                </span>

              </div>


              {/* Total */}

              <div className="summary-total">

                <span>
                  Total
                </span>

                <span>
                  ₦10,000
                </span>

              </div>


              {/* Features */}

              <div className="summary-features">

                <p className="summary-features-title">
                  Included with Basic
                </p>

                <ul>

                  <li>
                    <CheckCircle2 size={17} />
                    <span>
                      Blood inventory management
                    </span>
                  </li>

                  <li>
                    <CheckCircle2 size={17} />
                    <span>
                      Blood search and availability
                    </span>
                  </li>

                  <li>
                    <CheckCircle2 size={17} />
                    <span>
                      Emergency blood requests
                    </span>
                  </li>

                  <li>
                    <CheckCircle2 size={17} />
                    <span>
                      Donor matching
                    </span>
                  </li>

                  <li>
                    <CheckCircle2 size={17} />
                    <span>
                      Notifications and alerts
                    </span>
                  </li>

                </ul>

              </div>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Checkout;

