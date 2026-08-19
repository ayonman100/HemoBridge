import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Droplets,
  AlertCircle,
  Eye,
  EyeOff,
  Loader2,
  LogIn,
  ArrowRight,
} from "lucide-react";
import "./Login.css";

function Login() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

    setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setError("");
    setIsLoading(true);

    // Temporary frontend simulation
    await new Promise((resolve) => setTimeout(resolve, 1200));

    /*
      TEMPORARY AUTHENTICATION LOGIC

      Later:
      1. Send email and password to backend.
      2. Backend verifies credentials.
      3. Backend returns authenticated user information.
      4. Store authentication/session information.
      5. Redirect based on the user's actual role.
    */

    if (formData.email === "unverified@example.com") {
      setIsLoading(false);

      setError(
        "Your email address has not been verified. Please verify your account before logging in."
      );

      return;
    }

    if (formData.email === "pending@hospital.com") {
      setIsLoading(false);

      setError(
        "Your hospital account is still pending verification. You will be notified once your organization has been approved."
      );

      return;
    }

    if (formData.email === "pending@bloodbank.com") {
      setIsLoading(false);

      setError(
        "Your blood bank account is still pending verification. Please wait for your organization to be approved."
      );

      return;
    }

    if (formData.email === "locked@example.com") {
      setIsLoading(false);

      setError(
        "Too many failed login attempts. Please try again later."
      );

      return;
    }

    if (formData.email === "wrong@example.com") {
      setIsLoading(false);

      setError(
        "Invalid email or password. Please check your details and try again."
      );

      return;
    }

    console.log("Login Data:", {
      ...formData,
      rememberMe,
    });

    setIsLoading(false);

    // Temporary role-based navigation
    if (formData.email.includes("hospital")) {
      navigate("/hospital/dashboard");
    } else if (formData.email.includes("bloodbank")) {
      navigate("/bloodbank/dashboard");
    } else {
      navigate("/donor/dashboard");
    }
  };

  return (
    <div className="login-page">

      <div className="login-card">

        {/* ================= HEADER ================= */}

        <div className="login-header">

          <div className="login-logo">
            <Droplets size={32} strokeWidth={2} />
          </div>

          <h1>Welcome Back</h1>

          <p>
            Login to your HemoBridge account
          </p>

        </div>


        {/* ================= ERROR MESSAGE ================= */}

        {error && (
          <div
            className="login-error"
            role="alert"
          >
            <AlertCircle
              size={20}
              className="login-error-icon"
            />

            <p>
              {error}
            </p>
          </div>
        )}


        {/* ================= LOGIN FORM ================= */}

        <form
          onSubmit={handleSubmit}
          className="login-form"
        >

          {/* Email */}

          <div className="login-field">

            <label htmlFor="email">
              Email Address
            </label>

            <input
              id="email"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              autoComplete="email"
              className={error ? "input-error" : ""}
              required
            />

          </div>


          {/* Password */}

          <div className="login-field">

            <div className="password-label-row">

              <label htmlFor="password">
                Password
              </label>

              <Link
                to="/forgot-password"
                className="forgot-password"
              >
                Forgot password?
              </Link>

            </div>


            <div className="password-input-wrapper">

              <input
                id="password"
                type={showPassword ? "text" : "password"}
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Enter your password"
                autoComplete="current-password"
                required
              />

              <button
                type="button"
                onClick={() =>
                  setShowPassword(!showPassword)
                }
                aria-label={
                  showPassword
                    ? "Hide password"
                    : "Show password"
                }
                className="password-toggle"
              >
                {showPassword ? (
                  <EyeOff size={19} />
                ) : (
                  <Eye size={19} />
                )}
              </button>

            </div>

          </div>


          {/* Remember Me */}

          <div className="remember-row">

            <input
              type="checkbox"
              id="remember"
              checked={rememberMe}
              onChange={(e) =>
                setRememberMe(e.target.checked)
              }
            />

            <label htmlFor="remember">
              Remember me
            </label>

          </div>


          {/* Login Button */}

          <button
            type="submit"
            disabled={isLoading}
            className={`login-button ${
              isLoading ? "loading" : ""
            }`}
          >

            {isLoading ? (
              <>
                <Loader2
                  size={19}
                  className="loading-icon"
                />

                Logging in...
              </>
            ) : (
              <>
                <LogIn size={19} />

                Login
              </>
            )}

          </button>

        </form>


        {/* ================= REGISTER ================= */}

        <div className="register-section">

          <p>
            Don't have an account?

            <Link
              to="/select-role"
              className="register-link"
            >
              Create one

              <ArrowRight size={15} />
            </Link>
          </p>

        </div>

      </div>

    </div>
  );
}

export default Login;

