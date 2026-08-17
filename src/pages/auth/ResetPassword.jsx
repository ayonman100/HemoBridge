import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  KeyRound,
  Eye,
  EyeOff,
  CheckCircle2,
  ArrowLeft,
} from "lucide-react";

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

  // Password strength
  const passwordStrength =
    formData.password.length === 0
      ? ""
      : formData.password.length < 8
      ? "Weak"
      : formData.password.length < 12
      ? "Medium"
      : "Strong";

  // Password match
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

  const handleSubmit = (e) => {
    e.preventDefault();

    setError("");

    // Password validation
    if (formData.password.length < 8) {
      setError("Password must be at least 8 characters long.");
      return;
    }

    // Password match validation
    if (formData.password !== formData.confirmPassword) {
      setError("Your passwords do not match.");
      return;
    }

    console.log("New Password:", formData.password);

    // Temporary frontend behavior
    setResetComplete(true);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-6 py-10">

      <div className="w-full max-w-md bg-white rounded-2xl shadow-sm border border-gray-100 p-8 md:p-10">

        {!resetComplete ? (
          <>
            {/* ================= HEADER ================= */}

            <div className="text-center mb-8">

              <div className="w-16 h-16 mx-auto rounded-full bg-red-50 text-red-600 flex items-center justify-center mb-5">
                <KeyRound size={30} />
              </div>

              <h1 className="text-3xl font-bold text-gray-900">
                Create New Password
              </h1>

              <p className="mt-3 text-gray-600 leading-relaxed">
                Choose a strong password for your HemoBridge account.
              </p>

            </div>

            {/* ================= ERROR MESSAGE ================= */}

            {error && (
              <div
                className="mb-6 rounded-lg border border-red-200 bg-red-50 px-4 py-3"
                role="alert"
              >
                <div className="flex items-start gap-3">

                  <div className="w-5 h-5 rounded-full bg-red-100 text-red-600 flex items-center justify-center shrink-0 mt-0.5">
                    !
                  </div>

                  <p className="text-sm text-red-700 leading-relaxed">
                    {error}
                  </p>

                </div>
              </div>
            )}

            {/* ================= FORM ================= */}

            <form onSubmit={handleSubmit} className="space-y-5">

              {/* New Password */}

              <div>

                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  New Password
                </label>

                <div className="relative">

                  <input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="Enter new password"
                    autoComplete="new-password"
                    className={`w-full border rounded-lg px-4 py-3 pr-12 outline-none focus:ring-2 focus:ring-red-500 transition ${
                      error
                        ? "border-red-300"
                        : "border-gray-300"
                    }`}
                    required
                  />

                  <button
                    type="button"
                    onClick={() =>
                      setShowPassword((previous) => !previous)
                    }
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition"
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

                <p className="text-xs text-gray-500 mt-2">
                  Password must be at least 8 characters.
                </p>

                {/* Password Strength */}

                {passwordStrength && (
                  <div className="mt-2">

                    <p
                      className={`text-sm font-medium ${
                        passwordStrength === "Weak"
                          ? "text-red-600"
                          : passwordStrength === "Medium"
                          ? "text-yellow-600"
                          : "text-green-600"
                      }`}
                    >
                      Password strength: {passwordStrength}
                    </p>

                  </div>
                )}

              </div>

              {/* Confirm Password */}

              <div>

                <label
                  htmlFor="confirmPassword"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Confirm New Password
                </label>

                <div className="relative">

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
                    placeholder="Confirm new password"
                    autoComplete="new-password"
                    className={`w-full border rounded-lg px-4 py-3 pr-12 outline-none focus:ring-2 focus:ring-red-500 transition ${
                      formData.confirmPassword &&
                      !passwordsMatch
                        ? "border-red-300"
                        : formData.confirmPassword &&
                          passwordsMatch
                        ? "border-green-300"
                        : "border-gray-300"
                    }`}
                    required
                  />

                  <button
                    type="button"
                    onClick={() =>
                      setShowConfirmPassword(
                        (previous) => !previous
                      )
                    }
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition"
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

                {/* Password Match */}

                {formData.confirmPassword && (
                  <p
                    className={`mt-2 text-sm font-medium ${
                      passwordsMatch
                        ? "text-green-600"
                        : "text-red-600"
                    }`}
                  >
                    {passwordsMatch
                      ? "Passwords match"
                      : "Passwords do not match"}
                  </p>
                )}

              </div>

              {/* ================= SUBMIT ================= */}

              <button
                type="submit"
                className="w-full bg-red-600 text-white py-3.5 rounded-lg font-semibold hover:bg-red-700 transition flex items-center justify-center gap-2"
              >
                <KeyRound size={18} />

                Reset Password
              </button>

            </form>
          </>
        ) : (
          /* ================= SUCCESS ================= */

          <div className="text-center">

            <div className="w-16 h-16 mx-auto rounded-full bg-green-50 text-green-600 flex items-center justify-center mb-5">
              <CheckCircle2 size={32} />
            </div>

            <h1 className="text-3xl font-bold text-gray-900">
              Password Reset
            </h1>

            <p className="mt-3 text-gray-600 leading-relaxed">
              Your password has been successfully updated.
              You can now log in using your new password.
            </p>

            <button
              type="button"
              onClick={() => navigate("/login")}
              className="w-full mt-7 bg-red-600 text-white py-3.5 rounded-lg font-semibold hover:bg-red-700 transition flex items-center justify-center gap-2"
            >
              Go to Login
            </button>

          </div>
        )}

        {/* ================= BACK TO LOGIN ================= */}

        {!resetComplete && (
          <div className="text-center mt-7 pt-6 border-t border-gray-100">

            <Link
              to="/login"
              className="inline-flex items-center gap-2 text-sm text-red-600 font-semibold hover:text-red-700 transition"
            >
              <ArrowLeft size={16} />
              Back to Login
            </Link>

          </div>
        )}

      </div>

    </div>
  );
}

export default ResetPassword;