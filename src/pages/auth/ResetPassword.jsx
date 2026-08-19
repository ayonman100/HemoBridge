import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  KeyRound,
  Eye,
  EyeOff,
  CheckCircle2,
  ArrowLeft,
  AlertCircle,
} from "lucide-react";

import "./ResetPassword.css";

function ResetPassword() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    password: "",
    confirmPassword: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [resetComplete, setResetComplete] = useState(false);
  const [error, setError] = useState("");

  const passwordStrength =
    formData.password.length === 0
      ? ""
      : formData.password.length < 8
      ? "Weak"
      : formData.password.length < 12
      ? "Medium"
      : "Strong";

  const passwordsMatch =
    formData.confirmPassword.length > 0 &&
    formData.password === formData.confirmPassword;

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((previousData) => ({
      ...previousData,
      [name]: value,
    }));

    setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setError("");

    if (formData.password.length < 8) {
      setError("Password must be at least 8 characters long.");
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      setError("Your passwords do not match.");
      return;
    }

    // Temporary frontend simulation.
    // Later this will call:
    // POST /auth/reset-password

    console.log("New Password:", formData.password);

    setResetComplete(true);
  };

  return (
    <div className="reset-password-page">
      <div className="reset-password-container">

        {/* Main Card */}
        <div className="reset-password-card">

          {!resetComplete ? (
            <>
              {/* Header */}
              <div className="reset-password-header">

                <div className="reset-password-icon">
                  <KeyRound size={32} strokeWidth={2} />
                </div>

                <h1>Create New Password</h1>

                <p>
                  Choose a strong password for your HemoBridge account.
                </p>

              </div>

              {/* Error */}
              {error && (
                <div
                  className="reset-password-error"
                  role="alert"
                >
                  <div className="reset-password-error-content">

                    <AlertCircle
                      size={20}
                      className="reset-password-error-icon"
                    />

                    <p>{error}</p>

                  </div>
                </div>
              )}

              {/* Form */}
              <form
                onSubmit={handleSubmit}
                className="reset-password-form"
              >

                {/* New Password */}
                <div className="reset-password-field">

                  <label htmlFor="password">
                    New Password
                  </label>

                  <div className="password-input-wrapper">

                    <input
                      id="password"
                      type={showPassword ? "text" : "password"}
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                      placeholder="Enter your new password"
                      autoComplete="new-password"
                      className={
                        error
                          ? "input-error"
                          : ""
                      }
                      required
                    />

                    <button
                      type="button"
                      onClick={() =>
                        setShowPassword((previous) => !previous)
                      }
                      className="password-toggle"
                      aria-label={
                        showPassword
                          ? "Hide password"
                          : "Show password"
                      }
                    >
                      {showPassword ? (
                        <EyeOff size={19} />
                      ) : (
                        <Eye size={19} />
                      )}
                    </button>

                  </div>

                  <p className="password-helper">
                    Password must be at least 8 characters.
                  </p>

                  {/* Password Strength */}
                  {passwordStrength && (
                    <div className="password-strength">

                      <div className="password-strength-header">

                        <span>
                          Password strength
                        </span>

                        <span
                          className={`strength-label ${passwordStrength.toLowerCase()}`}
                        >
                          {passwordStrength}
                        </span>

                      </div>

                      <div className="strength-bar">

                        <div
                          className={`strength-progress ${passwordStrength.toLowerCase()}`}
                        />

                      </div>

                    </div>
                  )}

                </div>

                {/* Confirm Password */}
                <div className="reset-password-field">

                  <label htmlFor="confirmPassword">
                    Confirm New Password
                  </label>

                  <div className="password-input-wrapper">

                    <input
                      id="confirmPassword"
                      type={
                        showConfirmPassword
                          ? "text"
                          : "password"
                      }
                      name="confirmPassword"
                      value={formData.confirmPassword}
                      onChange={handleChange}
                      placeholder="Confirm your new password"
                      autoComplete="new-password"
                      className={
                        formData.confirmPassword &&
                        !passwordsMatch
                          ? "input-error"
                          : formData.confirmPassword &&
                            passwordsMatch
                          ? "input-success"
                          : ""
                      }
                      required
                    />

                    <button
                      type="button"
                      onClick={() =>
                        setShowConfirmPassword(
                          (previous) => !previous
                        )
                      }
                      className="password-toggle"
                      aria-label={
                        showConfirmPassword
                          ? "Hide confirm password"
                          : "Show confirm password"
                      }
                    >
                      {showConfirmPassword ? (
                        <EyeOff size={19} />
                      ) : (
                        <Eye size={19} />
                      )}
                    </button>

                  </div>

                  {formData.confirmPassword && (
                    <div
                      className={`password-match ${
                        passwordsMatch
                          ? "match-success"
                          : "match-error"
                      }`}
                    >

                      {passwordsMatch ? (
                        <CheckCircle2 size={16} />
                      ) : (
                        <AlertCircle size={16} />
                      )}

                      <span>
                        {passwordsMatch
                          ? "Passwords match"
                          : "Passwords do not match"}
                      </span>

                    </div>
                  )}

                </div>

                {/* Submit */}
                <button
                  type="submit"
                  className="reset-password-submit"
                >
                  <KeyRound size={18} />
                  Reset Password
                </button>

              </form>
            </>
          ) : (

            /* Success */
            <div className="reset-password-success">

              <div className="success-icon">
                <CheckCircle2 size={32} />
              </div>

              <h1>Password Reset</h1>

              <p>
                Your password has been successfully updated.
                You can now log in using your new password.
              </p>

              <button
                type="button"
                onClick={() => navigate("/login")}
                className="go-login-button"
              >
                Go to Login
              </button>

            </div>
          )}

          {/* Back to Login */}
          {!resetComplete && (
            <div className="back-to-login">

              <Link to="/login">
                <ArrowLeft size={16} />
                Back to Login
              </Link>

            </div>
          )}

        </div>

        {/* Security Note */}
        <div className="reset-password-security">
          <p>
            Your password is securely handled by HemoBridge.
          </p>
        </div>

      </div>
    </div>
  );
}

export default ResetPassword;