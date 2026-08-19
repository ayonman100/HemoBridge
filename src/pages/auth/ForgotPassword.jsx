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

  const handleSubmit = async (e) => {
    e.preventDefault();

    setIsLoading(true);

    // Temporary frontend simulation.
    // Later this will call:
    // POST /auth/forgot-password

    await new Promise((resolve) => setTimeout(resolve, 1000));

    console.log("Password reset requested for:", email);

    setIsLoading(false);
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4 sm:px-6 py-10 md:py-16">

      <div className="w-full max-w-lg">

        {/* Main Card */}
        <div className="bg-white border border-gray-200 rounded-2xl shadow-sm p-6 sm:p-8 md:p-10">

          {/* Header */}
          <div className="text-center mb-9">

            <div className="w-16 h-16 mx-auto rounded-2xl bg-red-50 text-red-600 flex items-center justify-center mb-6">
              <KeyRound size={32} strokeWidth={2} />
            </div>

            <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">
              Forgot Password?
            </h1>

            <p className="mt-4 text-gray-600 leading-7 max-w-md mx-auto">
              Enter the email address associated with your HemoBridge
              account and we'll send you instructions to reset your
              password.
            </p>

          </div>

          {/* Reset Form */}
          {!submitted ? (
            <form
              onSubmit={handleSubmit}
              className="space-y-7"
            >

              {/* Email */}
              <div>

                <label
                  htmlFor="email"
                  className="block text-sm font-semibold text-gray-700 mb-3"
                >
                  Email Address
                </label>

                <div className="relative">

                  <Mail
                    size={19}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"
                  />

                  <input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address"
                    autoComplete="email"
                    className="w-full h-12 border border-gray-300 rounded-xl pl-11 pr-4 text-gray-900 outline-none transition focus:border-red-500 focus:ring-4 focus:ring-red-50"
                    required
                  />

                </div>

              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isLoading}
                className={`w-full h-12 rounded-xl font-semibold text-white transition flex items-center justify-center gap-2 ${
                  isLoading
                    ? "bg-red-400 cursor-not-allowed"
                    : "bg-red-600 hover:bg-red-700 active:bg-red-800"
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

            /* Success */
            <div className="text-center">

              <div className="w-16 h-16 mx-auto rounded-2xl bg-green-50 text-green-600 flex items-center justify-center mb-6">
                <CheckCircle2 size={32} />
              </div>

              <h2 className="text-xl sm:text-2xl font-bold text-gray-900">
                Check Your Email
              </h2>

              <p className="mt-4 text-gray-600 leading-7">
                If an account exists with this email address, password
                reset instructions have been sent.
              </p>

              <div className="mt-5 rounded-xl bg-gray-50 border border-gray-100 p-4">
                <p className="text-sm text-gray-500 leading-6">
                  Check your inbox and spam folder for the reset
                  instructions.
                </p>
              </div>

              {/* Temporary Continue Button */}
              <button
                type="button"
                onClick={() => navigate("/reset-password")}
                className="w-full h-12 mt-7 bg-red-600 text-white rounded-xl font-semibold hover:bg-red-700 active:bg-red-800 transition flex items-center justify-center gap-2"
              >
                Continue to Reset Password
                <ArrowRight size={18} />
              </button>

            </div>
          )}

          {/* Back to Login */}
          <div className="text-center mt-9 pt-7 border-t border-gray-100">

            <Link
              to="/login"
              className="inline-flex items-center gap-2 text-sm text-red-600 font-semibold hover:text-red-700 transition"
            >
              <ArrowLeft size={16} />
              Back to Login
            </Link>

          </div>

        </div>

        {/* Security Note */}
        <div className="text-center mt-5 px-4">

          <p className="text-xs sm:text-sm text-gray-500 leading-6">
            For your security, HemoBridge will not reveal whether an
            email address is registered.
          </p>

        </div>

      </div>

    </div>
  );
}

export default ForgotPassword;

