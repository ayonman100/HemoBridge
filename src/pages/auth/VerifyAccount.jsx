import { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import {
  MailCheck,
  ShieldCheck,
  ArrowLeft,
  RefreshCw,
  CheckCircle2,
  Loader2,
  AlertCircle,
} from "lucide-react";

import "./VerifyAccount.css";

function VerifyAccount() {
  const navigate = useNavigate();

  const [searchParams] = useSearchParams();
  const role = searchParams.get("role") || "donor";

  const [code, setCode] = useState("");
  const [isVerifying, setIsVerifying] = useState(false);
  const [isResending, setIsResending] = useState(false);
  const [error, setError] = useState("");
  const [resendMessage, setResendMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    setError("");
    setResendMessage("");

    if (code.length !== 6) {
      setError("Please enter the 6-digit verification code.");
      return;
    }

    setIsVerifying(true);

    // Temporary frontend simulation.
    // Later this will call:
    // POST /auth/otp/verify

    await new Promise((resolve) => setTimeout(resolve, 1000));

    console.log("Verification Code:", code);

    setIsVerifying(false);

    /*
      Later:
      1. Send verification code to backend.
      2. Backend verifies the code.
      3. Account is marked as verified.
      4. Authentication/session information is returned.
      5. Redirect based on the user's role.
    */

    if (role === "donor") {
      navigate("/donor/dashboard");
    } else {
      navigate("/pending-verification");
    }
  };

  const handleResend = async () => {
    setError("");
    setResendMessage("");
    setIsResending(true);

    // Temporary frontend simulation.
    // Later this will call:
    // POST /auth/otp/send

    await new Promise((resolve) => setTimeout(resolve, 800));

    console.log("Verification code resent.");

    setIsResending(false);

    setResendMessage(
      "A new verification code has been sent to your email."
    );
  };

  return (
    <div className="verify-account-page">

      <div className="verify-account-container">

        {/* Main Card */}
        <div className="verify-account-card">

          {/* Header */}
          <div className="verify-account-header">

            <div className="verify-account-icon">
              <MailCheck
                size={32}
                strokeWidth={2}
              />
            </div>

            <h1>
              Verify Your Account
            </h1>

            <p>
              We sent a 6-digit verification code to your email
              address. Enter the code below to continue.
            </p>

          </div>

          {/* Security Notice */}
          <div className="verification-security-notice">

            <ShieldCheck
              size={20}
              className="verification-security-icon"
            />

            <p>
              For your security, never share your verification code
              with anyone.
            </p>

          </div>

          {/* Error */}
          {error && (
            <div
              className="verification-message verification-error"
              role="alert"
            >

              <div className="verification-message-content">

                <AlertCircle
                  size={20}
                  className="verification-message-icon"
                />

                <p>
                  {error}
                </p>

              </div>

            </div>
          )}

          {/* Resend Success */}
          {resendMessage && (
            <div
              className="verification-message verification-success"
              role="status"
            >

              <div className="verification-message-content">

                <CheckCircle2
                  size={20}
                  className="verification-message-icon"
                />

                <p>
                  {resendMessage}
                </p>

              </div>

            </div>
          )}

          {/* Verification Form */}
          <form
            onSubmit={handleSubmit}
            className="verification-form"
          >

            {/* Verification Code */}
            <div className="verification-code-field">

              <label htmlFor="verification-code">
                Verification Code
              </label>

              <input
                id="verification-code"
                type="text"
                inputMode="numeric"
                maxLength={6}
                value={code}
                onChange={(e) => {
                  setCode(
                    e.target.value.replace(/\D/g, "")
                  );

                  setError("");
                  setResendMessage("");
                }}
                placeholder="000000"
                autoComplete="one-time-code"
                required
              />

              <p>
                Enter the 6-digit code sent to your email.
              </p>

            </div>

            {/* Verify Button */}
            <button
              type="submit"
              disabled={isVerifying}
              className={`verify-account-button ${
                isVerifying
                  ? "button-processing"
                  : ""
              }`}
            >

              {isVerifying ? (
                <>
                  <Loader2
                    size={19}
                    className="spinner"
                  />

                  Verifying...
                </>
              ) : (
                <>
                  <CheckCircle2 size={19} />

                  Verify Account
                </>
              )}

            </button>

          </form>

          {/* Resend */}
          <div className="resend-section">

            <p>
              Didn't receive the code?
            </p>

            <button
              type="button"
              onClick={handleResend}
              disabled={isResending}
              className={`resend-button ${
                isResending
                  ? "resend-processing"
                  : ""
              }`}
            >

              {isResending ? (
                <>
                  <Loader2
                    size={16}
                    className="spinner"
                  />

                  Sending...
                </>
              ) : (
                <>
                  <RefreshCw size={16} />

                  Resend Code
                </>
              )}

            </button>

          </div>

          {/* Back to Login */}
          <div className="verify-back-login">

            <button
              type="button"
              onClick={() => navigate("/login")}
            >
              <ArrowLeft size={16} />

              Back to Login
            </button>

          </div>

        </div>

        {/* Security Footer */}
        <div className="verify-security-footer">

          <p>
            Your verification information is securely handled by
            HemoBridge.
          </p>

        </div>

      </div>

    </div>
  );
}

export default VerifyAccount;