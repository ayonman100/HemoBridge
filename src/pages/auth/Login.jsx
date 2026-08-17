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

  // Handle input changes
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

    setError("");
  };

  // Handle login
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
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-6 py-10">

      <div className="w-full max-w-md bg-white rounded-2xl shadow-sm border border-gray-100 p-8 md:p-10">

        {/* ================= HEADER ================= */}

        <div className="text-center mb-8">

          {/* Logo Icon */}
          <div className="w-16 h-16 mx-auto rounded-2xl bg-red-50 text-red-600 flex items-center justify-center mb-5">
            <Droplets size={32} strokeWidth={2} />
          </div>

          <h1 className="text-3xl font-bold text-gray-900">
            Welcome Back
          </h1>

          <p className="mt-3 text-gray-600">
            Login to your HemoBridge account
          </p>

        </div>

        {/* ================= ERROR MESSAGE ================= */}

        {error && (
          <div
            className="mb-6 rounded-xl border border-red-200 bg-red-50 px-4 py-3"
            role="alert"
          >
            <div className="flex items-start gap-3">

              <AlertCircle
                size={20}
                className="text-red-600 shrink-0 mt-0.5"
              />

              <p className="text-sm text-red-700 leading-relaxed">
                {error}
              </p>

            </div>
          </div>
        )}

        {/* ================= LOGIN FORM ================= */}

        <form onSubmit={handleSubmit} className="space-y-5">

          {/* Email */}

          <div>

            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
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
              className={`w-full border rounded-xl px-4 py-3 outline-none transition focus:ring-2 focus:ring-red-500 ${
                error
                  ? "border-red-300"
                  : "border-gray-300"
              }`}
              required
            />

          </div>

          {/* Password */}

          <div>

            <div className="flex items-center justify-between mb-2">

              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Password
              </label>

              <Link
                to="/forgot-password"
                className="text-sm text-red-600 hover:text-red-700 font-medium"
              >
                Forgot password?
              </Link>

            </div>

            <div className="relative">

              <input
                id="password"
                type={showPassword ? "text" : "password"}
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Enter your password"
                autoComplete="current-password"
                className="w-full border border-gray-300 rounded-xl px-4 py-3 pr-12 outline-none transition focus:ring-2 focus:ring-red-500"
                required
              />

              {/* Password Visibility Button */}

              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                aria-label={
                  showPassword
                    ? "Hide password"
                    : "Show password"
                }
                className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 flex items-center justify-center text-gray-400 hover:text-gray-700 transition"
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

          <div className="flex items-center gap-2">

            <input
              type="checkbox"
              id="remember"
              checked={rememberMe}
              onChange={(e) => setRememberMe(e.target.checked)}
              className="w-4 h-4 accent-red-600 cursor-pointer"
            />

            <label
              htmlFor="remember"
              className="text-sm text-gray-600 cursor-pointer"
            >
              Remember me
            </label>

          </div>

          {/* Login Button */}

          <button
            type="submit"
            disabled={isLoading}
            className={`w-full py-3.5 rounded-xl font-semibold text-white transition flex items-center justify-center gap-2 ${
              isLoading
                ? "bg-red-400 cursor-not-allowed"
                : "bg-red-600 hover:bg-red-700"
            }`}
          >

            {isLoading ? (
              <>
                <Loader2
                  size={19}
                  className="animate-spin"
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

        <div className="text-center mt-7">

          <p className="text-gray-600">
            Don't have an account?{" "}

            <Link
              to="/select-role"
              className="text-red-600 font-semibold hover:text-red-700 inline-flex items-center gap-1"
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