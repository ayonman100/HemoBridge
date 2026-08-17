import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  KeyRound,
  Mail,
  CheckCircle2,
  ArrowLeft,
  ArrowRight,
  Loader2,
} from "lucide-react";

function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  // Handle password reset request
  const handleSubmit = async (e) => {
    e.preventDefault();

    setIsLoading(true);

    // Temporary frontend simulation
    await new Promise((resolve) => setTimeout(resolve, 1000));

    console.log("Password reset requested for:", email);

    setIsLoading(false);
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-6 py-10">

      <div className="w-full max-w-md bg-white rounded-2xl shadow-sm border border-gray-100 p-8 md:p-10">

        {/* ================= HEADER ================= */}

        <div className="text-center mb-8">

          {/* Icon */}

          <div className="w-16 h-16 mx-auto rounded-2xl bg-red-50 text-red-600 flex items-center justify-center mb-5">
            <KeyRound size={32} />
          </div>

          <h1 className="text-3xl font-bold text-gray-900">
            Forgot Password?
          </h1>

          <p className="mt-3 text-gray-600 leading-relaxed">
            Enter the email address associated with your HemoBridge
            account and we'll send you instructions to reset your
            password.
          </p>

        </div>

        {/* ================= RESET FORM ================= */}

        {!submitted ? (
          <form
            onSubmit={handleSubmit}
            className="space-y-5"
          >

            {/* Email */}

            <div>

              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Email Address
              </label>

              <div className="relative">

                <Mail
                  size={19}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                />

                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  autoComplete="email"
                  className="w-full border border-gray-300 rounded-xl px-4 py-3 pl-11 outline-none transition focus:ring-2 focus:ring-red-500 focus:border-red-500"
                  required
                />

              </div>

            </div>

            {/* Submit */}

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

                  Sending...
                </>
              ) : (
                <>
                  Send Reset Instructions
                  <ArrowRight size={18} />
                </>
              )}

            </button>

          </form>
        ) : (

          /* ================= SUCCESS ================= */

          <div className="text-center">

            {/* Success Icon */}

            <div className="w-14 h-14 mx-auto rounded-2xl bg-green-50 text-green-600 flex items-center justify-center mb-4">
              <CheckCircle2 size={30} />
            </div>

            <h2 className="text-xl font-semibold text-gray-900">
              Check Your Email
            </h2>

            <p className="mt-3 text-gray-600 leading-relaxed">
              If an account exists with this email address, password
              reset instructions have been sent.
            </p>

            <p className="mt-3 text-sm text-gray-500">
              Check your inbox and spam folder.
            </p>

            {/* Temporary Continue Button */}

            <button
              type="button"
              onClick={() => navigate("/reset-password")}
              className="w-full mt-6 bg-red-600 text-white py-3.5 rounded-xl font-semibold hover:bg-red-700 transition flex items-center justify-center gap-2"
            >
              Continue to Reset Password
              <ArrowRight size={18} />
            </button>

          </div>
        )}

        {/* ================= BACK TO LOGIN ================= */}

        <div className="text-center mt-7 pt-6 border-t border-gray-100">

          <Link
            to="/login"
            className="inline-flex items-center gap-2 text-sm text-red-600 font-semibold hover:text-red-700 transition"
          >
            <ArrowLeft size={16} />

            Back to Login
          </Link>

        </div>

      </div>

    </div>
  );
}

export default ForgotPassword;